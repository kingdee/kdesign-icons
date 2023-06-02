import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const InternalStatement = ({
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
          id="489.内部结算单"
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
              d="M22.56,4.61538462 C23.35529,4.61538462 24,5.26009456 24,6.05538462 L24,20.7138462 C24,21.5091362 23.35529,22.1538462 22.56,22.1538462 L6.05538462,22.1538462 C5.26009456,22.1538462 4.61538462,21.5091362 4.61538462,20.7138462 L4.61538462,20.3076923 L22.1538462,20.3076923 L22.1538462,4.61538462 L22.56,4.61538462 Z M19.7907692,0 C20.5860593,0 21.2307692,0.644709947 21.2307692,1.44 L21.2307692,17.9446154 C21.2307692,18.7399054 20.5860593,19.3846154 19.7907692,19.3846154 L1.44,19.3846154 C0.644709947,19.3846154 0,18.7399054 0,17.9446154 L0,1.44 C0,0.644709947 0.644709947,0 1.44,0 L19.7907692,0 Z M7.52271008,3.90741474 C7.34568378,3.69081426 7.04541841,3.63489056 6.80613167,3.75284851 L6.80613167,3.75284851 L6.73938462,3.792 L6.69099831,3.83524124 C6.50317405,4.02619386 6.48732545,4.32341033 6.66312839,4.53923219 L6.66312839,4.53923219 L9.99138462,8.62430769 L6.89580997,8.62482426 L6.81774915,8.63195694 C6.6404855,8.66470597 6.50070942,8.80643612 6.46853521,8.97818254 L6.46853521,8.97818254 L6.46153846,9.05339567 L6.46837496,9.13043189 C6.50434439,9.33035981 6.67829122,9.48196708 6.89580997,9.48196708 L6.89580997,9.48196708 L9.91476923,9.48184615 L9.91476923,11.196 L6.91828127,11.1962528 L6.83618115,11.2039342 C6.64974507,11.2392024 6.50273632,11.3918348 6.46889723,11.5767925 L6.46889723,11.5767925 L6.46153846,11.6577913 L6.46891782,11.7407534 C6.50769435,11.9560603 6.69461438,12.1193297 6.91828127,12.1193297 L6.91828127,12.1193297 L9.91476923,12.1190769 L9.91478926,15.021403 L9.92212552,15.10419 C9.95587856,15.2921859 10.1026968,15.4404245 10.2915976,15.4745468 L10.2915976,15.4745468 L10.3181538,15.4772308 L10.3444681,15.4748226 C10.5591205,15.4372044 10.7218935,15.2549481 10.7218935,15.021403 L10.7218935,15.021403 L10.7215385,12.1190769 L13.6734347,12.1193297 L13.7555348,12.1116483 C13.9686046,12.0713419 14.1301775,11.8777432 14.1301775,11.6577913 L14.1301775,11.6577913 L14.1227982,11.5748291 C14.0840216,11.3595221 13.8971016,11.1962528 13.6734347,11.1962528 L13.6734347,11.1962528 L10.7215385,11.196 L10.7215385,9.48184615 L13.695906,9.48196708 L13.7739668,9.47483437 C13.9765539,9.43740693 14.1301775,9.25763677 14.1301775,9.05339567 L14.1301775,9.05339567 L14.123341,8.97635945 C14.0873716,8.77643151 13.9134247,8.62482426 13.695906,8.62482426 L13.695906,8.62482426 L10.7150769,8.62430769 L13.7078229,4.55578592 C13.877367,4.32522843 13.8468448,4.02516205 13.657663,3.83489369 L13.657663,3.83489369 L13.6089231,3.79292308 L13.5512897,3.75732814 C13.3109179,3.63462888 13.0154809,3.700567 12.8542655,3.92249475 L12.8542655,3.92249475 L10.3511927,7.36820503 L7.52271008,3.90741474 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
InternalStatement.displayName = 'InternalStatement';
export default InternalStatement;