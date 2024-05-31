import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const WorldcloudO = ({
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
          id="周刊"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="视觉修正模版" transform="translate(-2.000000, -0.500000)"></g>
          <path
            d="M29,5 C30.1045695,5 31,5.8954305 31,7 L31,24.9794413 C30.998629,26.0834756 30.1040336,26.9786843 29.0000005,26.9808119 L2.99999953,26.9986294 C1.89543123,27.0007565 0.99938731,26.1059398 0.998630361,25.0013706 L1,10.9724139 C1,9.87542272 1.88928704,8.98613568 2.9862782,8.98613568 L3,8.98618307 L4.00002386,8.9930917 C4.55340938,8.99691475 5,9.44660128 5,10 C5,10.5522847 4.55228475,11 4,11 L3,11 L3,25 L29,25 L29,7 L8,7 L8,21.0809209 C8,21.5885143 7.58851426,22 7.08092087,22 C6.60977459,22 6.22146316,21.6453419 6.1683939,21.188433 L6.16221308,21.0812922 L6.16790364,6.99999984 C6.16915831,5.89574638 7.06445802,5.00080842 8.16871189,5 L29,5 Z M27,22 C27.5522847,22 28,22.4477153 28,23 C28,23.5128358 27.6139598,23.9355072 27.1166211,23.9932723 L27,24 L11,24 C10.4477153,24 10,23.5522847 10,23 C10,22.4871642 10.3860402,22.0644928 10.8833789,22.0067277 L11,22 L27,22 Z M17,9 C18.6568542,9 20,10.3431458 20,12 L20,15 C20,16.6568542 18.6568542,18 17,18 L13,18 C11.3431458,18 10,16.6568542 10,15 L10,12 C10,10.3431458 11.3431458,9 13,9 Z M27,15 C27.5522847,15 28,15.4477153 28,16 C28,16.5128358 27.6139598,16.9355072 27.1166211,16.9932723 L27,17 L22,17 C21.4477153,17 21,16.5522847 21,16 C21,15.4871642 21.3860402,15.0644928 21.8833789,15.0067277 L22,15 L27,15 Z M17,11 L13,11 C12.4477153,11 12,11.4477153 12,12 L12,15 C12,15.5522847 12.4477153,16 13,16 L17,16 C17.5522847,16 18,15.5522847 18,15 L18,12 C18,11.4477153 17.5522847,11 17,11 Z M27,11 C27.5522847,11 28,11.4477153 28,12 C28,12.5128358 27.6139598,12.9355072 27.1166211,12.9932723 L27,13 L22,13 C21.4477153,13 21,12.5522847 21,12 C21,11.4871642 21.3860402,11.0644928 21.8833789,11.0067277 L22,11 L27,11 Z"
            id="形状结合"
            fill={fill}
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
WorldcloudO.displayName = 'WorldcloudO';
export default WorldcloudO;