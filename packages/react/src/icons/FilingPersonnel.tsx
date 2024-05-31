import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const FilingPersonnel = ({
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
          d="M783.008313 159.722222C810.198803 159.722222 832.24105 181.486158 832.24105 208.333333L832.24105 888.888887C832.24105 915.736066 810.198803 937.5 783.008313 937.5L142.982737 937.5C115.792247 937.5 93.75 915.736066 93.75 888.888887L93.75 208.333333C93.75 181.486158 115.792247 159.722222 142.982737 159.722222L783.008313 159.722222zM832.24105 62.5C858.355716 62.5 883.400794 72.743026 901.866653 90.97573C920.332509 109.208433 930.706522 133.937286 930.706522 159.722222L930.706522 840.277778L881.473784 840.277778L881.473784 159.722222C881.473784 132.875047 859.431538 111.111111 832.24105 111.111111L192.215473 111.111111L192.215473 62.5L832.24105 62.5zM467.199347 330.326088C398.866422 330.326088 360.925484 377.380697 360.925484 433.587559C360.925484 465.46645 373.088816 486.706834 395.854034 507.983841C407.98075 517.060241 418.61925 532.274541 418.61925 545.926088C418.61925 559.577631 409.506234 573.192562 373.088816 589.931691C318.370822 609.645941 248.586957 636.986956 248.586957 702.269566L248.586957 735.673284C254.650314 746.311788 265.288816 756.913672 277.416185 756.913672L444.434128 756.950944L444.434128 694.681378C429.257753 685.567706 420.144081 671.916159 420.144081 656.739131C420.144081 632.411813 442.9093 611.171425 467.199347 611.171425C494.540363 611.171425 514.292534 630.886328 514.292534 656.701859C514.292534 671.916159 505.178863 688.617366 489.964563 694.644106L489.964563 756.913672L656.983816 756.913672C672.160844 756.913672 681.274516 747.8 681.274516 734.148453L681.274516 700.781353C681.274516 633.973913 609.92855 609.683866 556.772656 588.443478C520.318622 574.754663 515.780094 561.103116 515.780094 545.926088C515.780094 532.274541 524.893766 518.585725 538.582584 507.983841C561.3478 489.75715 573.474516 465.46645 573.474516 433.587559C573.474516 380.39505 537.019828 330.326088 467.199347 330.326088z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
FilingPersonnel.displayName = 'FilingPersonnel';
export default FilingPersonnel;