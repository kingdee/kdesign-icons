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
        id="903.脚本_功能分组"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(2.000000, 2.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M1.83400001,23.3333333 C0.821109773,23.3333333 0,22.5122236 0,21.4993333 L0,1.83400001 C0,0.821333342 0.821333342,0 1.83400001,0 L21.4993333,0 C22.512,0 23.3333333,0.821333342 23.3333333,1.83400001 L23.3333333,21.4993333 C23.3333333,22.5122236 22.5122236,23.3333333 21.4993333,23.3333333 L1.83400001,23.3333333 Z M25.2,7.00000002 L26.166,7.00000002 C27.1786667,7.00000002 28,7.82133336 28,8.83399999 L28,26.166 C28,26.652407 27.8067756,27.1188921 27.4628338,27.4628338 C27.1188921,27.8067756 26.652407,28 26.166,28 L8.83399999,28 C7.82110977,28 7.00000002,27.1788902 7.00000002,26.166 L7.00000002,25.2 L25.2,25.2 L25.2,7.00000002 Z"
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
  name: 'ScriptFunctionGrouping',
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
