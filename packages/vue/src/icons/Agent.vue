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
        id="789.代办"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(2.000000, 2.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M25.235,3.5 L19.2255,13.85125 L25.25775,24.5 L25.8895,24.5 C26.8559983,24.5 27.6395,25.2835017 27.6395,26.25 C27.6395,27.2164983 26.8559983,28 25.8895,28 L1.75,28 C0.783501688,28 9.71445147e-16,27.2164983 9.71445147e-16,26.25 C9.71445147e-16,25.2835017 0.783501688,24.5 1.75,24.5 L2.744,24.5 L8.7745,13.87575 L2.76325,3.5 L1.75,3.5 C0.783501688,3.5 9.71445147e-16,2.71649831 9.71445147e-16,1.75 C9.71445147e-16,0.783501688 0.783501688,9.71445147e-16 1.75,9.71445147e-16 L25.8895,9.71445147e-16 C26.8559983,9.71445147e-16 27.6395,0.783501688 27.6395,1.75 C27.6395,2.71649831 26.8559983,3.5 25.8895,3.5 L25.235,3.5 Z M7.4025,5.25 L12.7155,13.05325 L15.2845,13.03925 L20.5975,5.25 L7.40425,5.25 L7.4025,5.25 Z"
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
  name: 'Agent',
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
