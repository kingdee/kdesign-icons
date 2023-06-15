import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const LayoutOne = ({
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
          id="1475-布局"
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
              d="M22.4148937,1.61499801 C22.4031163,1.58074451 22.386961,1.54727999 22.3666178,1.51499801 C22.3769626,1.53404562 22.4355833,1.56261707 22.4666178,1.59118847 L22.4148937,1.61499801 L22.4148937,1.61499801 Z M1.59658712,1.5997867 C1.5997867,1.5997867 1.5997867,8.53006264 1.5997867,22.3858152 C1.5997867,22.3890148 8.53326222,22.3938141 22.4018131,22.4002133 C22.3970137,22.3970137 22.3970137,15.465138 22.3970137,1.5997867 C22.417811,1.59018799 15.4859352,1.59018799 1.59658712,1.5997867 Z M22.5018131,22.4361527 L22.4018131,22.4361527 L22.4970512,22.4361527 L22.5018131,22.4361527 Z M11.1985069,7.99893346 L1.5997867,7.99893346 L1.5997867,9.59872016 L11.1985069,9.59872016 L11.1985069,22.3970137 L12.7982936,22.3970137 L12.7982936,9.59872016 L22.4290095,9.59872016 L22.4290095,7.99893346 L11.1985069,7.99893346 Z M23.9968004,1.5997867 L23.9968004,22.3858152 C23.9968004,23.2768964 23.3008932,24 22.4354086,24 L1.5613918,23.9968004 C0.699106773,23.9968004 5.11522567e-16,23.2784962 5.11522567e-16,22.3858152 L5.11522567e-16,1.6109852 C5.11522567e-16,0.721503803 0.691107852,-2.55761283e-16 1.56299159,-2.55761283e-16 L22.3970137,-2.55761283e-16 C23.9968004,-2.55761283e-16 23.9968004,1.5997867 23.9968004,1.5997867 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
LayoutOne.displayName = 'LayoutOne';
export default LayoutOne;
