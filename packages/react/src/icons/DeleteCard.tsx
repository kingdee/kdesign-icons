import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DeleteCard = ({
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
          id="1245-删除卡片"
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
              d="M0.165050016,0 L21.3333333,0 C22.8060927,0 24,1.19390734 24,2.66666666 L24,23.83495 C23.1264153,23.9438844 22.2364276,24 21.3333333,24 C9.55125866,24 0,14.4487413 0,2.66666666 C0,1.76357242 0.056115552,0.87358464 0.165050016,0 Z M15.9329967,9.65685425 L20.6470419,4.94280905 L19.7042328,4.00000001 L14.9901876,8.71404521 L10.2761424,4.00000001 L9.33333334,4.94280905 L14.0473785,9.65685425 L9.33333334,14.3708995 L10.2761424,15.3137085 L14.9901876,10.5996633 L19.7042328,15.3137085 L20.6470419,14.3708995 L15.9329967,9.65685425 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DeleteCard.displayName = 'DeleteCard';
export default DeleteCard;
