import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PendingSubmission = ({
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
          id="1382-待提交"
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
              d="M12.7058824,10.8338824 L12.7058824,11.2941176 L24,11.2941176 L24,12 C24,18.627417 18.627417,24 12,24 C5.37258302,24 0,18.627417 0,12 C0,5.37258302 5.37258302,0 12,0 L12.7058824,0 L12.7058824,10.8338824 Z M1.41174367,12 C1.4037812,17.7159956 5.93404667,22.4065031 11.6468682,22.5971338 C17.3596897,22.7877645 22.1925638,18.409695 22.5656471,12.7058824 L11.2941071,12.7058824 L11.2941071,12 L11.2941071,1.43435294 C5.73242592,1.80595909 1.41125545,6.42590764 1.41174367,12 L1.41174367,12 Z M23.3237647,8.02023529 C23.4427931,8.38483189 23.2489192,8.77775893 22.8871511,8.90512583 C22.525383,9.03249272 22.1281088,8.84769001 21.9924706,8.48894118 C20.9228538,5.45668179 18.5369572,3.07234249 15.504,2.00470588 C15.1496565,1.86642246 14.9686021,1.47224027 15.0945796,1.11333741 C15.2205573,0.754434522 15.6082591,0.559890014 15.9712941,0.673411765 C19.408116,1.8827448 22.1117914,4.58434368 23.3237647,8.02023529 L23.3237647,8.02023529 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PendingSubmission.displayName = 'PendingSubmission';
export default PendingSubmission;
