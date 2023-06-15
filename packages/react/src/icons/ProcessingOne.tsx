import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ProcessingOne = ({
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
          id="1391-进行中"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M11.9844726,1.73977812e-05 C18.5508533,1.73977812e-05 23.8860375,5.3604191 23.9688373,11.9999995 C23.9688373,18.6395799 18.5508533,23.9999816 11.9844726,23.9999816 C8.80165108,24.0054056 5.74785091,22.7423746 3.49871724,20.4903132 C1.24958356,18.2382519 -0.00947388916,15.1828113 5.36816005e-05,11.9999995 C-0.00947388916,8.81718773 1.24958356,5.76174715 3.49871724,3.50968579 C5.74785091,1.25762444 8.80165108,-0.00540660295 11.9844726,1.73977812e-05 L11.9844726,1.73977812e-05 Z M11.9844726,21.9203703 C17.4024566,21.9203703 21.8340436,17.5199832 21.8340436,11.9999995 C21.8340436,6.48001579 17.4024567,2.07962878 11.9844726,2.07962878 C6.48488885,2.07962878 2.13370167,6.56041555 2.13370167,11.9999995 C2.13370167,17.4395835 6.48488885,21.9203703 11.9844726,21.9203703 Z M12.0000726,4.80002075 L12.0000726,11.9999995 L19.2000513,11.9999995 C19.2000513,15.976438 15.976511,19.1999783 12.0000726,19.1999783 C8.02363411,19.1999783 4.80009382,15.976438 4.80009382,11.9999995 C4.80009382,8.02356105 8.02363411,4.80002075 12.0000726,4.80002075 L12.0000726,4.80002075 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ProcessingOne.displayName = 'ProcessingOne';
export default ProcessingOne;
