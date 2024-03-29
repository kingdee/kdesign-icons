import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const TenderNotice = ({
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
          id="561.招标公告"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M19.5601868,2.47393638 L14.4499307,2.47393638 C13.9361088,1.0370005 12.5903847,0 11.0034789,0 C9.41307781,0 8.0708491,1.04053977 7.55702719,2.47393638 L2.44327567,2.47393638 C1.09755161,2.47393638 0,3.58880042 0,4.94787275 L0,22.2760452 C0,23.6386568 1.10104697,24.7499815 2.44327567,24.7499815 L19.5566913,24.7499815 C20.9024154,24.7499815 22,23.6351175 22,22.2760452 L22,4.95141199 C22.0034624,3.58880042 20.9024155,2.47393638 19.5601868,2.47393638 Z M10.9999836,2.47393638 C11.6710978,2.47393638 12.2233691,3.02959876 12.2233691,3.7126742 C12.2233691,4.39221037 11.6745933,4.95141199 10.9999836,4.95141199 C10.3288692,4.95141199 9.77659803,4.39574961 9.77659803,3.7126742 C9.78009344,3.03313803 10.3288692,2.47393638 10.9999836,2.47393638 L10.9999836,2.47393638 Z M13.4467545,19.805648 L4.89004671,19.805648 L4.89004671,17.3281724 L13.4467545,17.3281724 L13.4467545,19.805648 L13.4467545,19.805648 Z M17.1134157,14.854236 L4.89004671,14.854236 L4.89004671,12.3802996 L17.1134157,12.3802996 L17.1134157,14.854236 L17.1134157,14.854236 Z M17.1134157,9.90282402 L4.89004671,9.90282402 L4.89004671,7.4253484 L17.1134157,7.4253484 L17.1134157,9.90282402 L17.1134157,9.90282402 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
TenderNotice.displayName = 'TenderNotice';
export default TenderNotice;
