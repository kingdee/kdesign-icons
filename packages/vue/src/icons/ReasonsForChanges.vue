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
        id="1744.变动原因"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <path
          d="M26.9993619,2.0006387 C27.5516461,1.99964746 27.9996473,2.44707666 28,2.9993613 L27.9993617,30 C26.2714969,28.6487505 25.2791371,27.9731257 25.022282,27.9731257 C24.765427,27.9731257 23.7556477,28.6487505 21.9929441,30 L19.0184323,27.9731257 L15.9460442,30 L12.8889071,27.9731257 L9.99547626,30 C8.63670492,28.6487505 7.62982072,27.9731257 6.97482368,27.9731257 C6.31982664,27.9731257 5.32800598,28.6487505 3.99936171,30 L3.99936171,3.01532875 C4.00000061,2.46329341 4.44732669,2.01568154 4.99936151,2.01469006 L26.9993619,2.0006387 Z M21.9993617,15 L16.9993617,15 C16.447077,15 15.9993617,15.4477153 15.9993617,16 C15.9993617,16.5522847 16.447077,17 16.9993617,17 L21.9993617,17 C22.5516465,17 22.9993617,16.5522847 22.9993617,16 C22.9993617,15.4477153 22.5516465,15 21.9993617,15 Z M21.9993617,10 L9.99936171,10 C9.44707696,10 8.99936171,10.4477153 8.99936171,11 C8.99936171,11.5522847 9.44707696,12 9.99936171,12 L21.9993617,12 C22.5516465,12 22.9993617,11.5522847 22.9993617,11 C22.9993617,10.4477153 22.5516465,10 21.9993617,10 Z"
          id="Combined-Shape"
          :fill="fill"
          transform="translate(15.999681, 16.000319) scale(-1, 1) translate(-15.999681, -16.000319) "
        ></path>
      </g>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'ReasonsForChanges',
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
