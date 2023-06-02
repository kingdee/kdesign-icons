import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const TheProjectProposal = ({
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
          id="473.项目建议书"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M9.93918336,22.5748447 L12.1595246,24.8518662 L10.0775149,25.6228089 C9.64914575,25.7814288 9.17329702,25.5627537 9.01467718,25.1343845 C8.93787145,24.9269628 8.9473453,24.6974194 9.04098229,24.4970324 L9.93918336,22.5748447 Z M18.0940327,14.2137911 L20.3739412,16.5690078 L12.8787144,24.2496761 L10.5988059,21.8944593 L18.0940327,14.2137911 Z M17.1093427,0 C17.5661363,0 17.9364408,0.370304413 17.9364408,0.827098061 L17.9364408,12.951468 L8.65362806,22.5748447 L0.827098061,22.5748447 C0.370304413,22.5748447 0,22.2045403 0,21.7477466 L0,0.827098061 C0,0.370304413 0.370304413,0 0.827098061,0 L17.1093427,0 Z M20.8966189,12.861352 L21.7004111,13.6856633 C22.1016238,14.0971181 22.0978904,14.7680466 21.7010373,15.1750305 L21.0084453,15.8853029 L18.7517335,13.5709822 L19.4443254,12.8607098 C19.8451924,12.4496098 20.4934909,12.447933 20.8966189,12.861352 Z M5.04419799,9.17126907 L3.20994417,9.17126907 C2.95668658,9.17126907 2.75138072,9.3765749 2.75138072,9.62983252 C2.75138072,9.88309015 2.95668658,10.088396 3.20994417,10.088396 L3.20994417,10.088396 L5.04419799,10.088396 C5.29745561,10.088396 5.50276144,9.88309015 5.50276144,9.62983252 C5.50276144,9.3765749 5.29745561,9.17126907 5.04419799,9.17126907 L5.04419799,9.17126907 Z M14.2154671,9.17126907 L7.79557871,9.17126907 C7.54232108,9.17126907 7.33701526,9.3765749 7.33701526,9.62983252 C7.33701526,9.88309015 7.54232108,10.088396 7.79557871,10.088396 L7.79557871,10.088396 L14.2154671,10.088396 C14.4687247,10.088396 14.6740305,9.88309015 14.6740305,9.62983252 C14.6740305,9.3765749 14.4687247,9.17126907 14.2154671,9.17126907 L14.2154671,9.17126907 Z M5.04419799,5.50276144 L3.20994417,5.50276144 C2.95668658,5.50276144 2.75138072,5.7080673 2.75138072,5.9613249 C2.75138072,6.21458249 2.95668658,6.41988835 3.20994417,6.41988835 L3.20994417,6.41988835 L5.04419799,6.41988835 C5.29745561,6.41988835 5.50276144,6.21458249 5.50276144,5.9613249 C5.50276144,5.7080673 5.29745561,5.50276144 5.04419799,5.50276144 L5.04419799,5.50276144 Z M14.2154671,5.50276144 L7.79557871,5.50276144 C7.54232108,5.50276144 7.33701526,5.7080673 7.33701526,5.9613249 C7.33701526,6.21458249 7.54232108,6.41988835 7.79557871,6.41988835 L7.79557871,6.41988835 L14.2154671,6.41988835 C14.4687247,6.41988835 14.6740305,6.21458249 14.6740305,5.9613249 C14.6740305,5.7080673 14.4687247,5.50276144 14.2154671,5.50276144 L14.2154671,5.50276144 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
TheProjectProposal.displayName = 'TheProjectProposal';
export default TheProjectProposal;