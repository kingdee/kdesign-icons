import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const RightNode = ({
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
          id="1143-右侧节点"
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
              d="M18.176955,0 C18.5728766,0.0110173517 18.9481861,0.178943709 19.2202399,0.466801441 C19.4922937,0.754659203 19.6387827,1.13884328 19.6274499,1.53475606 L19.6274499,1.53475606 L19.6274499,5.41678608 C19.6343283,6.22963291 18.9895078,6.89853392 18.176955,6.92144888 L18.176955,6.92144888 L13.1814745,6.92144888 L13.1814745,11.1164488 L17.4524267,11.1164488 C17.9199608,9.75325683 19.2011743,8.8370684 20.6423119,8.83537996 C22.5188047,8.91321325 24,10.4571193 24,12.3352256 C24,14.213332 22.5188047,15.757238 20.6423119,15.8350713 C19.2011743,15.8333829 17.9199608,14.9171945 17.4524267,13.5540025 L17.4524267,13.5540025 L13.1814745,13.5540025 L13.1814745,17.6703219 L17.4163148,19.5124672 C17.8590102,18.0931699 19.1560667,17.1131179 20.6423119,17.0749134 C22.5188047,17.1527468 24,18.6966527 24,20.5747591 C24,22.4528655 22.5188047,23.9967714 20.6423119,24.0746048 C19.2011743,24.0729164 17.9199608,23.156728 17.4524267,21.793536 L17.4524267,21.793536 L11.9906578,19.5500838 L6.5475733,21.793536 L6.45675384,22.0293639 C5.92875479,23.2613505 4.71405297,24.0730157 3.35768817,24.0746048 C1.48119533,23.9967714 0,22.4528655 0,20.5747591 C0,18.6966527 1.48119533,17.1527468 3.35768817,17.0749134 C4.8439332,17.1131179 6.1409897,18.0931699 6.58368521,19.5124672 L6.58368521,19.5124672 L10.7973694,17.7934731 L10.7973694,11.1164488 L10.8215349,11.2518684 L10.8221632,6.93950483 L5.99524373,6.93950483 C5.64546244,6.97360946 5.29764044,6.85766878 5.03827819,6.62051632 C4.71377425,6.32526088 4.53365524,5.90351882 4.54474879,5.46493529 L4.54474879,5.46493529 L4.54474879,1.53475606 C4.533416,1.13884328 4.67990498,0.754659203 4.95195879,0.466801441 C5.22401259,0.178943709 5.59932205,0.0110173517 5.99524373,0 L5.99524373,0 L18.176955,0 Z M20.9852845,19.5878657 C20.5475425,19.4169608 20.0498085,19.5312485 19.7304674,19.8759916 C19.4111263,20.2207348 19.335195,20.725745 19.53904,21.1491524 C19.7428849,21.5725597 20.1850041,21.8281601 20.6536486,21.793536 C21.2467396,21.7383486 21.7032118,21.2455661 21.7129312,20.6499923 C21.7116539,20.1800721 21.4230266,19.7587704 20.9852845,19.5878657 Z M4.20999313,19.8759916 C3.89065207,19.5312485 3.39291804,19.4169608 2.95517597,19.5878657 C2.51743391,19.7587704 2.22880657,20.1800721 2.22752929,20.6499923 C2.23724872,21.2455661 2.69372089,21.7383486 3.2868119,21.793536 C3.75545646,21.8281601 4.19757563,21.5725597 4.40142057,21.1491524 C4.60526555,20.725745 4.52933418,20.2207348 4.20999313,19.8759916 Z M17.7255561,2.43755374 L6.44058513,2.43755374 L6.44058513,4.64038007 L17.7255561,4.64038007 L17.7255561,2.43755374 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
RightNode.displayName = 'RightNode';
export default RightNode;