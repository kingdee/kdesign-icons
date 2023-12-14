import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CriptBusinessCloud = ({
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
          id="900.脚本_业务云"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M28,13.8593829 C28,13.4853829 28,13.1113829 27.906,12.7373829 L27.906,12.6433829 C27.812,12.2693829 27.72,11.9893829 27.626,11.6153829 C27.4140394,10.9276209 27.0635082,10.2905391 26.596,9.74338288 C26.128,9.18338288 25.658,8.62338288 25.096,8.24738288 L25.004,8.15338289 C24.724,7.96738288 24.442,7.7793829 24.16,7.68538288 C24.16,7.68538288 24.066,7.68538288 24.066,7.59338289 C23.786,7.40538288 23.412,7.31338289 23.13,7.2193829 C22.1042048,2.78567224 18.0264337,-0.258916965 13.484,0.0173828887 C8.89600001,0.297382889 5.15,3.75738289 4.68399999,8.24738288 C1.92384195,8.97628201 0.000689084326,11.4726034 -6.98330283e-16,14.3273829 C-6.98330283e-16,17.5993829 2.52799999,20.3133829 5.80599999,20.6873829 L20.976,20.6873829 C24.816,20.7793829 28,17.6933829 28,13.8593829 C28,13.9533829 28,13.8593829 28,13.8593829"
              id="路径"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CriptBusinessCloud.displayName = 'CriptBusinessCloud';
export default CriptBusinessCloud;
