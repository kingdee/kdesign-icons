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
        id="1419-收藏选中"
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
            d="M8.02858346,7.03592855 L0.717927187,8.09610391 L0.577309602,8.12840297 C-0.00360365619,8.31418995 -0.207562051,9.07308094 0.252840624,9.52318981 L5.54895863,14.7025066 L4.28546269,21.8998564 L4.27227228,22.0349205 C4.26061763,22.6532038 4.92914075,23.0899027 5.50378115,22.7835571 L11.9983272,19.3185266 L18.4961749,22.7835914 L18.6203815,22.8380246 C19.2040907,23.040953 19.8264931,22.5419132 19.7146101,21.900892 L18.4577415,14.7025066 L23.7476832,9.52268018 L23.8420965,9.41374752 C24.2013253,8.92149198 23.9192731,8.18901586 23.282731,8.09619917 L16.0099282,7.03592855 L12.7490907,0.464980722 C12.440511,-0.156772992 11.5528283,-0.154492527 11.2474473,0.46883853 L8.02858346,7.03592855 Z"
            id="路径"
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
  name: 'FavoriteSelected',
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
