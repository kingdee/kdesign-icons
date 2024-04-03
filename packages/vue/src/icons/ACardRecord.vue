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
        id="1940一次卡记录"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="使用状态变更单备份"
          transform="translate(3.000000, 2.000000)"
          fill="#999999"
          fill-rule="nonzero"
        >
          <g id="Group-4-Copy-3">
            <path
              d="M6,1 L6,3.12 C6,4.1088527 6.76345095,4.91939187 7.7330791,4.99434378 L7.88,5 L18.12,5 C19.1582953,5 20,4.15829533 20,3.12 L20,1 L25.06,1 C25.5791477,1 26,1.42085234 26,1.94 L26,27.06 C26,27.5791477 25.5791477,28 25.06,28 L0.94,28 C0.420852335,28 0,27.5791477 0,27.06 L0,1.94 C0,1.42085234 0.420852335,1 0.94,1 L6,1 Z M13.5,8 C9.35786438,8 6,11.3578644 6,15.5 C6,19.6421356 9.35786438,23 13.5,23 C17.6421356,23 21,19.6421356 21,15.5 C21,11.3578644 17.6421356,8 13.5,8 Z M13.5,9 C17.0898509,9 20,11.9101491 20,15.5 C20,19.0898509 17.0898509,22 13.5,22 C9.91014913,22 7,19.0898509 7,15.5 C7,11.9101491 9.91014913,9 13.5,9 Z M14.0517578,10 L14,10 L12,11 L12,12 L13,12 L13,18 L12,18 L12,19 L15.0517578,19 L15.0517578,18 L14.0517578,18 L14.0517578,10 Z M19,0 L19,3 C19,3.55228475 18.5522847,4 18,4 L8,4 C7.44771525,4 7,3.55228475 7,3 L7,0 L19,0 Z"
              id="形状"
              :fill="fill"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'ACardRecord',
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
