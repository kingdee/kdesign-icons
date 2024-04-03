import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const GetTheObject = ({
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
          d="M840.625 62.5C859.609788 62.5 875 77.890212 875 96.875L875 531.25C875 548.508898 861.0089 562.5 843.75 562.5C826.4911 562.5 812.5 548.508898 812.5 531.25L812.5 125L187.5 125L187.5 875L531.25 875C546.591243 875 559.350523 886.0547 561.996521 900.632775L562.5 906.25C562.5 923.5089 548.508898 937.5 531.25 937.5L159.523809 937.5C140.193839 937.5 125 921.735644 125 902.853263L125 97.146739C125 78.264359 140.193839 62.5 159.523809 62.5L840.625 62.5zM687.5 531.25C773.794494 531.25 843.75 601.205508 843.75 687.5C843.75 727.390569 828.80155 763.789738 804.200794 791.401363C805.305506 792.482994 806.324613 793.775181 807.251569 795.165619L869.751569 888.915619C879.325088 903.275888 875.44465 922.678056 861.084381 932.251569C846.724113 941.825088 827.321944 937.94465 817.748431 923.584381L755.248431 829.834381L754.597344 828.650306C734.267656 838.3315 711.516606 843.75 687.5 843.75C601.205508 843.75 531.25 773.794494 531.25 687.5C531.25 601.205508 601.205508 531.25 687.5 531.25zM687.5 593.75C635.723306 593.75 593.75 635.723306 593.75 687.5C593.75 739.276694 635.723306 781.25 687.5 781.25C739.276694 781.25 781.25 739.276694 781.25 687.5C781.25 635.723306 739.276694 593.75 687.5 593.75zM500 531.25C517.258898 531.25 531.25 545.241102 531.25 562.5C531.25 579.758898 517.258898 593.75 500 593.75L343.75 593.75C326.491102 593.75 312.5 579.758898 312.5 562.5C312.5 545.241102 326.491102 531.25 343.75 531.25L500 531.25zM312.5 312.5L687.5 312.5C704.7589 312.5 718.75 326.491102 718.75 343.75C718.75 361.008898 704.7589 375 687.5 375L312.5 375C295.241102 375 281.25 361.008898 281.25 343.75C281.25 326.491102 295.241102 312.5 312.5 312.5z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
GetTheObject.displayName = 'GetTheObject';
export default GetTheObject;
