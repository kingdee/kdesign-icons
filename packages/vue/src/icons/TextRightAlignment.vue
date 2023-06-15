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
        id="1095.文本右对齐"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(2.000000, 6.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M0,0 L28,0 L28,1.55555556 L0,1.55555556 L0,0 Z M0,12.4444444 L28,12.4444444 L28,14 L0,14 L0,12.4444444 Z M9.33333332,6.22222221 L28,6.22222221 L28,7.77777777 L9.33333332,7.77777777 L9.33333332,6.22222221 Z M9.33333332,18.6666666 L28,18.6666666 L28,20.2222222 L9.33333332,20.2222222 L9.33333332,18.6666666 Z"
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
  name: 'TextRightAlignment',
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
