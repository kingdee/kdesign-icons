import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ReEmploymentApplication = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="2000.再入职申请"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M19.1563672,22.1029115 C18.8215575,23.6488238 19.2549544,25.3277296 20.4565578,26.529333 C22.124659,28.1974341 24.7126081,28.3850624 26.5876385,27.0922177 L25.7159733,26.2199556 L28.9644358,25.7558895 L28.5003698,29.004352 L27.5288084,28.0320319 C25.1295504,29.8311402 21.7105784,29.6396179 19.5284257,27.4574651 C18.1331931,26.0622326 17.5517528,24.1613743 17.7841048,22.3447193 L19.1563672,22.1029115 Z M18.901969,6.95794397 L18.901969,10.3108744 C18.901969,10.3108744 19.9575231,10.5331364 19.7722668,12.2842292 C19.5875313,14.0342747 18.364527,14.5198901 17.5129779,15.3758508 C16.6615031,16.232385 16.8184823,17.5968581 15.4294912,18.2950126 C15.4294912,18.2950126 15.345426,18.349979 15.1979683,18.4329097 C15.5470775,18.5146212 15.6621362,18.6238913 15.3850717,18.7608526 L15.3850717,20.351563 C15.3850717,20.351563 15.8058917,20.4902077 16.4191512,20.6892754 C16.138254,21.4480977 15.9842466,22.2691545 15.9842466,23.1261818 C15.9842466,24.9156672 16.6556888,26.548329 17.7603812,27.7859752 L3.00090592,27.785787 C2.9016603,27.7858065 2.80296464,27.7710518 2.70806389,27.742008 C2.17995765,27.5803842 1.8828649,27.0212476 2.04367004,26.4928908 C2.86022753,23.7977447 3.75043654,22.3004094 4.71429706,22.000885 C6.2209718,21.5326785 9.25871598,20.5585659 9.81505076,20.3800348 L9.89343179,20.3548762 L9.90359959,20.3516113 L9.90359959,18.7608526 C9.62408801,18.6226816 9.74365685,18.5126931 10.0995066,18.4308872 C9.95519167,18.3489652 9.87352667,18.2950126 9.87352667,18.2950126 C8.48453554,17.5968581 8.67941426,16.2318364 7.79003998,15.3758508 C6.9006657,14.5198652 5.71553613,14.0357957 5.53077586,12.2847029 C5.34556914,10.5346574 5.90998353,10.3108744 6.34544238,10.3108744 L6.34544238,7.3337581 C6.54839956,4.92712363 9.18233338,3.33959623 11.4369071,3.07656681 C13.708378,2.63978856 18.4946233,4.09005548 18.901969,6.95794397 Z M24.2972347,20.7197905 L24.2963177,22.4697905 L26.0473375,22.4698932 L26.0473375,23.5637075 L24.2963177,23.5627905 L24.2972347,25.3138102 L23.2034205,25.3138102 L23.2033177,23.5627905 L21.4533177,23.5637075 L21.4533177,22.4698932 L23.2033177,22.4697905 L23.2034205,20.7197905 L24.2972347,20.7197905 Z M28.1909924,18.7948984 C29.5851914,20.1890974 30.1668034,22.0881733 29.9358283,23.9036069 L28.5843611,24.0455413 C28.8780914,22.5286846 28.4375911,20.8977614 27.2628602,19.7230306 C25.5947591,18.0549294 23.00681,17.8673012 21.1317796,19.1601459 L22.0034447,20.0324079 L19.944929,20.3253736 L19.9221889,20.3573522 L19.9053583,20.3319948 L18.7549822,20.496474 L19.2190483,17.2480115 L20.191414,18.2197285 C22.5906317,16.4212662 26.0090835,16.6129895 28.1909924,18.7948984 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
ReEmploymentApplication.displayName = 'ReEmploymentApplication';
export default ReEmploymentApplication;