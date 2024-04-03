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
        id="1968.免职申请"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <path
          d="M17.0621838,27.6271195 L19.4911231,30.1012069 L17.6804799,30.5080638 C17.1416312,30.6291447 16.6066526,30.2904771 16.4855717,29.7516284 C16.4448198,29.5702696 16.4554229,29.3811417 16.5161907,29.2054743 L17.0621838,27.6271195 Z M25.9831706,18.5424544 L28.4772736,21.1015046 L20.2778799,29.4468999 L17.7837769,26.8878498 L25.9831706,18.5424544 Z M25,2 C25.5522847,2 26,2.44771525 26,3 L26,17.1 L14.893,27.963 L12.14875,26.1828023 L9.49643834,28 L6.72750681,26.1828023 L4,28 L4,8 L10,2 L25,2 Z M29.035467,17.0591262 L29.9419527,17.9824613 C30.3733538,18.421881 30.3709721,19.1367471 29.9290486,19.5868848 L29.1713885,20.358628 L26.7026615,17.8440133 L27.4603216,17.0722702 C27.8988494,16.6255912 28.6080548,16.6237694 29.035467,17.0591262 Z M14.062129,9 L10.195325,12.7014231 C9.93437118,12.9513462 9.93530874,13.3570385 10.1956375,13.6062692 L14.062129,17.3076923 L14.062129,14.8846154 C16.2497657,14.8846154 18.2811426,15.4038462 20,18 C19.2187012,13.1538462 15.9372462,11.4230769 14.062129,11.4230769 L14.062129,9 Z"
          id="形状结合"
          :fill="fill"
        ></path>
      </g>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'ApplicationForDismissal',
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
