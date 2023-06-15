import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CopyField = ({
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
          id="1434-复制字段"
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
              d="M19.3846154,3.69230769 C19.8944169,3.69230769 20.3076923,4.10558308 20.3076923,4.61538462 L20.3076923,4.61538462 L20.3076923,23.0769231 C20.3076923,23.5867246 19.8944169,24 19.3846154,24 L19.3846154,24 L0.923076923,24 C0.413275658,24 0,23.5867246 0,23.0769231 L0,23.0769231 L0,4.61538462 C0,4.10558308 0.413275658,3.69230769 0.923076923,3.69230769 L0.923076923,3.69230769 L19.3846154,3.69230769 Z M18.4615385,5.53846154 L1.84615385,5.53846154 L1.84615385,22.1538462 L18.4615385,22.1538462 L18.4615385,5.53846154 Z M22.9846154,0 C23.5080111,0 23.9389145,0.396010161 23.9940415,0.904747392 L24,1.01538462 L24,19.2923077 C24,19.8021092 23.5867246,20.2153846 23.0769231,20.2153846 C22.603536,20.2153846 22.2133781,19.85904 22.1600566,19.3999578 L22.1538462,19.2923077 L22.1538462,1.84523077 L4.70769231,1.84615385 C4.23430541,1.84615385 3.8441472,1.48980923 3.79082558,1.03072707 L3.78461538,0.923076923 C3.78461538,0.449689846 4.14096018,0.0595319926 4.60004207,0.00621046154 L4.70769231,0 L22.9846154,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CopyField.displayName = 'CopyField';
export default CopyField;
