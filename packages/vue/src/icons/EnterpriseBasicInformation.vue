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
        id="762.企业基础资料"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(3.000000, 1.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M0.817500001,7.84745661 L15.843,0.164268146 C16.3078938,-0.073277044 16.8628542,-0.052012834 17.3082087,0.220410026 C17.7535632,0.492832886 18.0252435,0.977223746 18.0255,1.49930091 L18.0255,30 L1.5,30 C0.671572861,30 0,29.3284107 0,28.4999632 L0,9.18248937 C0.00027681,8.61929415 0.31599168,8.1037104 0.817500001,7.84745661 Z M21.786,12.8125784 L26.286,15.5786463 C26.7298326,15.8517106 27.0001467,16.3355622 26.9999998,16.8566776 L26.9999998,28.4984631 C26.9999998,29.3269105 26.3284271,29.9985 25.4999998,29.9985 L19.4999998,29.9985 L19.4999998,14.0906098 C19.4998469,13.5471284 19.7936667,13.0460745 20.2680368,12.7808689 C20.742407,12.5156634 21.3231183,12.5277941 21.786,12.8125784 L21.786,12.8125784 Z M4.50000001,13.4995952 L4.50000001,16.4996688 L7.50000001,16.4996688 L7.50000001,13.4995952 L4.50000001,13.4995952 Z M10.5,13.4995952 L10.5,16.4996688 L13.5,16.4996688 L13.5,13.4995952 L10.5,13.4995952 Z M4.50000001,20.9997792 L4.50000001,23.9998528 L7.50000001,23.9998528 L7.50000001,20.9997792 L4.50000001,20.9997792 Z M10.5,20.9997792 L10.5,23.9998528 L13.5,23.9998528 L13.5,20.9997792 L10.5,20.9997792 Z"
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
  name: 'EnterpriseBasicInformation',
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
