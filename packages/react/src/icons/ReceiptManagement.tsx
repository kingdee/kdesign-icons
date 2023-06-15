import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ReceiptManagement = ({
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
          id="818.收货管理"
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
              d="M4.42105263,0.736842105 L4.42105263,0 L0,0 L0,1.47368421 L2.94736842,1.47368421 L2.94736842,22.1052632 L4.42105263,22.1052632 L4.42105263,0.736842105 L4.42105263,0.736842105 Z M28,25.0526316 C28,25.8665249 27.3402091,26.5263158 26.5263158,26.5263158 L25.0526316,26.5263158 C24.2387383,26.5263158 23.5789474,25.8665249 23.5789474,25.0526316 L23.5789474,23.5789474 L2.94736842,23.5789474 L2.94736842,22.1052632 L28,22.1052632 L28,25.0526316 L28,25.0526316 Z M7.36842105,1.47368421 L26.5263158,1.47368421 C26.9171611,1.47368421 27.2919985,1.62894692 27.5683679,1.90531632 C27.8447373,2.18168572 28,2.55652307 28,2.94736842 L28,19.1578947 C28,19.9717881 27.3402091,20.6315789 26.5263158,20.6315789 L7.36842105,20.6315789 C6.55452774,20.6315789 5.89473684,19.9717881 5.89473684,19.1578947 L5.89473684,2.94736842 C5.89473684,2.13347511 6.55452774,1.47368421 7.36842105,1.47368421 Z M2.94736842,23.5789474 L7.36842105,23.5789474 L7.36842105,25.0526316 C7.36842105,25.8665249 6.70863016,26.5263158 5.89473684,26.5263158 L4.42105263,26.5263158 C3.60715932,26.5263158 2.94736842,25.8665249 2.94736842,25.0526316 L2.94736842,23.5789474 Z M13.2631579,5.89473684 C12.4492646,5.89473684 11.7894737,6.55452774 11.7894737,7.36842105 C11.7894737,8.18231437 12.4492646,8.84210526 13.2631579,8.84210526 L20.6315789,8.84210526 C21.4454723,8.84210526 22.1052632,8.18231437 22.1052632,7.36842105 C22.1052632,6.55452774 21.4454723,5.89473684 20.6315789,5.89473684 L13.2631579,5.89473684 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ReceiptManagement.displayName = 'ReceiptManagement';
export default ReceiptManagement;
