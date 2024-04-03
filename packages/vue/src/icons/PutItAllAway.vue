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
        d="M854.492188 793.457031L854.492188 854.492188L122.070313 854.492188L122.070313 793.457031L854.492188 793.457031zM122.070313 305.175781L366.210938 488.28125L122.070313 671.386719L122.070313 305.175781zM854.492188 457.763672L854.492188 518.798828L427.246094 518.798828L427.246094 457.763672L854.492188 457.763672zM854.492188 122.070313L854.492188 183.105469L122.070313 183.105469L122.070313 122.070313L854.492188 122.070313z"
        fill="#666666"
      ></path>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'PutItAllAway',
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
