import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const EmployeeResume = ({
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
          id="650.员工履历"
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
              d="M23.9724282,18.721368 L18.2820399,18.721368 C16.7117143,18.721368 15.5289776,19.8959354 15.5289776,21.4544608 L15.5289776,27.2310808 L1.72554283,27.2310808 C0.689854038,27.2310808 0,26.5503038 0,25.5291382 L0,1.70194255 C0,0.68077702 0.689854038,0 1.72463511,0 L22.4211642,0 C23.456853,0 24.1467071,0.68077702 23.9733358,1.70194255 L23.9733358,18.721368 L23.9724282,18.721368 Z M12.8576086,17.0194255 L7.71547288,17.0194255 C7.20080545,17.0194255 6.85769384,17.359814 6.85769384,17.8708506 C6.85769384,18.3809795 7.20080545,18.721368 7.71547288,18.721368 L12.8576086,18.721368 C13.372276,18.721368 13.7153876,18.3809795 13.7153876,17.8708506 C13.7153876,17.359814 13.372276,17.0194255 12.8576086,17.0194255 L12.8576086,17.0194255 Z M11.143866,20.4233106 L7.71456519,20.4233106 C7.19989776,20.4233106 6.85678614,20.7636991 6.85678614,21.2747357 C6.85678614,21.7848646 7.19989776,22.1252531 7.71456519,22.1252531 L11.1429583,22.1252531 C11.656718,22.1252531 11.9998296,21.7848646 11.9998296,21.2747357 C11.9998296,20.7636991 11.656718,20.4233106 11.1429583,20.4233106 L11.143866,20.4233106 Z M17.2436281,24.961824 L17.2436281,21.4544608 C17.2436281,20.8354077 17.6611713,20.4233106 18.2829476,20.4233106 L21.8157266,20.4233106 L17.2445357,24.961824 L17.2436281,24.961824 Z M14.4007033,9.19048977 C15.0869265,8.50971275 15.4291304,7.65828761 15.4291304,6.8077702 C15.4291304,4.93608725 13.8860358,3.4038851 12.0007373,3.4038851 C10.1154388,3.4038851 8.57143654,4.93608725 8.57143654,6.8077702 C8.57143654,7.65828761 8.91454816,8.50971275 9.59986367,9.19048977 C7.91312903,10.0180314 6.84769366,11.7367599 6.85667138,13.6155404 C6.85667138,14.126577 7.19989776,14.4660579 7.71456519,14.4660579 C8.22832492,14.4660579 8.57143654,14.126577 8.57143654,13.6155404 C8.57143654,11.7438575 10.1145311,10.2116553 11.9998296,10.2116553 C13.8860358,10.2116553 15.4282226,11.7438575 15.4282226,13.6155404 C15.4282226,14.126577 15.7713342,14.4660579 16.2860017,14.4660579 C16.7997615,14.4660579 17.1429933,14.126577 17.1429933,13.6155404 C17.1521838,11.7366983 16.0866824,10.0178633 14.3997955,9.19048977 L14.4007033,9.19048977 Z M12.0007373,8.50971275 C10.9723101,8.50971275 10.2869946,7.82893573 10.2869946,6.8077702 C10.2869946,5.78660467 10.9723102,5.10582765 12.0007373,5.10582765 C13.0291644,5.10582765 13.7153876,5.78660467 13.7153876,6.8077702 C13.7153876,7.82893573 13.0291644,8.50971275 12.0007373,8.50971275 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
EmployeeResume.displayName = 'EmployeeResume';
export default EmployeeResume;
