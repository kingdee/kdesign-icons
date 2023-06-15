import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const WordModel = ({
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
          id="321.字段模型"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="字段模型"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.84615386,2.76923078 L1.84615386,20.7692308 L1.84615386,20.7692308 C1.84615386,21.6923077 2.30769232,22.1538461 3.23076924,22.1538461 L4.61538461,22.1538461 L20.3076923,22.1538461 L20.3076923,24 L1.84615386,24 C0.923076917,24 0,23.0769231 0,22.1538461 L0,2.76923078 L1.84615386,2.76923078 L1.84615386,2.76923078 Z M21.9692308,0 C23.089405,0.00278792861 23.9966545,0.758829188 24,1.69230768 L24,1.69230768 L24,18.6153847 C23.9966545,19.5488631 23.089405,20.3049045 21.9692308,20.3076923 L21.9692308,20.3076923 L5.72307693,20.3076923 C4.6020923,20.3043076 3.69636924,19.5495385 3.69230769,18.6153847 L3.69230769,18.6153847 L3.69230769,1.69230768 C3.69565318,0.758829188 4.60290274,0.00278792861 5.72307693,0 L5.72307693,0 L21.9692308,0 Z M19.3846154,3.69230769 L8.30769231,3.69230769 L8.30769231,3.69230769 L8.30769231,5.53846153 L8.30769231,5.53846153 L12.9216,5.53846153 L12.9230769,16.6153846 L14.7692308,16.6153846 L14.7677538,5.53846153 L19.3846154,5.53846153 L19.3846154,3.69230769 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
WordModel.displayName = 'WordModel';
export default WordModel;
