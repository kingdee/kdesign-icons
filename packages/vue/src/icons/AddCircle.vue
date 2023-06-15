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
        id="179.增加-圆"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="增加-圆"
          transform="translate(4.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,22.2857143 C17.6806431,22.2857143 22.2857143,17.6806431 22.2857143,12 C22.2857143,6.31935686 17.6806431,1.71428571 12,1.71428571 C6.31935686,1.71428571 1.71428571,6.31935686 1.71428571,12 C1.71428571,17.6806431 6.31935686,22.2857143 12,22.2857143 Z M11.1428571,11.1428571 L11.1428571,6 C11.1428571,5.52661308 11.5266131,5.14285714 12,5.14285714 C12.4733869,5.14285714 12.8571429,5.52661308 12.8571429,6 L12.8571429,11.1428571 L18,11.1428571 C18.4733869,11.1428571 18.8571429,11.5266131 18.8571429,12 C18.8571429,12.4733869 18.4733869,12.8571429 18,12.8571429 L12.8571429,12.8571429 L12.8571429,18 C12.8571429,18.4733869 12.4733869,18.8571429 12,18.8571429 C11.5266131,18.8571429 11.1428571,18.4733869 11.1428571,18 L11.1428571,12.8571429 L6,12.8571429 C5.52661308,12.8571429 5.14285714,12.4733869 5.14285714,12 C5.14285714,11.5266131 5.52661308,11.1428571 6,11.1428571 L11.1428571,11.1428571 Z"
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
  name: 'AddCircle',
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
