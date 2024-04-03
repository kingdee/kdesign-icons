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
        id="玉块图"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="视觉修正模版" transform="translate(-2.000000, -0.500000)"></g>
        <path
          d="M16.5,1 C24.7842712,1 31.5,7.71572875 31.5,16 C31.5,24.2842712 24.7842712,31 16.5,31 C8.21572875,31 1.5,24.2842712 1.5,16 C1.5,15.4477153 1.94771525,15 2.5,15 C3.05228475,15 3.5,15.4477153 3.5,16 C3.5,23.1797017 9.32029825,29 16.5,29 C23.6797017,29 29.5,23.1797017 29.5,16 C29.5,8.82029825 23.6797017,3 16.5,3 C15.9477153,3 15.5,2.55228475 15.5,2 C15.5,1.44771525 15.9477153,1 16.5,1 Z M16.5,6 C22.0228475,6 26.5,10.4771525 26.5,16 C26.5,21.5228475 22.0228475,26 16.5,26 C15.9477153,26 15.5,25.5522847 15.5,25 C15.5,24.4477153 15.9477153,24 16.5,24 C20.918278,24 24.5,20.418278 24.5,16 C24.5,11.581722 20.918278,8 16.5,8 C15.9477153,8 15.5,7.55228475 15.5,7 C15.5,6.44771525 15.9477153,6 16.5,6 Z M16.5,11 C19.2614237,11 21.5,13.2385763 21.5,16 C21.5,16.5522847 21.0522847,17 20.5,17 C19.9871642,17 19.5644928,16.6139598 19.5067277,16.1166211 L19.5,16 C19.5,14.3431458 18.1568542,13 16.5,13 C15.9477153,13 15.5,12.5522847 15.5,12 C15.5,11.4477153 15.9477153,11 16.5,11 Z"
          id="形状结合"
          :fill="fill"
          fill-rule="nonzero"
        ></path>
      </g>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'JadeBlockPicture',
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
