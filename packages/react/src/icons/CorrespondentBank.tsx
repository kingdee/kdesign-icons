import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CorrespondentBank = ({
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
          id="478.代理行"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <polygon
              id="路径"
              points="22.6569543 19.9038462 22.6569543 18.5769231 21.3248597 18.5769231 21.3248597 6.63461538 23.9890488 6.63461538 24 4.29055343 12.8550178 0 11.1311308 0 0 4.29055343 0 6.64431082 2.70139944 6.64431082 2.70139944 18.6072229 1.33209455 18.6072229 1.33209455 19.8101512 0.011346816 19.8101512 0.011346816 21.2307692 23.9890488 21.2307692 23.9890488 19.8101512"
            ></polygon>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CorrespondentBank.displayName = 'CorrespondentBank';
export default CorrespondentBank;
