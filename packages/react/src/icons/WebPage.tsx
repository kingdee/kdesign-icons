import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const WebPage = ({
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
          id="1208-网页"
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
              d="M22.2857143,0 C23.2324881,0 24,0.767511854 24,1.71428571 L24,18.8571429 C24,19.8039167 23.2324881,20.5714286 22.2857143,20.5714286 L1.71428571,20.5714286 C0.767511854,20.5714286 0,19.8039167 0,18.8571429 L0,1.71428571 C0,0.767511854 0.767511854,0 1.71428571,0 L22.2857143,0 Z M22.2857143,6.85714286 L1.71428571,6.85714286 L1.71428571,18.8571429 L22.2857143,18.8571429 L22.2857143,6.85714286 Z M13.7142857,13.7142857 C14.1876726,13.7142857 14.5714286,14.0980417 14.5714286,14.5714286 C14.5714286,15.0448155 14.1876726,15.4285714 13.7142857,15.4285714 L6.85714286,15.4285714 C6.38375594,15.4285714 6,15.0448155 6,14.5714286 C6,14.0980417 6.38375594,13.7142857 6.85714286,13.7142857 L13.7142857,13.7142857 Z M17.1428571,9.42857143 C17.616244,9.42857143 18,9.8123274 18,10.2857143 C18,10.7591012 17.616244,11.1428571 17.1428571,11.1428571 L6.85714286,11.1428571 C6.38375594,11.1428571 6,10.7591012 6,10.2857143 C6,9.8123274 6.38375594,9.42857143 6.85714286,9.42857143 L17.1428571,9.42857143 Z M22.2857143,1.71428571 L1.71428571,1.71428571 L1.71428571,5.14285714 L22.2857143,5.14285714 L22.2857143,1.71428571 Z M4.28571429,2.57142857 C4.7591012,2.57142857 5.14285714,2.95518451 5.14285714,3.42857143 C5.14285714,3.90195835 4.7591012,4.28571429 4.28571429,4.28571429 C3.81232737,4.28571429 3.42857143,3.90195835 3.42857143,3.42857143 C3.42857143,2.95518451 3.81232737,2.57142857 4.28571429,2.57142857 Z M6.85714286,2.57142857 C7.33052975,2.57142857 7.71428571,2.95518451 7.71428571,3.42857143 C7.71428571,3.90195835 7.33052975,4.28571429 6.85714286,4.28571429 C6.38375594,4.28571429 6,3.90195835 6,3.42857143 C6,2.95518451 6.38375594,2.57142857 6.85714286,2.57142857 Z M9.42857143,2.57142857 C9.90195832,2.57142857 10.2857143,2.95518451 10.2857143,3.42857143 C10.2857143,3.90195835 9.90195832,4.28571429 9.42857143,4.28571429 C8.95518454,4.28571429 8.57142857,3.90195835 8.57142857,3.42857143 C8.57142857,2.95518451 8.95518454,2.57142857 9.42857143,2.57142857 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
WebPage.displayName = 'WebPage';
export default WebPage;
