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
        id="80.水平翻转"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="水平翻转"
          transform="translate(4.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M12,0 C12.4733869,0 12.8571429,0.383755941 12.8571429,0.857142857 L12.8571429,23.1428571 C12.8571429,23.616244 12.4733869,24 12,24 C11.5266131,24 11.1428571,23.616244 11.1428571,23.1428571 L11.1428571,0.857142857 C11.1428571,0.383755941 11.5266131,0 12,0 Z M9.42857143,3.42857143 L9.42857143,5.14285714 L1.71428571,5.14285714 L1.71428571,18.8571429 L9.42857143,18.8571429 L9.42857143,20.5714286 L0.857142857,20.5714286 C0.383755941,20.5714286 0,20.1876726 0,19.7142857 L0,4.28571429 C0,3.81232737 0.383755941,3.42857143 0.857142857,3.42857143 L9.42857143,3.42857143 Z M23.1428571,3.42857143 C23.616244,3.42857143 24,3.81232737 24,4.28571429 L24,19.7142857 C24,20.1876726 23.616244,20.5714286 23.1428571,20.5714286 L14.5714286,20.5714286 L14.5714286,18.8571429 L22.2857143,18.8571429 L22.2857143,5.14285714 L14.5714286,5.14285714 L14.5714286,3.42857143 L23.1428571,3.42857143 Z"
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
  name: 'HorizontalFlip',
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
