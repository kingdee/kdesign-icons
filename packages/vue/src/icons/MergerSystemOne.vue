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
        id="792.合并体系"
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
            d="M4.94117647,14 L4.94117647,4.94117647 L21.4117647,4.94117647 L21.4117647,1.64705882 L1.64705882,1.64705882 L1.64705882,21.4117647 L4.94117647,21.4117647 L4.94117647,14 Z M23.0588235,6.58823529 L23.0588235,23.0588235 L6.58823529,23.0588235 L6.58823529,26.3529412 L26.3529412,26.3529412 L26.3529412,6.58823529 L23.0588235,6.58823529 Z M23.0588235,4.94117647 L26.3529412,4.94117647 C27.2625866,4.94117647 28,5.67858982 28,6.58823529 L28,26.3529412 C28,27.2625866 27.2625866,28 26.3529412,28 L6.58823529,28 C5.67858982,28 4.94117647,27.2625866 4.94117647,26.3529412 L4.94117647,23.0588235 L1.64705882,23.0588235 C0.737413353,23.0588235 4.57150657e-16,22.3214102 4.57150657e-16,21.4117647 L4.57150657e-16,1.64705882 C4.57150657e-16,0.737413353 0.737413353,9.14301314e-16 1.64705882,9.14301314e-16 L21.4117647,9.14301314e-16 C21.8485919,9.14301314e-16 22.2675277,0.173528914 22.5764112,0.48241236 C22.8852946,0.791295807 23.0588235,1.21023166 23.0588235,1.64705882 L23.0588235,4.94117647 Z"
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
  name: 'MergerSystemOne',
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
