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
        id="1205-复制"
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
            d="M22.2857143,20.5714286 L18.8571428,20.5714286 L18.8571428,18.8571428 L22.2857143,18.8571428 L22.2857143,1.73493977 L5.13647463,1.73493977 L5.13647463,5.14285715 L3.42857142,5.14285715 L3.42857142,1.73493977 C3.42857142,0.629621239 3.89723193,0 5.13647463,0 L21.7693632,0 C23.0086058,0 24,0.991394146 24,2.23063684 L24,18.8571428 C24,20.0963856 23.524957,20.5714286 22.2857143,20.5714286 Z M17.2138368,22.3703704 L1.74464564,22.3703704 L1.74464564,6.88888889 L17.2138368,6.88888889 L17.2138368,22.3703704 Z M17.7953854,5.14285715 L1.16309708,5.14285715 C0.465238851,5.14285715 0,5.72486773 0,6.30687831 L0,22.8359789 C0,23.5343916 0.581548556,24 1.16309708,24 L17.6790756,24 C18.3769339,24 18.8421727,23.4179894 18.8421727,22.8359789 L18.8421727,6.30687831 C18.9584823,5.72486773 18.3769339,5.14285715 17.7953854,5.14285715 Z"
            id="形状"
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
  name: 'CopyOne',
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
