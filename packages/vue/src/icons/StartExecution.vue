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
        id="1484-开始执行"
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
            d="M12,24 C5.372583,24 1.09626594e-15,18.627417 1.09626594e-15,12 C1.09626594e-15,5.372583 5.372583,-1.09626594e-15 12,-1.09626594e-15 C18.627417,-1.09626594e-15 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,22.2857143 C15.6747318,22.2857143 19.0703241,20.3252683 20.90769,17.1428572 C22.745056,13.9604461 22.745056,10.0395539 20.90769,6.8571428 C19.0703241,3.67473169 15.6747318,1.71428572 12,1.71428572 C6.31935686,1.71428572 1.71428572,6.31935686 1.71428572,12 C1.71428572,17.6806431 6.31935686,22.2857143 12,22.2857143 L12,22.2857143 Z M8.57142856,5.25599999 L18.696,12.0051429 L8.57142856,18.6582857 L8.57142856,5.25599999 Z M10.2857143,8.45828573 L10.2857143,15.48 L15.5897143,11.9948571 L10.2857143,8.45828573 Z"
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
  name: 'StartExecution',
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
