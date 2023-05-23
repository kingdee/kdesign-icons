import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BankOrder = ({
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
          id="510.银行下拨单"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M21.1552,0 C21.6217702,0 22,0.378229857 22,0.8448 L22,0.8448 L22,22.88 C20.7820761,21.6909004 19.8729071,21.0963506 19.2724932,21.0963506 C18.6720793,21.0963506 17.7491021,21.6909004 16.5035616,22.88 L16.5035616,22.88 L13.8512501,21.0963506 L11.0488743,22.88 L8.23251864,21.0963506 L5.50588279,22.88 C3.89007117,21.6909004 2.96444012,21.0963506 2.72898968,21.0963506 C2.49353925,21.0963506 1.58387604,21.6909004 0,22.88 L0,22.88 L0,0.8448 C0,0.378229857 0.378229857,0 0.8448,0 L0.8448,0 L21.1552,0 Z M11,5.28 C10.726619,5.28 10.505,5.50161906 10.505,5.775 L10.50456,13.91016 L7.98680774,11.2590513 C7.77027635,11.0311318 7.41900958,11.0311318 7.2024781,11.2590513 C6.98584066,11.4869709 6.98584066,11.8566004 7.2024781,12.0846316 L10.6078882,15.6692557 C10.7161009,15.783048 10.8580505,15.84 11,15.84 C11.1419495,15.84 11.2838991,15.7829364 11.3921118,15.669144 L14.7975219,12.0845199 C15.0141593,11.8564887 15.0141593,11.4868592 14.7975219,11.2589396 C14.5809904,11.0310201 14.2298298,11.0310201 14.0131923,11.2589396 L11.49456,13.91016 L11.495,5.775 C11.495,5.50161906 11.273381,5.28 11,5.28 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BankOrder.displayName = 'BankOrder';
export default BankOrder;
