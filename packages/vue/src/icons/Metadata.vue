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
        id="3.元数据"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="元数据"
          transform="translate(7.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M11.2272727,0 C11.4181482,0 11.6025089,0.0627124114 11.7523891,0.176640549 L11.8379559,0.251051328 L18.7470468,7.10819419 C18.8820161,7.24214872 18.9676985,7.41587564 18.9925102,7.60161943 L19,7.71428571 L19,23.1428571 C19,23.5824307 18.6666017,23.9447205 18.2370818,23.9942334 L18.1363636,24 L0.863636364,24 C0.420732684,24 0.0556983549,23.6691084 0.00581032436,23.2428181 L0,23.1428571 L0,0.857142857 C0,0.41756928 0.333398348,0.0552795703 0.762918124,0.00576663771 L0.863636364,0 L11.2272727,0 Z M6.96147926,11.9480055 L2.59090909,16.2857143 L6.96147926,20.623423 L8.79352862,18.8051484 L6.25473116,16.2857143 L8.79352862,13.7662802 L6.96147926,11.9480055 Z M12.0402312,11.9480055 L10.2081818,13.7662802 L12.7469793,16.2857143 L10.2081818,18.8051484 L12.0402312,20.623423 L16.4108014,16.2857143 L12.0402312,11.9480055 Z M11.2272727,2.14285714 L11.2272727,6.85714286 C11.2272727,7.29671641 11.5606711,7.65900617 11.9901909,7.7085191 L12.0909091,7.71428571 L16.8409091,7.71428571 L11.2272727,2.14285714 Z"
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
  name: 'Metadata',
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
