import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AccountingEventOne = ({
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
          id="429.会计事件"
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
              d="M17.8461563,9.84614989 C21.2448303,9.84614989 24,12.6013196 24,15.9999936 C24,19.3986676 21.2448303,22.1538373 17.8461563,22.1538373 C14.4474824,22.1538373 11.6923126,19.3986676 11.6923126,15.9999936 C11.6923126,12.6013196 14.4474824,9.84614989 17.8461563,9.84614989 Z M3.69232557,1.23076875 L3.69232557,3.69230621 L7.38463179,3.69230621 L7.38463179,1.23076875 L16.0000096,1.23076875 L16.0000096,3.69230621 L19.6923042,3.69230621 L19.6923042,1.23076875 L22.1599925,1.23076875 C22.8369144,1.23076875 23.3846059,1.77846082 23.3846059,2.46153747 L23.3846059,11.1153712 C22.031466,9.58230212 20.0517293,8.61538117 17.8461563,8.61538117 C13.7677475,8.61538117 10.4615439,11.9215848 10.4615439,15.9999936 C10.4615439,17.8918429 11.1729559,19.6175331 12.3428536,20.924138 L1.22464261,20.9230685 C0.898887088,20.9227441 0.586657108,20.7927731 0.356891096,20.5618521 C0.127125083,20.3309312 -0.00127914849,20.0180533 9.60824083e-06,19.6922998 L9.60824083e-06,2.46153747 C9.60824083e-06,1.78215312 0.55387448,1.23076875 1.22464261,1.23076875 L3.69232557,1.23076875 Z M15.6716467,12.3324602 C15.4580265,12.5460803 15.4342911,12.8776794 15.6004399,13.117517 L15.6716467,13.2027451 L16.64674,14.1780636 L15.3827406,14.1788364 C15.0428732,14.1788364 14.7673562,14.4543535 14.7673562,14.7942208 C14.7673562,15.0963252 14.9850486,15.3475847 15.2721245,15.3996906 L15.3827406,15.4096052 L17.2288937,15.4096052 L17.2288937,16.6396011 L14.7673562,16.6403739 C14.4274889,16.6403739 14.1519718,16.915891 14.1519718,17.2557583 C14.1519718,17.5578626 14.3696643,17.8091222 14.6567401,17.861228 L14.7673562,17.8711426 L17.2288937,17.8703698 L17.2288937,19.1019114 C17.2288937,19.4417788 17.5044107,19.7172957 17.844278,19.7172957 C18.1463824,19.7172957 18.397642,19.4996034 18.4497478,19.2125276 L18.4596624,19.1019114 L18.4596624,17.8703698 L20.9211999,17.8711426 C21.2610673,17.8711426 21.5365842,17.5956257 21.5365842,17.2557583 C21.5365842,16.953654 21.3188919,16.7023944 21.0318161,16.6502886 L20.9211999,16.6403739 L18.4596624,16.6396011 L18.4596624,15.4096052 L20.3058155,15.4096052 C20.6456829,15.4096052 20.9211999,15.1340882 20.9211999,14.7942208 C20.9211999,14.4921165 20.7035075,14.240857 20.4164317,14.1887511 L20.3058155,14.1788364 L19.0516622,14.1780636 L20.0218687,13.2088969 L20.0930753,13.1236688 C20.2384555,12.9138108 20.2384555,12.6336981 20.0930753,12.4238402 L20.0218687,12.338612 L19.9366405,12.2674053 C19.7267825,12.1220251 19.4466697,12.1220251 19.2368119,12.2674053 L19.1515837,12.338612 L17.8492011,13.6389869 L16.5419315,12.3324602 C16.301609,12.0921377 15.9119692,12.0921377 15.6716467,12.3324602 Z M8.61539076,14.7692249 L3.69231583,14.7692249 C3.35244843,14.7692249 3.07693144,15.0447418 3.07693144,15.3846092 C3.07693144,15.6867136 3.29462388,15.9379732 3.58169971,15.9900789 L3.69231583,15.9999936 L8.61539076,15.9999936 C8.95525815,15.9999936 9.23077515,15.7244767 9.23077515,15.3846092 C9.23077515,15.0447418 8.95525815,14.7692249 8.61539076,14.7692249 Z M11.0769314,8.61538117 L3.69231583,8.61538117 C3.35244843,8.61538117 3.07693144,8.89089811 3.07693144,9.23076553 C3.07693144,9.53286991 3.29462388,9.78412949 3.58169971,9.83623519 L3.69231583,9.84614989 L11.0769314,9.84614989 C11.4167957,9.84614989 11.6923126,9.57063296 11.6923126,9.23076553 C11.6923126,8.89089811 11.4167957,8.61538117 11.0769314,8.61538117 Z M6.15386676,0 L6.15386676,2.46153747 L4.92309801,2.46153747 L4.92309801,0 L6.15386676,0 Z M18.4615387,0 L18.4615387,2.46153747 L17.23077,2.46153747 L17.23077,0 L18.4615387,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AccountingEventOne.displayName = 'AccountingEventOne';
export default AccountingEventOne;
