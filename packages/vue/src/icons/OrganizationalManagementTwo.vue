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
        id="1733.组织管理"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="Group-3"
          transform="translate(2.000000, 2.000000)"
          fill="#333333"
        >
          <rect
            id="Rectangle-63-Copy-6"
            x="8.5"
            y="0"
            width="11"
            height="11"
            rx="1"
          ></rect>
          <rect
            id="Rectangle-63-Copy-9"
            x="0"
            y="17"
            width="11"
            height="11"
            rx="1"
          ></rect>
          <path
            d="M24.0444288,16 C24.0444288,17.2216507 25.0602962,18.212104 26.3132934,18.212104 C26.723378,18.212104 27.1078984,18.1060454 27.4400564,17.9203999 L29,20.5796001 C28.3175247,20.961033 27.8577221,21.6781748 27.8577221,22.5 C27.8577221,23.3218252 28.3175247,24.038967 29,24.4203999 L27.4400564,27.0796001 C27.1078984,26.8939546 26.723378,26.787896 26.3132934,26.787896 C25.0602962,26.787896 24.0446051,27.7781774 24.0446051,29 L20.9553949,29 C20.9553949,27.7781774 19.9397038,26.787896 18.6867066,26.787896 C18.276622,26.787896 17.8919252,26.8939546 17.5601199,27.0796001 L16,24.4203999 C16.6824753,24.038967 17.1421016,23.3218252 17.1421016,22.5 C17.1421016,21.6781748 16.6824753,20.961033 16,20.5796001 L17.5601199,17.9203999 C17.8919252,18.1060454 18.276622,18.212104 18.6867066,18.212104 C19.9397038,18.212104 20.9555712,17.2216507 20.9555712,16 Z M22.5,20.6428571 C21.4743283,20.6428571 20.6428571,21.4743283 20.6428571,22.5 C20.6428571,23.5256717 21.4743283,24.3571429 22.5,24.3571429 C23.5256717,24.3571429 24.3571429,23.5256717 24.3571429,22.5 C24.3571429,21.4743283 23.5256717,20.6428571 22.5,20.6428571 Z"
            id="Combined-Shape-Copy-5"
            transform="translate(22.500000, 22.500000) rotate(-180.000000) translate(-22.500000, -22.500000) "
            :fill="fill"
          ></path>
          <rect
            id="Combined-Shape"
            fill-opacity="0.7"
            x="10"
            y="5"
            width="8"
            height="1"
          ></rect>
          <path
            d="M6,14 L6,18 L5,18 L5,14 L6,14 Z M23,14 L23,16 L22,16 L22,14 L23,14 Z M14.5,7 L14.5,13 L23,13 L23,14 L5,14 L5,13 L13.5,12.999 L13.5,7 L14.5,7 Z"
            id="形状结合"
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
  name: 'OrganizationalManagementTwo',
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
