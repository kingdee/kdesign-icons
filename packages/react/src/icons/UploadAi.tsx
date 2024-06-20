import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const UploadAi = ({
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
        viewBox="0 0 16 16"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="附件"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M6.27997999,15 C4.87420283,15 3.55245717,14.4485102 2.55808428,13.4477236 L2.54057772,13.4301041 C1.54795548,12.4310795 1,11.1008086 1,9.68596419 C1,8.27111978 1.54795548,6.94084888 2.54232837,5.9400623 L7.29711142,1.15461096 C7.50193823,0.948463015 7.83456296,0.948463015 8.03938977,1.15461096 C8.24421658,1.3607589 8.24421658,1.69552906 8.03938977,1.901677 L3.28460673,6.68712834 C2.48980868,7.48705283 2.0503939,8.55303149 2.0503939,9.68420225 C2.0503939,10.8171349 2.48805802,11.8813517 3.28460673,12.6812762 L3.30211329,12.6988956 C4.09691134,13.4988201 5.15605852,13.9410691 6.27997999,13.9410691 C7.40565212,13.9410691 8.46304864,13.5005821 9.25784669,12.6988956 L13.1775666,8.75741749 C13.6765037,8.25526225 13.9513568,7.58748388 13.9513568,6.87741875 C13.9513568,6.16735362 13.6765037,5.49957524 13.1775666,4.99742 C12.6786295,4.49526476 12.0151307,4.2186389 11.3096161,4.2186389 C10.6041015,4.2186389 9.94060273,4.49526476 9.44166562,4.99742 L5.93335001,8.52836422 C5.52019507,8.944184 5.52019507,9.61901016 5.93335001,10.0348299 C6.34650494,10.4506497 7.01700638,10.4506497 7.43016131,10.0348299 L10.5358259,6.90913381 C10.7406527,6.70298587 11.0732775,6.70298587 11.2781043,6.90913381 C11.4829311,7.11528175 11.4829311,7.45005191 11.2781043,7.65619986 L8.17243966,10.781896 C7.34963111,11.6100116 6.01212955,11.6100116 5.19107165,10.781896 C4.3682631,9.95378032 4.3682631,8.60765189 5.19107165,7.78129818 L8.69763661,4.25211591 C10.1366763,2.80379448 12.4790546,2.80379448 13.9180943,4.25211591 C14.6148556,4.9533713 15,5.88720385 15,6.87918069 C15,7.87115754 14.6166062,8.80499009 13.9180943,9.50624548 L10.0018757,13.4477236 C9.00750281,14.4485102 7.68575716,15 6.27997999,15 Z"
            id="路径"
            fill={fill}
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
UploadAi.displayName = 'UploadAi';
export default UploadAi;