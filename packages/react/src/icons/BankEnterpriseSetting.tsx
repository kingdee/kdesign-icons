import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BankEnterpriseSetting = ({
  size = '1em',
  fill = 'currentColor',
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
          id="799.银企设置"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12.9270851,23.9003192 L0.0134439295,23.9003192 L0.0134439295,22.3019853 L1.49376995,22.3019853 L1.49376995,20.947136 L3.03085922,20.947136 L3.03085922,7.47930613 L0,7.47930613 L0,4.82935824 L12.4834355,0 L14.4163738,0 L26.9132532,4.82935824 L26.901303,7.46884974 L23.9137631,7.46884974 L23.9137631,8.96261969 L14.5926386,8.96261969 C14.058446,8.96209921 13.5646363,9.2468799 13.2975401,9.70950466 L8.97606362,17.2037485 L12.9270851,23.9003192 Z M15.7771982,10.4563896 L22.9398251,10.4563896 C23.4672264,10.4563896 23.9554926,10.7346798 24.2244672,11.1883369 L27.7915899,17.2097236 C28.0710686,17.6817427 28.0693482,18.2689705 27.7871086,18.739344 L24.2274548,24.6696107 C23.9571706,25.1194848 23.470624,25.394514 22.9458002,25.3940896 L15.7667418,25.3940896 C15.2435843,25.3940896 14.7585472,25.1204134 14.4880747,24.6725982 L10.9299147,18.7737007 C10.6467523,18.3038765 10.643885,17.7166473 10.9224459,17.2440803 L14.4910623,11.1913245 C14.7595617,10.7360609 15.248656,10.4565784 15.7771982,10.4563896 L15.7771982,10.4563896 Z M19.4324533,20.9127793 C20.4997985,20.9127793 21.4860662,20.3433574 22.0197388,19.4190094 C22.5534114,18.4946613 22.5534114,17.3558175 22.0197388,16.4314694 C21.4860662,15.5071213 20.4997985,14.9376995 19.4324533,14.9376995 C17.7824806,14.9376995 16.4449134,16.2752667 16.4449134,17.9252394 C16.4449134,19.5752121 17.7824806,20.9127793 19.4324533,20.9127793 L19.4324533,20.9127793 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BankEnterpriseSetting.displayName = 'BankEnterpriseSetting';
export default BankEnterpriseSetting;
