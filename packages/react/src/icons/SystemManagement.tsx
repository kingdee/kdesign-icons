import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SystemManagement = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="781.系统管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M7.4317537,14.710518 C7.77693731,17.8005693 10.2265859,20.233691 13.318903,20.5579489 L13.318903,27.9338027 C6.14017022,27.5954608 0.373647158,21.8642429 0.0029421036,14.710518 L7.4317537,14.710518 Z M7.4288116,13.3041925 L-1.08986033e-15,13.3041925 C0.351581381,5.89744667 6.48145424,1.08986033e-15 13.9926447,1.08986033e-15 C21.7289062,1.08986033e-15 28,6.25638331 28,13.9749921 C28,21.4346958 22.1422717,27.5292634 14.7649469,27.9293895 L14.7649469,20.5535358 C17.8391921,20.2109972 20.2661233,17.7846768 20.6094357,14.710518 L27.9352737,14.710518 L27.9352737,13.3041925 L20.6123779,13.3041925 C20.2821906,10.217349 17.8503532,7.77511135 14.7649469,7.4317537 L14.7649469,0.0735525901 L13.318903,0.0735525901 L13.318903,7.4288116 C10.2158946,7.75368487 7.7614433,10.2020062 7.4288116,13.3041925 Z M14.029421,19.1236734 C11.1858829,19.1236734 8.88073973,16.8185303 8.88073973,13.9749921 C8.88073973,11.131454 11.1858829,8.82631081 14.029421,8.82631081 C16.8729592,8.82631081 19.1781023,11.131454 19.1781023,13.9749921 C19.1781023,16.8185303 16.8729592,19.1236734 14.029421,19.1236734 L14.029421,19.1236734 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SystemManagement.displayName = 'SystemManagement';
export default SystemManagement;
