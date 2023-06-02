import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PartTime = ({
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
          id="737.兼职"
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
              d="M19.6909025,15.9980772 C22.0713856,15.9980772 24,17.9266916 24,20.3062133 C24,22.6866964 22.0713856,24.6153108 19.691864,24.6153108 C17.3123422,24.6153108 15.3827665,22.6857349 15.3827665,20.3062133 C15.3827665,17.9266916 17.3113809,15.9980772 19.6909025,15.9980772 Z M16.4081702,3.54886772 L16.4520496,3.78032908 L16.4520496,6.98279488 C16.4520496,6.98279488 17.4704915,7.19508277 17.2917485,8.86759432 C17.1135082,10.5391056 15.9335035,11.0029287 15.1118941,11.8204777 C14.2903564,12.6385745 14.4418164,13.9418162 13.1016609,14.6086405 L13.1849909,14.5625052 C13.3476487,14.6277699 13.3873273,14.7064679 13.2534017,14.7985991 L13.1852284,14.8389064 L13.1852284,16.448882 C13.1852284,16.448882 14.0248165,16.7398538 15.0478645,17.0854045 C14.4246476,18.0783868 14.0642437,19.2522826 14.0642437,20.5103554 C14.0642437,21.5656675 14.3178382,22.5617495 14.7674121,23.4409862 L0,23.4404061 C0,20.6979329 1.31852283,18.6410779 2.91816164,18.1181792 C4.46067047,17.6139554 7.67104378,16.5300178 7.89838866,16.4532369 L7.91113709,16.4489309 L7.91113709,14.8389064 C7.76693985,14.7639253 7.73313121,14.6971443 7.78556638,14.6385636 C7.75781696,14.6196135 7.74103889,14.6086405 7.74103889,14.6086405 C6.40088338,13.9418162 6.58891033,12.6380505 5.73080562,11.8204777 C4.87270092,11.0029049 3.72923939,10.5405583 3.5509751,8.8680468 C3.3804026,7.27251329 3.86883817,7.00523778 4.27901415,6.98423656 L4.33699871,6.98279488 L4.33699871,4.13927833 C4.53282012,1.8406429 7.0741473,0.324356662 9.24945237,0.0731308324 C11.378443,-0.332127389 15.7971228,0.963456514 16.4081702,3.54886772 Z M19.6322558,18.3227978 C19.4226656,18.3227978 19.2524937,18.4929697 19.2524937,18.7025599 L19.2524937,18.7025599 L19.2524937,20.4831151 C19.2524937,20.5968482 19.3037066,20.7045359 19.3919001,20.7763491 L19.3919001,20.7763491 L20.8821056,21.9954333 C20.9532509,22.0531187 21.0378561,22.081 21.1224613,22.081 C21.2330249,22.081 21.3416657,22.0329289 21.4166567,21.9415936 C21.5493331,21.7800746 21.5252974,21.5406803 21.3637784,21.408004 L21.3637784,21.408004 L20.0120178,20.3023676 L20.0120178,18.7025599 C20.0120178,18.4929697 19.841846,18.3227978 19.6322558,18.3227978 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PartTime.displayName = 'PartTime';
export default PartTime;