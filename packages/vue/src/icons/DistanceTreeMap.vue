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
        id="距形树图"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="视觉修正模版" transform="translate(-2.000000, -0.500000)"></g>
        <g
          id="编组"
          transform="translate(2.000000, 2.000000)"
          fill="#333333"
          fill-rule="nonzero"
        >
          <path
            d="M25.6666667,0 L2.33333332,0 C1.04635418,0 0,1.04635418 0,2.33333332 L0,25.6666667 C0,26.9536458 1.04635418,28 2.33333332,28 L25.6666667,28 C26.9536458,28 28,26.9536458 28,25.6666667 L28,2.33333332 C28,1.04270835 26.9536458,0 25.6666667,0 Z M11.68125,10.4635417 L18.7177084,10.4635417 L18.7177084,25.7031251 L11.68125,25.7031251 L11.68125,10.4635417 Z M21.0510417,10.4635417 L25.6630209,10.4635417 L25.6630209,18.6666667 L21.0510417,18.6666667 L21.0510417,10.4635417 Z M25.6666667,8.13020833 L11.68125,8.13020833 L11.68125,2.36979167 L25.6630209,2.36979167 L25.6630209,8.13020833 L25.6666667,8.13020833 Z M9.34791669,2.36979167 L9.34791669,14.0145834 L2.33333332,14.0145834 L2.33333332,2.36979167 L9.34791669,2.36979167 Z M2.33333332,16.3479168 L9.35156251,16.3479168 L9.35156251,25.7031251 L2.33333332,25.7031251 L2.33333332,16.3479168 Z M21.0510417,25.7031251 L21.0510417,21.0000001 L25.6630209,21.0000001 L25.6630209,25.7031251 L21.0510417,25.7031251 Z"
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
  name: 'DistanceTreeMap',
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
