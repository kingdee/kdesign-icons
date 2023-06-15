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
        id="299.过滤方案配置"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="过滤方案配置"
          transform="translate(4.000000, 6.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M17.1658321,2.26121588e-05 C17.5255619,-0.00228365861 17.7792787,0.171829285 17.9222176,0.521231601 C18.0687301,0.885927626 18.007981,1.20003681 17.7423527,1.45650049 L17.7423527,1.45650049 L11.4494635,8.04808725 L11.4494635,19.1419053 C11.4494635,19.5136601 11.2827014,19.7807117 10.9515594,19.9312958 C10.8509863,19.9753401 10.7423414,19.9985621 10.632329,19.999854 C10.4125494,20.0041867 10.2020934,19.9119024 10.0581907,19.7477714 L10.0581907,19.7477714 L6.78965239,16.3184522 C6.62765487,16.149045 6.54784729,15.9490504 6.54784729,15.7172919 L6.54784729,15.7172919 L6.54784729,8.04691079 L0.254958111,1.45650049 C-0.00828785953,1.19768395 -0.0666546469,0.885927626 0.0750931931,0.521231601 C0.221605665,0.171829285 0.469366583,2.26121588e-05 0.829096393,2.26121588e-05 L0.829096393,2.26121588e-05 L17.1658321,2.26121588e-05 Z M24,14.9997761 L24,17.4997325 L15.1578947,17.4997325 L15.1578947,14.9997761 L24,14.9997761 Z M24,8.7498849 L24,11.2498414 L15.1578947,11.2498414 L15.1578947,8.7498849 L24,8.7498849 Z"
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
  name: 'FilterOption',
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
