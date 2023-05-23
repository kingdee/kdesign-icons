import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const MiProcurement = ({
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
          id="827.vmi采购"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(3.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M22.105264,7.40526296 C21.6631588,7.48484191 21.260843,7.68968401 20.9469483,8.00357874 L8.88336965,20.0818942 C8.84505387,20.1541047 8.82589597,20.1776837 8.81852755,20.208631 L7.39936969,25.4122099 C7.31679986,25.7190335 7.40318673,26.0466305 7.62631706,26.2728414 C7.85113363,26.4941746 8.17657992,26.579464 8.48105387,26.4968414 L13.6448432,25.0865257 C13.7107415,25.0966382 13.7775146,25.0747453 13.8246327,25.0275783 L22.105264,16.7410522 L22.105264,26.5159993 C22.105264,27.3353677 21.4435799,28 20.6212641,28 L1.48400143,28 C1.09030026,28.0003908 0.712611526,27.844167 0.434222626,27.5657781 C0.155833725,27.2873892 -0.000390082215,26.9097005 7.31489784e-07,26.5159993 L7.31489784e-07,7.37873665 C7.31489784e-07,6.55936825 0.661685659,5.89473669 1.48400143,5.89473669 L20.6212641,5.89473669 C21.4406325,5.89473669 22.105264,6.55642088 22.105264,7.37873665 L22.105264,7.40526296 Z M22.744843,13.7332628 L20.6315799,11.5831576 L22.7787377,9.57305238 C22.9821061,9.36968396 23.3755798,9.39915765 23.6098956,9.63199975 L24.849264,10.8757892 C24.9762777,11.0002268 25.0493142,11.1695868 25.0526324,11.3473681 C25.0546584,11.4803071 25.003765,11.6086008 24.9111587,11.7039997 L22.744843,13.7317891 L22.744843,13.7332628 Z M10.6164222,21.2284205 L18.5522115,13.2631575 L20.6315799,15.379368 L12.7488432,23.2223152 L9.16926438,24.6517888 L10.6178959,21.2284205 L10.6164222,21.2284205 Z M4.42105398,5.89473669 C4.42105398,2.63789467 7.39052759,0 11.0526328,0 C14.7147379,0 17.6842115,2.63789467 17.6842115,5.89473669 L16.2105274,5.89473669 C16.2105274,3.45284201 13.9012643,1.47368417 11.0526328,1.47368417 C8.20400125,1.47368417 5.89473815,3.45284201 5.89473815,5.89473669 L4.42105398,5.89473669 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
MiProcurement.displayName = 'MiProcurement';
export default MiProcurement;
