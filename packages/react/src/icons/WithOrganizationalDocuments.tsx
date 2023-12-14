import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const WithOrganizationalDocuments = ({
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
          id="1425-带组织单据"
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
              d="M19.0909091,0 C19.3921554,0 19.6363636,0.244208328 19.6363636,0.545454552 L19.6363636,23.4545454 C19.6363636,23.7557917 19.3921554,24 19.0909091,24 L0.545454552,24 C0.244208328,24 0,23.7557917 0,23.4545454 L0,0.545454552 C0,0.244208328 0.244208328,0 0.545454552,0 L19.0909091,0 Z M18.5454546,1.09090908 L1.09090908,1.09090908 L1.09090908,22.9090909 L18.5454546,22.9090909 L18.5454546,1.09090908 Z M11.4545454,7.63636363 C11.7557913,7.63636363 12,7.88057194 12,8.18181818 L12,10.3636364 C12,10.6648826 11.7557913,10.9090909 11.4545454,10.9090909 L10.3636364,10.908 L10.3636364,12 L13.0909091,12 C13.3586836,12 13.5813906,12.1929548 13.6275753,12.4474084 L13.6363636,12.5454546 L13.6363636,14.1807273 L14.7272727,14.1818182 C14.9950473,14.1818182 15.2177542,14.374773 15.2639389,14.6292266 L15.2727273,14.7272727 L15.2727273,16.9090909 C15.2727273,17.2103372 15.0285186,17.4545454 14.7272727,17.4545454 L11.4545454,17.4545454 C11.1532996,17.4545454 10.9090909,17.2103372 10.9090909,16.9090909 L10.9090909,14.7272727 C10.9090909,14.4260265 11.1532996,14.1818182 11.4545454,14.1818182 L12.5454546,14.1807273 L12.5454546,13.0909091 L7.09090908,13.0909091 L7.09090908,14.1807273 L8.18181818,14.1818182 C8.44959274,14.1818182 8.67229963,14.374773 8.71848437,14.6292266 L8.72727274,14.7272727 L8.72727274,16.9090909 C8.72727274,17.2103372 8.483064,17.4545454 8.18181818,17.4545454 L4.90909092,17.4545454 C4.60784508,17.4545454 4.36363637,17.2103372 4.36363637,16.9090909 L4.36363637,14.7272727 C4.36363637,14.4260265 4.60784508,14.1818182 4.90909092,14.1818182 L6,14.1807273 L6,12.5454546 C6,12.2776801 6.19295455,12.0549726 6.447408,12.008788 L6.54545455,12 L9.27272726,11.9989091 L9.27272726,10.908 L8.18181818,10.9090909 C7.91404363,10.9090909 7.69133674,10.7161362 7.645152,10.4616825 L7.63636363,10.3636364 L7.63636363,8.18181818 C7.63636363,7.88057194 7.88057237,7.63636363 8.18181818,7.63636363 L11.4545454,7.63636363 Z M14.1818182,15.2727273 L12,15.2727273 L12,16.3636364 L14.1818182,16.3636364 L14.1818182,15.2727273 Z M7.63636363,15.2727273 L5.45454545,15.2727273 L5.45454545,16.3636364 L7.63636363,16.3636364 L7.63636363,15.2727273 Z M10.9090909,8.72727274 L8.72727274,8.72727274 L8.72727274,9.81818182 L10.9090909,9.81818182 L10.9090909,8.72727274 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
WithOrganizationalDocuments.displayName = 'WithOrganizationalDocuments';
export default WithOrganizationalDocuments;
