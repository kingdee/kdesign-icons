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
        d="M858.837794 249.650373C908.416116 320.581044 937.5 406.894069 937.5 500C937.5 741.624578 741.624578 937.5 500 937.5C429.187597 937.5 362.304534 920.6765 303.129676 890.808362zM500 62.5C595.705009 62.5 684.232566 93.230318 756.253625 145.361906L185.40828 804.037247C109.316921 725.321163 62.5 618.127922 62.5 500C62.5 258.375422 258.375422 62.5 500 62.5z"
        fill="#666666"
      ></path>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'OthersDetectedIt',
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
