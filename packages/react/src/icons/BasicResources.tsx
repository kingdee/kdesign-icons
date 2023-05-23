import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BasicResources = ({
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
          id="398.基础资源"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M19.1304348,0 C19.6106824,0 20,0.389317621 20,0.869565217 L20,17.3652981 L3.491264,17.3652981 C2.04333974,17.3652981 0.869565217,18.5390726 0.869565217,19.9869969 C0.869565217,21.3832096 1.96099587,22.524505 3.33721928,22.6042451 L3.491264,22.6086957 L20,22.6086957 L20,23.4782609 C20,23.9585084 19.6106824,24.3478261 19.1304348,24.3478261 L0.869565217,24.3478261 C0.389317621,24.3478261 0,23.9585084 0,23.4782609 L0,0.869565217 C0,0.389317621 0.389317621,0 0.869565217,0 L19.1304348,0 Z M20,19.1203507 L20,20.8695652 L3.4833029,20.8695652 C3.00027066,20.8695652 2.60869565,20.4779902 2.60869565,19.994958 C2.60869565,19.5119257 3.00027066,19.1203507 3.4833029,19.1203507 L20,19.1203507 Z M11.9275119,6.08695652 L8.07329191,6.08695652 C7.82443375,6.08704303 7.59182748,6.19916057 7.44077409,6.38697803 L7.38122034,6.472 L5.49333635,9.58900722 C5.34281096,9.83753347 5.32747704,10.1424338 5.44682566,10.4022844 L5.49789365,10.4974186 L7.37961269,13.5350435 C7.50696164,13.7403335 7.72270773,13.8757723 7.96324538,13.9064243 L8.06766531,13.9130435 L11.930727,13.9130435 C12.1779765,13.9130435 12.4093601,13.8025243 12.5606431,13.6167955 L12.6203873,13.5326957 L14.502999,10.4800015 C14.6555223,10.2326819 14.6732995,9.92790008 14.5560269,9.66709312 L14.5057186,9.57154991 L12.6187797,6.47043478 C12.474044,6.23275695 12.2113073,6.08695652 11.9275119,6.08695652 Z M10,7.82608696 C11.200619,7.82608696 12.173913,8.79938095 12.173913,10 C12.173913,11.200619 11.200619,12.173913 10,12.173913 C8.79938095,12.173913 7.82608696,11.200619 7.82608696,10 C7.82608696,8.79938095 8.79938095,7.82608696 10,7.82608696 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BasicResources.displayName = 'BasicResources';
export default BasicResources;
