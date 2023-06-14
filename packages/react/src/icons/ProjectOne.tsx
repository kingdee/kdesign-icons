import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ProjectOne = ({
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
          id="463.项目"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M0.726666656,7.06271094 L14.0826666,0.147841344 C14.4959056,-0.0659493437 14.9892036,-0.0468115517 15.3850744,0.198369024 C15.7809451,0.4435496 16.0224386,0.879501376 16.0226666,1.34937082 L16.0226666,27 L1.33333334,27 C0.596953664,27 0,26.3955696 0,25.6499669 L0,8.26424041 C0.000246048,7.75736473 0.280881504,7.29333936 0.726666656,7.06271094 Z M19.3653332,11.5313206 L23.3653332,14.0207816 C23.7598511,14.2665396 24.0001304,14.702006 23.9999999,15.1710098 L23.9999999,25.6486169 C23.9999999,26.3942196 23.4030462,26.99865 22.6666666,26.99865 L17.3333331,26.99865 L17.3333331,12.6815488 C17.3331971,12.1924155 17.5943704,11.741467 18.0160327,11.502782 C18.437695,11.264097 18.9538829,11.2750147 19.3653332,11.5313206 L19.3653332,11.5313206 Z M3.99999997,12.1496357 L3.99999997,14.849702 L6.66666665,14.849702 L6.66666665,12.1496357 L3.99999997,12.1496357 Z M9.33333328,12.1496357 L9.33333328,14.849702 L11.9999999,14.849702 L11.9999999,12.1496357 L9.33333328,12.1496357 Z M3.99999997,18.8998013 L3.99999997,21.5998675 L6.66666665,21.5998675 L6.66666665,18.8998013 L3.99999997,18.8998013 Z M9.33333328,18.8998013 L9.33333328,21.5998675 L11.9999999,21.5998675 L11.9999999,18.8998013 L9.33333328,18.8998013 Z M18.6666666,18.8998013 L18.6666666,21.5998675 L21.3333333,21.5998675 L21.3333333,18.8998013 L18.6666666,18.8998013 Z M18.6666666,14.8498013 L18.6666666,17.5498675 L21.3333333,17.5498675 L21.3333333,14.8498013 L18.6666666,14.8498013 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ProjectOne.displayName = 'ProjectOne';
export default ProjectOne;
