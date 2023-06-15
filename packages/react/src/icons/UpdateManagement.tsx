import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const UpdateManagement = ({
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
          id="844.更新管理"
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
              d="M14,28 C8.99828183,28 4.37650352,25.331615 1.87564437,21 C-0.625214789,16.6683848 -0.625214789,11.331615 1.87564437,7 C4.37650352,2.66838481 8.99828183,0 14,0 C21.7319865,0 28,6.26801346 28,14 C28,21.7319863 21.7319865,28 14,28 L14,28 Z M5.89473701,13.1938946 C5.89473701,13.1938946 8.32631594,8.00357889 15.7492632,10.7107368 L15.1421054,11.9913683 C15.1421054,11.9913683 14.5938948,13.2439999 16.3682106,12.9831578 L21.3448422,11.8882104 C21.3448422,11.8882104 22.479579,11.600842 21.9770527,10.6797894 L19.2654737,6.18652627 C19.2654737,6.18652627 18.4210527,5.44378943 17.859579,6.32799995 L17.2597896,7.60715784 C17.2524211,7.60715784 8.07578962,4.15136839 5.89473701,13.192421 L5.89473701,13.1938946 Z M10.8492633,20.4105262 C10.8492633,20.4105262 20.1541053,23.5583156 22.1052632,14.736842 C22.1052632,14.736842 19.8063159,19.8284209 12.2846317,17.3644209 L12.8652633,16.1117894 C12.8652633,16.1117894 13.3766317,14.876842 11.6052633,15.1730525 L6.63747384,16.3475788 C6.63747384,16.3475788 5.50568438,16.6496841 6.03621069,17.5338946 L8.87894751,21.8399998 C8.87894751,21.8399998 9.73221066,22.5414735 10.2804212,21.6631577 L10.8492633,20.4105262 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
UpdateManagement.displayName = 'UpdateManagement';
export default UpdateManagement;
