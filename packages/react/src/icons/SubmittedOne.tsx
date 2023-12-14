import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SubmittedOne = ({
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
          id="1381-已提交"
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
              d="M22.6845557,15.4098277 C22.958236,15.0972726 23.4344198,15.0686462 23.744775,15.3415753 C24.0566057,15.6156044 24.0866809,16.0903662 23.8130006,16.4021165 L23.8130006,16.4021165 L19.4180458,21.3990821 C19.2755761,21.5615454 19.0699199,21.6546138 18.8538368,21.6544126 C18.6888599,21.6546111 18.5284347,21.600325 18.3974794,21.4999851 L18.3974794,21.4999851 L15.1287695,19.0013145 C14.7993658,18.749285 14.7362646,18.2778767 14.9879185,17.9480975 C15.2410479,17.6186402 15.7120807,17.5559146 16.0415379,17.8075684 L16.0415379,17.8075684 L18.7525849,19.8803054 L22.6845557,15.4098277 Z M13.763373,0 C14.1786555,0 14.5146859,0.336405927 14.5146859,0.751339675 L14.5146859,0.751339675 L14.5146859,2.63407535 L22.1394219,2.63407535 C23.1643883,2.63407535 23.9979045,3.46794032 23.9979045,4.49255781 L23.9979045,4.49255781 L23.9979045,13.268114 L22.4952787,13.268114 L22.4952787,4.49255781 C22.4952787,4.29627855 22.3353524,4.13670102 22.1394219,4.13670102 L22.1394219,4.13670102 L14.4871058,4.13670102 C14.3023361,5.4070969 13.2058443,6.3862933 11.8850641,6.3862933 C10.5642838,6.3862933 9.46808712,5.4070969 9.28337104,4.13670102 L9.28337104,4.13670102 L1.85885806,4.13670102 C1.6625788,4.13670102 1.50262567,4.29627855 1.50262567,4.49255781 L1.50262567,4.49255781 L1.50262567,19.4290993 C1.50262567,19.6253785 1.6625788,19.7849292 1.85885806,19.7849292 L1.85885806,19.7849292 L13.9496989,19.7849292 L13.9496989,21.2875549 L1.85885806,21.2875549 C0.83383812,21.2875549 0,20.4536899 0,19.4290724 L0,19.4290724 L0,4.49253097 C0,3.46788666 0.833864961,2.63404851 1.85883122,2.63404851 L1.85883122,2.63404851 L9.25579107,2.63404851 L9.25579107,0.751339675 C9.25579107,0.336405927 9.592197,0 10.0070771,0 L10.0070771,0 L13.763373,0 Z M18.0834218,11.8124386 C18.4987311,11.8124386 18.8347616,12.1488714 18.8347616,12.5637514 C18.8347616,12.9786315 18.4987311,13.3150643 18.0834218,13.3150643 L18.0834218,13.3150643 L4.72822172,13.3150643 C4.3129392,13.3150643 3.97690886,12.9786583 3.97690886,12.5637514 C3.97690886,12.1488446 4.31291236,11.8124386 4.72822172,11.8124386 L4.72822172,11.8124386 L18.0834218,11.8124386 Z M19.8113288,8.62738083 C20.2266113,8.62738083 20.5626416,8.96378676 20.5626416,9.37869369 C20.5626416,9.7936006 20.2266113,10.1300333 19.8113288,10.1300333 L19.8113288,10.1300333 L4.72822172,10.1300333 C4.3129392,10.1300333 3.97690886,9.79357376 3.97690886,9.37869369 C3.97690886,8.9638136 4.31291236,8.62738083 4.72819488,8.62738083 L4.72819488,8.62738083 L19.8113288,8.62738083 Z M13.0120334,1.50265251 L10.7584168,1.50265251 L10.7584168,3.75661785 C10.7584168,4.37807946 11.2635756,4.88361395 11.8850373,4.88361395 C12.5064988,4.88361395 13.0120334,4.37805265 13.0120334,3.75661785 L13.0120334,3.75661785 L13.0120334,1.50265251 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SubmittedOne.displayName = 'SubmittedOne';
export default SubmittedOne;
