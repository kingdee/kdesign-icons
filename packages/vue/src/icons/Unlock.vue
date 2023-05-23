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
        id="1197-解除锁定"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(5.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M11.0794381,11.0769231 L11.0794381,6.44750084 C11.0794381,2.88664444 13.5606794,0 16.6214457,0 C19.4002974,0 21.7504056,2.36949017 22.1507332,5.47257175 C22.1541378,5.49896312 22.150916,6.13959227 22.1410675,7.39445917 C22.1371271,7.89997921 21.7262016,8.30769231 21.2206662,8.30769231 C20.7201316,8.30769231 20.314368,7.90192884 20.314368,7.40139415 C20.314368,7.39917711 20.3143762,7.39696007 20.3144179,7.3947433 C20.3213295,6.45296368 20.3247853,5.96769169 20.3247853,5.93892728 C20.3247853,3.70142669 18.389708,1.84615385 16.6214457,1.84615385 C14.6478945,1.84615385 12.9260111,3.84937102 12.9260111,6.44750084 L12.9260111,11.0769231 L16.6276558,11.0769231 C17.6427962,11.0769231 18.4657301,11.8853194 18.4657301,12.9284849 L18.4657301,22.1484381 C18.4657301,23.1710275 17.6243126,24 16.6276558,24 L1.83807428,24 C0.822933888,24 0,23.1916037 0,22.1484381 L0,12.9284849 C0,11.9058955 0.84141758,11.0769231 1.83807428,11.0769231 L11.0794381,11.0769231 Z"
            id="路径"
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
  name: 'Unlock',
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
