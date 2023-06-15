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
        id="511.银行账户查询"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 6.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M18.0438848,9.85437293 C20.5604899,9.85437293 22.6006014,11.934116 22.6006014,14.499609 C22.6006014,15.6152974 22.2147696,16.6391193 21.5717076,17.4399749 L24,19.914493 L23.3555829,20.5714286 L20.9277875,18.096324 C20.1422569,18.7516621 19.1381122,19.1448451 18.0438848,19.1448451 C15.5272798,19.1448451 13.4871682,17.065102 13.4871682,14.499609 C13.4871682,11.934116 15.5272798,9.85437293 18.0438848,9.85437293 Z M22.1931429,5.292 L22.1937896,11.1652299 C21.2136179,9.81106439 19.6251759,8.93087967 17.8323359,8.93087967 C14.8548607,8.93087967 12.4411401,11.3585349 12.4411401,14.3531995 C12.4411401,16.3619662 13.5271897,18.1156081 15.1409374,19.0525502 L1.00880709,19.0525502 C0.451658331,19.0525502 0,18.600885 0,18.0437362 L0,5.292 L22.1931429,5.292 Z M8.176647,15.4801915 L3.50427728,15.4801915 L2.33618485,16.6709754 L7.00855458,16.6709754 L8.176647,15.4801915 Z M21.184949,0 C21.7420977,0 22.1937561,0.451658331 22.1937561,1.00880709 L22.1931429,3.17485714 L0,3.17485714 L0,1.00880709 C0,0.451658331 0.451658331,0 1.00880709,0 L21.184949,0 Z"
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
  name: 'BankAccountInquiry',
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
