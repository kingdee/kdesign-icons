import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ClearField = ({
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
          id="1448-清除字段"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M13.8461538,0 C14.3559554,0 14.7692308,0.413275392 14.7692308,0.923076923 L14.7692308,0.923076923 L14.7692308,8.30769231 L21.2307692,8.30769231 C21.7041563,8.30769231 22.0943142,8.66403692 22.1476357,9.12311908 L22.1476357,9.12311908 L22.1538462,9.23076923 L22.1538462,23.0769231 C22.1538462,23.5867246 21.7405708,24 21.2307692,24 L21.2307692,24 L0.923076923,24 C0.413275392,24 0,23.5867246 0,23.0769231 L0,23.0769231 L0,9.23076923 C0,8.7209677 0.413275392,8.30769231 0.923076923,8.30769231 L0.923076923,8.30769231 L7.38461538,8.30769231 L7.38461538,0.923076923 C7.38461538,0.449689846 7.74096,0.0595319926 8.20004216,0.00621046154 L8.20004216,0.00621046154 L8.30769231,0 L13.8461538,0 Z M20.3076923,15.6923077 L1.84615385,15.6923077 L1.84615385,22.1538462 L4.61538462,22.1538462 L4.61538462,19.6483514 C4.61538462,19.1385508 5.02866001,18.7252745 5.53846154,18.7252745 C6.01184862,18.7252745 6.40200647,19.0816191 6.455328,19.5407012 L6.46153846,19.6483514 L6.46153846,22.1538462 L10.1538462,22.1538462 L10.1538462,18.3296705 C10.1538462,17.8198689 10.5671215,17.4065935 11.0769231,17.4065935 C11.5503102,17.4065935 11.940468,17.7629382 11.9937895,18.2220203 L12,18.3296705 L12,22.1538462 L15.6923077,22.1538462 L15.6923077,19.6483514 C15.6923077,19.1385508 16.1055831,18.7252745 16.6153846,18.7252745 C17.0887717,18.7252745 17.4789295,19.0816191 17.5322511,19.5407012 L17.5384615,19.6483514 L17.5384615,22.1538462 L20.3076923,22.1538462 L20.3076923,15.6923077 Z M12.9230769,1.84615385 L9.23076923,1.84615385 L9.23076923,9.23076923 C9.23076923,9.70415631 8.87442462,10.0943142 8.41534245,10.1476357 L8.41534245,10.1476357 L8.30769231,10.1538462 L1.84615385,10.1538462 L1.84615385,13.8461538 L20.3076923,13.8461538 L20.3076923,10.1538462 L13.8461538,10.1538462 C13.3727668,10.1538462 12.9826089,9.79750154 12.9292874,9.33841938 L12.9292874,9.33841938 L12.9230769,9.23076923 L12.9230769,1.84615385 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ClearField.displayName = 'ClearField';
export default ClearField;
