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
        id="1409-编辑"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M1.00294074,22.1538461 C0.445751424,22.1538461 0,22.5625887 0,23.0769231 C0,23.5912575 0.445751424,24 1.00294074,24 L22.9970594,24 C23.5542485,24 24,23.5912575 24,23.0769231 C23.8885621,22.6681806 23.4428108,22.1538461 22.8856213,22.1538461 L1.00294074,22.1538461 Z M2.75894173,21.2307692 L7.12680062,21.2307692 C7.32964233,21.2307692 7.63390496,21.1300381 7.7353258,20.9285758 L22.7726605,5.96328422 C23.1783439,5.5603596 23.1783439,5.05334615 22.7726605,4.65042154 L18.5062224,0.30219346 C18.1005388,-0.100731153 17.5900538,-0.100731153 17.1843704,0.30219346 L14.1349828,3.33420113 L2.15041648,15.2641272 C1.94757472,15.4655896 1.84615385,15.6670519 1.84615385,15.871872 L1.84615385,20.2201001 C1.84615385,20.4215622 1.94757472,20.7271135 2.15041648,20.9285758 C2.25183735,21.1300381 2.55609996,21.2307692 2.75894173,21.2307692 Z M3.69230769,15.6923077 L16.6153846,3.23076922 L19.8461538,6.46153845 L6.92307692,19.3846154 L3.69230769,19.3846154 L3.69230769,15.6923077 Z"
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
  name: 'EditTwo',
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
