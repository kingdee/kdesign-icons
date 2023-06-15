import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Strikethrough = ({
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
          id="1044.删除线"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M16.5998392,14.0001356 L23.9997675,14.0001356 L23.9997675,16.0001162 L18.787818,16.0001162 C19.5798103,17.056106 19.9998063,18.2740942 19.9998063,19.7340801 C19.9998063,21.0460673 19.7758084,22.220056 19.3258128,23.2600459 C18.8758171,24.3000359 18.2618231,25.1820273 17.4798307,25.9060203 C16.6998382,26.6280133 15.7998469,27.1820079 14.7838568,27.5660042 C13.7678666,27.9520005 13.1338728,28 11.9998838,28 C9.185911,28 5.51594655,26.5360142 3.99996123,23.8280404 L3.99996123,18.6480906 L5.05395104,18.6480906 C5.96194226,22.9340491 9.11391169,25.6480228 11.9998838,25.6480228 C14.8878558,25.6480228 17.4798307,23.254046 17.4798307,20.4840728 C17.4798307,18.6600905 16.6478387,17.2201044 14.8098565,16.0001162 L1.33225472e-15,16.0001162 L1.33225472e-15,14.0001356 L10.5418979,14.0001356 C8.56991699,13.2141432 6.83593378,12.5041501 5.96194222,11.5281596 C4.84795302,10.2861716 3.99996123,9.00818396 3.99996123,7.25620096 C3.97755409,5.22414919 4.85725949,3.28674637 6.40193798,1.9662522 C7.14593078,1.33425832 8.01392234,0.846263043 9.00991271,0.508266325 C10.0399351,0.163859332 11.1198351,-0.0077893534 12.2058818,1.33225472e-15 C14.6258583,1.33225472e-15 16.8958363,1.44425726 18.4358214,3.10624114 L18.4358214,7.4381992 L17.2638328,7.4381992 C17.1058343,6.7142062 14.7838568,2.23824957 11.8538852,2.23824954 C9.03991241,2.23824954 6.81393398,3.99823248 6.81393398,6.89420446 C6.81393398,10.5441691 11.0938925,11.3661612 13.007874,12.1341537 C14.3938606,12.7161481 15.5998489,13.3261422 16.6018392,14.0001356 L16.5998392,14.0001356 Z"
              id="路径"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Strikethrough.displayName = 'Strikethrough';
export default Strikethrough;
