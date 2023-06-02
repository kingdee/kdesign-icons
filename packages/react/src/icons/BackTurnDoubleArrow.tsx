import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BackTurnDoubleArrow = ({
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
          id="972.后翻双箭头"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M14.8880404,0.328040402 C14.4842984,0.731782446 14.4532413,1.36708125 14.7948691,1.80644736 L14.8880404,1.9119596 L25.2952,12.32 L14.8880404,22.7280404 C14.4842984,23.1317825 14.4532413,23.7670812 14.7948691,24.2064473 L14.8880404,24.3119596 C15.2917825,24.7157016 15.9270812,24.7467587 16.3664473,24.4051308 L16.4719596,24.3119596 L27.6719596,13.1119596 C28.0757016,12.7082176 28.1067587,12.0729188 27.7651308,11.6335527 L27.6719596,11.5280404 L16.4719596,0.328040402 C16.0345724,-0.109346801 15.3254276,-0.109346801 14.8880404,0.328040402 Z M0.328040386,0.328040402 C-0.0757015861,0.731782446 -0.106758738,1.36708125 0.234869146,1.80644736 L0.328040386,1.9119596 L10.7352,12.32 L0.328040386,22.7280404 C-0.0757015861,23.1317825 -0.106758738,23.7670812 0.234869146,24.2064473 L0.328040386,24.3119596 C0.731782467,24.7157016 1.36708116,24.7467587 1.8064473,24.4051308 L1.91195958,24.3119596 L13.1119596,13.1119596 C13.5157016,12.7082176 13.5467587,12.0729188 13.2051308,11.6335527 L13.1119596,11.5280404 L1.91195958,0.328040402 C1.47457238,-0.109346801 0.765427589,-0.109346801 0.328040386,0.328040402 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BackTurnDoubleArrow.displayName = 'BackTurnDoubleArrow';
export default BackTurnDoubleArrow;