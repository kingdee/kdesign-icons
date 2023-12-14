import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Retire = ({
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
          id="701.退休"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M13.4630435,13.8695652 C14.2158315,13.8695652 14.826087,14.4798205 14.826087,15.2326087 L14.826087,20.6369565 C14.826087,21.3897446 14.2158315,22 13.4630435,22 L12.9121109,21.9995217 L12.9130435,25.8978261 C12.9130435,26.6506141 12.3027881,27.2608695 11.55,27.2608695 L10.45,27.2608695 C9.69721186,27.2608695 9.08695653,26.6506141 9.08695653,25.8978261 L9.08604781,21.9995217 L8.53695649,22 C7.78416838,22 7.17391304,21.3897446 7.17391304,20.6369565 L7.17391304,15.2326087 C7.17391304,14.4798205 7.78416838,13.8695652 8.53695649,13.8695652 L13.4630435,13.8695652 Z M11,0 C17.0751323,0 22,4.92486775 22,11 C22,14.3260182 20.5132393,17.4092908 18.0030876,19.4831089 L17.8448748,19.6114011 L16.6536176,18.1145238 C18.8080689,16.3999507 20.0869565,13.8061566 20.0869565,11 C20.0869565,5.98141247 16.0185875,1.91304349 11,1.91304349 C5.9814125,1.91304349 1.91304349,5.98141247 1.91304349,11 C1.91304349,13.6244896 3.03050115,16.0664838 4.95057601,17.7807871 L5.14294315,17.9477819 L5.33987594,18.109341 L4.14725608,19.6051327 C3.98667293,19.4770972 3.82968336,19.3446018 3.67647924,19.2078165 C1.35405025,17.1342787 0,14.1752558 0,11 C0,4.92486775 4.92486775,0 11,0 Z M11,9.08695653 C12.0565447,9.08695653 12.9130435,9.94345526 12.9130435,11 C12.9130435,12.0565447 12.0565447,12.9130435 11,12.9130435 C9.94345526,12.9130435 9.08695653,12.0565447 9.08695653,11 C9.08695653,9.94345526 9.94345526,9.08695653 11,9.08695653 Z M17.4565217,10.0434783 C18.1168622,10.0434783 18.6521739,10.57879 18.6521739,11.2391304 C18.6521739,11.8994709 18.1168622,12.4347826 17.4565217,12.4347826 L14.3478261,12.4347826 L14.3478261,10.0434783 L17.4565217,10.0434783 Z M8.25849723,6.5675897 L9.44213251,7.75122495 L7.75122495,9.44213251 L6.5675897,8.25849723 C6.1006585,7.79156602 6.1006585,7.03452094 6.5675897,6.5675897 C7.03452094,6.1006585 7.79156602,6.1006585 8.25849723,6.5675897 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Retire.displayName = 'Retire';
export default Retire;
