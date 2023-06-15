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
        id="1486-向下"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(8.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M9.2945828,21.1335309 L15.4888936,14.9392201 C15.8183211,14.6210478 16.3419632,14.6255978 16.665812,14.9494467 C16.9896608,15.2732955 16.9942109,15.7969376 16.6760385,16.1263651 L9.0376759,23.7647277 C8.88457444,23.9154915 8.67828492,24 8.46341342,24 C8.24270915,24.0046169 8.02947144,23.9198064 7.87235963,23.7647277 L0.235676146,16.1263651 C-0.0824958099,15.7969375 -0.0779455734,15.2732958 0.24590309,14.9494471 C0.569751754,14.6255984 1.09339352,14.6210482 1.42282108,14.9392201 L7.61545273,21.1335309 L7.61545273,0.85635632 C7.61545273,0.372766863 7.99157786,5.3689215e-16 8.45501778,5.3689215e-16 C8.90502463,5.3689215e-16 9.2945828,0.382841663 9.2945828,0.85635632 L9.2945828,21.1335309 Z"
            id="路径"
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
  name: 'ToDown',
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
