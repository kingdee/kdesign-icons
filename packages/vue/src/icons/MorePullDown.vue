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
        id="973.更多下拉"
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
            d="M7.28653447,9.00009996 L14.1636923,17.1941538 L21.012133,9.0334003 C21.3944427,8.57778145 22.0737179,8.51835253 22.5293367,8.90066217 C22.9849555,9.28297181 23.0443845,9.96224705 22.6620748,10.4178659 L15.0475139,19.4925463 C14.7643216,19.8300418 14.3181852,19.950149 13.9207074,19.8343553 C13.6685675,19.7960793 13.4280654,19.6700812 13.2511535,19.4592459 L5.6365926,10.3845656 C5.25428296,9.92894671 5.31371185,9.24967147 5.76933074,8.86736183 C6.22494959,8.48505219 6.90422486,8.54448108 7.28653447,9.00009996 Z M25.8461538,-2.14255963e-16 L2.15384614,-2.14255963e-16 C0.964309777,-2.14255963e-16 -5.35639908e-16,0.964309777 -5.35639908e-16,2.15384617 L-5.35639908e-16,25.8461538 C-5.35639908e-16,27.0356901 0.964309777,28 2.15384614,28 L25.8461538,28 C27.0356901,28 28,27.0356901 28,25.8461538 L28,2.15384617 C28,0.964309777 27.0356901,-2.14255963e-16 25.8461538,-2.14255963e-16 Z M2.15384614,2.15384617 L25.8461538,2.15384617 L25.8461538,25.8461538 L2.15384614,25.8461538 L2.15384614,2.15384617 Z"
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
  name: 'MorePullDown',
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
