import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Ad = ({
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
          id="246.渠道广告"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="渠道广告"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M17.3333333,0 C21.3333333,0 24,2.66666667 24,6.66666667 L24,20 C24,20.7363796 23.4030463,21.3333333 22.6666667,21.3333333 L21.3333333,21.3333333 L21.3333333,22.6666667 C21.3333333,23.0202887 21.1928576,23.3594272 20.9428091,23.6094757 C20.6927605,23.8595243 20.353622,24 20,24 L6.66666667,24 C2.98476835,24 0,21.0152316 0,17.3333333 L0,4 C0,3.26362035 0.59695368,2.66666667 1.33333333,2.66666667 L2.66666667,2.66666667 L2.66666667,1.33333333 C2.66666667,0.59695368 3.26362035,0 4,0 L17.3333333,0 Z M17.3333333,1.33333333 L4,1.33333333 L4,2.66666667 L14.6666667,2.66666667 C18.3485649,2.66666667 21.3333333,5.65143501 21.3333333,9.33333333 L21.3333333,20 L22.6666667,20 L22.6666667,6.66666667 C22.6666667,5.10266667 22.196,3.804 21.3333333,2.88 L21.3333333,2.66666667 L21.12,2.66666667 C20.208,1.81333333 18.92,1.33333333 17.3333333,1.33333333 Z M7.94874003,9.6 L6.50096075,9.6 L3.6,17.3466996 L5.004562,17.3466996 L5.67443,15.3749107 L8.72124912,15.3749107 L9.41812795,17.3466996 L10.8280921,17.3466996 L7.94874003,9.6 Z M14.1288128,9.6 L11.8923179,9.6 L11.8923179,17.3466996 L14.036976,17.3466996 C15.3695092,17.3466996 16.4319343,16.9838544 17.2242513,16.258164 C18.0165684,15.5324737 18.4127268,14.5717893 18.4127268,13.3761109 C18.4127268,10.948611 17.084932,9.69151291 14.4293424,9.60481648 L14.1288128,9.6 Z M14.2476603,10.6912366 C16.1240111,10.6912366 17.0621865,11.596999 17.0621865,13.4085239 C17.0621865,14.3160869 16.810986,15.018368 16.3085849,15.5153668 C15.8061839,16.0123657 15.1030025,16.2608652 14.1990409,16.2608652 L13.1726301,16.2608652 L13.1726301,10.6912366 L14.2476603,10.6912366 Z M7.20324173,10.7506604 C7.23025253,10.9181274 7.25625045,11.0511557 7.28123544,11.1497451 L7.3058828,11.2368549 L8.38091293,14.3268913 L6.00936403,14.3268913 L7.07358987,11.2368549 C7.10330173,11.1477193 7.13098781,11.0342739 7.15664808,10.8965187 L7.18163309,10.7506604 L7.20324173,10.7506604 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Ad.displayName = 'Ad';
export default Ad;