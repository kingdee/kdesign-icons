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
        id="32.录像机"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 7.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M18.8571429,16.15 C18.8571429,16.619442 18.4733869,17 18,17 L0.857142857,17 C0.383755941,17 0,16.619442 0,16.15 L0,0.85 C0,0.380557974 0.383755941,0 0.857142857,0 L18,0 C18.4733869,0 18.8571429,0.380557974 18.8571429,0.85 L18.8571429,3.825 L22.6285714,1.02 C23.1936311,0.59973688 24,0.999561485 24,1.7 L24,15.3 C24,15.9318747 23.3294464,16.342846 22.7595312,16.0602631 L18.8571429,14.1253289 L18.8571429,16.15 Z M6,2.55 L3.42857143,2.55 C2.95518451,2.55 2.57142857,2.93055797 2.57142857,3.4 C2.57142857,3.83591044 2.90232016,4.19518112 3.32861047,4.24428144 L3.42857143,4.25 L6,4.25 C6.47338692,4.25 6.85714286,3.869442 6.85714286,3.4 C6.85714286,2.93055797 6.47338692,2.55 6,2.55 Z M8.57142857,2.55 C8.09804168,2.55 7.71428571,2.93055797 7.71428571,3.4 C7.71428571,3.869442 8.09804168,4.25 8.57142857,4.25 C9.04481546,4.25 9.42857143,3.869442 9.42857143,3.4 C9.42857143,2.93055797 9.04481546,2.55 8.57142857,2.55 Z"
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
  name: 'Vcr',
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
