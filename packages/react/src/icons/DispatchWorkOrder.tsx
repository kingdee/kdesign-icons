import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DispatchWorkOrder = ({
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
          id="532.派工单执行"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M19.3333332,17.472 C21.9106621,17.472 24,19.5780526 24,22.176 C24,24.7739474 21.9106621,26.88 19.3333332,26.88 C16.7560045,26.88 14.6666667,24.7739474 14.6666667,22.176 C14.6666667,19.5780526 16.7560045,17.472 19.3333332,17.472 Z M19.3333332,18.816 L16.6666668,21.756 L18.4444445,21.756 L18.4444445,25.536 L20.2222222,25.536 L20.2222222,21.756 L21.9999999,21.756 L19.3333332,18.816 Z M21.1097917,0 C21.8880394,0 22.5185186,0.686140662 22.5185186,1.54420365 L22.5194978,17.0502546 C21.5962514,16.4659155 20.5039413,16.128 19.3333332,16.128 C16.0196248,16.128 13.3333333,18.8357818 13.3333333,22.176 C13.3333333,23.0735059 13.5272782,23.9253514 13.875227,24.6912757 L1.40731945,24.690221 C0.630479124,24.690221 0,24.0040804 0,23.1460174 L0,1.54420365 C0,0.692336056 0.626257152,0 1.40731945,0 L21.1097917,0 Z M12.48,15.36 L4.8,15.36 C4.26980665,15.36 3.84,15.7898067 3.84,16.32 C3.84,16.8501933 4.26980665,17.28 4.8,17.28 L12.48,17.28 C13.0101933,17.28 13.44,16.8501933 13.44,16.32 C13.44,15.7898067 13.0101933,15.36 12.48,15.36 Z M18.24,9.6 L4.8,9.6 C4.26980665,9.6 3.84,10.0298067 3.84,10.56 C3.84,11.0901933 4.26980665,11.52 4.8,11.52 L18.24,11.52 C18.7701934,11.52 19.2,11.0901933 19.2,10.56 C19.2,10.0298067 18.7701934,9.6 18.24,9.6 Z M18.24,3.84 L4.8,3.84 C4.26980665,3.84 3.84,4.26980665 3.84,4.8 C3.84,5.33019335 4.26980665,5.76 4.8,5.76 L18.24,5.76 C18.7701934,5.76 19.2,5.33019335 19.2,4.8 C19.2,4.26980665 18.7701934,3.84 18.24,3.84 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DispatchWorkOrder.displayName = 'DispatchWorkOrder';
export default DispatchWorkOrder;