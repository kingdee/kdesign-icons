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
      <defs>
        <path
          d="M7.41618397,0.000321035443 C8.18781387,1.76605435 9.94980521,3 12,3 C14.0501948,3 15.8121861,1.76605435 16.583816,0.000321035443 L23.0000546,1.32553206e-13 C23.5523393,1.32451752e-13 24.0000546,0.44771525 24.0000546,1 L24.0000546,25 C24.0000546,25.5522847 23.5523393,26 23.0000546,26 L16.0002202,25.9998057 C15.0880049,24.7854695 13.6357306,24 12,24 C10.3642694,24 8.91199508,24.7854695 7.99977979,25.9998057 L1,26 C0.44771525,26 3.90798505e-14,25.5522847 3.90798505e-14,25 L3.90798505e-14,1 C3.90798505e-14,0.44771525 0.44771525,1.33967956e-13 1,1.3390032e-13 L7.41618397,0.000321035443 Z M8.14136994,9.229729 C7.28692036,8.95829027 7.22588825,8.89043058 6.67659924,9.229729 L5.35291239,9.83660176 L5.27354217,9.89027639 C4.65483504,10.3286848 5.10174178,10.5595684 6.45149041,11.6688132 L9.44026316,14.744 L3.10526316,18.9145859 C3.96273794,18.9145859 7.74177233,19.2438253 8.84423991,18.5725479 L20.3827086,11.8072202 C20.9951906,11.337326 21.1789352,10.4646654 20.811446,9.72626035 C20.4439568,9.05498298 19.586482,8.78647204 18.974,9.18923845 L14.7662282,11.595086 L14.0752632,12.001 Z"
          id="path-1"
          :fill="fill"
        ></path>
      </defs>
      <g
        id="1777.人人差旅"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Rectangle-16" transform="translate(4.000000, 3.000000)">
          <g id="Group-8" transform="translate(-0.000000, -0.000000)">
            <mask id="mask-2" fill="white">
              <use xlink:href="#path-1"></use>
            </mask>
            <use id="形状结合" fill="#474444" xlink:href="#path-1"></use>
          </g>
        </g>
      </g>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'PngEveryoneTravels',
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
