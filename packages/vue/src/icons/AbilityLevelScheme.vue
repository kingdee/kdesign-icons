<template>
  <icon-wrapper :spin="spin" :rotate="rotate">
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="1962.能力等级方案"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <path
          d="M5,25 L27,25 C27.5522847,25 28,25.4477153 28,26 L28,27 C28,27.5522847 27.5522847,28 27,28 L5,28 C4.44771525,28 4,27.5522847 4,27 L4,26 C4,25.4477153 4.44771525,25 5,25 Z M23,4 L26,4 C26.5522847,4 27,4.44771525 27,5 L27,22 C27,22.5522847 26.5522847,23 26,23 L23,23 C22.4477153,23 22,22.5522847 22,22 L22,5 C22,4.44771525 22.4477153,4 23,4 Z M14,10.3333333 L17,10.3333333 C17.5522847,10.3333333 18,10.7810486 18,11.3333333 L18,22 C18,22.5522847 17.5522847,23 17,23 L14,23 C13.4477153,23 13,22.5522847 13,22 L13,11.3333333 C13,10.7810486 13.4477153,10.3333333 14,10.3333333 Z M5,16.6666667 L8,16.6666667 C8.55228475,16.6666667 9,17.1143819 9,17.6666667 L9,22 C9,22.5522847 8.55228475,23 8,23 L5,23 C4.44771525,23 4,22.5522847 4,22 L4,17.6666667 C4,17.1143819 4.44771525,16.6666667 5,16.6666667 Z"
          id="形状结合"
          :fill="fill"
        ></path>
      </g>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'AbilityLevelScheme',
  components: { iconWrapper },
  props: {
    size: {
      type: String || Number,
      default: '1em',
    },
    fill: {
      type: String,
      default: 'currentColor',
    },
    rotate: Number,
    spin: Boolean,
  },
});
</script>
