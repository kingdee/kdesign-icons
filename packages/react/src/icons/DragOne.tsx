import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DragOne = ({
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
          id="1254-拖拽"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(11.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M0.749999979,21.2009619 C1.2141016,20.9330127 1.7858984,20.9330127 2.24999999,21.2009619 C2.71410161,21.4689111 3,21.9641016 3,22.5 C3,23.3284272 2.32842711,24 1.5,24 C0.671572863,24 0,23.3284272 0,22.5 C0,21.9641016 0.285898356,21.4689111 0.749999979,21.2009619 Z M8.99999998,21 C9.82842703,21 10.5,21.671573 10.5,22.5 C10.5,23.3284271 9.82842703,24 8.99999998,24 C8.17157295,24 7.49999998,23.3284271 7.49999998,22.5 C7.49999998,21.671573 8.17157295,21 8.99999998,21 Z M0.749999979,10.7009619 C1.2141016,10.4330127 1.7858984,10.4330127 2.24999999,10.7009619 C2.71410161,10.9689111 3,11.4641016 3,12 C3,12.8284272 2.32842711,13.5 1.5,13.5 C0.671572863,13.5 0,12.8284272 0,12 C0,11.4641016 0.285898356,10.9689111 0.749999979,10.7009619 Z M8.99999998,10.5 C9.82842703,10.5 10.5,11.1715729 10.5,12 C10.5,12.8284271 9.82842703,13.5 8.99999998,13.5 C8.17157295,13.5 7.49999998,12.8284271 7.49999998,12 C7.49999998,11.1715729 8.17157295,10.5 8.99999998,10.5 Z M0.749999979,0.200961911 C1.2141016,-0.0669873038 1.7858984,-0.0669873038 2.24999999,0.200961911 C2.71410161,0.468911099 3,0.964101629 3,1.5 C3,2.32842715 2.32842711,3 1.5,3 C0.671572863,3 0,2.32842715 0,1.5 C0,0.964101629 0.285898356,0.468911099 0.749999979,0.200961911 Z M8.99999998,2.02499999e-08 C9.82842703,2.02499999e-08 10.5,0.671572883 10.5,1.50000002 C10.5,2.32842713 9.82842703,3.00000002 8.99999998,3.00000002 C8.17157295,3.00000002 7.49999998,2.32842713 7.49999998,1.50000002 C7.49999998,0.671572883 8.17157295,2.02499999e-08 8.99999998,2.02499999e-08 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DragOne.displayName = 'DragOne';
export default DragOne;
