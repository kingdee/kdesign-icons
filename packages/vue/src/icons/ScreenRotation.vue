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
        id="40.屏幕切换"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="屏幕切换"
          transform="translate(4.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M12.1333333,0 C13.1642649,0 14,0.895430496 14,2 L14,22 C14,23.1045695 13.1642649,24 12.1333333,24 L1.86666666,24 C0.835735136,24 0,23.1045695 0,22 L0,2 C0,0.895430496 0.835735136,0 1.86666666,0 L12.1333333,0 Z M21.7142857,9 C22.9766509,9 24,9.8954305 24,11 L24,22 C24,23.1045695 22.9766509,24 21.7142857,24 L16,24 L16,9 L21.7142857,9 Z M7.5,19 C6.6715729,19 6,19.6715729 6,20.5 C6,21.3284271 6.6715729,22 7.5,22 C8.3284271,22 9,21.3284271 9,20.5 C9,19.6715729 8.3284271,19 7.5,19 Z M16.0014356,0.683330336 C19.0693638,1.76812867 21.5645305,4.06514522 22.9113722,6.99881642 L20.6616075,6.99901389 C19.5970165,5.15913763 17.9630257,3.68992614 16.0006093,2.83235363 L16.0014356,0.683330336 Z"
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
  name: 'ScreenRotation',
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
