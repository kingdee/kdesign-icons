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
        id="792.列表"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(3.000000, 2.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M4.96423529,1.74423529 L4.96423529,4.94117647 L21.4858824,4.94117647 L21.4858824,1.74423529 L24.7058824,1.74423529 C25.6167059,1.74423529 26.3545882,2.47388235 26.3545882,3.38635294 L26.3545882,26.3578824 C26.3545882,27.2637647 25.6216471,28 24.7075294,28 L1.64705882,28 C0.737882353,28 4.57150657e-16,27.2703529 4.57150657e-16,26.3578824 L4.57150657e-16,3.38635294 C4.57150657e-16,2.48047059 0.732941176,1.74423529 1.64705882,1.74423529 L4.96423529,1.74423529 Z M6.61623529,4.57150657e-16 L19.8338824,4.57150657e-16 L19.8338824,3.29411765 L6.61623529,3.29411765 L6.61623529,4.57150657e-16 Z M4.96423529,11.5294118 L4.96423529,13.1764706 L21.4858824,13.1764706 L21.4858824,11.5294118 L4.96423529,11.5294118 Z M4.96423529,18.1176471 L4.96423529,19.7647059 L21.4858824,19.7647059 L21.4858824,18.1176471 L4.96423529,18.1176471 Z"
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
  name: 'ListOne',
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
