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
        id="1198-关闭"
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
            d="M1.93547932,0.251645543 L2.04852815,0.351471873 L12,10.302 L21.9514719,0.351471873 C22.4201011,-0.117157273 23.1798989,-0.117157273 23.6485282,0.351471873 C24.081109,0.784052634 24.1143842,1.46472992 23.7483545,1.93547932 L23.6485282,2.04852815 L13.698,12 L23.6485282,21.9514719 C24.1171572,22.4201011 24.1171572,23.1798989 23.6485282,23.6485282 C23.2159474,24.081109 22.5352702,24.1143842 22.0645207,23.7483545 L21.9514719,23.6485282 L12,13.698 L2.04852815,23.6485282 C1.579899,24.1171572 0.820101053,24.1171572 0.351471869,23.6485282 C-0.0811088928,23.2159474 -0.114384336,22.5352702 0.251645539,22.0645207 L0.351471869,21.9514719 L10.302,12 L0.351471869,2.04852815 C-0.117157277,1.57989901 -0.117157277,0.820101057 0.351471869,0.351471873 C0.748004246,-0.045060505 1.35300658,-0.106065471 1.81368354,0.168456935 L1.93547932,0.251645543 Z"
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
  name: 'Closure',
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
