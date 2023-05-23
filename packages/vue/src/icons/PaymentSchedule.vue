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
        id="684.付款排程"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 2.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M24,11.7550971 L24,25.4693829 C24,26.5514229 23.1045771,27.4285714 22,27.4285714 L2,27.4285714 C0.895422857,27.4285714 0,26.5514229 0,25.4693829 L0,11.7550971 L24,11.7550971 Z M15.1044857,13.7142857 L12.21432,16.0038857 L9.34359429,13.7142857 L8.22857143,14.5520229 L11.6665371,16.9647257 L11.8971429,17.1377143 L8.22857143,17.1389657 L8.22857143,18.2805257 L11.652,18.2794286 L11.652,20.5628571 L8.22857143,20.5636629 L8.22857143,21.7052229 L11.652,21.7045714 L11.6532514,25.1299029 L12.7345714,25.1299029 L12.7337143,21.7045714 L16.2195086,21.7052229 L16.2195086,20.5636629 L12.7337143,20.5628571 L12.7337143,18.2794286 L16.2195086,18.2805257 L16.2195086,17.1389657 L12.5485714,17.1377143 L12.7815429,16.9647257 L16.2195086,14.5520229 L15.1044857,13.7142857 Z M17.5,0 C18.3284229,0 19,0.657874286 19,1.46938286 L19,3.91836 L22,3.91836 C23.1045771,3.91836 24,4.79552571 24,5.87754857 L24,9.79592571 L0,9.79592571 L0,5.87754857 C0,4.79552571 0.895422857,3.91836 2,3.91836 L5,3.91836 L5,1.46938286 C5,0.657874286 5.67157714,0 6.5,0 C7.32843429,0 8,0.657874286 8,1.46938286 L8,3.91836 L16,3.91836 L16,1.46938286 C16,0.657874286 16.6715657,0 17.5,0 Z"
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
  name: 'PaymentSchedule',
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
