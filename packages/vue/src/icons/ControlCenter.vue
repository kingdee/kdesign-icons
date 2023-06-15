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
        id="418.管理中心"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 5.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M17.1136364,1.0450165e-15 C17.7954546,1.0450165e-15 18.340909,0.272727276 18.6136364,0.818181801 L23.7954545,9.68181819 C24.0681818,10.2272727 24.0681818,10.9090909 23.7954545,11.4545454 L18.6136364,20.3181818 C18.340909,20.8636363 17.6590909,21.1363636 17.1136364,21.1363636 L6.75000001,21.1363636 C6.06818182,21.1363636 5.52272727,20.8636363 5.24999999,20.3181818 L0.204545436,11.4545454 C-0.0681818121,10.9090909 -0.0681818121,10.2272727 0.204545436,9.68181819 L5.38636363,0.818181801 C5.6590909,0.272727276 6.34090909,1.0450165e-15 6.88636362,1.0450165e-15 L17.1136364,1.0450165e-15 Z M12.2045454,6.81818179 C9.88636363,6.81818179 8.11363636,8.59090909 8.11363636,10.9090909 C8.11363636,13.2272727 9.88636363,15 12.2045454,15 C14.5227273,15 16.2954545,13.2272727 16.2954545,10.9090909 C16.2954545,8.59090906 14.3863636,6.81818179 12.2045454,6.81818179 Z"
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
  name: 'ControlCenter',
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
