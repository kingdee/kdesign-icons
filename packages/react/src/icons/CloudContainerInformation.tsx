import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CloudContainerInformation = ({
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
          id="677.云容器信息"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 8.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M19.6686879,15.428667 L4.08826653,15.428667 C1.7568294,15.428667 0,13.5273303 0,11.0050859 C0,8.86897815 1.24673376,7.16070977 3.08007752,6.70506856 L3.08007744,6.70506887 C3.55860154,4.38938103 5.54832148,2.73606711 7.84797142,2.74330716 C8.53660054,2.74330716 9.21322741,2.89158363 9.83584413,3.17578019 L9.83584411,3.17578024 C11.013068,1.19231953 13.1125991,-0.0123567439 15.3703818,0 C18.9425517,0 21.851597,2.96572193 21.851597,6.61548526 C21.851597,6.80083084 21.8440956,6.98772095 21.8290929,7.16997745 L21.829093,7.1699775 C23.1666266,7.95614684 23.9944233,9.41793457 24,11.0035419 C24,13.4439253 22.0571357,15.427123 19.6686879,15.427123 L19.6686879,15.428667 Z"
              id="路径"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CloudContainerInformation.displayName = 'CloudContainerInformation';
export default CloudContainerInformation;
