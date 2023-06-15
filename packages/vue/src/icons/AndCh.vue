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
        id="1123-并且"
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
            d="M12,24 C5.3723077,24 0,18.6276923 0,12 C0,5.3723077 5.3723077,0 12,0 C18.6276923,0 24,5.3723077 24,12 C24,18.6276923 18.6276923,24 12,24 Z M6.26215385,16.5507692 L6.26215385,17.4683077 L17.7507692,17.4683077 L17.7507692,16.5507692 L15.7735385,16.5507692 L15.7735385,6.57415385 L8.2523077,6.57415385 L8.2523077,16.5507692 L6.26215385,16.5507692 Z M9.1956923,10.6707692 L14.8301539,10.6707692 L14.8301539,13.1390769 L9.1956923,13.1390769 L9.1956923,10.6707692 Z M14.8301539,9.77907691 L9.1956923,9.77907691 L9.1956923,7.44 L14.8301539,7.44 L14.8301539,9.77907691 Z M9.1956923,14.0178461 L14.8301539,14.0178461 L14.8301539,16.5507692 L9.1956923,16.5507692 L9.1956923,14.0178461 L9.1956923,14.0178461 Z"
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
  name: 'AndCh',
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
