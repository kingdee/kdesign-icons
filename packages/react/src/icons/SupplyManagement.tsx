import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SupplyManagement = ({
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
          id="722.货源管理"
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
              d="M23.1741397,7.20841869 C23.5620439,7.02843319 24,7.29241191 24,7.70037901 L24,18.47551 C24,18.7634868 23.8248175,19.0154665 23.5620437,19.1594549 L13.7518248,23.8750745 C13.3639208,24.0550601 12.9259646,23.7910813 12.9259646,23.3831143 L12.9259646,12.6799774 C12.9259646,12.3560035 13.1261731,12.0560277 13.4264859,11.9000403 L23.1741397,7.20841869 Z M22.0479667,5.70853965 L12.4004171,10.3281671 C12.1501564,10.4481574 11.8498436,10.4481574 11.5870699,10.3281671 L1.93952032,5.70853965 C1.52659019,5.5045561 1.52659019,4.92860255 1.93952032,4.72461898 L11.637122,0.08099346 C11.8623566,-0.02699782 12.1251303,-0.02699782 12.350365,0.08099346 L22.0479667,4.73661802 C22.4608968,4.94060157 22.4608968,5.5045561 22.0479667,5.70853965 Z M0.825860267,7.20841869 L10.561001,11.8760423 C10.8738269,12.0320297 11.0615224,12.3320055 11.0615224,12.6559794 L11.0615224,23.5870979 C11.0615224,23.8870736 10.7361835,24.0910572 10.4483838,23.9590679 L0.437956213,19.1594549 C0.162669467,19.0394645 0,18.7634868 0,18.47551 L0,7.68837997 C0,7.29241191 0.437956213,7.02843319 0.825860267,7.20841869 Z M3.59124085,11.5640674 L7.54535976,13.4599145 C7.94577685,13.6399 8.40875915,13.4719136 8.59645464,13.0879445 C8.77163712,12.7159745 8.62148072,12.2960084 8.25860272,12.1040239 L4.30448384,10.2201758 C3.90406675,10.0401903 3.44108448,10.2081768 3.25338896,10.5921458 C3.07820648,10.9521168 3.22836291,11.3720829 3.59124085,11.5640674 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SupplyManagement.displayName = 'SupplyManagement';
export default SupplyManagement;