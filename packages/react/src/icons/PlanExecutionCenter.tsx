import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PlanExecutionCenter = ({
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
          id="654.计划执行中心"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M3.7888,1.2992 L3.78947369,5.2 L7.57894738,5.2 L7.5776,1.2992 L16.4208,1.2992 L16.4210526,5.2 L20.2105262,5.2 L20.2096,1.2992 L22.3880256,1.3 C23.2782946,1.3 24,2.01714171 24,2.89576686 L24,19.2042331 C24,20.0855509 23.2817277,20.8 22.3880256,20.8 L1.61197435,20.8 C0.721705498,20.8 0,20.0828582 0,19.2042331 L0,2.89576686 C0,2.01444915 0.718272333,1.3 1.61197435,1.3 L3.7888,1.2992 Z M5.97781816,8.23291133 C5.71119555,7.92236288 5.26658957,7.92236288 4.99996695,8.23291133 C4.73334436,8.54345979 4.73334436,9.06104054 4.99996695,9.37158899 L4.99996695,9.37158899 L7.93352059,12.7870094 L4.99996695,16.2026341 C4.73334436,16.5131826 4.73334436,17.0307632 4.99996695,17.3413117 C5.13319017,17.4964838 5.3109973,17.6 5.48880445,17.6 C5.66661161,17.6 5.84441876,17.4964838 5.97781816,17.3411075 L5.97781816,17.3411075 L9.40003305,13.3562462 C9.66665564,13.0456978 9.66665564,12.5283212 9.40003305,12.2177727 L9.40003305,12.2177727 L5.97781816,8.23291133 Z M10.315747,8.02078054 C10.0701825,8.27835784 10.039487,8.68618857 10.2236603,8.9813292 L10.315747,9.10015206 L13.4035848,12.337686 L10.315747,15.5754136 C10.0351019,15.8697875 10.0351019,16.360411 10.315747,16.6547851 C10.4561623,16.8018754 10.6433208,16.9 10.8304793,16.9 C10.9802062,16.9 11.129933,16.8372002 11.2556323,16.7367701 L11.3450263,16.6547851 L14.9474109,12.8774686 C15.228056,12.5830945 15.228056,12.0926646 14.9474109,11.7982906 C14.619933,11.4549104 14.3743246,11.1973753 14.2105856,11.0256852 C13.5737534,10.3579287 12.6185051,9.35629373 11.3448408,8.02078054 C11.0641957,7.72640648 10.596392,7.72640648 10.315747,8.02078054 Z M15.3670683,8.02078054 C15.1230325,8.27835784 15.092528,8.68618857 15.2755549,8.9813292 L15.3670683,9.10015206 L18.4334726,12.337686 L15.3670683,15.5754136 C15.0881702,15.8697875 15.0881702,16.360411 15.3670683,16.6547851 C15.506333,16.8018754 15.6922037,16.9 15.8780742,16.9 C16.0266234,16.9 16.1752904,16.8372002 16.3002131,16.7367701 L16.3890802,16.6547851 L19.9666747,12.8774686 C20.255684,12.6158027 20.2877961,12.1992286 20.0630112,11.9030028 L19.9666747,11.798097 L16.3890802,8.02078054 C16.1103664,7.72640648 15.6457821,7.72640648 15.3670683,8.02078054 Z M6.31578947,0 L6.31578947,3.9 L5.05263158,3.9 L5.05263158,0 L6.31578947,0 Z M18.9473685,0 L18.9473685,3.9 L17.6842106,3.9 L17.6842106,0 L18.9473685,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PlanExecutionCenter.displayName = 'PlanExecutionCenter';
export default PlanExecutionCenter;
