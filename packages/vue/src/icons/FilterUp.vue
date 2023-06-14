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
        id="207.过滤上"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="过滤上"
          transform="translate(4.000000, 7.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M1.52100227,16 L22.4790435,16 C23.3190446,16 24,15.2721327 24,14.3742628 C24,13.9989737 23.8785294,13.6352421 23.656199,13.3447846 L14.3543335,1.1926159 C13.2904928,-0.197209957 11.3740186,-0.402060313 10.0737687,0.735070025 C9.9172052,0.871992257 9.77380966,1.02526647 9.64571227,1.1926159 L0.343846927,13.3447846 C-0.188073505,14.0396974 -0.0922497751,15.0639489 0.557875149,15.6325138 C0.829612489,15.8701612 1.16990108,16 1.52100227,16 Z"
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
  name: 'FilterUp',
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
