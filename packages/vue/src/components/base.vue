<template>
    <span :class="iconWrapperClasses" :style="iconStyle">
        <slot></slot>
    </span>
</template>
<script lang="ts">
import { defineComponent, computed,onMounted } from "vue";
import {updateCSS} from '../util'

const iconWrapperProps = {
    spin: {
        type: Boolean,
        default: false,
    },
    rotate: {
        type: Number
    },
};
const insertStyle = 
`
.kd-svg-icon {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.kd-svg-icon svg {
    display:inline-block;
}
.kd-svg-icon > * {
    line-height:1;
}
.kd-svg-icon.kd-svg-spin {
    animation: loadingCircle 2s infinite linear;
    -webkit-animation: loadingCircle 2s infinite linear;
}
@-webkit-keyframes loadingCircle {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes loadingCircle {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
`
export default defineComponent({
    name: "iconWrapper",
    props: iconWrapperProps,
    setup(props) {
        const iconWrapperClasses = computed(() => [
            "kd-svg-icon",
            props.spin && "kd-svg-spin",
        ]);

        const iconStyle = computed(() => {
            return {
                transform: `rotate(${props.rotate}deg)`,
            };
        });

        onMounted(()=>{
            updateCSS(insertStyle,'@kdesign-icons-vue-style')
        })

        return {
            iconWrapperClasses,
            iconStyle,
        };
    },
});
</script>