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
        d="M937.5 531.25C926.123369 750.104053 750.508966 925.618269 531.25 937.5L531.25 710.827238C625.736063 700.318488 700.698394 625.449619 710.92375 531.25L937.5 531.25zM289.116965 531.25C299.312926 625.847663 374.35715 700.943447 468.75 710.900063L468.75 937.5C249.715982 927.092169 73.844181 751.033825 62.5 531.25L289.116965 531.25zM500 343.75C586.294491 343.75 656.25 413.705509 656.25 500C656.25 586.294494 586.294491 656.25 500 656.25C413.705509 656.25 343.75 586.294494 343.75 500C343.75 413.705509 413.705509 343.75 500 343.75zM468.75 62.5L468.75 289.095566C374.088641 299.034674 298.890797 374.199 289.067482 468.75L62.5 468.75C72.888527 249.114214 249.114214 72.888527 468.75 62.5zM531.25 62.5C751.113991 74.359829 927.081631 250.040747 937.5 468.75L710.973594 468.75C701.121834 374.595681 626.006013 299.658437 531.25 289.168037L531.25 62.5z"
        fill="#666666"
      ></path>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'ConfigurationCenterOne',
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
