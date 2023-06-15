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
        id="893.渠道出库"
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
            d="M15.2425221,27.9764585 L20.2257607,21.7812489 L15.5583502,21.7812489 L15.5583502,14.0022315 L12.4467432,14.0022315 L12.4467432,21.7812489 L7.77933273,21.7812489 L12.773462,27.9889049 L3.73424366,28.0402464 C2.9485629,28.0402464 3.0870294,27.5812844 3.0870294,27.0071929 L3.0870294,11.2235664 L1.68369465,11.2235664 C1.3476411,11.567399 0.599299608,11.6825285 0.151228224,11.2235664 C-0.0743632882,10.7646044 -0.0821422996,9.84668033 0.367484905,9.73155086 L13.5342499,0.172694185 C13.9838771,-0.0575647283 14.0943391,-0.0575647283 14.5455222,0.172694185 L27.5302581,9.73155086 C27.9798853,9.96180977 28.203921,10.6494749 27.7558496,11.2235664 C27.4182403,12.026361 26.6325595,11.3589213 26.1844881,11.1302182 L24.8838364,11.2235664 L24.8838364,26.8936192 C24.8838364,27.4661549 24.9491801,27.9251169 24.3875351,27.9251169 C24.0297003,27.9251169 19.7885799,27.9500098 15.2425221,27.9764585 L15.2425221,27.9764585 Z"
            id="路径"
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
  name: 'ChannelOutbound',
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
