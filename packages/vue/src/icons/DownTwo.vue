<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>206.过滤下</title>
    <g
      id="206.过滤下"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="过滤下"
        transform="translate(4.000000, 9.000000)"
        fill="#000000"
        fill-rule="nonzero"
      >
        <path
          d="M1.52100224,0 L22.4790435,0 C23.3190446,0 24,0.682375649 24,1.52412866 C24,1.8759621 23.8785294,2.21696043 23.6561989,2.48926449 L14.3543335,13.8819226 C13.2904928,15.1848844 11.3740186,15.3769315 10.0737687,14.3108719 C9.91720517,14.1825073 9.77380975,14.0388128 9.64571224,13.8819226 L0.343846923,2.48926449 C-0.188073491,1.8377836 -0.0922497948,0.877547978 0.557875163,0.344518163 C0.829612471,0.121723934 1.16990108,0 1.52100224,0 Z"
          id="路径"
          :fill="color"
        ></path>
      </g>
    </g>
  </svg>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Down2',
  props: {
    size: Number,
    color: String,
  },
});
</script>
