import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const MissingInformation = ({
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
          id="320.联系信息缺失"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="联系信息缺失"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M11,0 C14.7385429,0 17.7692308,3.07004744 17.7692308,6.85714286 C17.7692308,9.28070718 16.5280421,11.4106114 14.6544483,12.6301659 C18.9330561,14.1556654 22,18.2864482 22,23.1428571 C22,23.616244 21.621164,24 21.1538462,24 L0.846153846,24 L0.846153846,24 C0.378835993,24 0,23.616244 0,23.1428571 C0,18.2864482 3.06694391,14.1556654 7.3458561,12.6295748 C5.47195787,11.4106114 4.23076923,9.28070718 4.23076923,6.85714286 C4.23076923,3.07004744 7.26145709,0 11,0 Z M11,9.42857143 C10.4742674,9.42857143 10.0480769,9.8602969 10.0480769,10.3928571 C10.0480769,10.9254174 10.4742674,11.3571429 11,11.3571429 C11.5257326,11.3571429 11.9519231,10.9254174 11.9519231,10.3928571 C11.9519231,9.8602969 11.5257326,9.42857143 11,9.42857143 Z M11,1.71428571 C9.59804644,1.71428571 8.46153846,2.86555351 8.46153846,4.28571429 C8.46153846,4.64075449 8.74566542,4.92857143 9.09615385,4.92857143 C9.44664228,4.92857143 9.73076923,4.64075449 9.73076923,4.28571429 C9.73076923,3.57563391 10.2990232,3 11,3 C11.7009768,3 12.2692308,3.57563391 12.2692308,4.28571429 C12.2692308,4.68794721 12.1272667,5.07535315 11.871446,5.37919351 L11.7819941,5.47728433 L11.6360809,5.62509243 C11.307125,5.95832053 11.0114668,6.32364922 10.7534125,6.71575768 C10.5285114,7.05749058 10.3968445,7.4523696 10.3703618,7.86041461 L10.3653846,8.01397053 L10.3653846,8.14285714 C10.3653846,8.49789737 10.6495116,8.78571429 11,8.78571429 C11.3254535,8.78571429 11.5936873,8.53754562 11.6303459,8.21950886 L11.6346154,8.14495664 C11.6346154,7.85132846 11.7204154,7.56427003 11.8812029,7.31995664 C12.0041958,7.13307121 12.1406308,6.9557585 12.2893533,6.78944506 L12.4421289,6.62685087 L12.833126,6.23077596 C13.2500048,5.80848304 13.4982571,5.24730473 13.5339831,4.65460106 L13.5384615,4.50583049 L13.5384615,4.28571429 C13.5384615,2.86555351 12.4019536,1.71428571 11,1.71428571 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
MissingInformation.displayName = 'MissingInformation';
export default MissingInformation;
