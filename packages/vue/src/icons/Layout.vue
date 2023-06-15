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
        id="4.布局"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="布局"
          transform="translate(4.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M7.38461538,9.23076923 L7.38461538,24 L0.923076923,24 C0.413275628,24 0,23.5867243 0,23.0769231 L0,9.23076923 L7.38461538,9.23076923 Z M24,9.23076923 L24,23.0769231 C24,23.5867243 23.5867243,24 23.0769231,24 L9.23076923,24 L9.23076923,9.23076923 L24,9.23076923 Z M23.0769231,0 C23.5867243,0 24,0.413275628 24,0.923076923 L24,7.38461538 L0,7.38461538 L0,0.923076923 C0,0.413275628 0.413275628,0 0.923076923,0 L23.0769231,0 Z"
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
  name: 'Layout',
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
