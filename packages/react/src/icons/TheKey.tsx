import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const TheKey = ({
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
          d="M777.777778 0C900.507722 0 1000 99.492278 1000 222.222222L1000 777.777778C1000 900.507722 900.507722 1000 777.777778 1000L222.222222 1000C99.492278 1000 0 900.507722 0 777.777778L0 222.222222C0 99.492278 99.492278 0 222.222222 0L777.777778 0zM516.236728 202.089516C496.047199 193.122218 472.410921 202.219635 463.443623 222.409164L385.944444 396.722222L207.118831 409.061994C197.238191 409.742991 187.961528 414.065394 181.08444 421.192559L176.955973 426.225121C165.989749 442.054624 167.786787 463.946462 182.094432 477.752084L311.555556 602.666667L286.096311 762.437539C284.547095 772.154117 286.633508 782.100817 291.956633 790.375856L295.519222 795.1124C308.357237 809.788822 330.347378 813.241428 347.237624 802.376356L500 704.055556L652.762378 802.376356C661.037417 807.699478 670.984117 809.785894 680.700694 808.236678L686.003261 807.021467C704.866722 801.33175 717.092156 782.435389 713.903689 762.437539L688.388889 602.666667L817.905567 477.752084C825.032733 470.874996 829.355139 461.598334 830.036133 451.717693L830.04505 446.277668C828.745117 426.617727 813.083683 410.454398 792.881167 409.061994L614 396.722222L536.556377 222.409164C532.533947 213.352818 525.293074 206.111945 516.236728 202.089516zM500 304.277778L559.573528 438.4681L562.146717 443.331409C568.868183 454.160787 580.444589 461.245197 593.379533 462.136703L728.388889 471.444444L632.133906 564.363822L628.414683 568.48755C621.6083 577.178489 618.643583 588.382839 620.407606 599.446656L638.666667 714.055556L521.640246 638.759833L516.536776 635.977661C504.288021 630.413311 489.893129 631.340706 478.359754 638.759833L361.277778 714.055556L379.592394 599.446656L380.08445 593.915322C380.296866 582.878378 375.92839 572.143233 367.866094 564.363822L271.555556 471.444444L406.620466 462.136703C421.403258 461.117839 434.411635 452.010283 440.426474 438.4681L500 304.277778z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
TheKey.displayName = 'TheKey';
export default TheKey;
