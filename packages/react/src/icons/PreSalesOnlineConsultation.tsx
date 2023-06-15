import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PreSalesOnlineConsultation = ({
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
          id="1337-售前在线咨询"
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
            <path
              d="M21.6009192,-2.19031126e-16 C22.9258949,-2.19031126e-16 24,1.07410506 24,2.3990808 L24,16.8027576 C24,17.4390334 23.7472404,18.0492489 23.2973255,18.499164 C22.8474107,18.9490788 22.237195,19.2018384 21.6009192,19.2018384 L19.1328993,19.2018384 L16.5545768,21.8812716 L13.769437,19.2018384 L2.3990808,19.2018384 C1.07410506,19.2018384 4.99664756e-16,18.1277333 4.99664756e-16,16.8027576 L4.99664756e-16,2.3990808 C4.99664756e-16,1.07410506 1.07410506,-2.19031126e-16 2.3990808,-2.19031126e-16 L21.6009192,-2.19031126e-16 Z M21.6055152,1.67751818 L2.3990808,1.67751818 C2.00057279,1.67751818 1.67751821,2.00057277 1.67751821,2.3990808 L1.67751821,16.8027576 C1.67751821,16.9941279 1.75353976,17.1776601 1.88885899,17.3129794 C2.02417825,17.4482987 2.20771052,17.5243203 2.3990808,17.5243203 L14.4404443,17.5243203 L16.4994255,19.5097663 L18.4159326,17.5197243 L21.6055152,17.5197243 C22.0040233,17.5197243 22.3270777,17.1966696 22.3270777,16.7981616 L22.3270777,2.3990808 C22.3270777,2.20771049 22.2510563,2.02417822 22.115737,1.88885899 C21.9804177,1.75353974 21.7968855,1.67751818 21.6055152,1.67751818 Z M17.1336653,11.2186902 C17.5981683,11.2186902 17.9747224,11.5952442 17.9747224,12.0597472 C17.9747224,12.5242502 17.5981683,12.9008043 17.1336653,12.9008043 L6.73764844,12.9008043 C6.27314542,12.9008043 5.89659135,12.5242502 5.89659135,12.0597472 C5.89659135,11.5952442 6.27314542,11.2186902 6.73764844,11.2186902 L17.1336653,11.2186902 Z M17.1704328,5.77250095 C17.6349358,5.77250095 18.0114899,6.14905503 18.0114899,6.61355802 C18.0114899,7.07806101 17.6349358,7.45461508 17.1704328,7.45461508 L6.73764844,7.45461508 C6.27314542,7.45461508 5.89659135,7.07806101 5.89659135,6.61355802 C5.89659135,6.14905503 6.27314542,5.77250095 6.73764844,5.77250095 L17.1704328,5.77250095 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PreSalesOnlineConsultation.displayName = 'PreSalesOnlineConsultation';
export default PreSalesOnlineConsultation;
