import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AnticlockwiseRotation = ({
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
          id="166.图片逆时针旋转"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="图片逆时针旋转"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M16.5,6.4 C16.933938,6.4 17.2857143,6.75817221 17.2857143,7.2 L17.2857143,23.2 C17.2857143,23.6418278 16.933938,24 16.5,24 L0.785714286,24 C0.351776279,24 0,23.6418278 0,23.2 L0,7.2 C0,6.75817221 0.351776279,6.4 0.785714286,6.4 L16.5,6.4 Z M15.7142857,8 L1.57142857,8 L1.57142857,22.4 L15.7142857,22.4 L15.7142857,8 Z M16.2698696,0.234314573 C16.553107,0.522701747 16.5748945,0.976486605 16.3352321,1.29031956 L16.2698696,1.36568543 L16.0321739,1.60804247 C19.3559743,1.77661181 22,4.57391921 22,8 C22,8.44182776 21.6482237,8.8 21.2142857,8.8 C20.7803477,8.8 20.4285714,8.44182776 20.4285714,8 C20.4285714,5.4649387 18.4984433,3.38887944 16.0528307,3.21218668 L16.2698696,3.43431457 C16.553107,3.72270175 16.5748945,4.1764866 16.3352321,4.49031954 L16.2698696,4.56568543 C15.9866322,4.8540726 15.5409507,4.87625623 15.2327219,4.63223631 L15.1587018,4.56568543 L13.5872732,2.96568543 C13.3040359,2.67729825 13.2822483,2.22351342 13.5219108,1.90968046 L13.5872732,1.83431457 L15.1587018,0.234314573 C15.4655423,-0.0781048576 15.9630291,-0.0781048576 16.2698696,0.234314573 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AnticlockwiseRotation.displayName = 'AnticlockwiseRotation';
export default AnticlockwiseRotation;
