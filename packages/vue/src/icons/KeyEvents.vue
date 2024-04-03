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
        d="M812.5 125C847 125 875 153 875 187.5L875 875C875 909.53125 847 937.5 812.5 937.5L500 781.25L187.5 937.5C153 937.5 125 909.53125 125 875L125 187.5C125 153 153 125 187.5 125zM812.5 187.5L187.5 187.5L187.5 875L500 718.75L812.5 875L812.5 187.5zM656.25 375C673.508897 375 687.5 388.991103 687.5 406.25C687.5 423.508897 673.508897 437.5 656.25 437.5L343.75 437.5C326.491103 437.5 312.5 423.508897 312.5 406.25C312.5 388.991103 326.491103 375 343.75 375L656.25 375z"
        fill="#666666"
      ></path>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'KeyEvents',
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
