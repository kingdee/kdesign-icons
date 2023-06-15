import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const OneLineSelect = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="209.单列选择"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="单列选择"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M8.11966717,14.8261275 L3.60009593,8.80000882 C2.93735824,7.91635509 1.68376314,7.73726937 0.800112861,8.40000962 C-0.083537391,9.06275001 -0.262622414,10.31635 0.400115298,11.2000037 L6.40007899,19.1999868 C7.16275692,20.2168947 8.66816876,20.2736223 9.50521369,19.3169958 L23.505129,3.31702961 C24.2324887,2.48575809 24.1482542,1.22223553 23.3169859,0.49487297 C22.4857177,-0.232489591 21.2222001,-0.148254774 20.4948404,0.683016747 L8.11966717,14.8261275 Z"
              id="路径"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
OneLineSelect.displayName = 'OneLineSelect';
export default OneLineSelect;
