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
        id="902.脚本_应用"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 2.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M23.6767954,5.7211041 L11.2014264,11.8632931 L11.2014264,27.8029136 L0.386053567,22.3779567 C0.148536742,22.2579837 -0.000886076148,22.0141886 3.95414204e-06,21.7480928 L3.95414204e-06,6.79187275 C3.95414204e-06,6.52570446 0.148330746,6.28188617 0.381989921,6.16200883 L12.3494041,0.076710783 C12.5461844,-0.025570261 12.7804559,-0.025570261 12.9772362,0.076710783 L23.6767954,5.71907231 L23.6767954,5.7211041 Z M24.881664,7.84638684 L24.8776004,21.8374928 C24.8776004,22.1016293 24.7292776,22.3454476 24.4956184,22.4653249 L13.6396092,28 L13.6396092,13.3810619 L24.881664,7.84638684 Z"
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
  name: 'ScriptApplication',
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
