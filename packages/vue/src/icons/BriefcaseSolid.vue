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
        id="26.公文包"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="公文包"
          transform="translate(4.000000, 6.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M8.57142857,11.76 L8.57142857,12.6 C8.57142857,13.0307821 8.90232016,13.385826 9.3286105,13.4343487 L9.42857143,13.44 L14.5714286,13.44 C15.0110021,13.44 15.3732919,13.1157262 15.4228048,12.6979617 L15.4285714,12.6 L15.4285714,11.76 L24,11.76 L24,20.16 C24,20.6239192 23.616244,21 23.1428571,21 L0.857142857,21 C0.383755941,21 0,20.6239192 0,20.16 L0,11.76 L8.57142857,11.76 Z M13.7142857,10.08 L13.7142857,11.76 L10.2857143,11.76 L10.2857143,10.08 L13.7142857,10.08 Z M13.7142857,0 C15.6078334,0 17.1428571,1.50432323 17.1428571,3.36 L23.1428571,3.36 C23.616244,3.36 24,3.73608082 24,4.2 L24,10.08 L15.4285714,10.08 L15.4285714,9.24 C15.4285714,8.80921792 15.0976798,8.45417395 14.6713895,8.40565128 L14.5714286,8.4 L9.42857143,8.4 C8.98899788,8.4 8.62670811,8.72427376 8.57719518,9.14203829 L8.57142857,9.24 L8.57142857,10.08 L0,10.08 L0,4.2 C0,3.73608082 0.383755941,3.36 0.857142857,3.36 L6.85714286,3.36 C6.85714286,1.50432323 8.39216656,0 10.2857143,0 L13.7142857,0 Z M13.7142857,1.68 L10.2857143,1.68 C9.33894043,1.68 8.57142857,2.43216162 8.57142857,3.36 L15.4285714,3.36 C15.4285714,2.43216162 14.6610596,1.68 13.7142857,1.68 Z"
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
  name: 'BriefcaseSolid',
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
