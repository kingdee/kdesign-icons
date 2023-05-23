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
        id="1229-图片预览关闭"
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
            d="M10.7016697,12 L0.268892999,1.56722328 C-0.0896309997,1.20869925 -0.0896309997,0.627416998 0.268892999,0.268892999 C0.627416998,-0.0896309997 1.20869925,-0.0896309997 1.56722325,0.268892999 L12,10.7016697 L22.4327768,0.268892999 C22.7913007,-0.0896309997 23.372583,-0.0896309997 23.7311071,0.268892999 C24.089631,0.627416998 24.089631,1.20869925 23.7311071,1.56722328 L13.2983302,12 L23.7311071,22.4327767 C24.089631,22.7913008 24.089631,23.3725831 23.7311071,23.731107 C23.372583,24.0896309 22.7913007,24.0896309 22.4327768,23.731107 L12,13.2983302 L1.56722325,23.731107 C1.20869925,24.0896309 0.627416998,24.0896309 0.268892999,23.731107 C-0.0896309997,23.3725831 -0.0896309997,22.7913008 0.268892999,22.4327767 L10.7016697,12 Z"
            id="路径"
            :fill="color"
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
  name: 'ImagePreviewClose',
  components: { iconWrapper },
  props: {
    size: {
      type: String || Number,
      default: '1em',
    },
    color: {
      type: String,
      default: 'currentColor',
    },
    rotate: Number,
    spin: Boolean,
  },
});
</script>
