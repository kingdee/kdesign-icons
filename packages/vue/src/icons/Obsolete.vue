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
        id="1378-已废弃"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(5.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M16.8,0 C17.2418278,0 17.6,0.358172201 17.6,0.8 C17.6,1.2418278 17.9581722,1.6 18.4,1.6 L18.4,1.6 L21.0455026,1.6 C21.7935708,1.6 22.4,2.20642914 22.4,2.95449735 L22.4,2.95449735 L22.4,22.6455026 C22.4,23.3935708 21.7935708,24 21.0455026,24 L21.0455026,24 L1.35449735,24 C0.606429135,24 0,23.3935708 0,22.6455026 L0,22.6455026 L0,2.95449735 C0,2.20642914 0.606429135,1.6 1.35449735,1.6 L1.35449735,1.6 L4,1.6 C4.4418278,1.6 4.8,1.2418278 4.8,0.8 C4.8,0.358172201 5.1581722,0 5.6,0 L5.6,0 L16.8,0 Z M4.8,3.2 L1.6,3.2 L1.6,22.4 L20.8,22.4 L20.8,3.2 L17.6,3.2 L17.6,4.8 L4.8,4.8 L4.8,3.2 Z M14.64,9.04 L15.76,10.16 L12.336,13.6 L15.76,17.04 L14.64,18.16 L11.2,14.736 L7.76,18.16 L6.64,17.04 L10.064,13.6 L6.64,10.16 L7.76,9.04 L11.2,12.464 L14.64,9.04 Z M16,1.6 L6.4,1.6 L6.4,3.2 L16,3.2 L16,1.6 Z"
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
  name: 'Obsolete',
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
