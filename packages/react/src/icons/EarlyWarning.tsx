import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const EarlyWarning = ({
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
          id="898.预警"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M27.7386485,22.264027 L15.6656372,0.978508864 C15.328547,0.374388749 14.6909156,0 13.999113,0 C13.3073103,0 12.6696789,0.374388749 12.3325887,0.978508864 L0.25957745,22.264027 C-0.479386189,23.5680804 0.447473328,25.2016528 1.92820502,25.2016528 L26.0714231,25.2016528 C27.5549592,25.2016528 28.4790143,23.5680804 27.7400507,22.264027 L27.7386485,22.264027 Z M15.0795143,20.6066171 C14.8006111,20.9012025 14.4110487,21.0654697 14.0054229,21.0595303 C13.5875649,21.0595303 13.2201864,20.909494 12.9201139,20.6066171 C12.6188925,20.3184521 12.4525268,19.9170376 12.4615918,19.5002749 C12.4615918,19.0754059 12.6102259,18.6982119 12.9201139,18.395335 C13.217382,18.0798382 13.5875649,17.9269975 14.0054229,17.9269975 C14.4232809,17.9269975 14.7822462,18.0798382 15.0795143,18.395335 C15.3894022,18.6982119 15.5366341,19.0754059 15.5366341,19.5002749 C15.5366341,19.939166 15.3894022,20.3037401 15.0795143,20.6066171 Z M12.9018852,8.35131876 C13.19074,8.03862636 13.560923,7.87597023 14.0054229,7.87597023 C14.4541295,7.87597023 14.821508,8.03021312 15.1103628,8.35131876 C15.3908044,8.66401115 15.5366341,9.06223824 15.5366341,9.53618455 C15.5366341,9.89795423 15.0598834,14.183102 14.8088881,16.2597721 C14.7641301,16.66522 14.4231365,16.9730782 14.0152384,16.9763004 C13.603586,16.972823 13.260175,16.6607957 13.217382,16.2513589 C12.9860177,14.1746888 12.4601896,9.89514981 12.4601896,9.53478235 C12.4615918,9.07205369 12.6130303,8.67663102 12.9018852,8.35131876 L12.9018852,8.35131876 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
EarlyWarning.displayName = 'EarlyWarning';
export default EarlyWarning;
