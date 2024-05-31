import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ProposedDismissal = ({
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
          d="M500 50L511.915759 50.275512C646.180445 56.497489 753.125 167.322125 753.125 303.125C753.125 369.454435 727.61248 429.825101 685.8651 474.959344C564.64457 493.701354 471.875 598.51693 471.875 725C471.875 804.54017 508.562135 875.511605 565.937917 921.91581L134.375 921.875C118.841991 921.875 106.25 909.28301 106.25 893.75C106.25 721.20697 217.231365 574.585025 371.703912 521.374351C297.001722 477.36646 246.875 396.099592 246.875 303.125C246.875 163.327923 360.202923 50 500 50zM725 528.125C833.73106 528.125 921.875 616.26894 921.875 725C921.875 833.73106 833.73106 921.875 725 921.875C616.26894 921.875 528.125 833.73106 528.125 725C528.125 616.26894 616.26894 528.125 725 528.125zM837.5 696.875L612.5 696.875C596.966992 696.875 584.375 709.46699 584.375 725C584.375 738.80712 594.324228 750.29047 607.444495 752.67187L612.5 753.125L837.5 753.125C853.03301 753.125 865.625 740.53301 865.625 725C865.625 711.19288 855.67577 699.70953 842.555505 697.32813L837.5 696.875z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
ProposedDismissal.displayName = 'ProposedDismissal';
export default ProposedDismissal;