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
        id="107.地址定位"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="地址定位"
          transform="translate(6.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M10.5,13.7142857 C8.56700337,13.7142857 7,12.179262 7,10.2857143 C7,8.39216657 8.56700337,6.85714286 10.5,6.85714286 C12.4329966,6.85714286 14,8.39216657 14,10.2857143 C14,12.179262 12.4329966,13.7142857 10.5,13.7142857 Z M10.5,12 C11.4664983,12 12.25,11.2324882 12.25,10.2857143 C12.25,9.33894043 11.4664983,8.57142858 10.5,8.57142858 C9.53350168,8.57142858 8.75,9.33894043 8.75,10.2857143 C8.75,11.2324882 9.53350168,12 10.5,12 Z M10.9697661,23.8659956 C10.6831455,24.0446681 10.3168545,24.0446681 10.0302339,23.8659956 C3.38616314,19.7242372 0,15.2009765 0,10.2857143 C0,4.60507115 4.70101013,0 10.5,0 C16.2989899,0 21,4.60507115 21,10.2857143 C21,15.2009765 17.6138369,19.7242372 10.9697661,23.8659956 Z M1.75,10.2857143 C1.75,14.4049334 4.62711914,18.353807 10.5,22.1226226 C16.3728808,18.353807 19.25,14.4049334 19.25,10.2857143 C19.25,5.55184502 15.3324916,1.71428572 10.5,1.71428572 C5.66750845,1.71428572 1.75,5.55184502 1.75,10.2857143 Z"
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
  name: 'Location',
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
