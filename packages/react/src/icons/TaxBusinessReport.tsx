import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const TaxBusinessReport = ({
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
          id="435.个税业务报表"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.41176471,2.76543209 L19.7647059,2.76543209 C20.5444019,2.76543209 21.1764706,3.38449516 21.1764706,4.14814814 L21.1764706,23.5061728 C21.1764706,24.2698259 20.5444019,24.8888889 19.7647059,24.8888889 L1.41176471,24.8888889 C0.63206858,24.8888889 0,24.2698259 0,23.5061728 L0,4.14814814 C0,3.38449516 0.63206858,2.76543209 1.41176471,2.76543209 Z M4.23529412,15.2098765 L4.23529412,20.7407407 L5.64705883,20.7407407 L5.64705883,15.2098765 L4.23529412,15.2098765 L4.23529412,15.2098765 Z M9.88235298,16.5925926 L9.88235298,20.7407407 L11.2941177,20.7407407 L11.2941177,16.5925926 L9.88235298,16.5925926 Z M15.5294117,12.4444444 L15.5294117,20.7407407 L16.9411764,20.7407407 L16.9411764,12.4444444 L15.5294117,12.4444444 Z M10.6122353,12.6933333 L17.5129412,8.6834568 L16.7929412,7.49432098 L10.8465883,10.9511111 L7.71952942,7.81787654 L3.42070588,10.6247901 L4.20282354,11.7752099 L7.52752942,9.60434569 L10.6122353,12.6947161 L10.6122353,12.6933333 Z M22.5882353,22.1234568 L22.5882353,2.76543209 C22.5882353,2.00177911 21.9561667,1.38271605 21.1764706,1.38271605 L2.82352942,1.38271605 L2.82352942,0 L21.1764706,0 C21.9253171,0 22.6434929,0.291357184 23.1730074,0.80997632 C23.7025219,1.32859543 24,2.03199391 24,2.76543209 L24,22.1234568 L22.5882353,22.1234568 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
TaxBusinessReport.displayName = 'TaxBusinessReport';
export default TaxBusinessReport;
