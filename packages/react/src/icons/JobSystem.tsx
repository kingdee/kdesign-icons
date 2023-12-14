import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const JobSystem = ({
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
          id="280.职位体系方案"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="职位体系方案"
            transform="translate(4.500000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M5.43055555,1.33770492 L5.43055555,5.35081966 L17.6493055,5.35081966 L17.6493055,1.33770492 L21.630124,1.33770492 C22.3866857,1.33770492 23,1.94386656 23,2.68746718 L23,22.6502377 C23,23.3956909 22.3848055,24 21.630124,24 L1.36987591,24 C0.613314344,24 0,23.3938383 0,22.6502377 L0,2.68746718 C0,1.94201407 0.61519443,1.33770492 1.36987591,1.33770492 L5.43055555,1.33770492 Z M12.2397622,10.776461 L12.2350416,10.7752131 L12.2261433,10.788022 C11.8296678,10.7761295 10.7825601,10.7799628 10.1519364,10.7861101 L9.93705933,10.7884977 L9.93705933,10.7884977 L9.93384373,10.784577 L8.15347411,18.6016771 L8.14583332,18.6016771 L10.9087386,20.4160673 C11.011125,20.4838246 11.1456027,20.4838246 11.2479892,20.4160673 L14.0108944,18.6016771 L14.0231197,18.6016771 L12.2397622,10.776461 Z M12.9029816,11.1182589 L14.0475702,15.799536 C14.0674361,15.8793391 14.1774634,15.885362 14.2080266,15.8100761 L14.9277878,13.979123 C14.9583509,13.9008256 14.949182,13.8134941 14.9018091,13.744231 L13.0985855,11.0339387 C13.0328748,10.9345614 12.8739466,11.0023187 12.9029816,11.1182589 Z M13.4118574,8.42754097 L8.75098293,8.42754097 C8.49883727,8.42754097 8.35519063,8.71061594 8.50647803,8.90937072 C9.06281521,9.64014233 9.4974536,10.2110576 9.81039328,10.6221166 L9.93384373,10.784577 L9.93683168,10.776461 L12.2350416,10.7752131 L12.3527772,10.621683 C12.6656376,10.2107281 13.1001661,9.63995733 13.6563623,8.90937072 C13.8076498,8.71061594 13.6640031,8.42754097 13.4118574,8.42754097 Z M16.2916666,0 L16.2916666,4.01311475 L6.78819443,4.01311475 L6.78819443,0 L16.2916666,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
JobSystem.displayName = 'JobSystem';
export default JobSystem;
