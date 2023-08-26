import barba from '@barba/core'
import { addEventListener } from './helpers'

const INTERVAL = 100
const ANIMATION_START_DELAY = 200
let nodes = []
let nodePositions = []
let prevWindowWidth = 0
let intersectionInterval = null
let headerDelayTimeout = null

export function init () {
  barba.init({
    transitions: [
      {
        name: 'page',
        leave () {
          const done = this.async()
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth', })
          doPageAnimation('page-leave', done)
        },
        after () {
          const done = this.async()
          doPageAnimation('page-enter', done)
        },
      },
    ],
  })
  barba.hooks.leave(stop)
  barba.hooks.after(reset)
  reset()
}

// USE PRIMARILY FOR UNHYDRATED COMPONENTS
// get initial classes with class "cs-animate-in"
// poll window intersection

// run anims by setting --cs-anim-state to "running" and --cs-anim-delay to something reasonable

function reset () {
  updateNodes()
  updateBoxes()
  clearTimeout(headerDelayTimeout)
  headerDelayTimeout = setTimeout(() => {
    checkIntersection()
    clearInterval(intersectionInterval)
    intersectionInterval = setInterval(checkIntersection, INTERVAL)
    window.removeEventListener('resize', onResize)
    window.addEventListener('resize', onResize)
  }, ANIMATION_START_DELAY)
}

function stop () {
  clearInterval(intersectionInterval)
}

export function updateNodes () {
  nodes = Array.from(document.getElementsByClassName('animate-in')).reverse()
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]
    node.style.setProperty('--anim-state', 'paused')
    // reset animation time
    node.style.setProperty('--temp-anim-name', 'unset')
    node.style.removeProperty('--temp-anim-name')
  }
}

function onResize () {
  const windowWidth = window.innerWidth
  if (windowWidth !== prevWindowWidth) updateBoxes()
  prevWindowWidth = windowWidth
}

// rerun when reflow happens
export function updateBoxes () {
  nodePositions = []
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]
    if (!node) continue
    nodePositions.push(node.getBoundingClientRect().y + window.scrollY)
  }
}

function checkIntersection () {
  for (let i = nodes.length - 1; i >= 0; i--) {
    const node = nodes[i]
    const pos = nodePositions[i]
    if (!node) continue
    const windowHeight = window.innerHeight
    if (pos - window.scrollY < Math.max(0.85 * windowHeight, windowHeight - 200)) {
      node.style.setProperty('--anim-state', 'running')
      node.style.setProperty('--anim-delay', '0ms')
      nodes.splice(i, 1)
      nodePositions.splice(i, 1)
      // comment this out to have transition nodes not wait for previous nodes
      break
    }
  }
}

function doPageAnimation (animation, callback) {
  const viewElement = document.getElementById('_view')
  if (!viewElement) {
    callback()
    return
  }
  viewElement.classList.add(animation)
  addEventListener(viewElement, 'animationend', (e, closeListener) => {
    if (e.animationName !== animation) return
    viewElement.classList.remove(animation)
    callback()
    closeListener()
  })
}
