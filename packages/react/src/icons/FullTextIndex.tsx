import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const FullTextIndex = ({
  size = '1em',
  fill = 'currentColor',
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
          id="786.全文索引"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 1.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M26.25,0 C27.2164982,0 28,0.783501705 28,1.75 L28,28 C28,28.9664982 27.2164982,29.75 26.25,29.75 L1.75,29.75 C0.783501705,29.75 0,28.9664982 0,28 L0,1.75 C0,0.783501705 0.783501705,0 1.75,0 L26.25,0 Z M11.474907,10.5 L5.25,13.3621464 L11.474907,16.2242929 L11.474907,14.093823 L16.4864382,14.093823 C18.904575,14.093823 20.7998963,15.5778373 20.7998963,17.4500683 C20.7998963,19.408379 19.012185,21.0518324 16.4743383,21.0518324 L7.39267568,21.0518324 L7.39267568,22.5582252 L16.570106,22.5582252 C19.969863,22.5582252 22.7501425,20.269175 22.7501425,17.4500683 C22.7737977,14.4803225 19.8143692,12.6304699 16.2709605,12.6304699 L11.474907,12.6304699 L11.474907,10.5 Z M22.75,5.25 L5.25,5.25 L5.25,7 L22.75,7 L22.75,5.25 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
FullTextIndex.displayName = 'FullTextIndex';
export default FullTextIndex;
