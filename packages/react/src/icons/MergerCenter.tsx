import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const MergerCenter = ({
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
          id="790.合并中心"
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
              d="M12.4779966,13.7287631 L21.3556101,19.2433763 L22.1057272,17.7313525 L13.2634827,12.2388449 L13.2634827,2.94711966 L11.7897753,2.94711966 L11.7897753,12.2196867 L2.94753074,17.7976693 L3.74038533,19.2419026 L12.4794703,13.7302368 L12.4779966,13.7287631 Z M23.315641,22.2851084 L14.1197067,27.560981 C13.0881115,28.1519377 11.8148283,28.1460428 10.7891279,27.5447702 L1.65066821,22.1686855 C0.621755796,21.562042 -0.0069191909,20.4540023 5.74687475e-05,19.2595871 L0.056116781,8.60615615 C0.0638893167,7.41265773 0.703110827,6.31252386 1.73614324,5.71474219 L10.935025,0.43886963 C11.9676263,-0.152030439 13.2373321,-0.14584772 14.26413,0.455080411 L23.4040634,5.83116508 C24.4324094,6.43817935 25.0604838,7.54614965 25.0532057,8.74026352 L24.9971411,19.3936945 C24.9902659,20.5874376 24.350804,21.6879851 23.3171147,22.2851084 L23.315641,22.2851084 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
MergerCenter.displayName = 'MergerCenter';
export default MergerCenter;
