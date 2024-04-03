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
        id="1879.版本发布管理"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(1.000000, 4.000000)"
          fill="#333333"
          fill-rule="nonzero"
        >
          <path
            d="M17.9781931,0 C12.7383177,0 8.40186915,3.76923076 7.22741433,8.88461538 L6.86604361,8.88461538 C3.07165109,8.88461538 0,12.1153846 0,16.0641026 C0,17.948718 0.722741429,19.8333333 1.98753893,21.1794872 C3.34267913,22.525641 5.14953271,23.3333333 6.9563863,23.3333333 C8.76323988,23.3333333 10.4797508,22.525641 11.7445483,21.1794872 C12.8286604,20.0128205 13.4610592,18.4871795 13.5514019,16.8717949 L11.1121495,16.6923077 C10.5700935,16.6025641 10.3894081,16.1538461 10.7507788,15.7051282 L14.9065421,10.2307692 C15.2679128,9.78205129 15.7196262,9.78205129 15.9003115,10.3205128 L18.2492212,16.4230769 C18.4299065,16.9615385 18.1588785,17.3205128 17.6168224,17.3205128 L15.8099688,17.1410256 C15.6292835,19.2051282 14.7258567,21 13.5514019,22.4358974 C14.9065421,23.0641026 16.4423676,23.4230769 17.9781931,23.4230769 C24.0311526,23.3333333 29,18.1282051 29,11.6666667 C29,5.20512819 24.0311526,0 17.9781931,0 Z"
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
  name: 'VersionReleaseManagement',
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
