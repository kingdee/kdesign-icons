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
        d="M500 62.5C741.624578 62.5 937.5 258.375422 937.5 500C937.5 741.624578 741.624578 937.5 500 937.5C258.375422 937.5 62.5 741.624578 62.5 500C62.5 258.375422 258.375422 62.5 500 62.5zM500 125C292.893219 125 125 292.893219 125 500C125 707.106781 292.893219 875 500 875C707.106781 875 875 707.106781 875 500C875 292.893219 707.106781 125 500 125zM668.453803 373.356872C680.719978 363.643575 698.590147 364.453019 709.922325 375.785197C722.126209 387.989081 722.126209 407.775484 709.922325 419.979369L466.854369 663.047325L464.128719 665.47565C451.862544 675.188944 433.992375 674.379503 422.660197 663.047325L290.077674 530.464803L287.64935 527.739153C277.936055 515.472978 278.745496 497.602809 290.077674 486.270631L292.803325 483.842306C305.069502 474.129013 322.939669 474.938453 334.271847 486.270631L444.757281 596.756066L665.728153 375.785197z"
        fill="#666666"
      ></path>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'CompletedOne',
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
