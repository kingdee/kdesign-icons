import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Suspended = ({
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
          id="1485-暂缓执行"
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
              d="M12,24 C5.372583,24 1.09626594e-15,18.627417 1.09626594e-15,12 C1.09626594e-15,5.372583 5.372583,-1.09626594e-15 12,-1.09626594e-15 C18.627417,-1.09626594e-15 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,22.2857143 C15.6747318,22.2857143 19.0703241,20.3252683 20.90769,17.1428572 C22.745056,13.9604461 22.745056,10.0395539 20.90769,6.8571428 C19.0703241,3.67473169 15.6747318,1.71428572 12,1.71428572 C6.31935686,1.71428572 1.71428572,6.31935686 1.71428572,12 C1.71428572,17.6806431 6.31935686,22.2857143 12,22.2857143 L12,22.2857143 Z M8.69142856,6.93085715 L10.4057143,6.93085715 L10.4057143,17.1428572 L8.69142856,17.1428572 L8.69142856,6.93085715 Z M13.7091429,6.88114286 L15.4234286,6.88114286 L15.42,17.1548571 L13.7057143,17.1548571 L13.7091429,6.88114286 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Suspended.displayName = 'Suspended';
export default Suspended;
