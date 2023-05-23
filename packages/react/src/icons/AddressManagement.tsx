import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AddressManagement = ({
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
          id="1199-地址管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(7.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M8.99872383,4.49901282 C6.87798572,4.49901282 5.15280911,6.1910411 5.15280911,8.27020002 C5.15280911,10.3489091 6.87798572,12.0391379 8.99872383,12.0391379 C11.1193619,12.0391379 12.8436377,10.3489091 12.8436377,8.27020002 C12.8436377,6.19094112 11.1193619,4.49901282 8.99872383,4.49901282 M8.99872383,10.3693028 C7.81979641,10.3693028 6.86071993,9.42739321 6.86071993,8.26940026 C6.86071993,7.11165723 7.81979641,6.16934779 8.99872383,6.16934779 C10.1768505,6.16934779 11.1357769,7.11165723 11.1357769,8.26940026 C11.1357769,9.42734323 10.1768505,10.3693028 8.99872383,10.3693028 M18,8.82987747 C18,3.9609287 13.9620598,0 8.99872383,0 C4.03623867,0 0,3.9609287 0,8.82987747 C0,12.6485001 5.54156437,20.3429775 7.92544298,23.4733623 C8.17637231,23.8036605 8.57798932,24 8.99877389,24 C9.4185575,24 9.82102533,23.8037105 10.0729055,23.4733623 C12.4558833,20.3429775 18,12.6494997 18,8.82987747 M9.14060349,22.1368745 L8.99872383,22.3253163 L8.85669403,22.1368745 C4.35658143,16.1646159 1.55897472,11.0652382 1.55897472,8.82987747 C1.55897472,4.80516839 4.89577421,1.53067803 8.99872383,1.53067803 C13.1007226,1.53067803 16.4376726,4.80516839 16.4376726,8.82987747 C16.4384729,11.0660879 13.6425678,16.1646159 9.14060349,22.1368745"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AddressManagement.displayName = 'AddressManagement';
export default AddressManagement;
