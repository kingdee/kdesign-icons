import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const LocationSearch = ({
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
          id="1330-定位搜索"
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
              d="M9.24205013,11.0543679 C11.150645,11.3520815 12.6479185,12.849355 12.9456321,14.7579499 L14.0741913,22.071332 L22.339696,1.65871448 L1.92866805,9.92421914 L9.24205013,11.0527785 L9.24205013,11.0543679 Z M0.865279071,8.67803538 L22.0472243,0.100984759 C22.5762613,-0.10942897 23.1797635,0.0150605721 23.5823515,0.417648526 C23.9849394,0.820236479 24.109429,1.42373869 23.8990152,1.95277572 L15.3203751,23.1347209 C15.179448,23.4795142 14.9062514,23.7534693 14.5618502,23.8953519 C14.217449,24.0372344 13.8305592,24.0352143 13.4876584,23.889743 C13.02666,23.6977673 12.698575,23.2799856 12.6213699,22.786616 L11.4165137,14.9773036 C11.2240421,13.743702 10.256298,12.7759579 9.02269637,12.5834863 L1.21179446,11.3786301 C0.440780397,11.2584756 -0.092142643,10.5431996 0.0132962947,9.77003569 C0.0814082585,9.27979745 0.406329463,8.86334061 0.865279071,8.67803538 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
LocationSearch.displayName = 'LocationSearch';
export default LocationSearch;
