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
        id="1228-多选框-部分已选"
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
            d="M20.3025967,0 C22.3446162,0 24,1.64961722 24,3.69740335 L24,20.3025967 C24,22.3446162 22.3503828,24 20.3025967,24 L3.69740335,24 C1.65538387,24 0,22.3503828 0,20.3025967 L0,3.69740335 C0,1.65538387 1.64961722,0 3.69740335,0 L20.3025967,0 Z M17.8333333,10.5 L6.16666668,10.5 C5.24619211,10.5 4.5,11.1715729 4.5,12 C4.5,12.7731986 5.15001622,13.4097598 5.98506499,13.4911982 L6.16666668,13.5 L17.8333333,13.5 C18.7538077,13.5 19.5,12.8284271 19.5,12 C19.5,11.1715729 18.7538077,10.5 17.8333333,10.5 Z"
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
  name: 'CheckboxPartiallySelected',
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
