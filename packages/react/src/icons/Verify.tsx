import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Verify = ({
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
          id="1478-验证"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.41176471,11.2941176 C1.41176471,14.2164706 3.06352941,16.9905882 5.88141176,19.5063529 C7.11399624,20.6007091 8.45451892,21.5670775 9.88235294,22.3905882 C11.310187,21.5670775 12.6507096,20.6007091 13.8832941,19.5063529 C16.6997647,16.9905882 18.3529412,14.2164706 18.3529412,11.2941176 L18.3529412,5.39294116 C17.7571765,5.25176469 17.04,5.05129411 16.229647,4.7802353 C13.9895104,4.0373209 11.85577,3.00557007 9.88235294,1.71105882 C7.90893592,3.00557007 5.7751955,4.0373209 3.53505883,4.7802353 C2.72470587,5.05129411 2.00752941,5.25176471 1.41176471,5.39294116 L1.41176471,11.2941176 Z M-4.5140362e-16,4.23529413 C-4.5140362e-16,4.23529413 4.94117647,3.52941178 9.88235294,-4.5140362e-16 C14.8235294,3.52941176 19.7647059,4.23529413 19.7647059,4.23529413 L19.7647059,11.2941176 C19.7647059,19.0588235 9.88235294,24 9.88235294,24 C9.88235294,24 -4.5140362e-16,19.0588235 -4.5140362e-16,11.2941176 L-4.5140362e-16,4.23529413 L-4.5140362e-16,4.23529413 Z M5.64705881,11.2941176 L5.64705881,12.7058824 L7.05882352,12.7058824 L7.05882352,11.2941176 L5.64705881,11.2941176 Z M7.05882352,12.7058824 L7.05882352,14.1176471 L8.47058823,14.1176471 L8.47058823,12.7058824 L7.05882352,12.7058824 Z M8.47058823,14.1176471 L8.47058823,15.5294118 L9.88235294,15.5294118 L9.88235294,14.1176471 L8.47058823,14.1176471 Z M9.88235294,12.7058824 L9.88235294,14.1176471 L11.2941176,14.1176471 L11.2941176,12.7058824 L9.88235294,12.7058824 Z M11.2941176,11.2941176 L11.2941176,12.7058824 L12.7058824,12.7058824 L12.7058824,11.2941176 L11.2941176,11.2941176 L11.2941176,11.2941176 Z M12.7058824,9.88235294 L12.7058824,11.2941176 L14.1176471,11.2941176 L14.1176471,9.88235294 L12.7058824,9.88235294 L12.7058824,9.88235294 Z M14.1176471,8.47058823 L14.1176471,9.88235294 L15.5294118,9.88235294 L15.5294118,8.47058823 L14.1176471,8.47058823 L14.1176471,8.47058823 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Verify.displayName = 'Verify';
export default Verify;