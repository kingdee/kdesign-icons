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
        id="851.多组织企业"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 2.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M21,25.2 L23.8518,25.2 L23.8518,28 L7.77156117e-16,28 L7.77156117e-16,25.2 L2.8,25.2 L2.8,1.4 C2.8,0.62680135 3.42680135,0 4.2,0 L19.6,0 C20.3731986,0 21,0.62680135 21,1.4 L21,25.2 Z M8.4,25.2 L15.4,25.2 L15.4,19.6 L8.4,19.6 L8.4,25.2 L8.4,25.2 Z M7,12.6 L7,15.4 L16.8,15.4 L16.8,12.6 L7,12.6 Z M7,5.6 L7,8.4 L16.8,8.4 L16.8,5.6 L7,5.6 Z"
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
  name: 'MultiOrganizationalEnterprises',
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
