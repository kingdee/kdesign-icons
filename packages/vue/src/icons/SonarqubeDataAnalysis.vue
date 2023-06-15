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
        id="673.SonarQube数据分析"
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
            d="M23.478,24 L0.522,24 C0.233707368,24 0,23.7662927 0,23.478 L0,22.722 C0,22.434 0.234,22.2 0.522,22.2 L2.4,22.2 L2.4,17.844 C2.4,17.268 2.868,16.8 3.444,16.8 L6.156,16.8 C6.732,16.8 7.2,17.268 7.2,17.844 L7.2,22.2 L9.6,22.2 L9.6,13.044 C9.6,12.468 10.068,12 10.644,12 L13.356,12 C13.9325853,12 14.4,12.4674147 14.4,13.044 L14.4,22.2 L16.8,22.2 L16.8,8.244 C16.8,7.668 17.268,7.2 17.844,7.2 L20.556,7.2 C21.132,7.2 21.6,7.668 21.6,8.244 L21.6,22.2 L23.478,22.2 C23.766,22.2 24,22.434 24,22.722 L24,23.478 C24,23.766 23.766,24 23.478,24 L23.478,24 Z M19.278,4.8 L18.522,4.8 C18.2337073,4.8 18,4.56629263 18,4.278 L18,3.2484 L13.992,7.2564 L14.1084,7.3572 L12.6588,8.8056 L9.96,6.4884 L3.2064,13.2432 L1.7568,11.7936 L9.3936,4.1568 L9.408,4.1712 L9.864,3.7152 L12.432,5.9196 L16.5516,1.8 L15.522,1.8 C15.2337073,1.8 15,1.56629263 15,1.278 L15,0.522 C15,0.234 15.234,0 15.522,0 L19.278,0 C19.566,0 19.8,0.234 19.8,0.522 L19.8,4.278 C19.8,4.566 19.566,4.8 19.278,4.8 Z"
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
  name: 'SonarqubeDataAnalysis',
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
