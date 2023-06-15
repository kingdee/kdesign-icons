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
        id="480.母子账户设置"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 7.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M21.5652174,3.9705882 L22.7826087,3.9705882 C23.4549554,3.9705882 24,4.56315259 24,5.29411765 L24,16.6764706 C24,17.4074357 23.4549554,18 22.7826087,18 L4.86956522,18 C4.19721855,18 3.65217392,17.4074357 3.65217392,16.6764706 L3.65217392,15.3529412 L21.5652174,15.3529412 L21.5652174,3.9705882 Z M20.3478261,3.37457143 L20.3478261,12.7058823 C20.3478261,13.4368474 19.8027814,14.0294118 19.1304348,14.0294118 L1.21739131,14.0294118 C0.545044663,14.0294118 0,13.4368474 0,12.7058823 L0,3.37457143 L20.3478261,3.37457143 Z M18.7826087,10.125 L14.6086957,10.125 L13.0434783,11.8125 L17.2173913,11.8125 L18.7826087,10.125 Z M19.1304348,0 C19.4533071,0 19.7629553,0.13944288 19.9912605,0.3876528 C20.2195656,0.635862693 20.3478261,0.972507593 20.3478261,1.32352943 L20.3478261,2.24914286 L0,2.24914286 L0,1.32352943 C0,0.592564306 0.545044663,0 1.21739131,0 L19.1304348,0 Z"
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
  name: 'ParentAndChildAccountSettings',
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
