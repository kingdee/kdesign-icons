import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ApplicationMarket = ({
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
          id="1168-应用市场"
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
              d="M18.8223342,0 C19.675449,0 20.3987417,0.627308407 20.5193904,1.4718491 L23.4581659,22.0432777 C23.59206,22.980536 22.9408046,23.8488766 22.0035462,23.9827706 C21.9232435,23.9942424 21.8422277,24 21.7611096,24 L1.71428571,24 C0.767511881,24 -3.89783444e-16,23.2324881 -3.89783444e-16,22.2857143 C-3.89783444e-16,22.2045963 0.00575761371,22.1235805 0.0172294491,22.0432777 L2.95600496,1.4718491 C3.07665364,0.627308407 3.7999463,0 4.65306125,0 L18.8223342,0 Z M18.8223342,1.71428571 L4.65306125,1.71428571 L1.71428571,22.2857143 L21.7611096,22.2857143 L18.8223342,1.71428571 Z M17.7376977,4.28571429 C18.2110846,4.28571429 18.5948405,4.66947023 18.5948405,5.14285714 C18.5948405,8.92995259 15.5247931,12 11.7376977,12 C7.95060228,12 4.88055483,8.92995259 4.88055483,5.14285714 C4.88055483,4.66947023 5.26431077,4.28571429 5.73769769,4.28571429 C6.21108461,4.28571429 6.59484055,4.66947023 6.59484055,5.14285714 C6.59484055,7.98317872 8.89737611,10.2857143 11.7376977,10.2857143 C14.5780193,10.2857143 16.8805548,7.98317872 16.8805548,5.14285714 C16.8805548,4.66947023 17.2643108,4.28571429 17.7376977,4.28571429 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ApplicationMarket.displayName = 'ApplicationMarket';
export default ApplicationMarket;
