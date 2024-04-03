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
        id="1950出差申请"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组-15"
          transform="translate(2.000000, 2.000000)"
          fill="#999999"
          fill-rule="nonzero"
        >
          <path
            d="M22,16 C25.3137085,16 28,18.6862915 28,22 C28,25.3137085 25.3137085,28 22,28 C18.6862915,28 16,25.3137085 16,22 C16,18.6862915 18.6862915,16 22,16 Z M12,13 L12,14 L17,14 L17,13 L25,13 C25.5522847,13 26,13.4477153 26,14 L26.0013298,16.255617 C24.8672447,15.4641776 23.4878296,15 22,15 C18.1340068,15 15,18.1340068 15,22 C15,23.4878296 15.4641776,24.8672447 16.255617,26.0013298 L3,26 C2.44771525,26 2,25.5522847 2,25 L2,14 C2,13.4477153 2.44771525,13 3,13 L12,13 Z M22,18 C21.4477153,18 21,18.4477153 21,19 L21,21 L19,21 C18.4477153,21 18,21.4477153 18,22 C18,22.5522847 18.4477153,23 19,23 L21,23 L21,25 C21,25.5522847 21.4477153,26 22,26 C22.5522847,26 23,25.5522847 23,25 L23,23 L25,23 C25.5522847,23 26,22.5522847 26,22 C26,21.4477153 25.5522847,21 25,21 L23,21 L23,19 C23,18.4477153 22.5522847,18 22,18 Z M16,10 L16,13 L13,13 L13,10 L16,10 Z M19,0 C19.5522847,0 20,0.44771525 20,1 L20,4 L27,4 C27.5522847,4 28,4.44771525 28,5 L28,10 C28,11.1045695 27.1045695,12 26,12 L17,12 L17,9 L12,9 L12,12 L2,12 C0.8954305,12 0,11.1045695 0,10 L0,5 C0,4.44771525 0.44771525,4 1,4 L9,4 L9,1 C9,0.44771525 9.44771525,0 10,0 L19,0 Z M18,2 L11,2 L11,4 L18,4 L18,2 Z"
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
  name: 'BusinessTripApplication',
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
