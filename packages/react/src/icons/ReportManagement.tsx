import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ReportManagement = ({
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
          id="788.报表管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 1.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.64705882,3.29411765 L23.0588235,3.29411765 C23.968469,3.29411765 24.7058824,4.031531 24.7058824,4.94117647 L24.7058824,28 C24.7058824,28.9096455 23.968469,29.6470588 23.0588235,29.6470588 L1.64705882,29.6470588 C0.737413353,29.6470588 0,28.9096455 0,28 L0,4.94117647 C0,4.031531 0.737413353,3.29411765 1.64705882,3.29411765 Z M4.94117647,18.1176471 L4.94117647,24.7058824 L6.58823529,24.7058824 L6.58823529,18.1176471 L4.94117647,18.1176471 L4.94117647,18.1176471 Z M11.5294118,19.7647059 L11.5294118,24.7058824 L13.1764706,24.7058824 L13.1764706,19.7647059 L11.5294118,19.7647059 Z M18.1176471,14.8235294 L18.1176471,24.7058824 L19.7647059,24.7058824 L19.7647059,14.8235294 L18.1176471,14.8235294 Z M12.3809412,15.12 L20.4317647,10.3435294 L19.5917647,8.92705882 L12.6543529,13.0447059 L9.00611765,9.31247059 L3.99082353,12.656 L4.90329412,14.0263529 L8.78211765,11.4404706 L12.3809412,15.1216471 L12.3809412,15.12 Z M26.3529412,26.3529412 L26.3529412,3.29411765 C26.3529412,2.38447218 25.6155278,1.64705882 24.7058824,1.64705882 L3.29411765,1.64705882 L3.29411765,0 L24.7058824,0 C25.5795367,0 26.4174084,0.347057827 27.0351753,0.964824721 C27.6529422,1.58259161 28,2.42046333 28,3.29411765 L28,26.3529412 L26.3529412,26.3529412 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ReportManagement.displayName = 'ReportManagement';
export default ReportManagement;