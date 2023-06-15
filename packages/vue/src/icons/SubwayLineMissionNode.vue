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
        id="674.地铁线任务节点"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 8.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M12,0 C15.6283373,0 18.6549012,2.57649804 19.3499155,5.99971805 L22.5,6 C23.3284271,6 24,6.67157287 24,7.5 C24,8.32842713 23.3284271,9 22.5,9 L19.3496113,9.0017796 C18.6540183,12.4242534 15.6278081,15 12,15 C8.3721919,15 5.34598164,12.4242534 4.65038863,9.0017796 L1.5,9 C0.671572872,9 0,8.32842713 0,7.5 C0,6.67157287 0.671572872,6 1.5,6 L4.65008443,5.99971805 C5.34509885,2.57649804 8.37166274,0 12,0 Z M12,4.5 C10.3431457,4.5 9,5.84314574 9,7.5 C9,9.15685426 10.3431457,10.5 12,10.5 C13.6568543,10.5 15,9.15685426 15,7.5 C15,5.84314574 13.6568543,4.5 12,4.5 Z"
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
  name: 'SubwayLineMissionNode',
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
