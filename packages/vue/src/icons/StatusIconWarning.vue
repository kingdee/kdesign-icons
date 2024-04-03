<template>
  <icon-wrapper :spin="spin" :rotate="rotate">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      version="1.1"
      :width="size"
      :height="size"
    >
      <path
        d="M500 62.5C741.624578 62.5 937.5 258.375422 937.5 500C937.5 741.624578 741.624578 937.5 500 937.5C258.375422 937.5 62.5 741.624578 62.5 500C62.5 258.375422 258.375422 62.5 500 62.5zM500 656.25C474.111653 656.25 453.125 677.236653 453.125 703.125C453.125 729.013347 474.111653 750 500 750C525.888347 750 546.875 729.013347 546.875 703.125C546.875 677.236653 525.888347 656.25 500 656.25zM538.662116 281.25L460.947747 281.259748C456.638406 281.475214 453.319666 285.143296 453.535131 289.452638L453.535131 289.452638L468.378881 586.327638C468.586775 590.485522 472.018556 593.75 476.181634 593.75L476.181634 593.75L523.818366 593.75C527.981444 593.75 531.413225 590.485522 531.621119 586.327638L531.621119 586.327638L546.472178 289.25763L546.268281 287.271165C545.458578 283.819794 542.36045 281.25 538.662116 281.25L538.662116 281.25z"
        fill="#666666"
      ></path>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'StatusIconWarning',
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
