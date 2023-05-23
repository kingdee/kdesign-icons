import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Examination = ({
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
          id="287.检查"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="检查"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M16.8888889,11.5555556 C19.8344075,11.5555556 22.2222222,13.9433702 22.2222222,16.8888889 C22.2222222,18.0403981 21.8572902,19.106673 21.2367701,19.9783695 L23.7396505,22.4825718 C24.0867832,22.8297045 24.0867832,23.3925178 23.7396505,23.7396505 C23.4192202,24.0600806 22.9150149,24.0847292 22.5663116,23.8135959 L22.4825717,23.7396505 L19.9783695,21.2367701 C19.106673,21.8572902 18.0403981,22.2222222 16.8888889,22.2222222 C13.9433702,22.2222222 11.5555555,19.8344076 11.5555555,16.8888889 C11.5555555,13.9433702 13.9433702,11.5555556 16.8888889,11.5555556 Z M21.3333333,0 C21.8242531,0 22.2222222,0.397969124 22.2222222,0.888888889 L22.2233618,12.1864925 C20.9203215,10.7094406 19.0134059,9.77777778 16.8888889,9.77777778 C12.9615306,9.77777778 9.77777777,12.9615307 9.77777777,16.8888889 C9.77777777,19.013406 10.7094406,20.9203215 12.1864924,22.2233618 L0.888888888,22.2222222 C0.397969123,22.2222222 0,21.8242531 0,21.3333333 L0,0.888888889 C0,0.397969124 0.397969123,0 0.888888888,0 L21.3333333,0 Z M16.8888889,13.3333333 C14.9252098,13.3333333 13.3333333,14.9252098 13.3333333,16.8888889 C13.3333333,18.852568 14.9252098,20.4444445 16.8888889,20.4444445 C17.7819046,20.4444445 18.5980269,20.1152242 19.2225059,19.5715334 C19.2608808,19.4991786 19.3108855,19.4320358 19.3714606,19.3714606 C19.4320358,19.3108855 19.4991786,19.2608808 19.5705969,19.2214466 C20.1152242,18.5980269 20.4444444,17.7819046 20.4444444,16.8888889 C20.4444444,14.9252098 18.852568,13.3333333 16.8888889,13.3333333 Z M7.99999999,9.77777778 L4.44444444,9.77777778 C3.95352468,9.77777778 3.55555555,10.1757469 3.55555555,10.6666667 C3.55555555,11.1225207 3.89870239,11.4982286 4.34078122,11.5495754 L4.44444444,11.5555556 L7.99999999,11.5555556 C8.49091973,11.5555556 8.88888888,11.1575864 8.88888888,10.6666667 C8.88888888,10.1757469 8.49091973,9.77777778 7.99999999,9.77777778 Z M11.5555556,4.44444445 L4.44444444,4.44444445 C3.95352468,4.44444445 3.55555555,4.84241357 3.55555555,5.33333334 C3.55555555,5.78918742 3.89870239,6.16489526 4.34078122,6.21624201 L4.44444444,6.22222223 L11.5555556,6.22222223 C12.0464753,6.22222223 12.4444444,5.8242531 12.4444444,5.33333334 C12.4444444,4.84241357 12.0464753,4.44444445 11.5555556,4.44444445 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Examination.displayName = 'Examination';
export default Examination;
