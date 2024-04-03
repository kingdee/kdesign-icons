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
        id="1824.寻源管理"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <path
          d="M16,1 C23.7319865,1 30,7.2680135 30,15 C30,18.8142524 28.4746602,22.2722427 26.0006961,24.7972551 L26,29.5 C26,30.3284271 25.3284271,31 24.5,31 C23.6715729,31 23,30.3284271 23,29.5 L23.0008915,27.1265335 C20.9414765,28.3180432 18.550378,29 16,29 C13.4500366,29 11.059301,28.3182649 9.00011297,27.1271146 L9,29.5 C9,30.3284271 8.32842712,31 7.5,31 C6.67157288,31 6,30.3284271 6,29.5 L6.00028144,24.7982527 C3.52574164,22.2731535 2,18.8147548 2,15 C2,7.2680135 8.2680135,1 16,1 Z M16,4 C9.92486775,4 5,8.92486775 5,15 C5,21.0751322 9.92486775,26 16,26 C22.0751322,26 27,21.0751322 27,15 C27,8.92486775 22.0751322,4 16,4 Z M16,7 C20.418278,7 24,10.581722 24,15 C24,19.418278 20.418278,23 16,23 C11.581722,23 8,19.418278 8,15 C8,10.581722 11.581722,7 16,7 Z M16,9 C12.6862915,9 10,11.6862915 10,15 C10,18.3137085 12.6862915,21 16,21 C19.3137085,21 22,18.3137085 22,15 C22,11.6862915 19.3137085,9 16,9 Z M16,11 C18.209139,11 20,12.790861 20,15 C20,17.209139 18.209139,19 16,19 C13.790861,19 12,17.209139 12,15 C12,12.790861 13.790861,11 16,11 Z"
          id="形状结合"
          :fill="fill"
        ></path>
      </g>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'SourceFindingManagement',
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
