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
        id="208.排序下"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="排序下"
          transform="translate(4.000000, 7.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M1.52100227,0 C1.16990108,0 0.829612489,0.129838848 0.557875149,0.367486032 C-0.0922497751,0.936051169 -0.188073505,1.96030253 0.343846927,2.65521548 L9.64571227,14.8073841 C9.77380966,14.9747336 9.9172052,15.1280077 10.0737687,15.26493 C11.3740186,16.4020602 13.2904928,16.19721 14.3543335,14.8073841 L23.656199,2.65521548 C23.8785294,2.36475778 24,2.00102626 24,1.6257372 C24,0.727867345 23.3190446,0 22.4790435,0 L1.52100227,0 Z"
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
  name: 'DownThree',
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
