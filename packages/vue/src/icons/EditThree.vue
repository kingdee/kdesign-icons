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
        id="1065.icon_编辑_nor"
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
            d="M26.6998916,26.25 L1.17009752,26.25 C0.520043328,26.25 0,26.6876139 0,27.2382782 C0,27.7889425 0.520043328,28.2265564 1.17009752,28.2265564 L26.8299026,28.2265564 C27.4799567,28.2265564 28,27.7889425 28,27.2382782 C27.8699892,26.8006643 27.3499459,26.25 26.6998916,26.25 L26.6998916,26.25 Z M2.80334396,24.5 L7.84378983,24.5 C8.07786625,24.5 8.42898089,24.3837576 8.54601909,24.1512731 L25.8988854,6.88154357 C26.3670382,6.41657442 26.3670382,5.83148822 25.8988854,5.36651905 L20.9754778,0.348726882 C20.5073248,-0.116242294 19.9182324,-0.116242294 19.4500796,0.348726882 L15.9311306,3.8476198 L2.10111463,17.6145816 C1.86703821,17.8470663 1.74999999,18.0795508 1.74999999,18.3159102 L1.74999999,23.3337023 C1.74999999,23.5661869 1.86703821,23.9187886 2.10111463,24.1512731 C2.21815286,24.3837576 2.56926754,24.5 2.80334396,24.5 Z M3.5,18.9707357 L17.2218765,5.24999999 L21,9.02508361 L7.27812351,22.75 L3.5,22.75 L3.5,18.9707357 Z"
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
  name: 'EditThree',
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
