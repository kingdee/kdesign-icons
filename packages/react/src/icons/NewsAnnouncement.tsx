import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const NewsAnnouncement = ({
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
          id="820.消息公告"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 1.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.94378947,20.7165327 C1.83703891,20.7788031 1.71655637,20.8137329 1.59305262,20.8182169 C0.689684204,20.8182169 0,21.4563222 0,22.2521116 C0,23.0523222 0.69557896,23.6860064 1.55473686,23.6860064 L26.4452631,23.6860064 C27.3103158,23.6860064 28,23.0464274 28,22.2521116 C28,21.4563222 27.304421,20.8182169 26.4452631,20.8182169 C24.892,20.8182169 24.5058947,15.9624275 24.5058947,15.9624274 L24.5058947,10.4302169 C24.5058947,5.41232217 21.6322105,1.48495375 17.1050526,0.111480071 C17.1389473,-0.0403094163 10.9406316,-0.0358883498 10.9701052,0.117374826 C6.67431578,1.49526957 3.51326316,5.42263799 3.51326316,10.434638 L3.51326316,15.9609538 C3.51326316,15.9609538 3.36000001,17.826638 2.87515789,19.2428485 L16.9473684,19.2428485 C17.2106167,19.2428485 17.4538683,19.3832898 17.5854924,19.6112695 C17.7171166,19.8392493 17.7171166,20.1201319 17.5854924,20.3481117 C17.4538683,20.5760914 17.2106167,20.7165327 16.9473684,20.7165327 L1.94378947,20.7165327 Z M14,29.558638 C11.9692632,29.558638 10.3202105,27.5485327 10.3157895,25.050638 L17.6842105,25.050638 C17.6842105,27.5396906 16.0498947,29.558638 14,29.558638 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
NewsAnnouncement.displayName = 'NewsAnnouncement';
export default NewsAnnouncement;
