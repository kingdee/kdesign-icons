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
        id="653.计划编制中心"
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
            d="M18.75,19.6923077 L2.47,19.6923077 C1.64624999,19.6923077 1.25,20.1550769 1.25,20.9230769 L1.25,22.1538462 C1.25,22.8332308 1.905,23.3846154 2.47,23.3846154 L20,23.3846154 C20,24.064 19.5425,24.6153846 18.9775,24.6153846 L2.045,24.6153846 C0.916249994,24.6153846 0,23.5138462 0,22.1538462 L0,1.23076923 C0,0.551034166 0.559644062,0 1.25,0 L18.75,0 C19.440356,0 20,0.551034166 20,1.23076923 L20,18.4615385 C20,19.1412736 19.440356,19.6923077 18.75,19.6923077 Z M20,20.9230769 L20,22.1538462 L3.125,22.1538462 C2.77982203,22.1538462 2.5,21.8783291 2.5,21.5384615 C2.5,21.198594 2.77982203,20.9230769 3.125,20.9230769 L20,20.9230769 Z M3.75,5.53846154 L3.75,8 L6.22,8 L6.22,5.53846154 L3.75,5.53846154 Z M3.75,11.6923077 L3.75,14.1538462 L6.22,14.1538462 L6.22,11.6923077 L3.75,11.6923077 Z M8.75,6.15384615 L8.75,7.38461538 L17.4125,7.38461538 L17.4125,6.15384615 L8.75,6.15384615 Z M8.75,12.3076923 L8.75,13.5384615 L17.4125,13.5384615 L17.4125,12.3076923 L8.75,12.3076923 Z"
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
  name: 'PlanningCenter',
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
