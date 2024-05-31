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
        id="消息"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <path
          d="M4,24 C3.44771525,24 3,23.5522847 3,23 C3,22.4477153 3.44771525,22 4,22 L7,22 L7,11.4 C7,6.7608081 11.0294373,3 16,3 C20.9705627,3 25,6.7608081 25,11.4 L25,22 L28,22 C28.5522847,22 29,22.4477153 29,23 C29,23.5522847 28.5522847,24 28,24 L4,24 Z M16,5 C12.2720779,5 9.22479128,7.65395492 9.01188295,11.0004203 L9,11.375 L9,22 L23,22 L23,11.375 C23,7.97992812 20.0858534,5.20472063 16.4113032,5.01082197 L16,5 Z M11,28 L21,28 C21.5522847,28 22,28.4477153 22,29 C22,29.5522847 21.5522847,30 21,30 L11,30 C10.4477153,30 10,29.5522847 10,29 C10,28.4477153 10.4477153,28 11,28 Z"
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
  name: 'MessageNotify',
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
