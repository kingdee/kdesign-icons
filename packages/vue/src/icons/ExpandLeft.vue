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
        id="1247-左展开"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(6.000000, 4.000000)"
          fill-rule="nonzero"
        >
          <path
            d="M12,0 L19.7142857,0 L19.7142857,0 L19.7142857,24 L12,24 C5.372583,24 0,18.6274169 0,12 C0,5.372583 5.372583,0 12,0 Z"
            id="矩形"
            :fill="color"
          ></path>
          <g
            id="左翻页备份-3"
            transform="translate(11.464286, 12.000000) rotate(90.000000) translate(-11.464286, -12.000000) translate(6.107143, 8.250000)"
            fill="#FFFFFF"
          >
            <path
              d="M6.65376644,6.77244122 C5.9383451,7.74278026 4.77803348,7.74225888 4.06299655,6.77244122 L0.365127736,1.75695425 C-0.350293623,0.786615213 0.0150827712,0 1.20330644,0 L9.51345653,0 C10.6917912,0 11.0666722,0.787136594 10.3516353,1.75695425 L6.65376644,6.77244122 Z"
              id="Path-Copy-2"
              transform="translate(5.357143, 3.750000) scale(-1, 1) translate(-5.357143, -3.750000) "
              :fill="color"
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
  name: 'ExpandLeft',
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
