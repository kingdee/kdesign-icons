import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Contract = ({
  size = '1em',
  fill = 'currentColor',
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
          id="711.合同"
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
              d="M22.5,0 C23.3284275,0 24,0.671572488 24,1.5 L24,24 C24,24.8284275 23.3284275,25.5 22.5,25.5 L1.5,25.5 C0.671572488,25.5 0,24.8284275 0,24 L0,1.5 C0,0.671572488 0.671572488,0 1.5,0 L22.5,0 Z M17.462412,15 C15.9849645,15 15,16.1991435 15,17.398287 C15,18.1177725 15.2462415,18.597429 15.738723,19.077087 L15.738723,21.475374 C15.738723,21.7152015 15.9849645,21.9550305 16.231206,21.7152015 L17.462412,20.2762305 L18.693618,21.7152015 C18.9398595,21.9550305 19.1860995,21.7152015 19.1860995,21.475374 L19.1860995,19.077087 C19.432341,18.837258 19.924824,18.1177725 19.924824,17.398287 C19.924824,15.9593145 18.693618,15 17.462412,15 Z M12.75,19.5 L5.25,19.5 C4.835787,19.5 4.49999999,19.835787 4.49999999,20.25 C4.49999999,20.664213 4.835787,21 5.25,21 L5.25,21 L12.75,21 C13.164213,21 13.5,20.664213 13.5,20.25 C13.5,19.835787 13.164213,19.5 12.75,19.5 L12.75,19.5 Z M12.75,15 L5.25,15 C4.835787,15 4.49999999,15.335787 4.49999999,15.75 C4.49999999,16.164213 4.835787,16.5 5.25,16.5 L5.25,16.5 L12.75,16.5 C13.164213,16.5 13.5,16.164213 13.5,15.75 C13.5,15.335787 13.164213,15 12.75,15 L12.75,15 Z M18.75,10.5 L5.25,10.5 C4.835787,10.5 4.49999999,10.835787 4.49999999,11.25 C4.49999999,11.664213 4.835787,12 5.25,12 L5.25,12 L18.75,12 C19.164213,12 19.5,11.664213 19.5,11.25 C19.5,10.835787 19.164213,10.5 18.75,10.5 L18.75,10.5 Z M18.75,6.00000001 L5.25,6.00000001 C4.835787,6.00000001 4.49999999,6.33578699 4.49999999,6.74999999 C4.49999999,7.16421299 4.835787,7.50000001 5.25,7.50000001 L5.25,7.50000001 L18.75,7.50000001 C19.164213,7.50000001 19.5,7.16421299 19.5,6.74999999 C19.5,6.33578699 19.164213,6.00000001 18.75,6.00000001 L18.75,6.00000001 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Contract.displayName = 'Contract';
export default Contract;
