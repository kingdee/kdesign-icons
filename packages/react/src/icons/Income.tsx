import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Income = ({
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
          id="719.收入"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M20.35264,0 C21.2624518,0 22,0.737548196 22,1.64735999 L22,23.2859733 C22,24.1957851 21.2624518,24.9333333 20.35264,24.9333333 L1.64735999,24.9333333 C0.737548196,24.9333333 0,24.1957851 0,23.2859733 L0,1.64735999 C0,0.737548196 0.737548196,0 1.64735999,0 L20.35264,0 Z M16.8666667,17.6 L5.13333334,17.6 C4.72832452,17.6 4.4,17.9283245 4.4,18.3333333 C4.4,18.7383422 4.72832452,19.0666667 5.13333334,19.0666667 L5.13333334,19.0666667 L16.8666667,19.0666667 C17.2716755,19.0666667 17.6,18.7383422 17.6,18.3333333 C17.6,17.9283245 17.2716755,17.6 16.8666667,17.6 L16.8666667,17.6 Z M16.8666667,13.2 L5.13333334,13.2 C4.72832452,13.2 4.4,13.5283245 4.4,13.9333333 C4.4,14.3383421 4.72832452,14.6666667 5.13333334,14.6666667 L5.13333334,14.6666667 L16.8666667,14.6666667 C17.2716755,14.6666667 17.6,14.3383421 17.6,13.9333333 C17.6,13.5283245 17.2716755,13.2 16.8666667,13.2 L16.8666667,13.2 Z M11.9036934,2.78640407 L10.2113857,2.78640407 L10.2113857,6.94195964 L8.6799425,6.94195964 C8.56943527,6.94195964 8.46356415,6.98637014 8.38612768,7.06520817 C8.22674301,7.22747764 8.22908158,7.4882298 8.39135103,7.64761446 L8.39135103,7.64761446 L11.0575396,10.2664041 L13.7237281,7.64761446 C13.8025661,7.57017798 13.8469766,7.46430686 13.8469766,7.35379964 C13.8469766,7.1263467 13.6625896,6.94195964 13.4351366,6.94195964 L13.4351366,6.94195964 L11.9036934,6.94195964 L11.9036934,2.78640407 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Income.displayName = 'Income';
export default Income;