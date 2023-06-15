import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DataCenter = ({
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
          id="442.数据中台"
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
              d="M20.2115342,2.7734662 C20.7444539,2.7734662 21.1764705,3.19686027 21.1764705,3.72679382 L21.1764705,24.0066724 C21.1764705,24.5331807 20.7534626,24.96 20.2115342,24.96 L0.964936366,24.96 C0.432016712,24.96 0,24.5366059 0,24.0066724 L0,19.16352 L4.43904,19.16352 L4.43983513,23.66594 L18.5808876,15.2565716 L4.43983393,6.71819843 L4.43904,11.43744 L0,11.43744 L0,3.72679382 C0,3.20028552 0.423008041,2.7734662 0.964936366,2.7734662 L20.2115342,2.7734662 Z M22.08,0 C23.1403867,0 24,0.859613276 24,1.92 L24,22.1866832 L22.58784,22.1866832 L22.5882353,2.34680783 C22.5882353,1.85448542 22.2176368,1.44872098 21.7401916,1.39326646 L21.6282353,1.38680783 L2.82336,1.38624 L2.82336,0 L22.08,0 Z M5.79216796,9.58816408 L15.6673828,15.36 L5.79216796,21.1083399 L5.79168,17.2796841 L0,17.28 L0,13.44 L5.79168,13.4396841 L5.79216796,9.58816408 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DataCenter.displayName = 'DataCenter';
export default DataCenter;
