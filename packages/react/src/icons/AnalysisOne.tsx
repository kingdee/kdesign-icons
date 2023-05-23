import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AnalysisOne = ({
  size = '1em',
  color = 'currentColor',
  rotate = 0,
  spin = false,
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="115.分析"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="分析"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M21.4945055,19.25 C21.9314781,19.25 22.2857143,19.6417509 22.2857143,20.125 C22.2857143,20.6082491 21.9314781,21 21.4945055,21 L2.50549451,21 C2.06852196,21 1.71428571,20.6082491 1.71428571,20.125 C1.71428571,19.6417509 2.06852196,19.25 2.50549451,19.25 L21.4945055,19.25 Z M23.1428571,0 C23.616244,0 24,0.391750856 24,0.875 L24,16.625 C24,17.1082491 23.616244,17.5 23.1428571,17.5 L0.857142857,17.5 C0.383755941,17.5 0,17.1082491 0,16.625 L0,0.875 C0,0.391750856 0.383755941,0 0.857142857,0 L23.1428571,0 Z M22.2857143,1.75 L1.71428571,1.75 L1.71428571,15.75 L22.2857143,15.75 L22.2857143,1.75 Z M18.6060915,5.50628156 C18.9150777,5.82170504 18.938846,6.31803217 18.6773961,6.66128697 L18.6060915,6.74371846 L14.3203772,11.1187184 C14.011391,11.4341419 13.525193,11.4584053 13.1889434,11.1915085 L13.1081942,11.1187184 L10.2857143,8.238125 L6.60609153,11.9937184 C6.29710527,12.3091419 5.81090721,12.3334053 5.47465764,12.0665085 L5.39390847,11.9937184 C5.08492221,11.6782949 5.06115404,11.1819678 5.32260395,10.838713 L5.39390847,10.7562816 L9.67962276,6.38128156 C9.98860901,6.06585815 10.474807,6.04159475 10.8110566,6.30849153 L10.8918058,6.38128156 L13.7142857,9.261875 L17.3939085,5.50628156 C17.7286436,5.16457281 18.2713564,5.16457281 18.6060915,5.50628156 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AnalysisOne.displayName = 'AnalysisOne';
export default AnalysisOne;
