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
        id="1838.移动服务"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <path
          d="M23.1969697,1.5 C24.468311,1.50142698 25.4985835,2.53929092 25.5,3.82 L25.5,28.18 C25.4985835,29.4607091 24.468311,30.498573 23.1969697,30.5 L8.8030303,30.5 C7.531689,30.498573 6.50141654,29.4607091 6.5,28.18 L6.5,3.82 C6.50141654,2.53929092 7.531689,1.50142698 8.8030303,1.5 Z M16,25.73 C15.451755,25.73 15.0073145,26.1777153 15.0073145,26.73 C15.0073145,27.2822847 15.451755,27.73 16,27.73 C16.548245,27.73 16.9926855,27.2822847 16.9926855,26.73 C16.9926855,26.1777153 16.548245,25.73 16,25.73 Z M22.4861337,5.56 L9.51386634,5.56 C8.96158159,5.56 8.51386634,6.00771525 8.51386634,6.56 L8.51386634,23.12 C8.51386634,23.6722847 8.96158159,24.12 9.51386634,24.12 L22.4861337,24.12 C23.0384184,24.12 23.4861337,23.6722847 23.4861337,23.12 L23.4861337,6.56 C23.4861337,6.00771525 23.0384184,5.56 22.4861337,5.56 Z M21.6054153,6.84486389 C22.1577001,6.84486389 22.6054153,7.29257914 22.6054153,7.84486389 L22.6054153,21.9446869 C22.6054153,22.4969716 22.1577001,22.9446869 21.6054153,22.9446869 L10.5,22.9446869 C9.94771525,22.9446869 9.5,22.4969716 9.5,21.9446869 L9.5,7.84486389 C9.5,7.29257914 9.94771525,6.84486389 10.5,6.84486389 L21.6054153,6.84486389 Z"
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
  name: 'MobileServices',
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
