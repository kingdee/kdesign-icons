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
        id="541.物料单管理"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(6.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M18.9035546,24.3478261 C19.5091047,24.3478261 20,23.8630795 20,23.2494803 L20,23.2494803 L20,19.2948651 C20,18.9548259 19.8017951,18.6459849 19.4926631,18.5043372 L19.4926631,18.5043372 L16.0044776,16.906013 C15.3503118,16.52796 14.6863259,16.0864053 14.6863259,15.4776964 L14.6863259,15.4776964 L14.6863259,0.913925203 C14.6863259,0.434861384 14.2988537,0.0460358122 13.8197928,0.0443653843 L13.8197928,0.0443653843 L1.09644544,0 C0.490895332,0 0,0.484746602 0,1.09834574 L0,1.09834574 L0,23.2494803 C0,23.8560799 0.501448988,24.3478261 1.09644544,24.3478261 L1.09644544,24.3478261 L18.9035546,24.3478261 Z M20,4.34782609 L20,0 L15.6521739,0 L15.6521739,4.34782609 L20,4.34782609 Z M10.4347826,6.95652174 L3.47826087,6.95652174 L3.47826087,5.2173913 L10.4347826,5.2173913 L10.4347826,6.95652174 Z M20,9.56521739 L20,5.2173913 L15.6521739,5.2173913 L15.6521739,9.56521739 L20,9.56521739 Z M20,16.5217391 L20,11.3043478 L15.6521739,11.3043478 L15.6521739,14.6559779 L20,16.5217391 Z"
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
  name: 'BillOfMaterialsManagement',
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
