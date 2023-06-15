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
        id="57.相机"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="相机"
          transform="translate(4.000000, 7.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M15.4285714,0 C15.7151599,0 15.9827867,0.144314631 16.1417574,0.384577107 L17.6015861,2.59090909 L23.1428571,2.59090909 C23.616244,2.59090909 24,2.97757227 24,3.45454545 L24,18.1363636 C24,18.6133368 23.616244,19 23.1428571,19 L0.857142857,19 C0.383755941,19 0,18.6133368 0,18.1363636 L0,3.45454545 C0,2.97757227 0.383755941,2.59090909 0.857142857,2.59090909 L6.39841393,2.59090909 L7.8582426,0.384577107 C8.01721328,0.144314631 8.2848401,0 8.57142857,0 L15.4285714,0 Z M12,6.04545455 C9.63306539,6.04545455 7.71428571,7.97877043 7.71428571,10.3636364 C7.71428571,12.7485023 9.63306539,14.6818182 12,14.6818182 C14.3669346,14.6818182 16.2857143,12.7485023 16.2857143,10.3636364 C16.2857143,7.97877043 14.3669346,6.04545455 12,6.04545455 Z"
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
  name: 'CameraSolid',
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
