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
        id="155.双箭头下"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="双箭头下"
          transform="translate(5.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M1.87781746,12.3195199 L11,21.3663124 L20.1221825,12.3195199 C20.5517592,11.8934933 21.2482407,11.8934933 21.6778174,12.3195199 C22.1073942,12.7455464 22.1073942,13.4362718 21.6778174,13.8622983 L11.7778174,23.6804801 C11.3482407,24.1065066 10.6517592,24.1065066 10.2221825,23.6804801 L0.322182537,13.8622983 C-0.107394179,13.4362718 -0.107394179,12.7455464 0.322182537,12.3195199 C0.751759253,11.8934933 1.44824074,11.8934933 1.87781746,12.3195199 Z M1.87781746,0.319519872 L11,9.36631243 L20.1221825,0.319519872 C20.5517592,-0.106506624 21.2482407,-0.106506624 21.6778174,0.319519872 C22.1073942,0.745546367 22.1073942,1.43627181 21.6778174,1.86229831 L11.7778174,11.6804802 C11.3482407,12.1065066 10.6517592,12.1065066 10.2221825,11.6804802 L0.322182537,1.86229831 C-0.107394179,1.43627181 -0.107394179,0.745546367 0.322182537,0.319519872 C0.751759253,-0.106506624 1.44824074,-0.106506624 1.87781746,0.319519872 Z"
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
  name: 'DoubleArrowDown',
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
