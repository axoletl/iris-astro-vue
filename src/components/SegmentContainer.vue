<template>
  <component class="segment" :is="data.component" :data="data.data" />
</template>
<script>
import SegmentTemplate from '@/components/SegmentTemplate.vue'

export default {
  components: {
    SegmentTemplate,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
}
</script>
