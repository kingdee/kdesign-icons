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
        id="1215-删除"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M23.1381215,20.2209945 L14.9171271,11.7348066 L23.1381215,3.51381215 C23.9337017,2.71823204 23.9337017,1.39226519 23.1381215,0.596685083 C22.3425414,-0.198895028 21.0165746,-0.198895028 20.2209945,0.596685083 L12.2651934,9.08287293 L3.77900552,0.861878453 C2.98342541,0.0662983425 1.65745856,0.0662983425 0.596685083,0.861878453 C-0.198895028,1.65745856 -0.198895028,2.98342541 0.596685083,4.0441989 L8.81767956,12.2651934 L0.596685083,20.4861878 C-0.198895028,21.281768 -0.198895028,22.6077348 0.596685083,23.4033149 C1.39226519,24.198895 2.71823204,24.198895 3.51381215,23.4033149 L11.7348066,15.1823204 L19.9558011,23.4033149 C20.7513812,24.198895 22.0773481,24.198895 23.1381215,23.4033149 C24.198895,22.3425414 24.198895,21.0165746 23.1381215,20.2209945 Z"
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
  name: 'DeleteTwo',
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
