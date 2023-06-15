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
        id="150.闪电"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="闪电"
          transform="translate(7.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M6.37481265,12.8535399 L0.858199351,12.8535399 C0.209725553,12.8535399 -0.203809325,12.1612747 0.10363198,11.5903798 L6.10266088,0.450645273 C6.25213353,0.173086029 6.54195151,0 6.85722825,0 L16.2842737,0 C16.9687589,0 17.3770283,0.762768022 16.9973442,1.33222673 L12.7435757,7.71212394 L17.1412778,7.71212394 C17.904787,7.71212394 18.2871537,8.63512968 17.7472712,9.17494831 L3.17820104,23.7422935 C2.5015657,24.4188487 1.393083,23.6460094 1.79408266,22.7772797 L6.37481265,12.8535399 Z M2.29301036,11.1397346 L7.71423238,11.1397346 C8.33966601,11.1397346 8.75445044,11.7879282 8.49235733,12.3557293 L5.36397235,19.1330943 L15.0722868,9.42592926 L11.1422489,9.42592926 C10.4577636,9.42592926 10.0494943,8.66316121 10.4291783,8.09370253 L14.6829468,1.71380532 L7.36911177,1.71380532 L2.29301036,11.1397346 Z"
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
  name: 'Lighting',
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
