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
        id="786.视图_图表"
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
            d="M12.6069338,1.41898043 L12.6069338,15.5051278 L26.590825,15.5051278 C26.1803992,22.4837661 20.3896143,28.0154085 13.307319,28.0154085 C9.77799859,28.0154085 6.39322992,26.6133914 3.89762351,24.117785 C1.40201709,21.6221786 5.70228112e-16,18.2374099 5.70228112e-16,14.7080894 C5.70228112e-16,7.59357644 5.58347092,1.78318073 12.6069338,1.41898043 L12.6069338,1.41898043 Z M15.4084747,-8.55342168e-16 C22.2323744,0.383203387 27.6659722,5.85609184 28,12.6825754 L15.4084747,12.6825754 L15.4084747,-8.55342168e-16 Z"
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
  name: 'ViewChart',
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
