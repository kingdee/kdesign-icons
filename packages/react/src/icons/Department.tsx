import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Department = ({
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
          id="1267-部门"
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
              d="M21.5518301,14.5685829 L21.5518301,11.0769826 C21.5518301,9.71241197 20.4280854,8.58869074 19.0635382,8.58869074 L12.4815345,8.58869074 L12.4815345,6.42142184 C13.8862271,6.06020648 14.9297513,4.77590334 14.9297513,3.25084468 C14.9297513,1.44476772 13.4448382,0 11.6789301,0 C9.87287657,0 8.42813236,1.48491319 8.42813236,3.25084468 C8.42813236,4.77592679 9.47153914,6.06022996 10.8762318,6.42142184 L10.8762318,8.58869074 L4.9364852,8.58869074 C3.57196153,8.58869074 2.44809948,9.71243545 2.44809948,11.0769826 L2.44809948,14.5685829 C1.04352417,14.9297513 0,16.2141014 0,17.7392069 C0,19.5451666 1.48491319,20.9900282 3.25084468,20.9900282 C5.05687472,20.9900282 6.50164243,19.5049977 6.50164243,17.7392069 C6.50164243,16.2141014 5.45814171,14.9297747 4.0535664,14.5685829 L4.0535664,11.0769826 C4.0535664,10.5953777 4.45480995,10.1939934 4.9364852,10.1939934 L10.8762083,10.1939934 L10.8762083,14.6087518 C9.47151574,14.9699437 8.42810888,16.2540826 8.42810888,17.7792117 C8.42810888,19.585312 9.91304555,21.0300563 11.6789067,21.0300563 C13.4848663,21.0300563 14.9297278,19.5451431 14.9297278,17.7792117 C14.9297278,16.2540826 13.8862036,14.9699437 12.4815111,14.6087518 L12.4815111,10.1939934 L19.0634913,10.1939934 C19.5450962,10.1939934 19.9464571,10.5953543 19.9464571,11.0769826 L19.9464571,14.5685829 C18.5417409,14.9297747 17.4982168,16.2141014 17.4982168,17.7392069 C17.4982168,19.5451666 18.9832708,20.9900282 20.7491788,20.9900282 C22.555115,20.9900282 24,19.5049977 24,17.7392069 C24,16.1739324 22.9565228,14.9297513 21.5518301,14.5685829 Z M10.0334584,3.25084468 C10.0334584,2.32768655 10.7959878,1.60532613 11.6789301,1.60532613 C12.5618958,1.60532613 13.3244487,2.36787892 13.3244487,3.25084468 C13.3244487,4.17395589 12.5618958,4.89631628 11.6789301,4.89631628 C10.7959878,4.89631628 10.0334584,4.13376348 10.0334584,3.25084468 Z M4.89633976,17.6989677 C4.89633976,18.6221493 4.13378696,19.3445097 3.25086813,19.3445097 C2.36792585,19.3445097 1.6053496,18.6221493 1.6053496,17.6989677 C1.6053496,16.7759033 2.36792585,16.0535195 3.25086813,16.0535195 C4.13378696,16.0535195 4.89633976,16.8160723 4.89633976,17.6989677 Z M13.3645002,17.6989677 C13.3645002,18.6221493 12.6020648,19.3445097 11.7191225,19.3445097 C10.8361802,19.3445097 10.0736039,18.5819803 10.0736039,17.6989677 C10.0736039,16.7759033 10.8361802,16.0535195 11.7191225,16.0535195 C12.6020648,16.0535195 13.3645002,16.8160723 13.3645002,17.6989677 Z M20.7492022,19.3845847 C19.826091,19.3845847 19.1036837,18.6221493 19.1036837,17.7392069 C19.1036837,16.8160723 19.8662365,16.0937119 20.7492022,16.0937119 C21.632168,16.0937119 22.39458,16.8562647 22.39458,17.7392069 C22.39458,18.6221493 21.6721961,19.3845847 20.7492022,19.3845847 L20.7492022,19.3845847 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Department.displayName = 'Department';
export default Department;
