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
        id="1735.行政组织"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <path
          d="M12,2 C15.8659932,2 19,5.13400675 19,9 C19,9.41466576 18.9639443,9.82091026 18.8947969,10.2157694 L24.1855644,11.3725329 C24.6547976,9.99270437 25.9614695,9 27.5,9 C29.4329966,9 31,10.5670034 31,12.5 C31,14.4329966 29.4329966,16 27.5,16 C25.5670034,16 24,14.4329966 24,12.5 C24,12.4519255 24.0009693,12.4040773 24.0028893,12.356474 L18.6519769,11.1858012 C17.9688428,13.2660018 16.3371435,14.9160138 14.2684608,15.6242557 L16.9511282,22.1389285 C17.2854042,22.0483384 17.6370571,22 18,22 C20.209139,22 22,23.790861 22,26 C22,28.209139 20.209139,30 18,30 C15.790861,30 14,28.209139 14,26 C14,24.508872 14.8159164,23.2083115 16.0256502,22.5204174 L13.2919862,15.8810132 C12.8732494,15.9591461 12.4413957,16 12,16 C10.6630946,16 9.41372424,15.6252177 8.35122245,14.9749864 L5.84281464,19.632543 C6.54707771,20.181522 7,21.0378682 7,22 C7,23.6568542 5.65685425,25 4,25 C2.34314575,25 1,23.6568542 1,22 C1,20.3431458 2.34314575,19 4,19 C4.33654852,19 4.6601535,19.0554179 4.96218734,19.157626 L7.53018813,14.3873313 C5.98433039,13.1033256 5,11.1666142 5,9 C5,5.13400675 8.13400675,2 12,2 Z"
          id="形状结合"
          :fill="fill"
          fill-rule="nonzero"
        ></path>
      </g>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'AdministrativeOrganization',
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
