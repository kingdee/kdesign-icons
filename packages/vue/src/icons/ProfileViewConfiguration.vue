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
        id="387.个人档案视图配置"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 5.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M9.42857143,12 L9.42857143,21.4285714 L0,21.4285714 L0,12 L9.42857143,12 Z M18.4285714,17.1428571 C19.1386518,17.1428571 19.7142857,17.7184911 19.7142857,18.4285714 C19.7142857,19.1386518 19.1386518,19.7142857 18.4285714,19.7142857 L13.2857143,19.7142857 C12.5756339,19.7142857 12,19.1386518 12,18.4285714 C12,17.7184911 12.5756339,17.1428571 13.2857143,17.1428571 L18.4285714,17.1428571 Z M22.7142857,12 C23.4243661,12 24,12.5756339 24,13.2857143 C24,13.9957947 23.4243661,14.5714286 22.7142857,14.5714286 L13.2857143,14.5714286 C12.5756339,14.5714286 12,13.9957947 12,13.2857143 C12,12.5756339 12.5756339,12 13.2857143,12 L22.7142857,12 Z M9.42857143,0 L9.42857143,9.42857143 L0,9.42857143 L0,0 L9.42857143,0 Z M18.4285714,5.14285714 C19.1386518,5.14285714 19.7142857,5.71849105 19.7142857,6.42857143 C19.7142857,7.13865183 19.1386518,7.71428571 18.4285714,7.71428571 L13.2857143,7.71428571 C12.5756339,7.71428571 12,7.13865183 12,6.42857143 C12,5.71849105 12.5756339,5.14285714 13.2857143,5.14285714 L18.4285714,5.14285714 Z M22.7142857,0 C23.4243661,0 24,0.575633883 24,1.28571429 C24,1.99579469 23.4243661,2.57142857 22.7142857,2.57142857 L13.2857143,2.57142857 C12.5756339,2.57142857 12,1.99579469 12,1.28571429 C12,0.575633883 12.5756339,0 13.2857143,0 L22.7142857,0 Z"
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
  name: 'ProfileViewConfiguration',
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
