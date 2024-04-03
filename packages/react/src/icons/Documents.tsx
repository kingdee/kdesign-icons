import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Documents = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        version="1.1"
        width={size}
        height={size}
      >
        <path
          d="M594.185672 62.5L594.185672 354.996578L875 354.996578L875 888.888887C875 915.736066 854.013347 937.5 828.125 937.5L171.875 937.5C145.986653 937.5 125 915.736066 125 888.888887L125 111.111111C125 84.263936 145.986653 62.5 171.875 62.5L594.185672 62.5zM676.247366 596.753766L254.372366 596.753766L254.372366 679.392653L676.247366 679.392653L676.247366 596.753766zM488.747366 402.309322L254.372366 402.309322L254.372366 484.948209L488.747366 484.948209L488.747366 402.309322zM647.578584 62.5L875 305.555556L647.578584 305.555556L647.578584 62.5z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
Documents.displayName = 'Documents';
export default Documents;
