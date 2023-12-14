import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ApplicationManagement = ({
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
          id="845.应用管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.47091375,0.861641348 L10.2963962,0.861641348 C11.1087595,0.861641348 11.76731,1.52019186 11.76731,2.3325551 L11.76731,11.1580376 C11.76731,11.9704008 11.1087595,12.6289513 10.2963962,12.6289513 L1.47091375,12.6289513 C0.658550517,12.6289513 0,11.9704008 0,11.1580376 L0,2.3325551 C0,1.52019186 0.658550517,0.861641348 1.47091375,0.861641348 Z M1.47091375,15.5707788 L10.2963962,15.5707788 C10.6865068,15.5707788 11.0606395,15.7257497 11.3364893,16.0015995 C11.6123392,16.2774493 11.76731,16.651582 11.76731,17.0416926 L11.76731,25.8671751 C11.76731,26.6795383 11.1087595,27.3380888 10.2963962,27.3380888 L1.47091375,27.3380888 C0.658550517,27.3380888 0,26.6795383 0,25.8671751 L0,17.0416926 C0,16.2293293 0.658550517,15.5707788 1.47091375,15.5707788 L1.47091375,15.5707788 Z M21.9901605,0.43066362 L27.5693364,6.00983947 C28.1435545,6.58423107 28.1435545,7.51531991 27.5693364,8.08971151 L21.9372076,13.7218402 C21.362816,14.2960584 20.4317272,14.2960584 19.8573356,13.7218402 L14.2781598,8.1426644 C13.7039416,7.5682728 13.7039416,6.63718396 14.2781598,6.06279236 L19.9102885,0.43066362 C20.4846801,-0.14355454 21.4157689,-0.14355454 21.9901605,0.43066362 Z M16.1800512,15.5707788 L25.0055337,15.5707788 C25.3956443,15.5707788 25.769777,15.7257497 26.0456268,16.0015995 C26.3214766,16.2774493 26.4764475,16.651582 26.4764475,17.0416926 L26.4764475,25.8671751 C26.4764475,26.6795383 25.8178969,27.3380888 25.0055337,27.3380888 L16.1800512,27.3380888 C15.7899406,27.3380888 15.415808,27.183118 15.1399581,26.9072682 C14.8641083,26.6314183 14.7091375,26.2572856 14.7091375,25.8671751 L14.7091375,17.0416926 C14.7091375,16.651582 14.8641083,16.2774493 15.1399581,16.0015995 C15.415808,15.7257497 15.7899406,15.5707788 16.1800512,15.5707788 L16.1800512,15.5707788 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ApplicationManagement.displayName = 'ApplicationManagement';
export default ApplicationManagement;
