import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const InternalAccountInquiry = ({
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
          id="492.内部账户查询"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M18.8423805,9.93103448 C21.0216015,9.93103448 22.7882092,11.6976422 22.7882092,13.8768632 C22.7882092,14.8246539 22.4540431,15.6943959 21.897102,16.3746982 L24,18.4764584 L23.4419756,19.0344828 L21.3402154,16.9315847 C20.6599131,17.4885259 19.7901712,17.822692 18.8423805,17.822692 C16.6631595,17.822692 14.8965517,16.0560842 14.8965517,13.8768632 C14.8965517,11.6976422 16.6631595,9.93103448 18.8423805,9.93103448 Z M22.1668966,5.10951724 L22.1678923,9.88005541 C21.2265464,9.09631689 20.0037633,8.6229183 18.6672559,8.6229183 C15.693321,8.6229183 13.2824705,10.9668613 13.2824705,13.8582616 C13.2824705,15.7974523 14.366884,17.4903938 15.9782892,18.3951344 L1.02921629,18.3955591 C0.460795842,18.3955591 0,17.9347633 0,17.3663428 L0,5.10951724 L22.1668966,5.10951724 Z M21.13815,0 C21.7065705,0 22.1673663,0.460795842 22.1673663,1.02921629 L22.1668966,3.06537931 L0,3.06537931 L0,1.02921629 C0,0.460795842 0.460795842,0 1.02921629,0 L21.13815,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
InternalAccountInquiry.displayName = 'InternalAccountInquiry';
export default InternalAccountInquiry;
