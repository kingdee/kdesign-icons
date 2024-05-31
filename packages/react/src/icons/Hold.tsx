import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Hold = ({
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
          d="M859.371116 92.853638L859.271566 96.349801L818.868006 591.495756L817.716856 590.773206C870.871353 623.869291 906.25 682.831681 906.25 750.057237C906.25 853.610628 822.303563 937.557237 718.75 937.557237C626.373284 937.557237 549.599259 870.753438 534.102925 782.820663L533.237334 777.453469L487.087472 754.210128L471.683344 747.36385C455.911963 740.354347 448.809059 721.886791 455.818559 706.115412C462.327384 691.470556 478.715856 684.300053 493.651306 688.962613L497.066997 690.250628L513.826566 697.738706L535.805287 708.793941L537.365147 702.381838C558.456703 621.918244 631.671184 562.557237 718.75 562.557237C729.09225 562.557237 739.238766 563.394556 749.125619 565.0051L758.176331 566.7095L786.84375 215.28125L406.25 698.338488L406.25 875.057237C406.25 891.083359 394.186416 904.291837 378.644581 906.096997L375 906.307237C358.97405 906.307237 345.765572 894.243481 343.960412 878.70165L343.75 875.057237L343.75 687.557237C343.75 681.944184 345.261328 676.461778 348.088997 671.671572L350.453556 668.217481L733.71875 181.6875L155.718921 501.494737L313.253216 598.442916C326.901994 606.842166 331.828522 624.038891 325.220466 638.221303L323.489494 641.435284C315.090247 655.084063 297.893518 660.010587 283.711106 653.402531L280.497127 651.671559L77.372127 526.671559C58.197937 514.872059 57.682986 487.742738 75.139685 474.938172L78.623253 472.712425L812.998253 66.462425C833.783556 54.964171 858.789684 69.928507 859.371116 92.853638zM839.806 781.331031L597.694344 781.331031C611.578953 835.232309 660.513756 875.057237 718.750172 875.057237C776.986584 875.057237 825.921388 835.232309 839.806 781.331031zM718.750172 625.057237C660.50245 625.057237 611.55995 664.897638 597.686259 718.814847L839.814084 718.814847C825.940391 664.897638 776.997894 625.057237 718.750172 625.057237z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
Hold.displayName = 'Hold';
export default Hold;