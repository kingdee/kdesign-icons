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
        id="1849.合约规划"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <path
          d="M29,6.83658323 L29,29.4299878 C29,30.2888414 28.3037616,30.9850798 27.444908,30.9850798 C27.2462945,30.9850798 27.0495197,30.9470331 26.8652213,30.8729966 L16,26.5082107 L5.13477873,30.8729966 C4.33782697,31.1931488 3.43223533,30.8066263 3.11208319,30.0096745 C3.03804667,29.8253761 3,29.6286013 3,29.4299878 L3,6.83658323 L29,6.83658323 Z M16,9.64415893 L13.9773272,13.7409874 L9.45449339,14.3979444 L12.7272467,17.5868807 L11.9546544,22.089731 L16,19.9637735 L20.0453456,22.089731 L19.2727533,17.5868807 L22.5455066,14.3979444 L18.0226728,13.7409874 L16,9.64415893 Z M4.555092,2 L27.444908,2 C28.3037616,2 29,2.6962384 29,3.555092 L29,5.12937401 L29,5.12937401 L3,5.12937401 L3,3.555092 C3,2.6962384 3.6962384,2 4.555092,2 Z"
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
  name: 'ContractPlanningOne',
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
