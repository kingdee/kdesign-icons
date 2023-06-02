import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Plugin = ({
  size = '1em',
  color = 'currentColor',
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
          id="1186-插件"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M9.80056131,0.216593165 C10.3007618,-0.0721977216 10.9170341,-0.0721977216 11.4172347,0.216593165 L11.4172347,0.216593165 L20.4094593,5.40825648 C20.9096598,5.69704737 21.217796,6.23075493 21.217796,6.80833667 L21.217796,6.80833667 L21.217796,17.1916633 C21.217796,17.769245 20.9096598,18.3029526 20.4094593,18.5917435 L20.4094593,18.5917435 L11.4172347,23.7834068 C10.9170341,24.0721977 10.3007618,24.0721977 9.80056131,23.7834068 L9.80056131,23.7834068 L0.808336673,18.5917435 C0.308136181,18.3029526 0,17.769245 0,17.1916633 L0,17.1916633 L0,6.80833667 C0,6.23075493 0.308136181,5.69704737 0.808336673,5.40825648 L0.808336673,5.40825648 L9.80056131,0.216593165 Z M10.608898,1.61667336 L1.61667335,6.80833667 L1.61667335,17.1916633 L10.608898,22.3833266 L19.6011227,17.1916633 L19.6011227,6.80833667 L10.608898,1.61667336 Z M10.608898,5.5333066 C11.05533,5.5333066 11.4172347,5.89521127 11.4172347,6.34164328 L11.4171407,11.5327814 L15.9133469,14.1291382 C16.2999684,14.3523543 16.4324347,14.8467252 16.2092187,15.2333467 C15.9860028,15.6199681 15.4916317,15.7524345 15.1050103,15.5292184 L10.5255454,12.8851286 L5.94645313,15.5292184 C5.58744748,15.7364904 5.13553539,15.6370772 4.89408892,15.312267 L4.84224469,15.2333467 C4.63497269,14.874341 4.73438594,14.4224289 5.05919613,14.1809825 L5.13811645,14.1291382 L9.80046739,11.4365893 L9.80056131,6.34164328 C9.80056131,5.89521127 10.162466,5.5333066 10.608898,5.5333066 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Plugin.displayName = 'Plugin';
export default Plugin;