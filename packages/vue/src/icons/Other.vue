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
        id="425.其他"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M12,-5.58099022e-16 C18.6274169,-5.58099022e-16 24,5.37258301 24,12 C24,18.6274169 18.6274169,24 12,24 C5.37258301,24 -5.58099022e-16,18.6274169 -5.58099022e-16,12 C-5.58099022e-16,5.37258301 5.37258301,-5.58099022e-16 12,-5.58099022e-16 Z M6.54545455,10.9090909 C5.94296208,10.9090909 5.45454545,11.3975076 5.45454545,12 C5.45454545,12.6024924 5.94296208,13.0909091 6.54545455,13.0909091 C7.14794699,13.0909091 7.63636362,12.6024924 7.63636362,12 C7.63636362,11.3975076 7.14794699,10.9090909 6.54545455,10.9090909 Z M12,10.9090909 C11.3975076,10.9090909 10.9090909,11.3975076 10.9090909,12 C10.9090909,12.6024924 11.3975076,13.0909091 12,13.0909091 C12.6024924,13.0909091 13.0909091,12.6024924 13.0909091,12 C13.0909091,11.3975076 12.6024924,10.9090909 12,10.9090909 Z M17.4545454,10.9090909 C16.8520531,10.9090909 16.3636364,11.3975076 16.3636364,12 C16.3636364,12.6024924 16.8520531,13.0909091 17.4545454,13.0909091 C18.0570379,13.0909091 18.5454546,12.6024924 18.5454546,12 C18.5454546,11.3975076 18.0570379,10.9090909 17.4545454,10.9090909 Z"
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
  name: 'Other',
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
