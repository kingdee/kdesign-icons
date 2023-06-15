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
        id="743.收费基础资料"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(2.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M14.9333333,-5.96855898e-16 L28,4.97777776 L28,7.77777776 L24.8888889,7.77777776 L24.8888889,21.7777778 L26.4444444,21.7777778 L26.4444444,23.3333333 L28,23.1777778 L28,24.8888889 L0,24.8888889 L0,23.1777778 L1.55555557,23.1777778 L1.55555557,21.7777778 L3.11111111,21.7777778 L3.11111111,7.77777776 L0,7.77777776 L0,4.97777776 L12.9111111,-5.96855898e-16 L14.9333333,-5.96855898e-16 Z M17.5777778,9.33333332 L14.1555556,13.0666666 L10.7333333,9.33333332 L9.33333332,10.2666666 L13.3777778,14.4666666 L13.6888889,14.6222222 L9.33333332,14.6222222 L9.33333332,16.0222222 L13.3777778,16.0222222 L13.3777778,17.4222222 L9.33333332,17.4222222 L9.33333332,18.8222222 L13.3777778,18.8222222 L13.3777778,21.6222222 L14.6222222,21.6222222 L14.6222222,18.8222222 L18.8222222,18.8222222 L18.8222222,17.4222222 L14.6222222,17.4222222 L14.6222222,16.0222222 L18.8222222,16.0222222 L18.8222222,14.7777778 L14.4666667,14.7777778 L14.7777778,14.6222222 L18.8222222,10.4222222 L17.5777778,9.33333332 Z"
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
  name: 'BasicInformationOnCharges',
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
