import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Locking = ({
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
          id="1178-锁定"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12.7863568,5.97772781e-06 C14.3709513,-0.000422966905 15.8907252,0.629087569 17.010883,1.74988498 C18.1310406,2.87068238 18.7596833,4.39081553 18.7583255,5.97540957 L18.7583255,8.29031535 L20.4653331,8.29031535 C21.4066601,8.29031535 22.1689301,9.05088018 22.1689301,9.99220712 L22.1689301,22.2979402 C22.1689301,23.2375619 21.4066601,24.000006 20.4653331,24.000006 L1.70530233,24.000006 C1.25334195,24.0007378 0.81958242,23.8218318 0.499677783,23.5025669 C0.179773145,23.1833021 0,22.7499016 0,22.2979402 L0,9.99220712 C0,9.05258553 0.76227012,8.29031535 1.70359703,8.29031535 L3.41060465,8.29031535 L3.41060465,5.96858834 C3.40924416,4.38462044 4.03810411,2.86518653 5.15845885,1.74547162 C6.27881353,0.625756761 7.79860646,-0.00223511437 9.38257338,5.97772781e-06 L12.7863568,5.97772781e-06 Z M20.4636278,9.99561771 L1.70530233,9.99561771 L1.70530233,22.2945297 L20.4636278,22.2945297 L20.4636278,9.99561771 Z M11.0844632,13.4062224 C11.5551285,13.4062224 11.9371162,13.7745676 11.9371162,14.250347 L11.9371162,17.6780047 C11.9297051,18.1444159 11.5509273,18.5194061 11.0844632,18.5221294 C10.8589781,18.5248687 10.6418062,18.4370903 10.4815518,18.2784383 C10.3212974,18.1197866 10.2313408,17.9035078 10.2318102,17.6780047 L10.2318102,14.250347 C10.2318102,13.7847994 10.6274441,13.4062224 11.0844632,13.4062224 Z M12.7863568,1.71293889 L9.38257338,1.71293889 C8.25117659,1.71069847 7.16539235,2.1587906 6.36489262,2.95833044 C5.56439298,3.75787029 5.11499847,4.84311618 5.11590283,5.97451483 L5.11590283,8.29031535 L17.0530243,8.29031535 L17.0530243,5.97963077 C17.0534758,4.84790177 16.6040987,3.7623955 15.8038454,2.9621422 C15.0035921,2.1618889 13.9180858,1.71251174 12.7863568,1.71293889 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Locking.displayName = 'Locking';
export default Locking;