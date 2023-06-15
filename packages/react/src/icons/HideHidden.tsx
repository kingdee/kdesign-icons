import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const HideHidden = ({
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
          id="68.隐藏、不可见"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="隐藏、不可见"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M6.41878423,19.4894941 L9.85569762,16.1013424 C10.4863956,16.461329 11.2187881,16.6673847 12,16.6673847 C14.3669346,16.6673847 16.2857143,14.775828 16.2857143,12.4424747 L16.2857143,10.7525107 C16.2857143,10.4454311 16.2524816,10.1460033 16.1893682,9.85753187 L20.4529732,5.65441741 C22.6435245,7.56080844 24,9.89916347 24,11.5974927 C24,14.9774207 18.627417,20.8922947 12,20.8922947 C9.98502446,20.8922947 8.08604341,20.3455351 6.41878423,19.4894941 L6.41878423,19.4894941 Z M3.54702673,17.540568 C1.35647556,15.634177 0,13.2958219 0,11.5974927 C0,8.21756471 5.372583,2.30269068 12,2.30269068 C14.0149755,2.30269068 15.9139566,2.84945033 17.5812158,3.70549132 L14.1443024,7.09364291 C13.5136044,6.73365632 12.7812119,6.52760069 12,6.52760069 C9.63306539,6.52760069 7.71428571,8.4191573 7.71428571,10.7525107 L7.71428571,12.4424747 C7.71428571,12.7495543 7.74751842,13.048982 7.81063184,13.3374535 L3.54702673,17.540568 L3.54702673,17.540568 Z M10.7878169,10.4025077 L12,11.5974927 L10.7878169,10.4025077 Z M21.0735309,0.262723296 C21.8816529,-0.53393336 23.0938363,0.661052002 22.2857143,1.45770868 L1.71428571,21.7372767 C0.906163694,22.5339334 -0.306019749,21.338948 0.502102299,20.5422913 L21.0735309,0.262723296 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
HideHidden.displayName = 'HideHidden';
export default HideHidden;
