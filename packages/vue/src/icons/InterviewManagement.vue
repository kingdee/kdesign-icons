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
        id="1914数据分服务"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="rcgyy_sjfxfw_48_48"
          transform="translate(2.000000, 2.000000)"
          fill="#999999"
        >
          <path
            d="M20,0 C21.1045695,0 22,0.8954305 22,2 L22,26 C22,27.1045695 21.1045695,28 20,28 L8,28 C6.8954305,28 6,27.1045695 6,26 L6,2 C6,0.8954305 6.8954305,0 8,0 L20,0 Z M5,3 L5,26 L2,26 C0.8954305,26 0,25.1045695 0,24 L0,5 C0,3.8954305 0.8954305,3 2,3 L5,3 Z M27,3 C28.1045695,3 29,3.8954305 29,5 L29,24 C29,25.1045695 28.1045695,26 27,26 L23,26 L23,3 L27,3 Z M17,22 L11,22 C10.4477153,22 10,22.4477153 10,23 C10,23.5522847 10.4477153,24 11,24 L17,24 C17.5522847,24 18,23.5522847 18,23 C18,22.4477153 17.5522847,22 17,22 Z M17,18 L11,18 C10.4477153,18 10,18.4477153 10,19 C10,19.5522847 10.4477153,20 11,20 L17,20 C17.5522847,20 18,19.5522847 18,19 C18,18.4477153 17.5522847,18 17,18 Z"
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
  name: 'InterviewManagement',
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
