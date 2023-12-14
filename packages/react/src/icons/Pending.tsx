import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Pending = ({
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
          id="191.状态_进行中"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="状态_进行中"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M12,3.75 C11.6238166,3.75 11.3040075,4.0074468 11.2147865,4.36101302 L11.1924776,4.49779087 L10.6317148,11.7853004 C10.5987991,12.2130631 10.7506335,12.6312754 11.0432902,12.937197 L11.1772083,13.0611317 L15.1318427,16.2980424 C15.4613679,16.5676541 15.9415782,16.5437033 16.2426407,16.2426407 C16.5102519,15.9750295 16.5589105,15.5658696 16.3770629,15.2468129 L16.2980424,15.1318427 L13.3481797,11.5245 L12.8075224,4.49779087 C12.7750639,4.0758311 12.4232063,3.75 12,3.75 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Pending.displayName = 'Pending';
export default Pending;
