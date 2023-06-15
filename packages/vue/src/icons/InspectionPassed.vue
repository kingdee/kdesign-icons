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
        id="1384-检查通过"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M12,0 C5.372583,0 0,5.372583 0,12 C0,18.627417 5.372583,24 12,24 C18.627417,24 24,18.627417 24,12 C24,5.372583 18.627417,0 12,0 Z M12,1.2 C17.9646752,1.2 22.8,6.03532471 22.8,12 C22.8,17.9646752 17.9646752,22.8 12,22.8 C6.03532471,22.8 1.2,17.9646752 1.2,12 C1.2,6.03532471 6.03532471,1.2 12,1.2 Z M17.544446,8.00952518 C17.7600994,7.75792968 18.1388794,7.72879274 18.3904748,7.94444604 C18.6141152,8.13613786 18.661986,8.4567199 18.5184028,8.70229735 L18.455554,8.79047482 L11.9872312,16.3368515 C11.4084524,17.0120934 10.431507,17.1575666 9.68632817,16.7041219 L9.54056928,16.605427 L5.64,13.68 C5.37490332,13.4811775 5.3211775,13.1050967 5.52,12.84 C5.6967311,12.6043585 6.01351819,12.5357261 6.2679193,12.663023 L6.36,12.72 L10.2605693,15.645427 C10.4819177,15.8114382 10.7827584,15.8022029 10.992372,15.6364613 L11.0761232,15.5559018 L17.544446,8.00952518 Z"
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
  name: 'InspectionPassed',
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
