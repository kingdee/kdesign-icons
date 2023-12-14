import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DiffOnCommitGrey = ({
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
          id="1469-提交时差异比较-灰色"
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
              d="M6,6 L6,1.5 C6,0.671572877 6.67157286,-2.39808173e-16 7.5,-2.39808173e-16 L21,-2.39808173e-16 C21.8284271,-2.39808173e-16 22.5,0.671572877 22.5,1.5 L22.5,16.5 C22.5,17.3284271 21.8284271,18 21,18 L16.5,18 L16.5,22.5 C16.5,23.3284271 15.8284271,24 15,24 L1.5,24 C0.671572877,24 9.59232694e-16,23.3284271 9.59232694e-16,22.5 L9.59232694e-16,7.5 C9.59232694e-16,6.67157286 0.671572877,6 1.5,6 L6,6 Z M7.49999999,6 L15,6 C15.8284271,6 16.5,6.67157286 16.5,7.5 L16.5,16.5 L21,16.5 L21,1.5 L7.49999999,1.5 L7.49999999,6 Z M1.5,7.49999999 L1.5,22.5 L15,22.5 L15,7.49999999 L1.5,7.49999999 Z M7.49999999,13.9395 L6.129,15.3105 L5.06849999,14.25 L7.18949999,12.129 L8.25,11.0685 L11.4315,14.25 L10.371,15.3105 L8.99999999,13.9395 L8.99999999,19.5 L7.49999999,19.5 L7.49999999,13.9395 Z M16.4745,18 L16.4745,16.5 L21,16.5 L21,1.5 L7.49999999,1.5 L7.49999999,6.89099999 L5.99999999,6.89099999 L5.99999999,1.5 C5.99999999,0.671572877 6.67157286,-2.39808173e-16 7.49999999,-2.39808173e-16 L21,-2.39808173e-16 C21.8284271,-2.39808173e-16 22.5,0.671572877 22.5,1.5 L22.5,16.5 C22.5,17.3284271 21.8284271,18 21,18 L16.4745,18 L16.4745,18 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DiffOnCommitGrey.displayName = 'DiffOnCommitGrey';
export default DiffOnCommitGrey;
