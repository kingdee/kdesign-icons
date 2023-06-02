import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Recycle = ({
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
          id="240.简历回收站"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="简历回收站"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M21.516,16.1025 L15.984,16.1025 L15.984,13.947 L13.164,18.972 L15.984,24 L15.984,21.855 L18.804,21.855 C19.488,21.855 20.148,21.4995 20.508,20.859 L24,14.649 C23.484,15.549 22.536,16.1145 21.516,16.104 L21.516,16.1025 Z M17.556,7.4535 L20.388,2.4285 L18.576,3.5115 C18.576,3.5115 17.868,2.2425 17.58,1.737 C17.184,1.035 16.44,0.579 15.648,0.591 C14.856,0.591 14.112,1.035 13.716,1.749 C13.716,1.749 13.068,2.895 12.42,4.065 L13.74,6.4065 L11.916,7.4655 L17.556,7.4535 L17.556,7.4535 Z M6.66,13.185 L3.888,18.1005 C3.36828859,19.0120817 3.36373584,20.1292125 3.876,21.045 L0.384,14.8335 C0.0337574667,14.2044056 0.03830992,13.4378899 0.396,12.813 L1.812,10.3125 L0,9.24 L5.652,9.24 L8.472,14.2665 L6.66,13.185 Z M18.984,15.501 L16.164,10.4745 L21.012,7.6035 C22.116,9.5865 23.52,12.075 23.52,12.075 C23.928,12.777 23.928,13.653 23.532,14.367 C23.1354799,15.0674829 22.3929251,15.5006399 21.588,15.501 L18.984,15.501 L18.984,15.501 Z M4.368,18.48 C4.368,18.48 5.016,17.334 5.676,16.152 L11.328,16.152 L11.328,21.906 L6.3,21.906 C5.49195243,21.9173476 4.74386587,21.4809639 4.356,20.772 C3.95757373,20.0588147 3.96212789,19.1889744 4.368,18.48 L4.368,18.48 Z M13.224,1.455 C12.564,2.625 8.904,9.129 8.916,9.129 L4.044,6.246 C4.044,6.246 6.372,2.046 6.984,1.023 C7.332,0.4185 7.944,0 8.676,0 L15.66,0 C14.64,0 13.74,0.5415 13.224,1.455 L13.224,1.455 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Recycle.displayName = 'Recycle';
export default Recycle;