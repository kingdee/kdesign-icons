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
        id="397.作业进度计划"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(6.000000, 3.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M10,9.09090909 L13.6363636,6.81818182 L17.2727273,9.09090909 L17.2727273,0 L19.0909091,0 C19.5929861,0 20,0.407013876 20,0.909090909 L20,24.5454545 C20,25.0475315 19.5929861,25.4545455 19.0909091,25.4545455 L0.909090909,25.4545455 C0.407013876,25.4545455 0,25.0475315 0,24.5454545 L0,0.909090909 C0,0.407013876 0.407013876,0 0.909090909,0 L10,0 L10,9.09090909 Z M15.4545455,18.1818182 L4.54545455,18.1818182 C4.04337751,18.1818182 3.63636364,18.5888321 3.63636364,19.0909091 C3.63636364,19.5571235 3.98730927,19.9413702 4.43943535,19.9938839 L4.54545455,20 L15.4545455,20 C15.9566225,20 16.3636364,19.5929861 16.3636364,19.0909091 C16.3636364,18.5888321 15.9566225,18.1818182 15.4545455,18.1818182 Z M15.4545455,12.7272727 L4.54545455,12.7272727 C4.04337751,12.7272727 3.63636364,13.1342866 3.63636364,13.6363636 C3.63636364,14.102578 3.98730927,14.4868247 4.43943535,14.5393384 L4.54545455,14.5454545 L15.4545455,14.5454545 C15.9566225,14.5454545 16.3636364,14.1384406 16.3636364,13.6363636 C16.3636364,13.1342866 15.9566225,12.7272727 15.4545455,12.7272727 Z"
            id="形状"
            :fill="color"
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
  name: 'WorkSchedule',
  components: { iconWrapper },
  props: {
    size: {
      type: String || Number,
      default: '1em',
    },
    color: {
      type: String,
      default: 'currentColor',
    },
    rotate: Number,
    spin: Boolean,
  },
});
</script>
