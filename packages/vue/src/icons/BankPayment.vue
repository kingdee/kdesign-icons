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
        id="789.银行付款"
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
            d="M10.3157899,26.1991572 L17.8787371,17.7947364 C19.4161228,16.0868053 19.3302483,13.4695837 17.6842108,11.866105 C16.0373369,10.2619038 13.4180122,10.2430457 11.7482109,11.8233681 L10.3157899,13.1791576 L10.3157899,1.47368417 C10.3157899,0.659790878 10.9755808,0 11.7894741,0 L26.5263158,0 C27.3402091,0 28,0.659790878 28,1.47368417 L28,26.5263151 C28,27.3402084 27.3402091,28 26.5263158,28 L11.7894741,28 C10.9755808,28 10.3157899,27.3402084 10.3157899,26.5263151 L10.3157899,26.1991572 Z M8.84210575,4.42105252 L8.84210575,13.2631576 L5.89473741,16.2105259 L7.36842158,17.6842101 L12.905053,12.9124207 C13.9396672,12.0207848 15.485812,12.0740338 16.4566319,13.0347365 C17.4145266,13.9837891 17.4484213,15.5223154 16.5317898,16.5126312 L5.89473741,27.9999993 L2.94736906,27.9999993 C1.31958247,27.9999993 3.57138971e-07,26.6804175 3.57138971e-07,25.0526309 L3.57138971e-07,15.827368 C-0.000345892129,15.1236777 0.251086984,14.443084 0.708842802,13.9086312 L8.84210575,4.42105252 Z M23.5789475,0 L23.5789475,28 L25.0526317,28 L25.0526317,0 L23.5789475,0 Z"
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
  name: 'BankPayment',
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
