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
        id="190.状态_提示"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="状态_提示"
          transform="translate(4.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M12,9 C11.2286356,9 10.6033212,9.62531441 10.6033212,10.3966788 L10.6068706,10.4961881 L10.6068706,10.4961881 L11.1965647,18.7519061 C11.2266728,19.1734193 11.5774129,19.5 12,19.5 C12.4225871,19.5 12.7733272,19.1734193 12.8034353,18.7519061 L13.3931294,10.4961881 C13.4480869,9.72678391 12.8689134,9.05850682 12.0995093,9.00354938 L12,9 L12,9 Z M12,4.5 C11.1715729,4.5 10.5,5.17157287 10.5,6 C10.5,6.82842713 11.1715729,7.5 12,7.5 C12.8284271,7.5 13.5,6.82842713 13.5,6 C13.5,5.17157287 12.8284271,4.5 12,4.5 Z"
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
  name: 'Tips',
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
