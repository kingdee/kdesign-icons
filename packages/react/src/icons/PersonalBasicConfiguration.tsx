import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PersonalBasicConfiguration = ({
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
          id="386.个人基础配置"
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
              d="M9.99050005,7.71428569 L7.12506202,12.8571429 L0.0265224411,12.8571429 C0.0118744869,12.8571429 0,12.8451618 0,12.8303823 L0,7.74104618 C0,7.72626679 0.0118744869,7.71428569 0.0265224411,7.71428569 L9.99050005,7.71428569 Z M7.02133659,15.4285714 L9.95337361,20.5714286 L0.0265224411,20.5714286 C0.0118744869,20.5714286 0,20.5594475 0,20.5446681 L0,15.4553319 C0,15.4405525 0.0118744869,15.4285714 0.0265224411,15.4285714 L7.02133659,15.4285714 Z M0.0265224411,0 L21.5607791,0 C21.5754271,0 21.5873016,0.0119810743 21.5873016,0.0267604663 L21.5873016,5.11609665 C21.5873016,5.13087607 21.5754271,5.14285714 21.5607791,5.14285714 L0.0265224411,5.14285714 C0.0118744869,5.14285714 0,5.13087607 0,5.11609665 L0,0.0267604663 C0,0.0119810743 0.0118744869,0 0.0265224411,0 Z M12.6905032,7.71428569 L20.1984211,7.71428569 C20.2078056,7.71428569 20.2164914,7.71928943 20.2212615,7.72744361 L24,14.186837 L20.2212856,20.5584089 C20.2164962,20.5664848 20.2078542,20.5714286 20.1985266,20.5714286 L12.6903261,20.5714286 C12.681018,20.5714286 12.6723912,20.5665053 12.6675952,20.5584563 L8.88888891,14.2167059 L12.6676357,7.72749005 C12.6723992,7.71930961 12.6810997,7.71428569 12.6905032,7.71428569 Z M16.5079365,16.7142857 C17.9105644,16.7142857 19.047619,15.5630179 19.047619,14.1428571 C19.047619,12.7226963 17.9105644,11.5714286 16.5079365,11.5714286 C15.1053086,11.5714286 13.968254,12.7226963 13.968254,14.1428571 C13.968254,15.5630179 15.1053086,16.7142857 16.5079365,16.7142857 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PersonalBasicConfiguration.displayName = 'PersonalBasicConfiguration';
export default PersonalBasicConfiguration;
