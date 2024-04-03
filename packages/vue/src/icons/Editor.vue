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
        d="M937.5 906.25C954.7589 906.25 968.75 920.2411 968.75 937.5C968.75 954.7589 954.7589 968.75 937.5 968.75L62.5 968.75C45.241102 968.75 31.25 954.7589 31.25 937.5C31.25 920.2411 45.241102 906.25 62.5 906.25L937.5 906.25zM640.617813 40.416149C652.821438 28.197897 672.621781 28.194137 684.83005 40.407753L862.3797 218.035183C874.577125 230.237951 874.577137 250.016878 862.379725 262.219657L359.67278 765.147781C353.811873 771.011269 345.861231 774.305556 337.570833 774.305556L159.722223 774.305556C142.463324 774.305556 128.472223 760.314456 128.472223 743.055556L128.472223 566.108681C128.472223 557.827149 131.759488 549.884262 137.611907 544.02483L640.617813 40.416149zM662.722225 106.6875L190.972223 579L190.972223 711.75L324.597223 711.75L796.097225 240.125L662.722225 106.6875z"
        fill="#666666"
      ></path>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'Editor',
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
