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
        id="1359-业务对象可扩展定义工具"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 5.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M19.2325293,0.16317922 L19.3776112,0.268751679 L23.6101658,3.8966556 C24.0782501,4.29787069 24.1324582,5.00257705 23.7312432,5.47066132 C23.3701496,5.89193716 22.7632281,5.97797337 22.3042213,5.69848204 L22.1572375,5.59173867 L18.7562633,2.67685005 L15.9672423,5.81190205 L19.3776112,8.73386084 C19.8456955,9.1350759 19.8999038,9.83978226 19.4986886,10.3078665 C19.137595,10.7291424 18.5306736,10.8151786 18.0716667,10.5356873 L17.9246829,10.4289439 L14.4853831,7.47962157 L10.3128465,12.1779072 C11.234982,13.168897 11.8232769,14.4747256 11.8987144,15.9163762 L11.9069667,16.2325596 C11.9069667,19.5205776 9.24150142,22.1860428 5.95348337,22.1860428 C2.66546529,22.1860428 0,19.5205776 0,16.2325596 C0,12.9445415 2.66546529,10.2790762 5.95348337,10.2790762 C6.86590673,10.2790762 7.73038982,10.484333 8.50327738,10.8511912 L17.8168303,0.374678392 C18.1807674,-0.0347507432 18.7795231,-0.113859883 19.2325293,0.16317922 Z M5.95348337,12.5116325 C3.89847206,12.5116325 2.23255627,14.1775483 2.23255627,16.2325596 C2.23255627,18.2875708 3.89847206,19.9534866 5.95348337,19.9534866 C8.00849465,19.9534866 9.67441044,18.2875708 9.67441044,16.2325596 C9.67441044,14.1775483 8.00849465,12.5116325 5.95348337,12.5116325 Z"
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
  name: 'BusinessObjectExtensibleDefinitionTool',
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
