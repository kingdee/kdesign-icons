import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const UniversalIconsThree = ({
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
          id="1396-通用图标3"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M6.35294116,5.64705881 C6.35294116,8.76584327 8.8812155,11.2941176 12,11.2941176 C15.1187844,11.2941176 17.6470588,8.76584327 17.6470588,5.64705881 C17.6470588,2.52827435 15.1187844,-3.51091704e-16 12,-3.51091704e-16 C8.8812155,-3.51091704e-16 6.35294116,2.52827435 6.35294116,5.64705881 M0,16.9411764 C0,20.0599608 2.52827438,22.5882351 5.64705881,22.5882351 C8.76584323,22.5882351 11.2941176,20.0599608 11.2941176,16.9411764 C11.2941176,13.822392 8.76584323,11.2941177 5.64705881,11.2941177 C2.52827438,11.2941177 0,13.822392 0,16.9411764 M12.7058824,16.9411764 C12.7058824,20.0599609 15.2341567,22.5882352 18.3529412,22.5882352 C21.4717256,22.5882352 24,20.0599609 24,16.9411764 C24,13.822392 21.4717256,11.2941177 18.3529412,11.2941177 C15.2341568,11.2941177 12.7058824,13.822392 12.7058824,16.9411764"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
UniversalIconsThree.displayName = 'UniversalIconsThree';
export default UniversalIconsThree;
