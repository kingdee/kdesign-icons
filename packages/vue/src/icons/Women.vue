<template>
  <icon-wrapper :spin="spin" :rotate="rotate">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      version="1.1"
      :width="size"
      :height="size"
    >
      <path
        d="M500 62.5C672.588984 62.5 812.5 202.411016 812.5 375C812.5 537.030372 689.184228 670.258803 531.284366 685.953609L531.28125 750L687.5 750C704.758897 750 718.75 763.991103 718.75 781.25C718.75 798.508897 704.758897 812.5 687.5 812.5L531.25 812.5L531.25 906.25C531.25 923.508897 517.258897 937.5 500 937.5C482.741103 937.5 468.75 923.508897 468.75 906.25L468.75 812.5L312.5 812.5C295.241102 812.5 281.25 798.508897 281.25 781.25C281.25 763.991103 295.241102 750 312.5 750L468.71875 750L468.746847 685.956709C310.832024 670.276363 187.5 537.04105 187.5 375C187.5 202.411016 327.411016 62.5 500 62.5zM500 125C361.928813 125 250 236.928813 250 375C250 513.071188 361.928813 625 500 625C638.071188 625 750 513.071188 750 375C750 236.928813 638.071188 125 500 125z"
        fill="#666666"
      ></path>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'Women',
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
