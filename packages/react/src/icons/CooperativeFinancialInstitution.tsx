import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CooperativeFinancialInstitution = ({
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
          id="1297-合作金融机构"
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
              d="M12,0 C12.9454286,0 13.7142857,0.768857143 13.7142857,1.71428571 L13.7142857,9.42857143 L13.7142857,9.42857143 L18.8571429,9.42857143 C19.8025714,9.42857143 20.5714286,10.1974286 20.5714286,11.1428571 L20.5714286,22.2857143 C20.5714286,23.2311429 19.8025714,24 18.8571429,24 L13.7142857,24 C13.5382514,24 13.3683385,23.9733447 13.2083705,23.9238575 C13.1013841,23.9730934 12.9823865,24 12.8571429,24 L1.71428571,24 C0.768857143,24 0,23.2311429 0,22.2857143 L0,1.71428571 C0,0.768857143 0.768857143,0 1.71428571,0 L12,0 Z M12,1.71428571 L1.71428571,1.71428571 L1.71428571,22.2857143 L12,22.2857143 L12,22.2857143 L12,1.71428571 Z M18.8571429,11.1428571 L13.7142857,11.1428571 L13.7142857,22.2857143 L18.858,22.2857143 L18.8571429,11.1428571 Z M5.14285714,15.4285714 L5.14285714,17.1428571 L3.42857143,17.1428571 L3.42857143,15.4285714 L5.14285714,15.4285714 Z M10.2857143,15.4285714 L10.2857143,17.1428571 L8.57142857,17.1428571 L8.57142857,15.4285714 L10.2857143,15.4285714 Z M5.14285714,10.2857143 L5.14285714,12 L3.42857143,12 L3.42857143,10.2857143 L5.14285714,10.2857143 Z M10.2857143,10.2857143 L10.2857143,12 L8.57142857,12 L8.57142857,10.2857143 L10.2857143,10.2857143 Z M5.14285714,5.14285714 L5.14285714,6.85714286 L3.42857143,6.85714286 L3.42857143,5.14285714 L5.14285714,5.14285714 Z M10.2857143,5.14285714 L10.2857143,6.85714286 L8.57142857,6.85714286 L8.57142857,5.14285714 L10.2857143,5.14285714 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CooperativeFinancialInstitution.displayName = 'CooperativeFinancialInstitution';
export default CooperativeFinancialInstitution;
