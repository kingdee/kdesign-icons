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
        id="1718.日志管理"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <path
          d="M17.0909091,2 L17.0909091,12.7692308 L20.3636364,9.74796311 L23.6363636,12.7692308 L23.6363636,2 L27,2 C27.5522847,2 28,2.44771525 28,3 L28,27.8461538 C28,29.0356902 27.0231667,30 25.8181818,30 L5.09090909,30 C4.48841664,30 4,29.5178451 4,28.9230769 L25.8181818,28.9230769 C26.4206743,28.9230769 26.9090909,28.440922 26.9090909,27.8461538 L26.9090909,26.7692308 C26.9090909,26.1744626 26.4206743,26 25.8181818,26 L4,26 L4,3 C4,2.44771525 4.44771525,2 5,2 L17.0909091,2 Z M25.5,27 C25.7761424,27 26,27.2238576 26,27.5 C26,27.7761424 25.7761424,28 25.5,28 L4,28 L4,27 L25.5,27 Z"
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
  name: 'LogManagementOne',
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
