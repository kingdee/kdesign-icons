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
        id="154.搜索"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="搜索"
          transform="translate(4.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M16.9275779,18.1397609 C15.1355645,19.6567225 12.8174599,20.5714284 10.2857142,20.5714284 C4.60507111,20.5714284 0,15.9663573 0,10.2857142 C0,4.60507111 4.60507111,0 10.2857142,0 C15.9663573,0 20.5714284,4.60507111 20.5714284,10.2857142 C20.5714284,12.8174599 19.6567225,15.1355645 18.1397609,16.9275779 L23.7489487,22.5367652 C24.0836838,22.8715004 24.0836838,23.4142135 23.7489487,23.7489487 C23.4142135,24.0836838 22.8715004,24.0836838 22.5367652,23.7489487 L16.9275779,18.1397609 L16.9275779,18.1397609 Z M10.2857142,18.8571427 C15.0195834,18.8571427 18.8571427,15.0195834 18.8571427,10.2857142 C18.8571427,5.55184497 15.0195834,1.7142857 10.2857142,1.7142857 C5.55184497,1.7142857 1.7142857,5.55184497 1.7142857,10.2857142 C1.7142857,15.0195834 5.55184497,18.8571427 10.2857142,18.8571427 Z"
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
  name: 'Search',
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
