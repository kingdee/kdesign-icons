import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SubwayLineSignage = ({
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
          id="669.地铁线看板"
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
              d="M22.9693251,0 C23.2638037,0 23.5582823,0.146127648 24,0.43838292 C24,0.730638168 23.7055215,1.02289346 23.411043,1.02289346 L23.411043,1.02289346 L22.3803681,1.02289346 L22.3803681,14.466636 C22.3803681,15.3434019 21.6441717,15.9279125 20.9079755,15.9279125 L20.9079755,15.9279125 L14.5766871,15.9279125 L17.8159509,20.7501245 C18.1104294,21.0423797 17.9631901,21.4807626 17.5214724,21.6268902 C17.0797547,21.7730179 16.6380367,21.6268902 16.3435583,21.334635 L16.3435583,21.334635 L12.8098159,16.2201677 C12.6625767,16.0740401 12.6625767,16.0740401 12.6625767,15.9279125 L12.6625767,15.9279125 L11.190184,15.9279125 C11.1901841,16.0740401 11.0429448,16.0740401 11.0429448,16.2201677 L11.0429448,16.2201677 L7.50920244,21.334635 C7.2147239,21.7730179 6.77300614,21.7730179 6.33128834,21.6268902 C5.88957055,21.4807626 5.74233127,21.0423797 6.03680981,20.6039969 L6.03680981,20.6039969 L9.27607363,15.7817847 L2.94478529,15.7817847 C2.0613497,15.7817847 1.47239263,15.0511465 1.47239263,14.3205084 L1.47239263,14.3205084 L1.47239263,1.02289346 L0.588957048,1.02289346 C0.294478536,1.02289346 0,0.730638192 0,0.43838292 C0,0.146127648 0.294478512,0 0.588957048,0 L0.588957048,0 L22.9693251,0 Z M12,3 C9.5137549,3 7.5,3.27630907 7.5,5.21053334 L7.5,10.4605273 C7.5,11.5271131 8.38313282,12.3947394 9.46875348,12.3947394 L8.62499846,13.2236909 L8.62499846,13.5 L15.3750015,13.5 L15.3750015,13.2236909 L14.5312465,12.3947394 C15.6168795,12.3947394 16.5,11.527101 16.5,10.4605273 L16.5,5.21053334 C16.5,3.27632122 14.4862451,3 12,3 Z M9.75,9 C10.1649955,9 10.5,9.33500446 10.5,9.75 C10.5,10.1649955 10.1649955,10.5 9.75,10.5 C9.33500446,10.5 9,10.1649955 9,9.75 C9,9.33500446 9.33500446,9 9.75,9 Z M14.25,9 C14.6649955,9 15,9.33500446 15,9.75 C15,10.1649955 14.6649955,10.5 14.25,10.5 C13.8350045,10.5 13.5,10.1649955 13.5,9.75 C13.5,9.33500446 13.8350045,9 14.25,9 Z M15,4.5 L15,7.5 L9,7.5 L9,4.5 L15,4.5 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SubwayLineSignage.displayName = 'SubwayLineSignage';
export default SubwayLineSignage;
