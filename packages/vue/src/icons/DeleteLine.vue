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
        id="210.删除行"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="删除行"
          transform="translate(4.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M18.6,10.8 L5.4,10.8 C5.10544814,10.8 4.86046995,11.0122502 4.80966681,11.2921493 L4.80000001,11.4 L4.80000001,12.6 C4.80000001,12.8945519 5.01225019,13.1395301 5.29214924,13.1903331 L5.4,13.2 L18.6,13.2 C18.8945519,13.2 19.1395301,12.9877498 19.1903332,12.7078507 L19.2,12.6 L19.2,11.4 C19.2,11.1054481 18.9877498,10.8604699 18.7078507,10.8096668 L18.6,10.8 Z"
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
  name: 'DeleteLine',
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
