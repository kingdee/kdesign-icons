import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const RegistrationCertification = ({
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
          id="824.注册认证"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M9.71946082,3.66766406 L12.9579101,0.432166857 C13.5343066,-0.144055619 14.4686455,-0.144055619 15.045042,0.432166857 L18.2805392,3.66766406 L22.856288,3.66766406 C23.6714867,3.66766406 24.3323359,4.32851325 24.3323359,5.14371205 L24.3323359,9.71946082 L27.5678331,12.9564341 C28.1440556,13.5328306 28.1440556,14.4671694 27.5678331,15.0435659 L24.3323359,18.2805392 L24.3323359,22.856288 C24.3323359,23.2477602 24.1768242,23.6231988 23.9000115,23.9000115 C23.6231988,24.1768242 23.2477602,24.3323359 22.856288,24.3323359 L18.2805392,24.3323359 L15.0435659,27.5678331 C14.4671694,28.1440556 13.5328306,28.1440556 12.9564341,27.5678331 L9.71946082,24.3323359 L5.14371205,24.3323359 C4.75223978,24.3323359 4.3768012,24.1768242 4.0999885,23.9000115 C3.82317581,23.6231988 3.66766406,23.2477602 3.66766406,22.856288 L3.66766406,18.2805392 L0.432166857,15.0420899 C-0.144055619,14.4656934 -0.144055619,13.5313545 0.432166857,12.954958 L3.66766406,9.71946082 L3.66766406,5.14371205 C3.66766406,4.32851325 4.32851325,3.66766406 5.14371205,3.66766406 L9.71946082,3.66766406 Z M18.428144,9.82721233 L12.3232095,16.0428504 L12.0604729,16.3114912 L9.56890393,13.7726886 C9.32323822,13.5192718 8.94740022,13.4422464 8.62185429,13.5785973 C8.29630837,13.7149482 8.08754615,14.0368262 8.09580803,14.3896767 C8.09580803,14.6258443 8.18437091,14.8472515 8.34968829,15.015521 L11.4523412,18.1742637 C11.6124195,18.3389247 11.8323008,18.4318254 12.061949,18.4318254 C12.2915972,18.4318254 12.5114785,18.3389247 12.6715568,18.1742637 L19.6503117,11.0715208 C19.9897964,10.726792 19.9897964,10.1734171 19.6503117,9.82868837 C19.4897222,9.66385703 19.2693547,9.5708907 19.0392278,9.5708907 C18.809101,9.5708907 18.5887335,9.66385703 18.428144,9.82868837 L18.428144,9.82721233 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
RegistrationCertification.displayName = 'RegistrationCertification';
export default RegistrationCertification;
