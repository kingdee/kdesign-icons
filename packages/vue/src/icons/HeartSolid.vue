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
        id="65.心形"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="心形"
          transform="translate(4.000000, 6.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M12,3.54209836 L13.8090911,1.74087721 C16.1404025,-0.580292403 19.9202051,-0.580292403 22.2515165,1.74087721 C24.5828278,4.06204677 24.5828278,7.82540629 22.2515165,10.1465759 L12.6060915,19.7500408 C12.2713564,20.0833197 11.7286436,20.0833197 11.3939085,19.7500408 L1.74848355,10.1465759 C-0.58282785,7.82540629 -0.58282785,4.06204677 1.74848355,1.74087721 C4.07979492,-0.580292403 7.85959749,-0.580292403 10.1909089,1.74087721 L12,3.54209836 Z"
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
  name: 'HeartSolid',
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
