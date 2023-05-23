<template>
    <span :class="iconWrapperClasses" :style="iconStyle">
        <slot></slot>
    </span>
</template>
<script lang="ts">
import { defineComponent, computed,onMounted } from "vue";
import {updateCSS} from 'rc-util/lib/Dom/dynamicCSS'

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
.kdicon {
    display: inline-flex;
}
.kdicon,
.kdicon-spin {
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
            "kdicon",
            props.spin && "kdicon-spin",
        ]);

        const iconStyle = computed(() => {
            return {
                transform: `rotate(${props.rotate}deg)`,
            };
        });

        onMounted(()=>{
            updateCSS(insertStyle,'@kdesign-icons',{
                prepend:true
            })
        })

        return {
            iconWrapperClasses,
            iconStyle,
        };
    },
});
</script>