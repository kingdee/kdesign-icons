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
        id="293.税率表"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="税率表"
          transform="translate(4.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M3.78947369,0 L20.2105264,0 C20.9081491,0 21.4736842,0.555588855 21.4736842,1.24094247 L21.4736842,11.1684822 L12,15.359145 L2.52631577,11.1684822 L2.52631577,1.24094247 C2.52631577,0.555588855 3.09185083,0 3.78947369,0 Z M6.31578946,3.72282743 L6.31578946,4.96376987 L17.6842105,4.96376987 L17.6842105,3.72282743 L6.31578946,3.72282743 Z M6.31578946,7.44565481 L6.31578946,8.68659728 L17.6842105,8.68659728 L17.6842105,7.44565481 L6.31578946,7.44565481 L6.31578946,7.44565481 Z M0,11.8315178 C0.626526312,10.1761005 1.008,9.37693356 1.14442104,9.43401693 C1.2808421,9.48985934 1.2808421,10.4478669 1.14442104,12.3043169 L12,16.7952877 L21.559579,12.8404039 L22.7368421,12.3539546 C22.6458947,10.445385 22.6458947,9.47124522 22.7368421,9.43401693 C22.8290526,9.39678866 23.2496843,10.1947147 24,11.8315178 L24,21.7590575 C24,22.0881759 23.8669177,22.4038145 23.6300297,22.6365363 C23.3931415,22.8692581 23.0718524,23 22.7368421,23 L1.2631579,23 C0.928147584,23 0.606858432,22.8692581 0.369970368,22.6365363 C0.133082304,22.4038145 0,22.0881759 0,21.7590575 L0,11.8315178 Z"
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
  name: 'TaxRateTable',
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
