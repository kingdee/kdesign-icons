import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ProjectCustomization = ({
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
          id="1878.项目自定义"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M26,2 C26.5522847,2 27,2.44771525 27,3 L27,8.74 L13.4282635,22.2061738 L11.4520184,26.7206566 C11.3548862,26.9425427 11.3415893,27.1921417 11.4145975,27.4230917 C11.5810666,27.9496907 12.1429093,28.2416337 12.6695083,28.0751646 L17.6291743,26.5073091 L27,17.198 L27,28 C27,28.5522847 26.5522847,29 26,29 L6,29 C5.44771525,29 5,28.5522847 5,28 L5,3 C5,2.44771525 5.44771525,2 6,2 L26,2 Z M14.1909379,23 L16.9143046,25.7233667 L14.3396111,26.6530125 C13.8201508,26.8405742 13.2469961,26.5715173 13.0594344,26.052057 C12.9684243,25.8000008 12.98239,25.5219627 13.0981994,25.2802949 L14.1909379,23 Z M24.1932949,13 L26.9897242,15.81689 L17.7964293,25.0031344 L15,22.1862444 L24.1932949,13 Z M27.6155799,11.3672175 L28.6319465,12.3835841 C29.1156405,12.867278 29.1216395,13.6455018 28.6378646,14.1292767 L27.7679773,14.999164 L25,12.2311867 L25.8698873,11.3612994 C26.3503128,10.880874 27.12465,10.8762875 27.6155799,11.3672175 Z M16,12 L10,12 C9.44771525,12 9,12.4477153 9,13 C9,13.5522847 9.44771525,14 10,14 L16,14 C16.5522847,14 17,13.5522847 17,13 C17,12.4477153 16.5522847,12 16,12 Z M20,7 L10,7 C9.44771525,7 9,7.44771525 9,8 C9,8.55228475 9.44771525,9 10,9 L20,9 C20.5522847,9 21,8.55228475 21,8 C21,7.44771525 20.5522847,7 20,7 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
ProjectCustomization.displayName = 'ProjectCustomization';
export default ProjectCustomization;
