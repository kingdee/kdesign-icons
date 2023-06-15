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
        id="1033.多维查询分析-2"
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
            d="M0,11 L0,26 C0,27.1045695 0.895430496,28 2,28 L17,28 C18.1045695,28 19,27.1045695 19,26 L19,11 C19,9.8954305 18.1045695,9 17,9 L2,9 C0.895430496,9 0,9.8954305 0,11 Z M17,25 C17,25.5522847 16.5522847,26 16,26 L3,26 C2.449,26 2,25.552 2,25 L2,12 C2,11.449 2.449,11 3,11 L16,11 C16.552,11 17,11.449 17,12 L17,25 Z M8,5 C7.44771526,5 7,5.44771526 7,6 C7,6.55228474 7.44771526,7 8,7 L21,7 C21.552,7 22,7.449 22,8 L22,21 C22,21.5522847 22.4477153,22 23,22 C23.5522847,22 24,21.5522847 24,21 L24,7 C24,5.8954305 23.1045695,5 22,5 L8,5 L8,5 Z M14,22 L5,22 C4.44771526,22 4,22.4477153 4,23 C4,23.5522847 4.44771526,24 5,24 L14,24 C14.5522847,24 15,23.5522847 15,23 C15,22.4477153 14.5522847,22 14,22 Z M26,0 L11.0588235,0 L11.0588235,0 C10.4740514,0 9.99304198,0.386480352 9.99304198,0.971252448 C9.99304198,1.55602454 10.4632051,2 11.0479772,2 L24.9938965,2 C25.4823608,2 26,2.58496093 26,3.02874755 L26,16.9411765 C26,17.5259486 26.429205,18.0543823 27.0139771,18.0543823 C27.5987491,18.0543823 28,17.5259486 28,16.9411765 L28,2 C28,0.895430496 27.1045695,0 26,0 Z"
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
  name: 'MultidimensionalQueryAnalysisTwo',
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
