import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const StandardInventoryLibrary = ({
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
          d="M847.710213 273.124311C861.569709 273.124311 873.008838 284.335668 874.766487 298.633178L875 302.267148L875 783.357163C875 798.212984 864.540544 810.474441 851.122122 812.272913L847.710213 812.5L152.289789 812.5C138.430291 812.5 126.904721 801.288644 125.213565 786.991134L125 783.357163L125 302.267148C125 287.411328 135.459455 275.149871 148.877878 273.351397L152.289789 273.124311L847.710213 273.124311zM669.812322 397.875816C662.831569 397.875816 656.241738 400.653122 651.290056 405.656075L466.213316 594.891609C464.312603 596.835031 461.054238 600.166616 459.347475 601.911728L458.230322 603.053988L458.230322 603.053988L382.726487 525.765009C377.737575 520.724009 371.147744 517.946706 364.185603 517.946706C357.223466 517.946706 350.689478 520.724009 345.756413 525.765009C340.804731 530.748941 338.086891 537.425887 338.068275 544.540353C338.049659 551.711888 340.786116 558.483947 345.775028 563.582012L439.838363 659.722425C444.752813 664.725378 451.324028 667.483659 458.304784 667.483659C465.285538 667.483659 471.856753 664.725378 476.771206 659.722425L688.334591 443.511125C693.286272 438.413056 696.022728 431.717091 696.022728 424.5836C696.022728 417.450113 693.304888 410.735119 688.334591 405.694122C683.382909 400.653122 676.793078 397.875816 669.812322 397.875816zM806.215884 187.5C813.683472 187.5 819.89525 192.450858 821.183453 199.219829L821.428572 201.837298L821.428572 229.980884C821.428572 237.061031 816.046528 242.882485 808.9502 244.088733L806.215884 244.318182L209.932197 244.318182C202.335315 244.318182 182.314293 239.05306 179.030213 231.958531L178.571428 229.980884L178.571428 201.837298C178.571428 194.535897 197.863982 188.573085 207.550344 187.629987L209.932197 187.5L806.215884 187.5z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
StandardInventoryLibrary.displayName = 'StandardInventoryLibrary';
export default StandardInventoryLibrary;