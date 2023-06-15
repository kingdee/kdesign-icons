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
        id="1050.视图"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(2.000000, 5.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M0,0 L4,0 L4,4 L0,4 L0,0 Z M8,0 L28,0 L28,4 L8,4 L8,0 Z M0,9.33333334 L4,9.33333334 L4,13.3333333 L0,13.3333333 L0,9.33333334 Z M8,9.33333334 L28,9.33333334 L28,13.3333333 L8,13.3333333 L8,9.33333334 Z M0,18.6666667 L4,18.6666667 L4,22.6666667 L0,22.6666667 L0,18.6666667 Z M8,18.6666667 L28,18.6666667 L28,22.6666667 L8,22.6666667 L8,18.6666667 Z"
            id="形状"
            :fill="fill"
          ></path>
        </g>
      </g>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'View',
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
