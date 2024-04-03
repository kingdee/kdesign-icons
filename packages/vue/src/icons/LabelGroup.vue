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
        d="M937.5 93.75L937.5 398.4375L632.976631 398.4375L632.976631 284.179688L518.780366 284.179688L518.780366 715.820313L632.976631 715.820313L632.976631 601.5625L937.5 601.5625L937.5 906.25L632.976631 906.25L632.976631 791.992188L442.649525 791.992188L442.646672 554.386719L270.184439 715.315353L62.5 492.481022L285.214293 284.684647L442.646672 453.585938L442.649525 208.007813L632.976631 208.007813L632.976631 93.75z"
        fill="#666666"
      ></path>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'LabelGroup',
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
