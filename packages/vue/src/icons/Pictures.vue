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
        id="1089.图片"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(2.000000, 3.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M13.1215,19.25 C12.4294147,20.9087061 12.1415019,22.7081606 12.2815,24.5 L26.25,24.5 L26.25,1.75 L1.75,1.75 L1.75,16.8 C3.06250001,16.128 4.55,15.75 6.125,15.75 C8.30025,15.75 10.30575,16.471 11.9175,17.68725 C14.5904788,12.4148019 20.4582168,9.57980323 26.25,10.7625 L26.25,12.25 C25.89125,12.215 23.989,12.25 23.625,12.25 C19.2012039,12.2489161 15.1780225,14.8127216 13.3105,18.823 L13.9265,19.3305 L13.1215,19.25 Z M11.312,19.0715 L10.77475,19.019 C9.42678137,18.0291814 7.79734881,17.4968715 6.125,17.4999863 C4.9595,17.4999863 3.83250001,17.75375 2.81049998,18.228 L1.75,18.123 L1.75,24.5 L10.528,24.5 C10.4027565,22.6555732 10.6693496,20.805525 11.31025,19.0715 L11.312,19.0715 Z M1.75,0 L26.25,0 L28,1.75 L28,24.5 L26.25,26.25 L1.75,26.25 C1.71675,26.25 0,24.61725 0,24.5 L0,1.75 L1.75,0 Z M8.74999998,12.25 C6.81700336,12.25 5.24999998,10.6829966 5.24999998,8.74999998 C5.24999998,6.81700336 6.81700336,5.24999998 8.74999998,5.24999998 C10.6829966,5.24999998 12.25,6.81700336 12.25,8.74999998 C12.25,10.6829966 10.6829966,12.25 8.74999998,12.25 Z"
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
  name: 'Pictures',
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
