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
        id="399.渠道云-权益中心"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 6.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M18.1431088,0 C18.5047834,0 18.8441942,0.1746668 19.0544133,0.4689736 L23.791392,7.10074378 C24.0989398,7.53131072 24.0631733,8.11837624 23.7056304,8.50842315 L12.8255428,20.3776095 C12.4076027,20.8335442 11.6991871,20.864345 11.2432524,20.4464048 C11.2193349,20.4244804 11.1963814,20.401527 11.1744572,20.3776095 L0.294369624,8.50842315 C-0.0631733485,8.11837624 -0.0989398107,7.53131072 0.208608034,7.10074378 L4.94558673,0.4689736 C5.15580585,0.1746668 5.49521652,0 5.85689122,0 L18.1431088,0 Z M7.68523292,5.12180415 C7.46655779,4.90312902 7.11201537,4.90312902 6.89334024,5.12180415 C6.67466511,5.34047925 6.67466511,5.69502167 6.89334024,5.9136968 L6.89334024,5.9136968 L11.6446963,10.6650528 C11.6596217,10.6799783 11.6751801,10.693885 11.6912851,10.7067729 L11.6473243,10.6672887 C11.8659995,10.8859639 12.2205419,10.8859639 12.439217,10.6672887 L17.1905731,5.91593268 C17.4092482,5.69725755 17.4092482,5.34271513 17.1905731,5.12404002 C16.971898,4.90536489 16.6173555,4.90536489 16.3986804,5.12404002 L12.0423423,9.47887894 L7.68523292,5.12180415 Z"
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
  name: 'ChannelCloudBenefitCenter',
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
