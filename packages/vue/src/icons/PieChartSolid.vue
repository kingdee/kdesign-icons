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
        id="73.饼图"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="饼图"
          transform="translate(4.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M10.2307342,1.71934052 C10.6976039,1.68084481 11.1022116,2.02225347 11.1540674,2.47602773 L11.1596742,2.57488747 L11.1591768,11.9822704 L11.1591768,11.9822704 L11.1649563,12.0823794 C11.2107453,12.4764597 11.5234299,12.7891169 11.9175083,12.8348146 L12.0176163,12.84057 L21.4247738,12.8401493 C21.8597669,12.8401314 22.214352,13.1621678 22.274326,13.5736728 L22.2828389,13.6701178 L22.2803072,13.769104 C21.8051731,19.5316381 16.9764255,24 11.1592151,24 C4.99615078,24 0,19.0037702 0,12.8406084 C0,7.02330609 4.46829129,2.19448206 10.2307342,1.71934052 Z M13.7057961,3.90361828e-16 L13.8047796,0.00253423259 C19.227389,0.449792099 23.5494685,4.77170305 23.9970327,10.1943523 C24.0355689,10.6612533 23.6941588,11.0659096 23.2403668,11.1177708 L23.1415031,11.1233781 L12.8760175,11.1237789 L12.8758181,0.858043985 C12.8758181,0.389587614 13.2493074,0.0143991999 13.7057961,3.90361828e-16 Z"
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
  name: 'PieChartSolid',
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
