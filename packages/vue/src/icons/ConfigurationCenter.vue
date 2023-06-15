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
        id="635.配置中心"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(5.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M12.848,0.498524968 L20.1813333,4.76883665 C21.306736,5.42393227 21.999083,6.6255993 22,7.92539255 L22,16.5172231 C21.9997345,17.8176694 21.307301,19.020183 20.1813333,19.6756079 L12.848,23.9459196 C11.7060986,24.6106195 10.2939014,24.6106195 9.152,23.9459196 L1.81866664,19.6756079 C0.693828593,19.0208417 0.00156811111,17.8200208 0,16.5208808 L0,7.92722138 C0.000265491111,6.62677508 0.692698942,5.42426156 1.81866664,4.76883665 L9.152,0.498524968 C10.2939014,-0.166174989 11.7060986,-0.166174989 12.848,0.498524968 Z M11,8.55555556 C8.97495593,8.55555556 7.33333333,10.1971782 7.33333333,12.2222222 C7.33333333,14.2472663 8.97495593,15.8888889 11,15.8888889 C13.0250441,15.8888889 14.6666667,14.2472663 14.6666667,12.2222222 C14.6666667,10.1971782 13.0250441,8.55555556 11,8.55555556 L11,8.55555556 Z"
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
  name: 'ConfigurationCenter',
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
