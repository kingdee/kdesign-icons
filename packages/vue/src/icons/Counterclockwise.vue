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
        id="1172-逆时针"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 6.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M13.6551724,0 C19.3684629,0 24,4.63153708 24,10.3448276 C24,16.0581181 19.3684629,20.6896552 13.6551724,20.6896552 C13.1981092,20.6896552 12.8275862,20.3191322 12.8275862,19.862069 C12.8275862,19.4050058 13.1981092,19.0344828 13.6551724,19.0344828 C18.4543365,19.0344828 22.3448276,15.1439916 22.3448276,10.3448276 C22.3448276,5.54566357 18.4543365,1.65517241 13.6551724,1.65517241 C9.04331602,1.65517241 5.27058715,5.24790414 4.98311889,9.78723435 L6.77102867,7.73292913 C7.07088913,7.38797913 7.5936113,7.35142683 7.93856131,7.65128729 C8.2569767,7.92808156 8.31261534,8.39476982 8.08344263,8.73624274 L8.02020315,8.81881996 L4.76253073,12.5663434 C4.59266192,12.761755 4.35127364,12.8581976 4.11119936,12.8505779 C3.87138545,12.8579755 3.63035715,12.7615302 3.46068384,12.5663434 L0.203011416,8.81881996 C-0.0968490466,8.47386992 -0.0602967486,7.95114775 0.284653259,7.65128729 C0.629603266,7.35142683 1.15232541,7.38797913 1.4521859,7.73292913 L3.32052932,9.8816367 C3.56280321,4.38329568 8.09710103,0 13.6551724,0 Z"
            id="路径"
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
  name: 'Counterclockwise',
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
