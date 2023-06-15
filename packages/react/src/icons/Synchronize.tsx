import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Synchronize = ({
  size = '1em',
  fill = 'currentColor',
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
          id="300.基础资料同步"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="基础资料同步"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M8.57142859,0 C8.79875699,0 9.01677464,0.0921872437 9.17752011,0.256281559 L12,2.625 L22.6666667,2.625 C23.4030463,2.625 24,3.21262628 24,3.9375 L24,20.125 C24,20.6082492 23.6162441,21 23.1428572,21 L0.857142853,21 C0.38375592,21 0,20.6082492 0,20.125 L0,0.874999991 C0,0.391750852 0.38375592,0 0.857142853,0 L8.57142859,0 Z M17.3333333,12.2897727 L17.3233169,12.3103547 C17.1851051,12.5860078 15.5895915,15.5138843 10.8709286,13.9918964 L10.8709286,13.9918964 L11.253571,13.180054 C11.253571,13.180054 11.589446,12.3799774 10.4245125,12.5721527 L10.4245125,12.5721527 L7.15504592,13.3330099 C7.15504592,13.3330099 6.41101907,13.5291071 6.7596488,14.1017108 L6.7596488,14.1017108 L8.63034491,16.890213 C8.63034491,16.890213 9.19155373,17.3451584 9.55293821,16.7764766 L9.55293821,16.7764766 L9.92707741,15.9646342 C9.92707741,15.9646342 16.0493556,18.004045 17.3333333,12.2897727 L17.3333333,12.2897727 Z M15.4651784,6.75153898 C15.4651784,6.75153898 14.9089017,6.27072309 14.5394663,6.84272817 L14.5394663,6.84272817 L14.1445523,7.6717211 C14.1403059,7.6717211 8.10194512,5.43344025 6.66666667,11.2902751 L6.668,11.284875 L6.69061467,11.2440664 C6.90063845,10.8560648 8.52407037,8.18928946 12.8155042,9.56789652 L13.150898,9.68202889 L12.7517377,10.5110218 C12.7517377,10.5110218 12.3907949,11.3234349 13.5585511,11.1534913 L13.5585511,11.1534913 L16.8325147,10.4447024 C16.8325147,10.4447024 17.5798785,10.258179 17.2486604,9.66130407 L17.2486604,9.66130407 L15.4651784,6.75153898 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Synchronize.displayName = 'Synchronize';
export default Synchronize;
