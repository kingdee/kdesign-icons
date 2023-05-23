import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CheckTheDetails = ({
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
          id="1335-查看详情"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M7.59612976,17.4023904 L7.4171884,17.0745589 L7.59612976,16.7467274 C9.32953898,13.5831531 12.3633466,11.6107 15.7085942,11.6107 C19.0538418,11.6107 22.0876494,13.5831531 23.8196926,16.7467274 L24,17.0745589 L23.8196926,17.4023904 C22.0890154,20.5659647 19.0538418,22.5384178 15.7085942,22.5384178 C12.3647126,22.5384178 9.32953898,20.5659647 7.59749573,17.4023904 L7.59612976,17.4023904 Z M15.7085942,21.172453 C18.4173022,21.172453 20.9101878,19.6234491 22.4346044,17.0745589 C20.9101878,14.5256687 18.4173022,12.9766648 15.7085942,12.9766648 C13.0012521,12.9766648 10.5083665,14.5256687 8.98394991,17.0745589 C10.5083665,19.6234491 12.9998862,21.172453 15.7085942,21.172453 Z M15.7085942,19.8064883 C17.2173971,19.8064883 18.4405236,18.5833619 18.4405236,17.0745589 C18.4405236,15.5657559 17.2173971,14.3426295 15.7085942,14.3426295 C14.1997912,14.3426295 12.9766648,15.5657559 12.9766648,17.0745589 C12.9766648,18.5833619 14.1997912,19.8064883 15.7085942,19.8064883 L15.7085942,19.8064883 Z M15.7085942,18.4405236 C14.9541927,18.4405236 14.3426295,17.8289604 14.3426295,17.0745589 C14.3426295,16.3201574 14.9541927,15.7085942 15.7085942,15.7085942 C16.4629957,15.7085942 17.0745589,16.3201574 17.0745589,17.0745589 C17.0745589,17.8289604 16.4629957,18.4405236 15.7085942,18.4405236 L15.7085942,18.4405236 Z M17.7575413,10.3826978 L16.3915766,10.3826978 L16.3915766,1.36596471 L1.36596471,1.36596471 L1.36596471,20.4894707 L8.87877064,20.4894707 L8.87877064,21.8554354 L1.36596471,21.8554354 C0.611563234,21.8554354 0,21.2438722 0,20.4894707 L0,1.36596471 C0,0.611563234 0.611563234,0 1.36596471,0 L16.3915766,0 C17.145978,0 17.7575413,0.611563234 17.7575413,1.36596471 L17.7575413,10.3826978 L17.7575413,10.3826978 Z M3.41491178,5.46385884 L12.9766648,5.46385884 C13.3538655,5.46385884 13.6596471,5.76964045 13.6596471,6.14684119 C13.6596471,6.52404193 13.3538655,6.82982355 12.9766648,6.82982355 L3.41491178,6.82982355 C3.03771103,6.82982355 2.73192942,6.52404193 2.73192942,6.14684119 C2.73192942,5.76964045 3.03771103,5.46385884 3.41491178,5.46385884 Z M3.41491178,6.82982355 C3.79211252,6.82982355 4.09789413,6.52404193 4.09789413,6.14684119 C4.09789413,5.76964045 3.79211252,5.46385884 3.41491178,5.46385884 L12.9766648,5.46385884 C12.599464,5.46385884 12.2936824,5.76964045 12.2936824,6.14684119 C12.2936824,6.52404193 12.599464,6.82982355 12.9766648,6.82982355 L3.41491178,6.82982355 Z M3.41491178,10.9277177 L7.51280592,10.9277177 C7.89000666,10.9277177 8.19578828,11.2334993 8.19578828,11.6107001 C8.19578828,11.9879008 7.89000666,12.2936824 7.51280592,12.2936824 L3.41491178,12.2936824 C3.03771103,12.2936824 2.73192942,11.9879008 2.73192942,11.6107001 C2.73192942,11.2334993 3.03771103,10.9277177 3.41491178,10.9277177 L3.41491178,10.9277177 Z M3.41491178,12.2936824 C3.79211252,12.2936824 4.09789413,11.9879008 4.09789413,11.6107001 C4.09789413,11.2334993 3.79211252,10.9277177 3.41491178,10.9277177 L7.51280592,10.9277177 C7.13560518,10.9277177 6.82982356,11.2334993 6.82982356,11.6107001 C6.82982356,11.9879008 7.13560518,12.2936824 7.51280592,12.2936824 L3.41491178,12.2936824 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CheckTheDetails.displayName = 'CheckTheDetails';
export default CheckTheDetails;
