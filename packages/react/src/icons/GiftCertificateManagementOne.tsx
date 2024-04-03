import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const GiftCertificateManagementOne = ({
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
          id="1787.礼券管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M28,9.96774424 C28.5522847,9.96774424 29,10.4154595 29,10.9677442 L29,28 C29,28.5522847 28.5522847,29 28,29 L6.16666667,29 C5.61438192,29 5.16666667,28.5522847 5.16666667,28 L5.16666667,10.9677442 C5.16666667,10.4154595 5.61438192,9.96774424 6.16666667,9.96774424 L28,9.96774424 Z M23.4655278,21 L10.7011389,21 C10.0377682,21 9.5,21.5377682 9.5,22.2011389 C9.5,22.8645095 10.0377682,23.4022777 10.7011389,23.4022777 L23.4655278,23.4022777 C24.1288985,23.4022777 24.6666667,22.8645095 24.6666667,22.2011389 C24.6666667,21.5377682 24.1288985,21 23.4655278,21 Z M23.7643889,16 L10.4022777,16 C9.90396349,16 9.5,16.4039635 9.5,16.9022777 C9.5,17.4005919 9.90396349,17.8045554 10.4022777,17.8045554 L23.7643889,17.8045554 C24.2627032,17.8045554 24.6666667,17.4005919 24.6666667,16.9022777 C24.6666667,16.4039635 24.2627032,16 23.7643889,16 Z M3,11.0670626 L4.08333333,9.96774424 L4.08333333,29 L3,27.9063304 L3,11.0670626 Z M23.5800713,3.24300659 L27.9782918,8.84819979 L5.16666667,8.84819979 L23.5800713,3.24300659 Z M17.0833333,1 L20.3541395,3.24300659 L5.16666667,8.01091027 L17.0833333,1 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
GiftCertificateManagementOne.displayName = 'GiftCertificateManagementOne';
export default GiftCertificateManagementOne;
