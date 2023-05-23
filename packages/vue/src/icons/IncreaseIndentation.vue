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
        id="983.增加缩进量"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(2.000000, 6.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M1.02388254e-06,0 L28.000001,0 L28.000001,1.5555555 L1.02388254e-06,1.5555555 L1.02388254e-06,0 Z M10.8888895,6.22222198 L28,6.22222198 L28,7.77777748 L10.8888895,7.77777748 L10.8888895,6.22222198 Z M6.86777854,9.47333298 C7.07619633,9.61880949 7.20038469,9.85694269 7.20038469,10.1111107 C7.20038469,10.3652788 7.07619633,10.603412 6.86777854,10.7488885 L1.22422321,14.6999995 C0.986537308,14.8666125 0.675851377,14.8870078 0.418424124,14.752897 C0.160996872,14.6187863 -0.000331395295,14.3524877 5.11151787e-07,14.0622217 L5.11151787e-07,6.15999977 C-0.000331395295,5.86973373 0.160996872,5.6034352 0.418424124,5.46932443 C0.675851377,5.33521366 0.986537308,5.35560898 1.22422321,5.52222201 L6.86777854,9.47333298 Z M10.8888895,12.444444 L28,12.444444 L28,13.9999995 L10.8888895,13.9999995 L10.8888895,12.444444 Z M1.02388254e-06,18.666666 L28.000001,18.666666 L28.000001,20.2222215 L1.02388254e-06,20.2222215 L1.02388254e-06,18.666666 Z"
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
  name: 'IncreaseIndentation',
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
