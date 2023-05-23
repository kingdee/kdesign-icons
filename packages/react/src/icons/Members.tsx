import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Members = ({
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
          id="49.会员"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="会员"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M18.4,18.4 C18.8418278,18.4 19.2,18.7581722 19.2,19.2 C19.2,19.6418278 18.8418278,20 18.4,20 L5.6,20 C5.15817221,20 4.8,19.6418278 4.8,19.2 C4.8,18.7581722 5.15817221,18.4 5.6,18.4 L18.4,18.4 Z M12,0 C12.8836556,0 13.6,0.716344397 13.6,1.6 C13.6,2.21534561 13.2526286,2.74955832 12.7432846,3.0172393 L16.1842125,9.58793815 C16.2866978,9.78364129 16.5284273,9.85920919 16.7241304,9.75672392 L16.7502134,9.74179008 L16.7502134,9.74179008 L21.1097527,6.54636393 C20.9150268,6.28132695 20.8,5.95409649 20.8,5.6 C20.8,4.7163444 21.5163444,4 22.4,4 C23.2836556,4 24,4.7163444 24,5.6 C24,6.4836556 23.2836556,7.2 22.4,7.2 C22.2477154,7.2 22.1003997,7.17872504 21.9608632,7.13898529 L19.3658004,16.2198191 C19.2676599,16.5632393 18.9537613,16.8 18.5965933,16.8 L5.40345828,16.8 C5.04626591,16.8 4.73235203,16.5632076 4.63423311,16.2197558 L2.03993108,7.13875889 C1.90015936,7.17864425 1.75257364,7.2 1.6,7.2 C0.716344397,7.2 0,6.4836556 0,5.6 C0,4.7163444 0.716344397,4 1.6,4 C2.4836556,4 3.2,4.7163444 3.2,5.6 C3.2,5.95409649 3.08497324,6.28132695 2.8902473,6.54636393 L7.22494177,9.72497185 C7.40309112,9.85560776 7.65341112,9.81709056 7.78404705,9.63894121 L7.80088504,9.61407247 L7.80088504,9.61407247 L11.2575134,3.01765844 C10.7477342,2.75011622 10.4,2.21566694 10.4,1.6 C10.4,0.716344397 11.1163444,0 12,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Members.displayName = 'Members';
export default Members;
