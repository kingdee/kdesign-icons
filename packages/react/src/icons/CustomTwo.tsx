import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CustomTwo = ({
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
          id="138.客户"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="客户"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M23.0769231,0 C23.5867243,0 24,0.413275628 24,0.923076923 L24,23.0769231 C24,23.5867243 23.5867243,24 23.0769231,24 L2.76923077,24 C2.25942947,24 1.84615385,23.5867243 1.84615385,23.0769231 L1.84615385,20.3076923 L3.69230769,20.3076923 L3.69230769,22.1538462 L22.1538462,22.1538462 L22.1538462,1.84615385 L3.69230769,1.84615385 L3.69230769,3.69230769 L1.84615385,3.69230769 L1.84615385,0.923076923 C1.84615385,0.413275628 2.25942947,0 2.76923077,0 L23.0769231,0 Z M3.84615384,17.5384615 C4.27098828,17.5384615 4.61538462,17.9517372 4.61538462,18.4615385 C4.61538462,18.9713397 4.27098828,19.3846154 3.84615384,19.3846154 L0.769230779,19.3846154 C0.344396337,19.3846154 0,18.9713397 0,18.4615385 C0,17.9517372 0.344396337,17.5384615 0.769230779,17.5384615 L3.84615384,17.5384615 Z M12.9230769,5.53846154 C14.9622822,5.53846154 16.6153846,7.19156399 16.6153846,9.23076923 C16.6153846,10.5489146 15.9246607,11.7057327 14.8854157,12.3590208 C16.9756885,13.1499097 18.4615385,15.1706662 18.4615385,17.5384615 C18.4615385,18.0482628 18.0482628,18.4615385 17.5384615,18.4615385 C17.0286603,18.4615385 16.6153846,18.0482628 16.6153846,17.5384615 C16.6153846,15.4992563 14.9622822,13.8461538 12.9230769,13.8461538 C10.8838717,13.8461538 9.23076923,15.4992563 9.23076923,17.5384615 C9.23076923,18.0482628 8.81749357,18.4615385 8.30769231,18.4615385 C7.79789104,18.4615385 7.38461538,18.0482628 7.38461538,17.5384615 C7.38461538,15.1706662 8.87046537,13.1499097 10.960622,12.3577354 C9.92149319,11.7057327 9.23076923,10.5489146 9.23076923,9.23076923 C9.23076923,7.19156399 10.8838717,5.53846154 12.9230769,5.53846154 Z M3.69230769,13.8461538 L3.69230769,16.6153846 L1.84615385,16.6153846 L1.84615385,13.8461538 L3.69230769,13.8461538 Z M3.84615384,11.0769231 C4.27098828,11.0769231 4.61538462,11.4901987 4.61538462,12 C4.61538462,12.5098013 4.27098828,12.9230769 3.84615384,12.9230769 L0.769230779,12.9230769 C0.344396337,12.9230769 0,12.5098013 0,12 C0,11.4901987 0.344396337,11.0769231 0.769230779,11.0769231 L3.84615384,11.0769231 Z M12.9230769,7.38461538 C11.9034743,7.38461538 11.0769231,8.21116661 11.0769231,9.23076923 C11.0769231,10.2503718 11.9034743,11.0769231 12.9230769,11.0769231 C13.9426795,11.0769231 14.7692308,10.2503718 14.7692308,9.23076923 C14.7692308,8.21116661 13.9426795,7.38461538 12.9230769,7.38461538 Z M3.69230769,7.38461538 L3.69230769,10.1538462 L1.84615385,10.1538462 L1.84615385,7.38461538 L3.69230769,7.38461538 Z M3.84615384,4.61538462 C4.27098828,4.61538462 4.61538462,5.02866024 4.61538462,5.53846154 C4.61538462,6.04826283 4.27098828,6.46153846 3.84615384,6.46153846 L0.769230779,6.46153846 C0.344396337,6.46153846 0,6.04826283 0,5.53846154 C0,5.02866024 0.344396337,4.61538462 0.769230779,4.61538462 L3.84615384,4.61538462 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CustomTwo.displayName = 'CustomTwo';
export default CustomTwo;
