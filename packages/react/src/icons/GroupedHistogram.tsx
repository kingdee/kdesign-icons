import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const GroupedHistogram = ({
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
          id="分组柱状图"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="视觉修正模版" transform="translate(-2.000000, -0.500000)"></g>
          <path
            d="M17,10.1616728 C17,9.52037077 17.4479495,9 18,9 L18,9 C18.5520505,9 19,9.52037077 19,10.1616728 L19,24.8383272 C19,25.4796292 18.5520505,26 18,26 L18,26 C17.4479495,26 17,25.4796292 17,24.8383272 L17,10.1616728 Z M13,3.23707317 C13,2.55414634 13.4479495,2 14,2 L14,2 C14.5520505,2 15,2.55414634 15,3.23707317 L15,24.7629268 C15,25.4458537 14.5520505,26 14,26 L14,26 C13.4479495,26 13,25.4458537 13,24.7629268 L13,3.23707317 Z M28,18.2297414 C28,17.5508621 28.4479495,17 29,17 L29,17 C29.5520505,17 30,17.5508621 30,18.2297414 L30,24.7702586 C30,25.4491379 29.5520505,26 29,26 L29,26 C28.4479495,26 28,25.4491379 28,24.7702586 L28,18.2297414 Z M25,15.1806331 C25,14.5288641 25.4479495,14 26,14 L26,14 C26.5520505,14 27,14.5288641 27,15.1806331 L27,24.8193669 C27,25.4711359 26.5520505,26 26,26 L26,26 C25.4479495,26 25,25.4711359 25,24.8193669 L25,15.1806331 Z M5,20.899546 C5,20.4029512 5.44794953,20 6,20 L6,20 C6.55205047,20 7,20.4029512 7,20.899546 L7,24.100454 C7,24.5970488 6.55205047,25 6,25 L6,25 C5.44794953,25 5,24.5970488 5,24.100454 L5,20.899546 Z M2,14.1700738 C2,13.524134 2.44794953,13 3,13 L3,13 C3.55205047,13 4,13.524134 4,14.1700738 L4,24.8299262 C4,25.475866 3.55205047,26 3,26 L3,26 C2.44794953,26 2,25.475866 2,24.8299262 L2,14.1700738 Z M3.15463918,30 C2.51597938,30 2,29.553125 2,29 L2,29 C2,28.446875 2.51597938,28 3.15463918,28 L28.8453608,28 C29.4840206,28 30,28.446875 30,29 L30,29 C30,29.553125 29.4840206,30 28.8453608,30 L3.15463918,30 Z"
            id="形状结合"
            fill={fill}
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
GroupedHistogram.displayName = 'GroupedHistogram';
export default GroupedHistogram;