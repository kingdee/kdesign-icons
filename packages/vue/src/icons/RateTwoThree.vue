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
        id="81.2:3比率"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="2:3比率"
          transform="translate(8.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M16,23.2 C16,23.6418278 15.6418278,24 15.2,24 L0.8,24 C0.358172237,24 0,23.6418278 0,23.2 L0,0.8 C0,0.358172211 0.358172237,0 0.8,0 L15.2,0 C15.6418278,0 16,0.358172211 16,0.8 L16,23.2 Z M14.4,22.4 L14.4,1.6 L1.6,1.6 L1.6,22.4 L14.4,22.4 Z"
            id="形状"
            :fill="color"
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
  name: 'RateTwoThree',
  components: { iconWrapper },
  props: {
    size: {
      type: String || Number,
      default: '1em',
    },
    color: {
      type: String,
      default: 'currentColor',
    },
    rotate: Number,
    spin: Boolean,
  },
});
</script>
