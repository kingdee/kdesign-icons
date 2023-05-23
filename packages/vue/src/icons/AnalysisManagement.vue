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
        id="798.分析管理"
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
            d="M13.270841,1.47453789 L13.270841,14.7453789 L26.541682,14.7453789 C26.541682,22.074662 20.6001241,28.0162199 13.270841,28.0162199 C5.9415579,28.0162199 0,22.074662 0,14.7453789 C0,7.41609579 5.9415579,1.47453789 13.270841,1.47453789 Z M14.7453789,0 C21.9286393,0.403383657 27.6483816,6.16448574 28,13.3504661 L14.7453789,13.3504661 L14.7453789,0 Z"
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
  name: 'AnalysisManagement',
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
