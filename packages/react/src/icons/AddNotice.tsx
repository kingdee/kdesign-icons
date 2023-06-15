import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AddNotice = ({
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
          id="314.安排通知"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="安排通知"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M4.61538462,3.66666667 L4.61538462,6.41666667 C4.61538462,7.42918871 5.44193584,8.25 6.46153846,8.25 C7.4347955,8.25 8.23215239,7.50211202 8.30262859,6.55349045 L8.30769231,6.41666667 L8.30769231,3.66666667 L15.6923077,3.66666667 L15.6923077,6.41666667 C15.6923077,7.38316498 16.4454257,8.17498466 17.400681,8.24497145 L17.5384615,8.25 C18.5117186,8.25 19.3090755,7.50211202 19.3795517,6.55349045 L19.3846154,6.41666667 L19.3846154,3.66666667 L23,3.66666667 C23.5128358,3.66666667 23.9355072,3.93887449 23.9932723,4.28956202 L24,4.37179489 L24,21.2948718 C24,21.6564868 23.6139598,21.9545243 23.1166211,21.9952561 L23,22 L1,22 C0.48716417,22 0.0644928295,21.7277922 0.00672773908,21.3771046 L0,21.2948718 L0,4.37179489 C0,4.01017986 0.386040192,3.7121424 0.883378885,3.67141057 L1,3.66666667 L4.61538462,3.66666667 Z M12,11 C11.5266131,11 11.1364549,11.3538702 11.0831333,11.809764 L11.0769231,11.9166667 L11.0769231,15.5833333 L11.0849284,15.7038237 C11.1061439,15.8627378 11.1689979,16.013427 11.2671513,16.1406937 L11.347286,16.2315146 L13.1934399,18.0648479 L13.2804006,18.1411041 C13.6123392,18.3974097 14.0799685,18.3974097 14.4119071,18.1411041 L14.4988678,18.0648479 L14.5756573,17.9784911 C14.8337552,17.6488576 14.8337552,17.1844757 14.5756573,16.8548422 L14.4988678,16.7684854 L12.9230769,15.2029167 L12.9230769,11.9166667 L12.9168667,11.809764 C12.8635451,11.3538702 12.4733869,11 12,11 Z M6.46153846,0 C6.97133973,0 7.38461538,0.410405659 7.38461538,0.916666667 L7.38461538,6.41666667 C7.38461538,6.92292765 6.97133973,7.33333333 6.46153846,7.33333333 C5.95173717,7.33333333 5.53846154,6.92292765 5.53846154,6.41666667 L5.53846154,0.916666667 C5.53846154,0.410405659 5.95173717,0 6.46153846,0 Z M17.5384615,0 C18.0482628,0 18.4615385,0.410405659 18.4615385,0.916666667 L18.4615385,6.41666667 C18.4615385,6.92292765 18.0482628,7.33333333 17.5384615,7.33333333 C17.0286603,7.33333333 16.6153846,6.92292765 16.6153846,6.41666667 L16.6153846,0.916666667 C16.6153846,0.410405659 17.0286603,0 17.5384615,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AddNotice.displayName = 'AddNotice';
export default AddNotice;
