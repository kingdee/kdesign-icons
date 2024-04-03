import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Lixin = ({
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
          d="M195.246286 739.561838C311.299362 885.373344 519.649302 928.284213 685.919163 832.288263C775.063306 780.820869 838.167062 697.3021 864.281394 599.842081C868.189963 585.255117 883.18355 576.598564 897.770513 580.507129C912.357475 584.415694 921.014031 599.409283 917.105463 613.996247C887.274425 725.327194 815.097019 820.855081 713.262913 879.649031C525.406654 988.107894 290.549203 941.415281 157.07121 779.329669L156.801366 779.615625L149.025157 844.159062C147.218783 859.152169 133.600109 869.842137 118.606997 868.035763C103.613885 866.229388 92.923921 852.610713 94.730296 837.6176L111.083942 701.88045C112.513849 690.012056 120.442558 682.079825 129.898261 679.101169C131.695679 678.524963 133.567292 678.131269 135.488451 677.939431C138.138801 677.661069 140.830394 677.754813 143.466648 678.240438L277.239256 694.357394C292.232367 696.163769 302.922331 709.782438 301.115957 724.77555C299.309583 739.768663 285.690909 750.458625 270.697797 748.652256L195.246286 739.561838L195.246286 739.561838zM830.473613 220.407459L838.235 155.987044C840.041375 140.993932 853.66005 130.303969 868.653156 132.110343C883.646269 133.916716 894.336238 147.535391 892.529863 162.528503L876.877163 292.447687C878.127094 302.976922 873.155081 313.727601 863.390519 319.365172C856.268331 323.477171 848.065194 324.020949 840.851156 321.551173L710.0209 305.788711C695.027788 303.982337 684.337825 290.363663 686.1442 275.370551C687.950575 260.377439 701.56925 249.687476 716.562363 251.493849L792.595319 260.654319L792.669394 260.575817C676.401544 115.880929 468.847691 73.546939 303.106665 169.237565C213.962522 220.70496 150.858768 304.223732 124.744434 401.683749C120.835869 416.270713 105.842281 424.927266 91.255317 421.0187C76.668353 417.110135 68.011801 402.116546 71.920366 387.529583C101.751404 276.198634 173.928808 180.67075 275.762915 121.876801C462.926326 13.817955 696.744869 59.768236 830.473613 220.407459L830.473613 220.407459z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
Lixin.displayName = 'Lixin';
export default Lixin;
