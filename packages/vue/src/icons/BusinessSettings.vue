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
        id="1830.业务设置"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <path
          d="M20.008,4 C21.762,4 23.188,5.43419573 23.188,7.19580588 L23.188,8.59384541 L26.82,8.59384541 C27.6633885,8.59437798 28.4720233,8.93137722 29.068014,9.53070712 C29.6640046,10.130037 29.9985306,10.9426036 29.998,11.7896513 L29.998,17.1427768 L24.26,17.1347421 C24.248,16.375462 23.626,15.752772 22.864,15.752772 C22.102,15.752772 21.48,16.3734533 21.468,17.1347421 L10.532,17.1347421 C10.52,16.375462 9.898,15.752772 9.136,15.752772 C8.374,15.752772 7.752,16.3734533 7.74,17.1347421 L2.002,17.1467942 L2.002,19.0329423 L7.74,19.0369597 L7.74,20.4189298 C7.74,21.1902619 8.37,21.8209867 9.138,21.8209867 C9.906,21.8209867 10.534,21.1902619 10.534,20.4189298 L10.534,19.0369597 L21.47,19.0369597 L21.47,20.4189298 C21.47,21.1902619 22.098,21.8209867 22.866,21.8209867 C23.634,21.8209867 24.262,21.1902619 24.262,20.4189298 L24.262,19.0369597 C26.18,19.0369597 28.086,19.0309336 30,19.0309336 L30,25.8041941 C30,27.5658043 28.574,29 26.82,29 L5.182,29 C3.428,29 2,27.5658043 2,25.8041941 L2,11.7896513 C2,10.0280411 3.428,8.59384541 5.182,8.59384541 L8.814,8.59384541 L8.814,7.19580588 C8.814,5.43419573 10.24,4 11.994,4 Z M19.9731873,5.78571429 L12.0287953,5.78571429 C11.3249622,5.78571429 10.75,6.36497283 10.75,7.0740652 L10.75,8.46428571 L21.25,8.46428571 L21.25,7.0740652 C21.25,6.36297539 20.6750378,5.78571429 19.9731873,5.78571429 Z"
          id="形状"
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
  name: 'BusinessSettings',
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
