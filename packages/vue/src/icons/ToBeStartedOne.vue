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
        id="1370-待开始"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M12,0 C18.576,0 23.9184,5.3604 24,12 C24,18.6396 18.576,24 12,24 C5.3424,24 0,18.6396 0,12 C0,5.3604 5.3424,0 12,0 Z M12,21.9204 C17.424,21.9204 21.864,17.52 21.864,12 C21.864,6.48 17.424,2.0796 12,2.0796 C6.4932,2.0796 2.136,6.5604 2.136,12 C2.136,17.4396 6.4932,21.9204 12,21.9204 Z M7.2,10.8 L16.8,10.8 C17.4627417,10.8 18.0000001,11.3372583 18.0000001,12 C18.0000001,12.6627417 17.4627417,13.2 16.8,13.2 L7.2,13.2 C6.53725832,13.2 6.00000005,12.6627417 6.00000005,12 C6.00000005,11.3372583 6.53725832,10.8 7.2,10.8 Z"
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
  name: 'ToBeStartedOne',
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
