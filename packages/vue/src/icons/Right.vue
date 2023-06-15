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
        id="118.方向右"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="方向右"
          transform="translate(9.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M0.292893215,1.70710678 C-0.0976310718,1.31658249 -0.0976310718,0.683417503 0.292893215,0.292893216 C0.683417503,-0.0976310719 1.31658249,-0.0976310719 1.70710681,0.292893216 L12.7071068,11.2928932 C13.0976311,11.6834175 13.0976311,12.3165825 12.7071068,12.7071068 L1.70710681,23.7071068 C1.31658249,24.0976311 0.683417503,24.0976311 0.292893215,23.7071068 C-0.0976310718,23.3165825 -0.0976310718,22.6834175 0.292893215,22.2928932 L10.5857864,12 L0.292893215,1.70710678 Z"
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
  name: 'Right',
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
