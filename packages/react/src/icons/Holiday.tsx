import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Holiday = ({
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
          id="404.假期"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M13.2414189,8.86900149 L15.6211773,9.74634503 L11.5774235,18.0646475 L17.7943108,18.06546 C18.3612836,18.06546 18.8209057,18.5250821 18.8209057,19.0920549 C18.8209057,19.6590275 18.3612836,20.1186497 17.7943108,20.1186497 L1.02659486,20.1186497 C0.459622176,20.1186497 0,19.6590275 0,19.0920549 C0,18.5250821 0.459622176,18.06546 1.02659486,18.06546 L8.62425226,18.0646475 L13.2414189,8.86900149 Z M7.0170908,14.1001313 C7.53681575,14.1001313 7.95813608,14.5214517 7.95813608,15.0411766 C7.95813608,15.5609016 7.53681575,15.9822219 7.0170908,15.9822219 L2.05521566,15.9822219 C1.53549071,15.9822219 1.11417038,15.5609016 1.11417038,15.0411766 C1.11417038,14.5214517 1.53549071,14.1001313 2.05521566,14.1001313 L7.0170908,14.1001313 Z M4.53615323,9.46516557 C6.36879221,9.46516557 7.86495456,10.9057934 7.95394818,12.716357 L7.95813608,12.8871484 L1.11417038,12.8871484 C1.11417038,10.9972395 2.64624428,9.46516557 4.53615323,9.46516557 Z M20.1148952,2.17260225 C22.4963474,4.04683641 24.0192342,6.96205741 23.9998165,10.2278772 C23.927253,10.6985273 23.7064802,11.1456866 23.2056689,11.0557528 C22.2193687,10.6913942 21.098135,10.2759154 19.9074419,9.83436998 C20.3632755,8.50616728 20.6055134,6.975597 20.5666779,5.3517906 C20.540105,4.22927992 20.3806238,3.1581317 20.1148952,2.17260225 Z M15.0525564,0.993643526 C16.7604405,0.00912679486 18.1668206,0.502012588 18.8710344,2.39183383 C19.2032062,3.28487562 19.3421908,4.31003321 19.3677729,5.38041086 C19.4025136,6.85270582 19.1470003,8.22841818 18.6809515,9.37954918 C16.0429732,8.40141696 13.1862477,7.33896495 10.7537193,6.42879493 C11.1656097,5.07835654 12.0139378,3.66918042 13.2475833,2.44268994 C13.8189108,1.874929 14.4117255,1.36313177 15.0525564,0.993643526 Z M13.8945344,0.000188438772 C14.031549,0.0011721904 14.1685327,0.00474671156 14.3054121,0.0109100586 C13.6482016,0.460865379 13.0073709,0.98928444 12.4012806,1.59154387 C11.0470336,2.93812957 10.0617462,4.46026782 9.49041873,5.95504073 C8.13923177,5.44835116 6.98120994,5.01090061 6.15434708,4.6935454 C5.66478565,4.50575213 5.8886185,3.81225995 6.13391658,3.52658519 C8.01248788,1.35137542 10.7955931,-0.0184808046 13.8945344,0.000188438772 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Holiday.displayName = 'Holiday';
export default Holiday;