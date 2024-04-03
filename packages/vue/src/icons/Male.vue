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
        d="M906.25 62.5C923.508897 62.5 937.5 76.491102 937.5 93.75L937.5 343.75C937.5 361.008897 923.508897 375 906.25 375C888.991103 375 875 361.008897 875 343.75L875 170.03125L670.810066 374.254663C720.264053 433.795966 750 510.300381 750 593.75C750 783.597881 596.097881 937.5 406.25 937.5C216.402117 937.5 62.5 783.597881 62.5 593.75C62.5 403.902119 216.402117 250 406.25 250C490.134253 250 567.000769 280.046504 626.674288 329.964256L831.625 125L656.25 125C638.991103 125 625 111.008898 625 93.75C625 76.491102 638.991103 62.5 656.25 62.5L906.25 62.5zM406.25 312.5C250.919914 312.5 125 438.419916 125 593.75C125 749.080084 250.919914 875 406.25 875C561.580084 875 687.5 749.080084 687.5 593.75C687.5 438.419916 561.580084 312.5 406.25 312.5z"
        fill="#666666"
      ></path>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'Male',
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
