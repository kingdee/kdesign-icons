import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CollaborativeTaskManagement = ({
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
          id="657.协作任务管理"
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
              d="M18.6380129,8.69211441 C18.6380129,10.0121945 19.7371935,11.0824493 21.0929514,11.0824493 C21.5366679,11.0824493 21.9527236,10.9678455 22.3121225,10.7672424 L22.3121225,10.7672424 L24,13.6406964 C23.2615536,14.0528616 22.7640418,14.8277841 22.7640418,15.7158244 C22.7640418,16.6038647 23.2615536,17.3787872 24,17.7909524 L24,17.7909524 L22.3121225,20.6644064 C21.9527236,20.4638034 21.5366679,20.3491996 21.0929514,20.3491996 C19.7371935,20.3491996 18.6382037,21.4192686 18.6382037,22.7395344 L18.6382037,22.7395344 L15.2956414,22.7395344 C15.2956414,21.4192686 14.1966515,20.3491996 12.8408936,20.3491996 C12.3971772,20.3491996 11.9809307,20.4638034 11.6219134,20.6644064 L11.6219134,20.6644064 L9.93384504,17.7909524 C10.6722915,17.3787872 11.1696125,16.6038647 11.1696125,15.7158244 C11.1696125,14.8277841 10.6722915,14.0528616 9.93384504,13.6406964 L9.93384504,13.6406964 L11.6219134,10.7672424 C11.9809307,10.9678455 12.3971772,11.0824493 12.8408936,11.0824493 C14.1966515,11.0824493 15.2958322,10.0121945 15.2958322,8.69211441 L15.2958322,8.69211441 L18.6380129,8.69211441 Z M4.96692252,1.24173063 L4.96692252,3.72519189 L14.9007676,3.72519189 L14.9007676,1.24173063 L18.624877,1.24173063 C19.3112638,1.24173063 19.8676901,1.79384239 19.8676901,2.48454363 L19.8676901,7.45038378 L14.0541016,7.45038378 L14.0541016,8.69211441 C14.0541016,9.31888517 13.5181645,9.8407187 12.8408936,9.8407187 C12.6752891,9.8407187 12.5163425,9.80982245 12.369798,9.75111464 L12.2276004,9.68325056 L11.1667889,9.09051571 L8.22018314,14.1062703 L9.32865749,14.7249672 C9.60559847,14.8795423 9.80267709,15.1270922 9.88503353,15.412544 L9.46189469,16.1321962 L9.76044183,16.2984627 C9.68312947,16.4227171 9.58100187,16.5332286 9.45819891,16.6234568 L9.32865749,16.7066816 L8.22018314,17.3253785 L10.4429546,21.1094207 L1.242813,21.1094207 C0.556426325,21.1094207 0,20.5573089 0,19.8666077 L0,2.48454363 C0,1.79815696 0.552111758,1.24173063 1.242813,1.24173063 L4.96692252,1.24173063 Z M16.9921033,13.4004541 C15.6947587,13.4004541 14.6393506,14.4551779 14.6393506,15.7516814 C14.6393506,17.048185 15.6947587,18.1031255 16.9921033,18.1031255 C18.2894481,18.1031255 19.3448562,17.048185 19.3448562,15.7516814 C19.3448562,14.4551779 18.2894481,13.4004541 16.9921033,13.4004541 Z M13.6590369,0 L13.6590369,2.48346126 L6.20865315,2.48346126 L6.20865315,0 L13.6590369,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CollaborativeTaskManagement.displayName = 'CollaborativeTaskManagement';
export default CollaborativeTaskManagement;
