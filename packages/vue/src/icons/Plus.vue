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
        id="70.增加"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="增加"
          transform="translate(4.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M10.2857143,10.2857143 L10.2857143,0.857142857 C10.2857143,0.383755941 10.6694703,0 11.1428571,0 L12.8571429,0 C13.3305297,0 13.7142857,0.383755941 13.7142857,0.857142857 L13.7142857,10.2857143 L23.1428571,10.2857143 C23.616244,10.2857143 24,10.6694703 24,11.1428571 L24,12.8571429 C24,13.3305297 23.616244,13.7142857 23.1428571,13.7142857 L13.7142857,13.7142857 L13.7142857,23.1428571 C13.7142857,23.616244 13.3305297,24 12.8571429,24 L11.1428571,24 C10.6694703,24 10.2857143,23.616244 10.2857143,23.1428571 L10.2857143,13.7142857 L0.857142857,13.7142857 C0.383755941,13.7142857 0,13.3305297 0,12.8571429 L0,11.1428571 C0,10.6694703 0.383755941,10.2857143 0.857142857,10.2857143 L10.2857143,10.2857143 Z"
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
  name: 'Plus',
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
