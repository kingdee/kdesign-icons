import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const StatusIconSuccessfulCompleted = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        version="1.1"
        width={size}
        height={size}
      >
        <path
          d="M500 62.5C741.624578 62.5 937.5 258.375422 937.5 500C937.5 741.624578 741.624578 937.5 500 937.5C258.375422 937.5 62.5 741.624578 62.5 500C62.5 258.375422 258.375422 62.5 500 62.5zM692.544847 333.169847C689.687675 330.312675 685.123247 330.105628 682.019134 332.692388L682.019134 332.692388L406.25 562.5L318.024272 474.274272C314.9733 471.2233 310.026699 471.2233 306.975728 474.274272L306.975728 474.274272L285.778819 495.471181C283.145504 498.104497 282.736956 502.230434 284.802698 505.329047L284.802698 505.329047L401.349909 680.063359L401.942878 680.694353C405.067331 683.670028 410.012463 683.549413 412.988134 680.424959L412.988134 680.424959L713.491878 364.896025C716.416372 361.825313 716.357319 356.982319 713.358825 353.983825L713.358825 353.983825z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
StatusIconSuccessfulCompleted.displayName = 'StatusIconSuccessfulCompleted';
export default StatusIconSuccessfulCompleted;
