import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ViewOverview = ({
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
          id="1162-视图_概况"
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
              d="M0.923076923,18.5786123 C1.43287822,18.5786123 1.84615385,18.9945088 1.84615385,19.5075429 C1.84615385,20.0205771 1.43287822,20.4364736 0.923076923,20.4364736 C0.413275628,20.4364736 0,20.0205771 0,19.5075429 C0,18.9945088 0.413275628,18.5786123 0.923076923,18.5786123 Z M23.0769231,18.5786123 C23.5867243,18.5786123 24,18.9945088 24,19.5075429 C24,20.0205771 23.5867243,20.4364736 23.0769231,20.4364736 L4.61538462,20.4364736 C4.10558332,20.4364736 3.69230769,20.0205771 3.69230769,19.5075429 C3.69230769,18.9945088 4.10558332,18.5786123 4.61538462,18.5786123 L23.0769231,18.5786123 Z M0.923076923,9.28930617 C1.43287822,9.28930617 1.84615385,9.70520261 1.84615385,10.2182368 C1.84615385,10.731271 1.43287822,11.1471674 0.923076923,11.1471674 C0.413275628,11.1471674 0,10.731271 0,10.2182368 C0,9.70520261 0.413275628,9.28930617 0.923076923,9.28930617 Z M23.0769231,9.28930617 C23.5867243,9.28930617 24,9.70520261 24,10.2182368 C24,10.731271 23.5867243,11.1471674 23.0769231,11.1471674 L4.61538462,11.1471674 C4.10558332,11.1471674 3.69230769,10.731271 3.69230769,10.2182368 C3.69230769,9.70520261 4.10558332,9.28930617 4.61538462,9.28930617 L23.0769231,9.28930617 Z M0.923076923,0 C1.43287822,0 1.84615385,0.415896416 1.84615385,0.928930617 C1.84615385,1.44196482 1.43287822,1.85786123 0.923076923,1.85786123 C0.413275628,1.85786123 0,1.44196482 0,0.928930617 C0,0.415896416 0.413275628,0 0.923076923,0 Z M23.0769231,0 C23.5867243,0 24,0.415896416 24,0.928930617 C24,1.44196482 23.5867243,1.85786123 23.0769231,1.85786123 L4.61538462,1.85786123 C4.10558332,1.85786123 3.69230769,1.44196482 3.69230769,0.928930617 C3.69230769,0.415896416 4.10558332,0 4.61538462,0 L23.0769231,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ViewOverview.displayName = 'ViewOverview';
export default ViewOverview;