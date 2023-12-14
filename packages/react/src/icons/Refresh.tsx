import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Refresh = ({
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
          id="157.刷新"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="刷新"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M0,12.8 C0,18.9855892 4.92486775,24 11,24 C17.0751322,24 22,18.9855892 22,12.8 C22,9.79025889 20.8275808,6.96751811 18.7790106,4.88125532 C18.4722028,4.56880251 17.9747161,4.56874836 17.6678427,4.88113441 C17.3609694,5.19352046 17.3609163,5.70005243 17.667724,6.01250527 C19.4245874,7.8016939 20.4285714,10.2189067 20.4285714,12.8 C20.4285714,18.1019336 16.2072562,22.4 11,22.4 C5.79274379,22.4 1.57142857,18.1019336 1.57142857,12.8 C1.57142857,7.61129595 5.61436596,3.38403924 10.6677577,3.20584883 L10.4444161,3.43431457 C10.1611787,3.72270175 10.1393912,4.1764866 10.3790536,4.49031954 L10.4444161,4.56568543 C10.7276535,4.8540726 11.173335,4.87625623 11.4815638,4.63223631 L11.5555839,4.56568543 L13.1270125,2.96568543 C13.4102498,2.67729825 13.4320374,2.22351342 13.192375,1.90968046 L13.1270125,1.83431457 L11.5555839,0.234314573 C11.2487434,-0.0781048576 10.7512566,-0.0781048576 10.4444161,0.234314573 C10.1611787,0.522701747 10.1393912,0.976486605 10.3790536,1.29031956 L10.4444161,1.36568543 L10.678786,1.6046836 C4.75221656,1.77772488 0,6.72380224 0,12.8 Z"
              id="路径"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Refresh.displayName = 'Refresh';
export default Refresh;
