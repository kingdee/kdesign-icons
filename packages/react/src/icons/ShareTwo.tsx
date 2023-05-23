import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ShareTwo = ({
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
          id="1015.分享"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 1.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M13.7642574,2.59595553 L13.7642574,4.55011278 L2.79165327,4.55011278 C2.39548006,4.55011278 2.04188954,4.88349726 1.96820492,5.34747449 L1.95415729,5.52719142 L1.95415729,27.0229214 C1.95415729,27.5163782 2.26372855,27.9045912 2.64554789,27.9847687 L2.79165327,28 L24.5665486,28 C24.9627217,28 25.3163123,27.6666155 25.3899969,27.2026384 L25.4040445,27.0229214 L25.4040445,15.244585 L27.3582018,15.244585 L27.3582018,27.0229214 C27.3582018,28.5319695 26.2659727,29.7969839 24.838036,29.9405874 L24.5665486,29.9541573 L2.79165327,29.9541573 C1.32470837,29.9541573 0.146188356,28.7779106 0.0126148551,27.3027938 L0,27.0229214 L0,5.52719142 C0,4.01814337 1.09222915,2.75312905 2.52016576,2.60952545 L2.79165327,2.59595553 L13.7642574,2.59595553 Z M22.4728086,6.66485881e-16 L28,5.52719142 L22.4728086,11.0543828 L21.0910107,9.67258499 L24.2569542,6.50538957 L23.9713852,6.51228799 C17.3184669,6.74682346 11.967497,12.0977933 11.7329615,18.7507116 L11.7249436,19.2062923 L11.7249436,21.1309299 L9.77078636,21.1309299 L9.77078636,19.2062923 C9.77078636,11.2706213 16.0777789,4.8080273 23.9526311,4.55764329 L24.2589084,4.55123229 L21.0910107,1.38179786 L22.4728086,6.66485881e-16 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ShareTwo.displayName = 'ShareTwo';
export default ShareTwo;
