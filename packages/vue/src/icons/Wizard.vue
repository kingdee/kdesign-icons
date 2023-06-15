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
        id="1459-向导"
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
            d="M12,0 C18.6274171,0 24,5.37258298 24,12 C24,18.627417 18.6274171,24 12,24 C5.37258287,24 0,18.627417 0,12 C0,5.37258298 5.37258287,0 12,0 Z M12,1.14285715 C6.00376572,1.14285715 1.14285715,6.00376561 1.14285715,12 C1.14285715,17.9962344 6.00376572,22.8571428 12,22.8571428 C17.9962343,22.8571428 22.8571428,17.9962344 22.8571428,12 C22.8571428,6.00376561 17.9962343,1.14285715 12,1.14285715 Z M17.533584,5.74360959 C17.9803029,5.5947032 18.4052971,6.01969703 18.2563908,6.46641589 L18.2563908,6.46641589 L15.399248,15.0378445 C15.3423703,15.2084759 15.2084754,15.3423704 15.0378446,15.3992475 L15.0378446,15.3992475 L6.466416,18.2563904 C6.01969714,18.4052968 5.59470287,17.980303 5.74360915,17.5335841 L5.74360915,17.5335841 L8.60075199,8.96215554 C8.65762971,8.79152412 8.79152456,8.6576296 8.96215543,8.60075246 L8.96215543,8.60075246 L17.533584,5.74360959 Z M16.8102857,7.18971429 L9.59428572,9.59428572 L7.18971429,16.8102857 L14.4045714,14.4045714 L16.8102857,7.18971429 Z"
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
  name: 'Wizard',
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
