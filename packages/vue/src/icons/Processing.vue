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
        id="1386-进行中"
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
            d="M12,0 C5.372583,0 0,5.372583 0,12 C0,18.627417 5.372583,24 12,24 C18.627417,24 24,18.627417 24,12 C24,5.372583 18.627417,0 12,0 Z M12,1.2 C17.9646752,1.2 22.8,6.03532471 22.8,12 C22.8,17.9646752 17.9646752,22.8 12,22.8 C6.03532471,22.8 1.2,17.9646752 1.2,12 C1.2,6.03532471 6.03532471,1.2 12,1.2 Z M12,3 C12.2945519,3 12.5395301,3.21225019 12.5903332,3.49214926 L12.6,3.6 L12.6,12.8604 L18.3086975,16.2855042 C18.5612736,16.4370499 18.6621389,16.7450932 18.5616953,17.0112427 L18.5144958,17.1086975 C18.3629501,17.3612736 18.0549068,17.4621389 17.7887573,17.3616953 L17.6913025,17.3144958 L11.4,13.5397142 L11.4,3.6 C11.4,3.26862917 11.6686292,3 12,3 Z"
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
  name: 'Processing',
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
