import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PendingSettlementTwo = ({
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
          id="121.待结算"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="待结算"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M21.3333333,0 C21.8242531,0 22.2222222,0.397969124 22.2222222,0.888888889 L22.2233618,12.1864924 L22.1869523,12.1455381 C23.3143626,13.4039394 24,15.0663445 24,16.8888889 C24,20.8162471 20.8162471,24 16.8888889,24 C15.1622679,24 13.579373,23.3846356 12.3475548,22.3612576 L12.1864924,22.2233618 L0.888888889,22.2222222 C0.397969124,22.2222222 0,21.8242531 0,21.3333333 L0,0.888888889 C0,0.397969124 0.397969124,0 0.888888889,0 L21.3333333,0 Z M16.8888889,11.5555556 C13.9433702,11.5555556 11.5555556,13.9433702 11.5555556,16.8888889 C11.5555556,19.8344076 13.9433702,22.2222222 16.8888889,22.2222222 C19.8344076,22.2222222 22.2222222,19.8344076 22.2222222,16.8888889 C22.2222222,13.9433702 19.8344076,11.5555556 16.8888889,11.5555556 Z M20.4444444,1.77777778 L1.77688889,1.77777778 L1.77777778,20.4444444 L10.7297142,20.4454753 L10.7524607,20.4844952 C10.1329835,19.4295452 9.77777778,18.2006984 9.77777778,16.8888889 C9.77777778,12.9615307 12.9615307,9.77777778 16.8888889,9.77777778 C18.0997901,9.77777778 19.240001,10.0804382 20.2379996,10.614237 L20.4454753,10.7297142 L20.4444444,1.77777778 Z M16.8888889,12.4444444 C17.3447429,12.4444444 17.7204508,12.7875913 17.7717976,13.2296701 L17.7777778,13.3333333 L17.7777778,16.52 L19.295206,18.0381273 C19.6156362,18.3585575 19.6402847,18.8627628 19.3691515,19.2114661 L19.295206,19.295206 C18.9747758,19.6156362 18.4705705,19.6402847 18.1218672,19.3691515 L18.0381273,19.295206 L16.2603495,17.5174283 C16.1214337,17.3785124 16.033246,17.1983512 16.0077088,17.005728 L16,16.8888889 L16,13.3333333 C16,12.8424136 16.3979692,12.4444444 16.8888889,12.4444444 Z M8,9.77777778 C8.49091974,9.77777778 8.88888889,10.1757469 8.88888889,10.6666667 C8.88888889,11.1575864 8.49091974,11.5555556 8,11.5555556 L4.44444444,11.5555556 C3.95352468,11.5555556 3.55555556,11.1575864 3.55555556,10.6666667 C3.55555556,10.1757469 3.95352468,9.77777778 4.44444444,9.77777778 L8,9.77777778 Z M11.5555556,4.44444444 C12.0464753,4.44444444 12.4444444,4.84241357 12.4444444,5.33333333 C12.4444444,5.8242531 12.0464753,6.22222222 11.5555556,6.22222222 L4.44444444,6.22222222 C3.95352468,6.22222222 3.55555556,5.8242531 3.55555556,5.33333333 C3.55555556,4.84241357 3.95352468,4.44444444 4.44444444,4.44444444 L11.5555556,4.44444444 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PendingSettlementTwo.displayName = 'PendingSettlementTwo';
export default PendingSettlementTwo;
