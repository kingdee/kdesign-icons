import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const HorizontalDisplay = ({
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
          id="1139-横向显示"
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
              d="M22.5089886,16.1251986 C22.9157979,16.136519 23.3014282,16.3090632 23.5809633,16.6048368 C23.8604983,16.9006106 24.0110158,17.2953594 23.9993713,17.7021596 L23.9993713,17.7021596 L23.9993713,21.6909432 C24.006439,22.5261428 23.3438862,23.2134381 22.5089886,23.2369833 L22.5089886,23.2369833 L6.37649818,23.2369833 L3.95230723,23.2555358 L1.49101135,23.2555358 C1.13161129,23.2905783 0.774224382,23.1714494 0.507729792,22.9277753 C0.174302202,22.6244006 -0.0107699584,22.1910608 0.000628661604,21.7404165 L0.000628661604,21.7404165 L0.000628661604,17.7021596 C-0.0110157784,17.2953594 0.139501542,16.9006106 0.419036682,16.6048368 C0.698571792,16.3090632 1.08420205,16.136519 1.49101135,16.1251986 L1.49101135,16.1251986 L22.5089886,16.1251986 Z M21.644562,18.6297837 L2.41863544,18.6297837 L2.41863544,20.8931865 L21.644562,20.8931865 L21.644562,18.6297837 Z M9.35354281,7.73020071 C9.70140184,7.73020071 9.93330787,7.84615371 10.1652139,8.07805974 C10.6290259,8.54187177 10.6290259,9.23758983 10.1652139,9.70140186 C9.97968907,9.88692669 9.71995435,9.99824157 9.50474554,10.0353466 L9.35354281,10.0492609 L9.00568381,10.0492609 C9.81735487,10.744979 10.744979,11.092838 11.7885561,11.092838 C12.9577489,11.092838 14.029509,10.7031071 14.8252096,9.92364516 L15.0352404,9.70140186 C15.4990524,9.23758983 16.1947704,9.23758983 16.6585825,9.70140186 C17.0802298,10.1230492 17.1185614,10.7363544 16.7735772,11.1928486 L16.6585825,11.324744 C15.4990524,12.6002271 13.7597572,13.4118983 11.7885561,13.4118983 C10.0492609,13.4118983 8.42591872,12.7161801 7.26638863,11.6726031 L7.26638863,12.2523681 C7.26638863,12.6002271 7.15043563,12.8321331 6.9185296,13.0640391 C6.45471757,13.5278513 5.75899951,13.5278513 5.29518745,13.0640391 C5.10193246,12.8707842 4.98920035,12.5970062 4.95699118,12.3098078 L4.94732842,12.1364151 L4.94732842,8.8897308 C4.94732842,8.54187177 5.06328145,8.30996574 5.29518745,8.07805974 C5.48844247,7.88480472 5.68169749,7.77207261 5.94205495,7.73986344 L6.10685854,7.73020071 L9.35354281,7.73020071 Z M12.0204621,0 C13.7597572,0 15.3830994,0.69571806 16.5426295,1.73929515 L16.5426295,1.27548312 C16.5426295,0.92762409 16.6585825,0.69571806 16.8904885,0.46381206 C17.3543005,0 18.0500185,0 18.5138307,0.46381206 C18.7126072,0.56320035 18.8261938,0.83296857 18.8545905,1.12707678 L18.8616897,1.27548312 L18.8616897,4.52216742 C18.8616897,4.87002645 18.7457367,5.10193248 18.5138307,5.33383848 C18.3283059,5.51936331 18.0685711,5.63067819 17.8533622,5.66778315 L17.7021595,5.68169751 L14.4554752,5.68169751 C14.1076162,5.68169751 13.8757102,5.56574451 13.6438042,5.33383848 C13.1799922,4.87002645 13.1799922,4.17430839 13.6438042,3.71049633 C13.8370593,3.51724131 14.0303142,3.40450923 14.2906717,3.37230006 L14.4554752,3.3626373 L14.9192874,3.3626373 C13.9916632,2.66691924 13.0640391,2.31906021 12.0204621,2.31906021 C10.744979,2.31906021 9.66436129,2.70879117 8.86792249,3.48825306 L8.65782478,3.71049633 C8.19401272,4.17430839 7.49829466,4.17430839 7.03448263,3.71049633 C6.6128353,3.28884903 6.57450373,2.67554385 6.91948789,2.21904966 L7.03448263,2.08715418 C8.30996572,0.81167109 10.0492609,0 12.0204621,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
HorizontalDisplay.displayName = 'HorizontalDisplay';
export default HorizontalDisplay;
