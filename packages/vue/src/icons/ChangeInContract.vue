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
        id="612.合同变更"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 3.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M19.7037538,2.88894845 C20.5171128,2.88894845 21.1764706,3.54830624 21.1764706,4.36166525 L21.1764706,24.5272832 C21.1764706,25.3406422 20.5171128,26 19.7037538,26 L1.4727168,26 C0.659357792,26 0,25.3406422 0,24.5272832 L0,4.36166525 C0,3.54830624 0.659357792,2.88894845 1.4727168,2.88894845 L19.7037538,2.88894845 Z M21.1764706,0 C22.7358628,0 24,1.29339187 24,2.88887158 L24,2.88887158 L24,23.1109728 L22.5882352,23.1109728 L22.5882352,2.8890273 C22.5882352,2.09128746 21.9561668,1.44459149 21.1764706,1.44459149 L21.1764706,1.44459149 L2.82352941,1.44459149 L2.82352941,0 L21.1764706,0 Z M17.4807692,15.2941176 L4.5,15.2941176 L4.5,16.4548443 L8.65384618,19.882353 L8.65384618,16.4548443 L17.4807692,16.4548443 C17.7675324,16.4548443 18,16.1950068 18,15.874481 C18,15.5539552 17.7675324,15.2941176 17.4807692,15.2941176 Z M13.802013,9.17647059 L13.802013,12.6030459 L5.0167785,12.6030459 C4.73136963,12.6030459 4.5,12.8630923 4.5,13.1838759 C4.5,13.5046594 4.73136963,13.7647059 5.0167785,13.7647059 L5.0167785,13.7647059 L18,13.7647059 L17.9455406,12.8553156 L13.802013,9.17647059 Z"
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
  name: 'ChangeInContract',
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
