import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Delete = ({
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
          id="149.删除"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="删除"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M11,0 C12.8692715,0 14.3846154,1.53502371 14.3846154,3.42857143 L21.1538462,3.42857143 C21.621164,3.42857143 22,3.81232737 22,4.28571429 C22,4.7591012 21.621164,5.14285714 21.1538462,5.14285714 L19.4234615,5.14285714 L18.6145118,23.181778 C18.5954376,23.6068594 18.273008,23.9480116 17.864845,23.9945789 L17.7692308,24 L4.23076923,24 C3.81070426,24 3.45963238,23.6892107 3.39517584,23.2782879 L3.38548816,23.181778 L2.57569231,5.14285714 L0.846153846,5.14285714 C0.378835993,5.14285714 0,4.7591012 0,4.28571429 C0,3.81232737 0.378835993,3.42857143 0.846153846,3.42857143 L7.61538462,3.42857143 C7.61538462,1.53502371 9.13072853,0 11,0 Z M17.7294615,5.14285714 L4.26969231,5.14285714 L5.03884615,22.2857143 L16.9603077,22.2857143 L17.7294615,5.14285714 Z M8.46153846,8.57142857 C8.92885629,8.57142857 9.30769231,8.95518454 9.30769231,9.42857143 L9.30769231,18 C9.30769231,18.4733869 8.92885629,18.8571429 8.46153846,18.8571429 C7.99422064,18.8571429 7.61538462,18.4733869 7.61538462,18 L7.61538462,9.42857143 C7.61538462,8.95518454 7.99422064,8.57142857 8.46153846,8.57142857 Z M13.5384615,8.57142857 C14.0057794,8.57142857 14.3846154,8.95518454 14.3846154,9.42857143 L14.3846154,18 C14.3846154,18.4733869 14.0057794,18.8571429 13.5384615,18.8571429 C13.0711437,18.8571429 12.6923077,18.4733869 12.6923077,18 L12.6923077,9.42857143 C12.6923077,8.95518454 13.0711437,8.57142857 13.5384615,8.57142857 Z M11,1.71428571 C10.0653643,1.71428571 9.30769231,2.48179757 9.30769231,3.42857143 L12.6923077,3.42857143 C12.6923077,2.48179757 11.9346357,1.71428571 11,1.71428571 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Delete.displayName = 'Delete';
export default Delete;
