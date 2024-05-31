import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const GetRecords = ({
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
          d="M840.625 62.5C859.609788 62.5 875 77.890212 875 96.875L875 437.5C875 454.758898 861.0089 468.75 843.75 468.75C826.4911 468.75 812.5 454.758898 812.5 437.5L812.5 125L187.5 125L187.5 875L437.5 875C452.841243 875 465.600523 886.0547 468.246521 900.632775L468.75 906.25C468.75 923.5089 454.758898 937.5 437.5 937.5L159.523809 937.5C140.193839 937.5 125 921.735644 125 902.853263L125 97.146739L127.557358 84.765513C132.954659 72.257637 142.359163 62.5 159.523809 62.5L840.625 62.5zM814.231131 541.165656C827.452006 527.944781 848.887281 527.944781 862.108156 541.165656L958.834344 637.891844C972.055219 651.112719 972.055219 672.547994 958.834344 685.768869L717.018869 927.584344C710.669981 933.933231 702.059037 937.5 693.080356 937.5L596.354167 937.5C577.657027 937.5 562.5 922.342975 562.5 903.645831L562.5 806.919644C562.5 797.940963 566.066768 789.330019 572.415656 782.981131zM838.140625 612.973958L630.208331 820.838544L630.208331 869.791669L679.026044 869.791669L887.026044 661.859375L838.140625 612.973958zM500 531.25C517.258898 531.25 531.25 545.241102 531.25 562.5C531.25 579.758898 517.258898 593.75 500 593.75L343.75 593.75C326.491102 593.75 312.5 579.758898 312.5 562.5C312.5 545.241102 326.491102 531.25 343.75 531.25L500 531.25zM312.5 312.5L687.5 312.5C704.7589 312.5 718.75 326.491102 718.75 343.75C718.75 361.008898 704.7589 375 687.5 375L312.5 375C295.241102 375 281.25 361.008898 281.25 343.75C281.25 326.491102 295.241102 312.5 312.5 312.5z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
GetRecords.displayName = 'GetRecords';
export default GetRecords;