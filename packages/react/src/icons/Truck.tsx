import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Truck = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="139.配送、货车"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="配送、货车"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M5.79310345,14.28 C7.62135642,14.28 9.10344828,15.7843232 9.10344828,17.64 C9.10344828,19.4956768 7.62135642,21 5.79310345,21 C3.96485048,21 2.48275862,19.4956768 2.48275862,17.64 C2.48275862,15.7843232 3.96485048,14.28 5.79310345,14.28 Z M19.0344828,14.28 C20.8627357,14.28 22.3448276,15.7843232 22.3448276,17.64 C22.3448276,19.4956768 20.8627357,21 19.0344828,21 C17.2062298,21 15.7241379,19.4956768 15.7241379,17.64 C15.7241379,15.7843232 17.2062298,14.28 19.0344828,14.28 Z M5.79310345,15.96 C4.87897696,15.96 4.13793103,16.7121616 4.13793103,17.64 C4.13793103,18.5678384 4.87897696,19.32 5.79310345,19.32 C6.70722993,19.32 7.44827586,18.5678384 7.44827586,17.64 C7.44827586,16.7121616 6.70722993,15.96 5.79310345,15.96 Z M19.0344828,15.96 C18.1203563,15.96 17.3793103,16.7121616 17.3793103,17.64 C17.3793103,18.5678384 18.1203563,19.32 19.0344828,19.32 C19.9486092,19.32 20.6896552,18.5678384 20.6896552,17.64 C20.6896552,16.7121616 19.9486092,15.96 19.0344828,15.96 Z M24,16.8 C24,17.2639192 23.629477,17.64 23.1724138,17.64 L22.2405891,17.6402045 C22.0731351,16.9796677 21.7127665,16.3977293 21.2240771,15.9599521 L22.3448276,15.96 L22.3448276,11.76 L18.2068966,11.76 C17.7824807,11.76 17.4326837,11.4357262 17.3848781,11.0179617 L17.3793103,10.92 L17.3793103,5.87916 L14.8965517,5.88 L14.8965517,15.96 L16.8448884,15.9599521 C16.356199,16.3977293 15.9958304,16.9796677 15.8283764,17.6402045 L13.8008276,17.63916 L8.99920981,17.6402045 C8.83175578,16.9796677 8.47138716,16.3977293 7.98269777,15.9599521 L13.2413793,15.96 L13.2413793,1.68 L1.65517241,1.68 L1.65517241,15.96 L3.6035091,15.9599521 C3.11481973,16.3977293 2.75445115,16.9796677 2.58699709,17.6402045 L0.827586207,17.64 C0.370522977,17.64 0,17.2639192 0,16.8 L0,0.84 C0,0.376080822 0.370522977,0 0.827586207,0 L14.0689655,0 C14.5260287,0 14.8965517,0.376080822 14.8965517,0.84 L14.8965517,4.19916 L20.2467444,4.2 C20.5234505,4.2 20.7818489,4.34036497 20.9353378,4.57405184 L23.8610071,9.02838333 C23.9516375,9.16636813 24,9.32849458 24,9.49433152 L24,16.8 Z M22.3448276,9.74988 L19.8033103,5.88 L19.0344828,5.87916 L19.0344828,10.08 L22.3448276,10.08 L22.3448276,9.74988 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Truck.displayName = 'Truck';
export default Truck;
