import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const InvoiceLicenseAuthorization = ({
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
          id="390.发票许可授权"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M22,0 C23.1045695,0 24,0.895430496 24,2 L24,26 C24,27.1045695 23.1045695,28 22,28 L2,28 C0.895430496,28 0,27.1045695 0,26 L0,2 C0,0.895430496 0.895430496,0 2,0 L22,0 Z M13.5,24 L4.5,24 C4.22385763,24 4,24.2238576 4,24.5 C4,24.7761424 4.22385763,25 4.5,25 L4.5,25 L13.5,25 C13.7761424,25 14,24.7761424 14,24.5 C14,24.2238576 13.7761424,24 13.5,24 L13.5,24 Z M19.5,20 L4.5,20 C4.22385763,20 4,20.2238576 4,20.5 C4,20.7761424 4.22385763,21 4.5,21 L4.5,21 L19.5,21 C19.7761424,21 20,20.7761424 20,20.5 C20,20.2238576 19.7761424,20 19.5,20 L19.5,20 Z M11.551632,3.77871715 L9.611,7.711 L5.27070522,8.3420775 L5.18667325,8.36140909 C4.83955104,8.47257251 4.71803706,8.92631821 4.99359853,9.19492419 L8.134,12.255 L7.3926991,16.5785964 L7.38517219,16.6588734 C7.37953091,17.0263388 7.7758144,17.2856737 8.11817379,17.1056847 L11.999,15.064 L15.8818262,17.1056847 L15.9558482,17.1376501 C16.3035853,17.2565683 16.6726858,16.9598193 16.6073009,16.5785964 L15.865,12.255 L19.0064015,9.19492419 L19.0630219,9.1298919 C19.2785095,8.8359255 19.1101114,8.39741341 18.7292948,8.3420775 L14.388,7.711 L12.448368,3.77871715 C12.2649612,3.4070943 11.7350388,3.4070943 11.551632,3.77871715 Z M12,5.13 L13.6088803,8.38972339 L13.6603661,8.47256531 C13.7389074,8.57506419 13.8550652,8.64431261 13.9853492,8.663244 L17.582,9.185 L14.979692,11.7235163 L14.9168146,11.7980818 C14.843603,11.9044528 14.8136385,12.0363244 14.8358936,12.166082 L15.45,15.748 L12.2326706,14.0574343 L12.1423244,14.0206763 C12.0185359,13.9839184 11.883859,13.996171 11.7673294,14.0574343 L8.549,15.748 L9.1641064,12.166082 L9.17114669,12.0687989 C9.1678529,11.9397102 9.1145825,11.8154112 9.020308,11.7235163 L6.417,9.185 L10.0146508,8.663244 C10.1775059,8.63957981 10.3182886,8.5372951 10.3911197,8.38972339 L12,5.13 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
InvoiceLicenseAuthorization.displayName = 'InvoiceLicenseAuthorization';
export default InvoiceLicenseAuthorization;
