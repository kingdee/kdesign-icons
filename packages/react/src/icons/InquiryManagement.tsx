import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const InquiryManagement = ({
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
          id="821.询价管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.47368421,0 L26.5263158,0 C26.9171611,0 27.2919985,0.155262712 27.5683679,0.431632112 C27.8447373,0.708001512 28,1.08283886 28,1.47368421 L28,19.1578947 C28,19.9717881 27.3402091,20.6315789 26.5263158,20.6315789 L18.3178947,20.6315789 L14.5968421,25.6995789 C14.4576063,25.8888629 14.2364409,26.0003881 14.0014628,25.999808 C13.7664847,25.9992234 13.5458748,25.8866034 13.4075789,25.6966316 L9.72336842,20.6315789 L1.47368421,20.6315789 C0.659790895,20.6315789 0,19.9717881 0,19.1578947 L0,1.47368421 C0,0.659790895 0.659790895,0 1.47368421,0 Z M14.42,10.3157895 L14.7191579,10.0903158 L19.1578947,5.50273684 L17.7181053,4.42105263 L13.2808421,9.16631579 L14.7191579,9.16631579 L10.2818947,4.42105263 L8.84210526,5.50273684 L13.2808421,10.0903158 L13.58,10.3157895 L8.84210526,10.3157895 L8.84210526,11.7894737 L13.2631579,11.7894737 L13.2631579,13.2631579 L8.84210526,13.2631579 L8.84210526,14.7368421 L13.2631579,14.7368421 L13.2631579,17.6842105 L14.6587368,17.6842105 L14.6587368,14.7368421 L19.1578947,14.7368421 L19.1578947,13.2631579 L14.6587368,13.2631579 L14.6587368,11.7894737 L19.1578947,11.7894737 L19.1578947,10.3157895 L14.42,10.3157895 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
InquiryManagement.displayName = 'InquiryManagement';
export default InquiryManagement;
