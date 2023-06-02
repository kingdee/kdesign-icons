import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CheckIn = ({
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
          id="1490-签入"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M14.6264196,10.6850959 L11.3126779,7.37135414 L12.335848,6.34962913 L17.444473,11.4596993 L16.422748,12.4814243 L12.335848,16.5683243 L11.3126779,15.5465993 L14.7290257,12.1302515 L0,12.1302515 L0,10.6850959 L14.6264196,10.6850959 Z M4.26320896,19.7361053 C3.9893716,19.4525811 3.99328764,19.0019047 4.27201051,18.7231818 C4.55073338,18.444459 5.00140978,18.4405429 5.28493397,18.7143803 C9.23561902,22.6646622 15.6405847,22.6644444 19.591001,18.7138937 C23.5414173,14.763343 23.5414173,8.35837734 19.591001,4.40782665 C15.6405847,0.45727597 9.23561902,0.457058112 5.28493397,4.40734005 C5.10541,4.60266635 4.83328575,4.68390813 4.5760612,4.61897164 C4.31883665,4.55403516 4.11788144,4.35336418 4.05258093,4.0962318 C3.98728043,3.83909942 4.06813696,3.56686045 4.26320896,3.3870602 C7.56958786,0.0802671691 12.5423989,-0.909129242 16.8627177,0.880246921 C21.1830365,2.66962308 24,6.88536401 24,11.5615827 C24,16.2378015 21.1830365,20.4535424 16.8627177,22.2429186 C12.5423989,24.0322947 7.56958786,23.0428983 4.26320896,19.7361053 L4.26320896,19.7361053 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CheckIn.displayName = 'CheckIn';
export default CheckIn;