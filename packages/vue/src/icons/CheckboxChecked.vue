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
        id="198.问券多选未选"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="问券多选未选"
          transform="translate(4.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M21.3333333,0 C22.8060927,0 24,1.19390733 24,2.66666666 L24,21.3333333 C24,22.8060927 22.8060927,24 21.3333333,24 L2.66666666,24 C1.19390733,24 0,22.8060927 0,21.3333333 L0,2.66666666 C0,1.19390733 1.19390733,0 2.66666666,0 L21.3333333,0 Z M21.3333333,1.33333334 L2.66666666,1.33333334 C1.98288554,1.33333334 1.41932378,1.8480536 1.34230365,2.51117184 L1.33333334,2.66666666 L1.33333334,21.3333333 C1.33333334,22.0171144 1.8480536,22.5806763 2.51117184,22.6576964 L2.66666666,22.6666667 L21.3333333,22.6666667 C22.0171144,22.6666667 22.5806763,22.1519464 22.6576964,21.4888281 L22.6666667,21.3333333 L22.6666667,2.66666666 C22.6666667,1.98288554 22.1519464,1.41932378 21.4888281,1.34230365 L21.3333333,1.33333334 Z"
            id="形状"
            :fill="color"
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
  name: 'CheckboxChecked',
  components: { iconWrapper },
  props: {
    size: {
      type: String || Number,
      default: '1em',
    },
    color: {
      type: String,
      default: 'currentColor',
    },
    rotate: Number,
    spin: Boolean,
  },
});
</script>
