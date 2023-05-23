import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const InheritanceOperations = ({
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
          id="1006.继承操作"
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
              d="M2.01039999,28 C0.901363523,27.9969236 0.00307640783,27.0986365 0,25.9896 L0,2.01039999 C0.00307640783,0.901363523 0.901363523,0.00307640783 2.01039999,0 L25.9896,0 C27.0986365,0.00307640783 27.9969236,0.901363523 28,2.01039999 L28,12.0624 C28,12.6168 27.6546667,13.0666667 27.1002667,13.0666667 C26.5458667,13.0666667 26.1408,12.6168 26.1408,12.0624 L26.1408,3.04639998 C26.1408,2.49386665 25.4053333,1.84799997 24.8528,1.848 L2.87466667,1.848 C2.31199718,1.86296896 1.86141331,2.31931898 1.85360001,2.88213332 L1.85360001,24.9834667 C1.85360001,25.5397333 2.45840001,26.1314667 3.01280001,26.1314666 L12.0605333,26.1314666 C12.6149333,26.1314666 13.0648,26.4394667 13.0648,26.9957333 C13.0648,27.5503745 12.6151745,28 12.0605333,28 L2.01039999,28 Z M5.60000001,6.91973333 L5.60000001,12.1333333 C5.60000001,12.6466667 5.18000001,13.0666667 4.66666666,13.0666667 C4.1516269,13.0656397 3.73436034,12.6483731 3.73333334,12.1333333 L3.73333334,4.66666666 C3.73333334,4.15333334 4.15333334,3.73333334 4.66666666,3.73333334 L12.1333333,3.73333334 C12.6466667,3.73333334 13.0666667,4.15333334 13.0666667,4.66666666 C13.0666667,5.17999998 12.6466667,5.59999998 12.1333333,5.59999998 L6.91973333,5.59999998 L13.5744,12.2509333 C13.9367096,12.6162451 13.9367096,13.2053549 13.5744,13.5706667 C13.2090882,13.9329763 12.6199784,13.9329763 12.2546666,13.5706667 L5.60000001,6.91973333 Z M16.8,16.8 L16.8,26.1333333 L26.1333333,26.1333333 L26.1333333,16.8 L16.8,16.8 Z M16.8,14.9333333 L26.1333333,14.9333333 C27.1642649,14.9333333 28,15.7690685 28,16.8 L28,26.1333333 C28,27.1642649 27.1642649,28 26.1333333,28 L16.8,28 C15.7690685,28 14.9333333,27.1642649 14.9333333,26.1333333 L14.9333333,16.8 C14.9333333,15.7690685 15.7690685,14.9333333 16.8,14.9333333 L16.8,14.9333333 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
InheritanceOperations.displayName = 'InheritanceOperations';
export default InheritanceOperations;
