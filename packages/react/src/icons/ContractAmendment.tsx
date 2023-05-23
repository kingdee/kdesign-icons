import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ContractAmendment = ({
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
          id="613.合同修订"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M10.8399285,24.0078386 L13.2614895,26.4293997 L10.9721256,27.2560213 C10.5102323,27.4227974 10.0005951,27.1835575 9.8338191,26.7216643 C9.75289487,26.4975411 9.76531284,26.2503155 9.86828817,26.0354293 L10.8399285,24.0078386 Z M19.7338163,15.1160465 L22.2203431,17.6207665 L14.0458565,25.7889841 L11.5593297,23.2842641 L19.7338163,15.1160465 Z M18.6727634,0 C19.1638434,0 19.5619426,0.398099094 19.5619426,0.889179208 L19.5619426,13.7735943 L9.43786879,24.0078386 L0.889179208,24.0078386 C0.398099094,24.0078386 0,23.6097395 0,23.1186594 L0,0.889179208 C0,0.398099094 0.398099094,0 0.889179208,0 L18.6727634,0 Z M8.89179208,16.0052257 L5.33507525,16.0052257 C4.84399513,16.0052257 4.44589604,16.4033248 4.44589604,16.8944049 C4.44589604,17.3309207 4.76044345,17.6939698 5.17524418,17.7692583 L5.33507525,17.7835842 L8.89179208,17.7835842 C9.38287219,17.7835842 9.78097129,17.385485 9.78097129,16.8944049 C9.78097129,16.4033248 9.38287219,16.0052257 8.89179208,16.0052257 Z M22.7768411,13.6642103 L23.6805731,14.5679424 C24.1106638,14.9980329 24.1005264,15.7054849 23.6858352,16.1201759 L22.9123496,16.8936616 L20.4511218,14.4324338 L21.2246074,13.6589481 C21.6517918,13.2317637 22.3403164,13.2276856 22.7768411,13.6642103 Z M14.2268673,11.5593297 L5.33507525,11.5593297 C4.84399513,11.5593297 4.44589604,11.9574288 4.44589604,12.4485089 C4.44589604,12.8850246 4.76044345,13.2480738 5.17524418,13.3233622 L5.33507525,13.3376881 L14.2268673,13.3376881 C14.7179474,13.3376881 15.1160465,12.939589 15.1160465,12.4485089 C15.1160465,11.9574288 14.7179474,11.5593297 14.2268673,11.5593297 Z M14.2268673,7.11343366 L10.6701505,7.11343366 C10.1790704,7.11343366 9.78097129,7.51153276 9.78097129,8.00261287 C9.78097129,8.43912855 10.0955187,8.80217772 10.5103194,8.8774662 L10.6701505,8.89179208 L14.2268673,8.89179208 C14.7179474,8.89179208 15.1160465,8.49369298 15.1160465,8.00261287 C15.1160465,7.51153276 14.7179474,7.11343366 14.2268673,7.11343366 Z M5.33507525,3.55671683 C4.2680602,3.55671683 3.55671683,4.4955208 3.55671683,5.43432474 C3.55671683,5.99760714 3.73455267,6.37312871 4.09022436,6.74865032 L4.09022436,8.62625823 C4.09022436,8.81401902 4.2680602,9.0017798 4.44589604,8.81401902 L5.33507525,7.68745426 L6.22425445,8.81401902 C6.4020903,9.0017798 6.57992614,8.81401902 6.57992614,8.62625823 L6.57992614,6.74865032 C6.75776198,6.5608895 7.11343366,5.99760714 7.11343366,5.43432474 C7.11343366,4.30775998 6.22425445,3.55671683 5.33507525,3.55671683 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ContractAmendment.displayName = 'ContractAmendment';
export default ContractAmendment;
