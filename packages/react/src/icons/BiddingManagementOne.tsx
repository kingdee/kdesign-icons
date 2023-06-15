import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BiddingManagementOne = ({
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
          id="823.招标管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 1.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M20.6313363,26.3325989 C18.5935684,27.4301561 16.3145444,28.0029508 14,27.9992748 C11.6009299,27.9992748 9.34332832,27.3950864 7.36866374,26.3325989 L7.36866374,29.4729051 L4.42140319,29.4729051 L4.42140319,24.2090977 C0.232695107,20.2792761 -1.13070574,14.1896755 0.982416421,8.84893698 C3.09553858,3.50819848 8.25641463,0 14,0 C19.7435854,0 24.9044614,3.50819848 27.0175836,8.84893698 C29.1307057,14.1896755 27.7673049,20.2792761 23.5785968,24.2090977 L23.5785968,29.4729051 L20.6313363,29.4729051 L20.6313363,26.3325989 Z M14.0147363,25.0520142 C20.1258811,25.0520142 25.0802261,20.1050374 25.0802261,14.0027344 C25.0802261,7.90190505 20.1258811,2.95492818 14.0132627,2.95492818 C7.90211791,2.95492818 2.94777291,7.90190505 2.94777291,14.0027344 C2.94777291,20.1050374 7.90211791,25.0520142 14.0147363,25.0520142 Z M14.0368408,22.1047537 C9.56604918,22.09906 5.94614524,18.4705797 5.95102649,13.9997871 C5.95102649,9.52289833 9.57026741,5.8948206 14.0368408,5.8948206 C18.5076323,5.90051424 22.1275363,9.52899459 22.122655,13.9997871 C22.122655,18.4766759 18.5019405,22.1047537 14.0368408,22.1047537 Z M14.0103154,19.157495 C15.3793967,19.1586661 16.69287,18.6159254 17.6617857,17.6486678 C18.6307015,16.6814101 19.1756912,15.3688685 19.1768632,13.9997871 C19.1768632,11.1512598 16.8632636,8.8420803 14.0103154,8.8420803 C11.1599263,8.84045271 8.84768191,11.1493986 8.84524128,13.9997871 C8.84524128,16.8483145 11.1573672,19.157495 14.0103154,19.157495 L14.0103154,19.157495 Z M14,16.2102326 C12.7792047,16.2102326 11.7895546,15.2205824 11.7895546,13.9997871 C11.7895546,12.7789918 12.7792047,11.7893417 14,11.7893417 C15.2207953,11.7893417 16.2104454,12.7789918 16.2104454,13.9997871 C16.2104454,15.2205824 15.2207953,16.2102326 14,16.2102326 L14,16.2102326 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BiddingManagementOne.displayName = 'BiddingManagementOne';
export default BiddingManagementOne;
