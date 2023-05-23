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
        id="1148-添加"
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
            d="M10.6666667,10.6666667 L1.33333334,10.6666667 C0.596953668,10.6666667 -2.36847579e-16,11.2636204 -2.36847579e-16,12 C-2.36847579e-16,12.7363798 0.596953668,13.3333334 1.33333334,13.3333334 L10.6666667,13.3333334 L10.6666667,22.6666668 C10.6666667,23.4030464 11.2636204,24 12,24 C12.7363797,24 13.3333333,23.4030464 13.3333334,22.6666668 L13.3333334,13.3333334 L22.6666667,13.3333334 C23.4030464,13.3333334 24,12.7363797 24,12 C24,11.2636204 23.4030464,10.6666668 22.6666667,10.6666667 L13.3333334,10.6666667 L13.3333334,1.33333339 C13.3333334,0.856979258 13.0792015,0.416809878 12.6666667,0.178632805 C12.2541319,-0.0595442682 11.7458681,-0.0595442682 11.3333333,0.178632805 C10.9207986,0.416809878 10.6666667,0.856979258 10.6666667,1.33333339 L10.6666667,10.6666667 Z"
            id="路径"
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
  name: 'AddTo',
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
