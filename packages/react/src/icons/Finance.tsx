import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Finance = ({
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
          id="264.财务管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="财务管理"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M23.1428571,5.04 C23.616244,5.04 24,5.41608082 24,5.88 L24,10.08 L16.2857143,10.08 C15.8461407,10.08 15.483851,10.4042738 15.434338,10.8220383 L15.4285714,10.92 L15.4285714,15.12 C15.4285714,15.5507821 15.759463,15.905826 16.1857534,15.9543487 L16.2857143,15.96 L24,15.96 L24,20.16 C24,20.6239192 23.616244,21 23.1428571,21 L0.857142857,21 C0.383755941,21 0,20.6239192 0,20.16 L0,5.04 L23.1428571,5.04 Z M9.51351445,8.70754282 C9.21436131,8.52793342 8.83371121,8.63453085 8.66077884,8.94410144 L8.66077884,8.94410144 L7.10190256,11.7526267 C7.05288859,11.8400807 7.024689,11.9372551 7.01295179,12.0368864 C7.00748547,11.9400239 6.98164501,11.8421879 6.93244877,11.7526267 L6.93244877,11.7526267 L5.39742525,8.94410144 C5.2284683,8.63501765 4.8527876,8.52842022 4.55860375,8.70754282 C4.26441992,8.88666533 4.16403961,9.28287672 4.33399041,9.59293397 L4.33399041,9.59293397 L5.67024104,12.0368864 L4.24056716,12.0368864 C3.86629522,12.0507401 3.57017749,12.3519559 3.57017749,12.7188177 C3.57017749,13.0856796 3.86629522,13.3868954 4.24056716,13.4007491 L4.24056716,13.4007491 L6.33066388,13.4007491 L6.33066388,14.7650985 L4.24056716,14.7650985 C3.86629522,14.7789522 3.57017749,15.080168 3.57017749,15.4470298 C3.57017749,15.8138917 3.86629522,16.1151075 4.24056716,16.1289612 L4.24056716,16.1289612 L6.33066388,16.1289612 L6.33066388,17.5614551 C6.33066388,17.9002304 6.64224036,18.175242 7.02785974,18.175242 C7.41248519,18.175242 7.72455865,17.8997436 7.72455865,17.5614551 L7.72455865,17.5614551 L7.72455865,16.1289612 L9.8146554,16.1289612 C10.1889273,16.1151075 10.485045,15.8138917 10.485045,15.4470298 C10.485045,15.080168 10.1889273,14.7789522 9.8146554,14.7650985 L9.8146554,14.7650985 L7.72455865,14.7650985 L7.72455865,13.4007491 L9.8146554,13.4007491 C10.1997777,13.4007491 10.5118512,13.0945858 10.5118512,12.7188177 C10.5118512,12.3425629 10.1997778,12.0368864 9.8146554,12.0368864 L9.8146554,12.0368864 L8.38498149,12.0368864 L9.74110939,9.59293397 C9.91354483,9.28336349 9.81117685,8.88666533 9.51351445,8.70754282 Z M18.4285714,11.76 C19.1386518,11.76 19.7142857,12.3241212 19.7142857,13.02 C19.7142857,13.7158788 19.1386518,14.28 18.4285714,14.28 C17.7184911,14.28 17.1428571,13.7158788 17.1428571,13.02 C17.1428571,12.3241212 17.7184911,11.76 18.4285714,11.76 Z M18,0 C18.4733869,0 18.8571429,0.376080822 18.8571429,0.84 L18.8571429,3.36 L0,3.36 C0,1.50432323 1.53502371,0 3.42857143,0 L18,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Finance.displayName = 'Finance';
export default Finance;
