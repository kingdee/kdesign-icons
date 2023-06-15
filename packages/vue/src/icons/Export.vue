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
        id="1005.导出"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(2.000000, 2.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M11.1925383,0.0018654267 L11.1925383,1.86728848 L1.86542306,1.86728848 L1.86542306,26.1177881 L26.1159227,26.1177881 L26.1159227,16.7906729 L27.9813458,16.7906729 L27.9813458,26.1177881 C27.9813458,27.1480328 27.1461674,27.9832112 26.1159227,27.9832112 L1.86542306,27.9832112 C0.83517835,27.9832112 0,27.1480328 0,26.1177881 L0,1.86728848 C0,0.837043777 0.83517835,0.0018654267 1.86542306,0.0018654267 L11.1925383,0.0018654267 Z M26.1364424,3.36335774 L12.5561626,16.7906729 L11.1925383,15.3225849 L24.6142572,1.86542306 L16.8074617,1.86542306 L16.8074617,0 L28,0 L28,11.1925383 L26.1345769,11.1925383 L26.1345769,3.36335774 L26.1364424,3.36335774 Z"
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
  name: 'Export',
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
