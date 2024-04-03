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
        id="比较类"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="视觉修正模版" transform="translate(-2.000000, -0.500000)"></g>
        <path
          d="M20.7360348,2 C21.999353,2 23.02,2.96400626 23.02,4.1572168 L23.019,13 L28.3304348,13 C29.2053089,13 29.9209731,13.6427217 29.9938827,14.4640429 L30,14.6025039 L30,27.3974962 C30,28.2813772 29.2513044,29 28.3304348,29 L16.6695652,29 C15.7486957,29 15,28.2813772 15,27.3974962 L15,23.538 L4.78396523,23.5384615 C3.57898739,23.5384615 2.58950748,22.6533757 2.50574359,21.5351185 L2.5,21.3812448 L2.5,4.1572168 C2.5,2.96737691 3.52421567,2 4.78396523,2 Z M28,15 L23.019,15 L23.02,21.3812448 C23.02,22.5193525 22.0829105,23.4539213 20.8989494,23.5330367 L20.7360348,23.5384615 L17,23.538 L17,27 L28,27 L28,15 Z M21,4 L4.5,4 L4.5,21.418322 L15,21.418 L15,14.6025039 C15,13.7651429 15.6719595,13.0761023 16.5256796,13.0058913 L16.6695652,13 L21,13 L21,4 Z M21,15 L17,15 L17,21.418 L21,21.418322 L21,15 Z"
          id="形状结合"
          :fill="fill"
          fill-rule="nonzero"
        ></path>
      </g>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'ComparativeClass',
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
