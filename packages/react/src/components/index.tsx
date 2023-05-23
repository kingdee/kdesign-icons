
import React,{useEffect} from "react";
import classNames from 'classnames'
import {updateCSS} from 'rc-util/lib/Dom/dynamicCSS'

export interface SvgIconProps {
  // 图标尺寸大小，默认1em
  size?: number | string

  // 换肤的颜色数组
  color?: string
  rotate?: number
  spin?: boolean
}

interface IconWrapperProps {
    rotate?:number
    spin?:boolean
    children:React.JSX.Element
}

const iconWrapperStyle = 
`
.kdicon {
  display: inline-flex;
}
.kdicon.kdicon-spin {
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

export const IconWrapper = (props:IconWrapperProps) => {
  const iconWrapperClassNames = classNames('kdicon',{
    'kdicon-spin':props.spin
})
    useEffect(()=>{
      updateCSS(iconWrapperStyle,'@kdesign-icons',{
        prepend: true,
      })
    },[])

  return <span className={iconWrapperClassNames}>{props.children}</span>;
};
