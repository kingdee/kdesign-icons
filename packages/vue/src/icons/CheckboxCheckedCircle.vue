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
        id="1083.复选框选中_圆"
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
            d="M12.208,16.912 L8.24599999,12.95 C7.71405046,12.4135204 6.8482388,12.4088234 6.31049999,12.9395 C6.05433459,13.1970862 5.91141562,13.5461595 5.91336625,13.9094328 C5.91535711,14.2727061 6.06205498,14.6202083 6.32100001,14.875 L11.375,19.929 C11.9069495,20.4654796 12.7727612,20.4701766 13.3105,19.9395 C13.4867778,19.7638001 13.6109507,19.5427118 13.66925,19.30075 L21.63175,11.33825 C22.167541,10.8064178 22.1714562,9.94115909 21.6405,9.40450001 C21.382985,9.14887282 21.0342884,9.00629503 20.671445,9.00824507 C20.3086016,9.01023541 19.9614739,9.15659143 19.70675,9.415 L12.208,16.912 L12.208,16.912 Z M14,28 C6.2680135,28 -6.55725474e-16,21.7319865 -6.55725474e-16,14 C-6.55725474e-16,6.2680135 6.2680135,-6.55725474e-16 14,-6.55725474e-16 C21.7319865,-6.55725474e-16 28,6.2680135 28,14 C28,21.7319865 21.7319865,28 14,28 Z"
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
  name: 'CheckboxCheckedCircle',
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
