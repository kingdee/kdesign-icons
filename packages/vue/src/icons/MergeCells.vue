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
        id="1068.合并单元格"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(2.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M1.64705883,14.8235294 L6.58823531,14.8235294 L6.58823531,16.4705882 L1.64705883,16.4705882 L1.64705883,21.4117647 L6.58823531,21.4117647 L6.58823531,8.23529411 L1.64705883,8.23529411 L1.64705883,14.8235294 Z M1.64705883,6.58823528 L6.58823531,6.58823528 L6.58823531,1.64705883 L1.64705883,1.64705883 L1.64705883,6.58823528 L1.64705883,6.58823528 Z M26.3529412,6.58823528 L26.3529412,1.64705883 L8.23529411,1.64705883 L8.23529411,6.58823528 L26.3529412,6.58823528 L26.3529412,6.58823528 Z M26.3529412,8.23529411 L8.23529411,8.23529411 L8.23529411,21.4117647 L26.3529412,21.4117647 L26.3529412,8.23529411 Z M0,-4.11435592e-16 L28,-4.11435592e-16 L28,23.0588235 L0,23.0588235 L0,-4.11435592e-16 Z"
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
  name: 'MergeCells',
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
