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
        id="1700.开发者"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <path
          d="M20.5851051,16.9158787 C24.9543615,18.5263229 28,21.9507467 28,24.6538462 L27.9955407,24.8742142 C27.8799729,27.7246272 25.5326304,30 22.6538462,30 L8.34615385,30 C5.39355461,30 3,27.6064454 3,24.6538462 L3.00434967,24.4755384 C3.12589893,21.9652743 5.78432471,18.8934096 9.64588132,17.2235971 C11.0100329,18.9725089 12.8218946,19.9999991 14.9999993,20 C17.2526155,20.0000009 19.1135022,18.9010097 20.4931109,17.0424582 Z M15.5,2 C20.4669803,2 22,5.65180376 22,9.0287034 C22,9.10477712 21.9990179,9.18197622 21.9970458,9.26021137 C22.7347634,9.74052426 22.9599824,10.6749277 22.7975826,11.7002799 C22.6146848,12.8550512 21.9998528,13.7481856 20.9461743,13.8319459 C19.9352686,16.0915704 18.1661739,18.000001 15.5,18 C12.7972601,17.999999 11.0163746,16.0388623 10.0131837,13.737982 C8.91455673,13.6917402 8.27552999,12.7842833 8.08844427,11.6030705 C7.91804443,10.5272083 8.17439317,9.55147592 8.99968585,9.09541599 L9,9.0287034 C9,5.65180376 10.5330197,2 15.5,2 Z"
          id="开发者门户"
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
  name: 'Developer',
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
