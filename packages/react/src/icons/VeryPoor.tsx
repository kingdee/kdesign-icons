import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const VeryPoor = ({
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
          id="1353-很差"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M3.19999999,0 L20,0 C21.7673112,0 23.2,1.4326888 23.2,3.19999999 L23.2,20.8 C23.2,22.5673112 21.7673112,24 20,24 L3.19999999,24 C1.4326888,24 0,22.5673112 0,20.8 L0,3.19999999 C0,1.4326888 1.4326888,0 3.19999999,0 Z M3.19999999,1.60000001 C2.3163444,1.60000001 1.59999998,2.3163444 1.59999998,3.19999999 L1.59999998,20.8 C1.59999998,21.6836556 2.3163444,22.4 3.19999999,22.4 L20,22.4 C20.8836556,22.4 21.6,21.6836556 21.6,20.8 L21.6,3.19999999 C21.6,2.3163444 20.8836556,1.60000001 20,1.60000001 L3.19999999,1.60000001 Z M8.79999998,10.4 L14.392,10.4 C14.6041732,10.4 14.8076563,10.4842855 14.9576854,10.6343146 C15.1077145,10.7843437 15.192,10.9878268 15.192,11.2 L15.192,18.348 C15.192,18.5601732 15.1077145,18.7636563 14.9576854,18.9136854 C14.8076563,19.0637145 14.6041732,19.148 14.392,19.148 L8.79999998,19.148 C8.35817219,19.148 7.99999999,18.7898278 7.99999999,18.348 L7.99999999,11.2 C7.99999999,10.9878268 8.08428545,10.7843437 8.23431456,10.6343146 C8.38434366,10.4842855 8.58782679,10.4 8.79999998,10.4 L8.79999998,10.4 Z M9.6,17.548 L13.592,17.548 L13.592,12 L9.6,12 L9.6,17.548 L9.6,17.548 Z M7.29679999,6.1656 L8.99439998,7.8624 C9.30699315,8.17499316 9.30699316,8.68180683 8.9944,8.9944 C8.68180683,9.30699317 8.17499317,9.30699317 7.8624,8.99440001 L6.16639999,7.296 C5.87989724,6.98002659 5.89167069,6.49484795 6.19316218,6.19314295 C6.49465366,5.89143795 6.97982384,5.87932101 7.296,6.1656 L7.29679999,6.1656 Z M15.8624,6.1656 C16.0644694,5.96338767 16.3590682,5.88433853 16.635224,5.95822962 C16.9113797,6.0321207 17.1271377,6.2477262 17.201224,6.52382961 C17.2753103,6.79993302 17.1964694,7.09458767 16.9944,7.29679999 L15.2968,8.99440001 C15.0945877,9.19646942 14.799933,9.27531027 14.5238296,9.20122397 C14.2477262,9.12713767 14.0321207,8.91137969 13.9582296,8.63522397 C13.8843385,8.35906825 13.9633877,8.06446942 14.1656,7.8624 L15.8624,6.16639999 L15.8624,6.1656 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
VeryPoor.displayName = 'VeryPoor';
export default VeryPoor;
