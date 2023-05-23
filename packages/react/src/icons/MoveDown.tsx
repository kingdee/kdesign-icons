import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const MoveDown = ({
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
          id="993.下移"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1,2 L25.0000608,2 C25.5523468,2 26.0000632,1.55228852 26.0000632,1 C26.0000632,0.447716339 25.5523468,0 25.0000608,0 L1,0 C0.447716339,0 1.77635684e-15,0.447716339 1.77635684e-15,1 C1.77635684e-15,1.55228852 0.447716339,2 1,2 Z M10.2380249,15.4060374 L18.2580444,23.7560577 C18.5780451,24.0820585 19.4380472,24.0820585 19.756048,23.7560577 L27.7620674,15.4060374 C28.0793109,15.0774465 28.0793109,14.5566255 27.7620674,14.2280345 C27.6119775,14.0718181 27.4047007,13.9835229 27.1880661,13.9835229 C26.9714314,13.9835229 26.7641546,14.0718181 26.6140647,14.2280345 L19.9940486,21.1560514 L19.9940486,6.86601666 C19.9940486,6.40601556 19.4480472,6.03401463 19.0000462,6.03401463 C18.5520451,6.03401463 18.0200438,6.40601553 18.0200438,6.86601666 L18.0200438,21.1560514 L11.3860277,14.2260345 C11.2359377,14.0698181 11.0286609,13.9815228 10.8120263,13.9815228 C10.5953917,13.9815228 10.3881148,14.0698181 10.2380249,14.2260345 C9.92053389,14.5553009 9.92053389,15.0767711 10.2380249,15.4060374 L10.2380249,15.4060374 Z M1.00000002,22.0000486 L7.00001702,22.0000486 C7.5523031,22.0000486 8.00001943,21.5523371 8.00001943,21.0000486 C8.00001943,20.4477649 7.5523031,20.0000486 7.00001702,20.0000486 L1.00000002,20.0000486 C0.447716349,20.0000486 1.75781674e-08,20.4477649 1.75781674e-08,21.0000486 C1.75781674e-08,21.5523371 0.447716349,22.0000486 1.00000002,22.0000486 L1.00000002,22.0000486 Z M1,12.0000243 L7.00001702,12.0000243 C7.55230311,12.0000243 8.00001945,11.5523128 8.00001945,11.0000243 C8.00001945,10.4477406 7.55230311,10.0000243 7.00001702,10.0000243 L1,10.0000243 C0.447716339,10.0000243 0,10.4477406 0,11.0000243 C0,11.5523128 0.447716339,12.0000243 1,12.0000243 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
MoveDown.displayName = 'MoveDown';
export default MoveDown;
