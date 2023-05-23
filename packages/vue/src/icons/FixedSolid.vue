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
        id="1240-固定-实心"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(5.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M11.7333333,18 L11.7333333,23 C11.7333333,23.6 11.3066667,24 10.6666667,24 C10.08,24 9.67259258,23.6638889 9.60876542,23.1457176 L9.6,23 L9.6,18 L11.7333333,18 Z M14.9333333,4.00000001 L17.6,14 L20.2666667,14 C20.9066667,14 21.3333333,14.4 21.3333333,15 C21.3333333,15.6 20.9066667,16 20.2666667,16 L20.2666667,16 L1.06666666,16 C0.426666648,16 -5.1159077e-16,15.6 -5.1159077e-16,15 C-5.1159077e-16,14.4 0.426666648,14 1.06666666,14 L1.06666666,14 L3.73333332,14 L6.38799998,4.04666666 L6.3934265,4.00000001 L14.9333333,4.00000001 Z M16,0 C16.64,0 17.0666667,0.400000008 17.0666667,1 C17.0666667,1.54999999 16.7081481,1.93194444 16.1554321,1.99178242 L16,2 L5.33333333,2 C4.69333332,2 4.26666665,1.60000001 4.26666665,1 C4.26666665,0.45 4.62518518,0.068055552 5.17790124,0.0082176 L5.33333333,0 L16,0 Z"
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
  name: 'FixedSolid',
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
