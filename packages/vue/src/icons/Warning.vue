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
        id="145.警示"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="警示"
          transform="translate(4.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M12,1.71428571 C6.31935686,1.71428571 1.71428571,6.31935686 1.71428571,12 C1.71428571,17.6806431 6.31935686,22.2857143 12,22.2857143 C17.6806431,22.2857143 22.2857143,17.6806431 22.2857143,12 C22.2857143,6.31935686 17.6806431,1.71428571 12,1.71428571 Z M12,16.2857143 C12.7100804,16.2857143 13.2857143,16.8613482 13.2857143,17.5714286 C13.2857143,18.2815089 12.7100804,18.8571429 12,18.8571429 C11.2899196,18.8571429 10.7142857,18.2815089 10.7142857,17.5714286 C10.7142857,16.8613482 11.2899196,16.2857143 12,16.2857143 Z M12,5.14285714 C12.4733869,5.14285714 12.8571429,5.52661308 12.8571429,6 L12.8571429,13.7142857 C12.8571429,14.1876726 12.4733869,14.5714286 12,14.5714286 C11.5266131,14.5714286 11.1428571,14.1876726 11.1428571,13.7142857 L11.1428571,6 C11.1428571,5.52661308 11.5266131,5.14285714 12,5.14285714 Z"
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
  name: 'Warning',
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
