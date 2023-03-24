<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>298.分布式事务</title>
    <g
      id="298.分布式事务"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="分布式事务"
        transform="translate(4.000000, 4.000000)"
        fill="#000000"
        fill-rule="nonzero"
      >
        <path
          d="M12.0003116,0 L17.2531747,3.05605277 L17.2531747,9.16815827 L15.904,9.952 L17.364,12.5786667 L18.7471369,11.775789 L24,14.8318417 L24,20.9439472 L18.7471369,24 L13.4942737,20.9439472 L13.4933333,19.0586667 L10.5053333,19.0586667 L10.5063495,20.9439472 L5.25286309,24 L0,20.9439472 L0,14.8318417 L5.25286309,11.775789 L5.2534864,11.775789 L7.068,12.8306667 L8.73733333,10.3266667 L6.74744853,9.16815827 L6.74744853,3.05605277 L12.0003116,0 Z M14.684,10.6626667 L12.0003116,12.224211 L9.96,11.0373333 L8.29066667,13.5413333 L10.5063495,14.8318417 L10.5053333,17.6466667 L13.4933333,17.6466667 L13.4942737,14.8318417 L16.144,13.2893333 L14.684,10.6626667 Z"
          id="形状"
          :fill="color"
        ></path>
      </g>
    </g>
  </svg>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'DistributedTransaction',
  props: {
    size: Number,
    color: String,
  },
});
</script>
