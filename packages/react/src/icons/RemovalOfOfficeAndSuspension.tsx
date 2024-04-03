import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const RemovalOfOfficeAndSuspension = ({
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
          d="M781.25 725L865.625 725C881.15801 725 893.75 737.59199 893.75 753.125L893.75 921.875C893.75 937.40801 881.15801 950 865.625 950L584.375 950C568.841992 950 556.25 937.40801 556.25 921.875L556.25 753.125C556.25 737.59199 568.841992 725 584.375 725L612.5 725L612.5 668.75C612.5 606.617965 662.867965 556.25 725 556.25C787.132035 556.25 837.5 606.617965 837.5 668.75L781.25 668.75L781.25 725zM781.25 725L781.25 668.75C781.25 637.683985 756.066015 612.5 725 612.5C693.933985 612.5 668.75 637.683985 668.75 668.75L668.75 725L781.25 725zM528.125 921.875L134.375 921.875C118.841991 921.875 106.25 909.28301 106.25 893.75C106.25 721.20697 217.231365 574.585025 371.703912 521.374351C297.001722 477.36646 246.875 396.099592 246.875 303.125C246.875 163.327923 360.202923 50 500 50C639.797075 50 753.125 163.327923 753.125 303.125C753.125 396.099592 702.99828 477.36646 628.29609 521.374351C642.900345 526.405034 657.115865 532.270658 670.885615 538.91419C620.081745 560.113295 584.375 610.26177 584.375 668.75L584.375 696.875C553.308983 696.875 528.125 722.058985 528.125 753.125L528.125 921.875z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
RemovalOfOfficeAndSuspension.displayName = 'RemovalOfOfficeAndSuspension';
export default RemovalOfOfficeAndSuspension;
