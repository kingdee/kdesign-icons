import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BidEvaluationReport = ({
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
          id="587.评标报告"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M10.8333333,7.5 L14.1907122,5 L17.5,7.5 L17.5,0 L18.8848,0 C19.5007079,0 20,0.499292053 20,1.1152 L20,22.2181333 C20,22.8340413 19.5007079,23.3333333 18.8848,23.3333333 L1.1152,23.3333333 C0.499292053,23.3333333 0,22.8340413 0,22.2181333 L0,1.1152 C0,0.499292053 0.499292053,0 1.1152,0 L10.8333333,0 L10.8333333,7.5 Z M17.5,19.1666667 L2.5,19.1666667 L2.5,20.8333333 L17.5,20.8333333 L17.5,19.1666667 Z M4.993336,10.8333201 C4.0754688,10.8370035 3.33333333,11.5821145 3.33333333,12.4999886 C3.33333333,12.9632014 3.52507496,13.3950399 3.84707741,13.7035998 C3.04672445,14.2566796 2.5,15.3764207 2.5,16.6666667 L2.5,16.6666667 L7.5,16.6666667 C7.5,15.381784 6.94674624,14.2659916 6.14415043,13.7096533 L6.18082024,13.6761145 C6.65695,13.1980805 6.79789725,12.4801418 6.53783917,11.8575779 C6.27778109,11.2350142 5.66802776,10.8306586 4.993336,10.8333201 Z M17.5,15 L10.8333333,15 L10.8333333,16.6666667 L17.5,16.6666667 L17.5,15 Z M17.5,11.6666667 L10.8333333,11.6666667 L10.8333333,13.3333333 L17.5,13.3333333 L17.5,11.6666667 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BidEvaluationReport.displayName = 'BidEvaluationReport';
export default BidEvaluationReport;
