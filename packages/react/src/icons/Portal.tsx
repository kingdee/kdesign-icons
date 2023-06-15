import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Portal = ({
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
          id="1453-门户"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M10.7368421,11.368421 C11.0856531,11.368421 11.368421,11.6511885 11.368421,12 L11.368421,12 L11.368421,22.1052632 C11.368421,22.4540746 11.0856531,22.7368421 10.7368421,22.7368421 L10.7368421,22.7368421 L0.631578967,22.7368421 C0.28276801,22.7368421 4.3081328e-16,22.4540746 4.3081328e-16,22.1052632 L4.3081328e-16,22.1052632 L4.3081328e-16,12 C4.3081328e-16,11.6511885 0.28276801,11.368421 0.631578967,11.368421 L0.631578967,11.368421 L10.7368421,11.368421 Z M23.3684211,15.1578947 C23.717232,15.1578947 24,15.4406622 24,15.7894737 L24,15.7894737 L24,22.1052632 C24,22.4540746 23.717232,22.7368421 23.3684211,22.7368421 L23.3684211,22.7368421 L13.2631579,22.7368421 C12.914347,22.7368421 12.631579,22.4540746 12.631579,22.1052632 L12.631579,22.1052632 L12.631579,15.7894737 C12.631579,15.4406622 12.914347,15.1578947 13.2631579,15.1578947 L13.2631579,15.1578947 L23.3684211,15.1578947 Z M10.1052632,12.631579 L1.2631579,12.631579 L1.2631579,21.4736842 L10.1052632,21.4736842 L10.1052632,12.631579 Z M22.7368421,16.4210526 L13.8947369,16.4210526 L13.8947369,21.4736842 L22.7368421,21.4736842 L22.7368421,16.4210526 Z M23.3684211,0 C23.717232,0 24,0.282767495 24,0.631578937 L24,0.631578937 L24,13.2631579 C24,13.6119693 23.717232,13.8947368 23.3684211,13.8947368 L23.3684211,13.8947368 L13.2631579,13.8947368 C12.914347,13.8947368 12.631579,13.6119693 12.631579,13.2631579 L12.631579,13.2631579 L12.631579,0.631578937 C12.631579,0.282767495 12.914347,0 13.2631579,0 L13.2631579,0 L23.3684211,0 Z M22.7368421,1.2631579 L13.8947369,1.2631579 L13.8947369,12.631579 L22.7368421,12.631579 L22.7368421,1.2631579 Z M10.7368421,0 C11.0856531,0 11.368421,0.282767495 11.368421,0.631578937 L11.368421,0.631578937 L11.368421,9.47368421 C11.368421,9.82249565 11.0856531,10.1052631 10.7368421,10.1052631 L10.7368421,10.1052631 L0.631578967,10.1052631 C0.28276801,10.1052631 4.3081328e-16,9.82249565 4.3081328e-16,9.47368421 L4.3081328e-16,9.47368421 L4.3081328e-16,0.631578937 C4.3081328e-16,0.282767495 0.28276801,0 0.631578967,0 L0.631578967,0 L10.7368421,0 Z M10.1052632,1.2631579 L1.2631579,1.2631579 L1.2631579,8.84210527 L10.1052632,8.84210527 L10.1052632,1.2631579 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Portal.displayName = 'Portal';
export default Portal;
