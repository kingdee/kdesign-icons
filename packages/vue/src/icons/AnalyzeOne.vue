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
        id="1472-分析"
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
            d="M11.2995,1.5 C7.81950001,1.5 4.99950001,4.24799999 4.99950001,7.63499999 C4.99950001,7.884 5.01450001,8.12849998 5.04449999,8.367 C3.036,8.67449999 1.5,10.3665 1.5,12.4095 C1.5,14.6685 3.38099999,16.5 5.70000001,16.5 L16.9005,16.5 L16.9005,16.452 C17.1285,16.4835 17.3625,16.5 17.5995,16.5 C20.3055,16.5 22.5,14.3625 22.5,11.727 C22.5,9.09149999 20.3055,6.954 17.5995,6.954 C17.214,3.8865 14.5425,1.5 11.2995,1.5 Z M24,11.727 C24,14.934 21.5505,17.5665 18.4005,17.952 L5.70000001,18 C2.56049999,18 -7.1942452e-16,15.5055 -7.1942452e-16,12.4095 C-7.1942452e-16,10.0965 1.43700001,8.09099998 3.51,7.24499999 C3.71849999,3.201 7.13399999,-9.59232694e-16 11.2995,-9.59232694e-16 C14.8455,-9.59232694e-16 17.8845,2.32949999 18.81,5.56649998 C21.7605,6.12149999 24,8.66099999 24,11.727 Z M5.99999999,10.5 L5.99999999,15 L7.49999999,15 L7.49999999,10.5 L5.99999999,10.5 Z M10.5,5.99999999 L10.5,15 L12,15 L12,5.99999999 L10.5,5.99999999 L10.5,5.99999999 Z M15,8.99999999 L15,15 L16.5,15 L16.5,8.99999999 L15,8.99999999 Z"
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
  name: 'AnalyzeOne',
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
