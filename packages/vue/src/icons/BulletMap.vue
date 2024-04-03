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
        id="子弹图"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="视觉修正模版" transform="translate(-2.000000, -0.500000)"></g>
        <g
          id="编组"
          transform="translate(3.000000, 4.000000)"
          fill="#333333"
          fill-rule="nonzero"
        >
          <path
            d="M20.3845909,17.6005139 C20.8981408,17.6005139 21.3144553,17.1919463 21.3144553,16.6879526 L21.3144553,12.4707315 L26.0701522,12.4707315 C26.5836956,12.4707226 27,12.0621576 27,11.5581703 C27,11.0541829 26.5836956,10.6456179 26.0701522,10.645609 L21.3144553,10.645609 L21.3144553,6.42838789 C21.3144553,5.9243942 20.8981408,5.5158266 20.3845909,5.5158266 L2,5.5 L2,0.996785446 C2,0.448002081 1.55512318,0.00312526501 1.00633982,0.00312526501 C1.0052997,0.00312526501 1.00425958,0.00312689813 1.00321947,0.00313016438 C0.452207174,0.00486049418 0.00643893827,0.452030763 0.00643893827,1.00304577 L0.00643893827,22.548504 L0.00643893827,22.548504 C0.008459091,23.9016058 1.12565981,24.9980174 2.5044178,25 L25,25 C25.5522847,25 26,24.5522847 26,24 C26,23.4477153 25.5522847,23 25,23 L2,23 L2,23 L2,17.5 L20.3845909,17.6005139 Z M19,15.5 L2,15.5 L2,12.5 L19,12.5 L19,15.5 Z M19,7.5 L19,10.5 L2,10.5 L2,7.5 L19,7.5 Z"
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
  name: 'BulletMap',
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
