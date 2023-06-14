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
        id="113.关闭"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="关闭"
          transform="translate(4.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M12,10.5857864 L22.2928932,0.292893216 C22.6834175,-0.0976310719 23.3165825,-0.0976310719 23.7071068,0.292893216 C24.0976311,0.683417503 24.0976311,1.31658249 23.7071068,1.70710678 L13.4142136,12 L23.7071068,22.2928932 C24.0976311,22.6834175 24.0976311,23.3165825 23.7071068,23.7071068 C23.3165825,24.0976311 22.6834175,24.0976311 22.2928932,23.7071068 L12,13.4142136 L1.70710678,23.7071068 C1.31658249,24.0976311 0.683417503,24.0976311 0.292893216,23.7071068 C-0.0976310719,23.3165825 -0.0976310719,22.6834175 0.292893216,22.2928932 L10.5857864,12 L0.292893216,1.70710678 C-0.0976310719,1.31658249 -0.0976310719,0.683417503 0.292893216,0.292893216 C0.683417503,-0.0976310719 1.31658249,-0.0976310719 1.70710678,0.292893216 L12,10.5857864 Z"
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
  name: 'CloseOne',
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
