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
        id="1389-打勾"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 7.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M0.192320654,9.37150396 L8.205015,17.5281389 C8.46090943,17.7888314 9.1486257,17.7888314 9.40292081,17.5281389 L23.8001812,1.25485249 C24.0544763,0.994160038 24.0784664,0.469576471 23.8001812,0.224877393 C23.2404121,-0.267719392 22.6038747,0.183294552 22.4775269,0.31444045 L8.81756228,15.8280403 L1.31665678,8.30954208 C1.06396105,8.04884962 0.445016392,8.04884962 0.190721311,8.30954208 C-0.0635737702,8.56863519 -0.0635737702,9.1108115 0.190721311,9.37150396 L0.192320654,9.37150396 Z"
            id="路径"
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
  name: 'Tick',
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
