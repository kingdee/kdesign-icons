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
        id="1377-提示信息"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 4.000000)"
          fill="#BBBBBB"
          fill-rule="nonzero"
        >
          <path
            d="M12,24 C5.372583,24 -5.62050406e-16,18.627417 -5.62050406e-16,12 C-5.62050406e-16,5.372583 5.372583,-5.62050406e-16 12,-5.62050406e-16 C18.627417,-5.62050406e-16 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,22.5 C17.7989899,22.5 22.5,17.7989899 22.5,12 C22.5,6.20101013 17.7989899,1.5 12,1.5 C6.20101013,1.5 1.5,6.20101013 1.5,12 C1.5,17.7989899 6.20101013,22.5 12,22.5 Z M12.1755,4.50000001 C13.4925,4.50000001 14.544,4.83000002 15.3465,5.532 C16.11,6.195 16.5,7.10999999 16.5,8.28000001 C16.5,9.15750001 16.233,9.91650002 15.717,10.56 C15.5115,10.794 14.955,11.2995 14.049,12.06 C13.596,12.4305 13.287,12.78 13.0815,13.131 C12.813,13.56 12.69,14.028 12.69,14.553 L12.69,15 L11.043,15 L11.043,14.5515 C11.043,13.9095 11.166,13.344 11.4135,12.8565 C11.7015,12.2715 12.381,11.532 13.4925,10.5975 C13.8225,10.2855 14.07,10.0515 14.193,9.8955 C14.6055,9.4095 14.811,8.90250001 14.811,8.3565 C14.811,7.57650001 14.5635,6.97349999 14.1105,6.546 C13.638,6.07800001 12.957,5.86350001 12.093,5.86350001 C11.0625,5.86350001 10.3005,6.17550001 9.80699999,6.8175 C9.354,7.36350001 9.12749998,8.10450001 9.12750001,9.0585 L7.49999999,9.0585 C7.49999999,7.6935 7.88999999,6.60450001 8.71499999,5.78549999 C9.53999999,4.929 10.692,4.50000001 12.1755,4.50000001 L12.1755,4.50000001 Z M11.988,16.5 C12.408,16.5 12.7815,16.626 13.0785,16.929 C13.3515,17.2065 13.5,17.559 13.5,17.988 C13.5,18.441 13.35,18.7935 13.053,19.071 C12.756,19.3485 12.408,19.5 11.988,19.5 C11.5665,19.5 11.2185,19.35 10.9215,19.071 C10.6368277,18.7841149 10.4841574,18.3918444 10.5,17.988 C10.5,17.559 10.6245,17.2065 10.9215,16.929 C11.1993497,16.6410703 11.5866491,16.4850595 11.9865,16.5 L11.988,16.5 Z"
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
  name: 'TipsMessage',
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
