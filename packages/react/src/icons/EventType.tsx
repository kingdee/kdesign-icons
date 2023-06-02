import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const EventType = ({
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
          id="407.事件类型"
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
              d="M18.6666667,19.5555556 L18.6666667,21.7777778 C18.6666667,23.0050772 17.6717439,24 16.4444444,24 C15.217145,24 14.2222222,23.0050772 14.2222222,21.7777778 C14.2222222,20.5995703 15.139143,19.6355212 16.2983327,19.5602824 L16.4444444,19.5555556 L18.6666667,19.5555556 Z M21.7777778,19.5555556 C23.0050772,19.5555556 24,20.5504783 24,21.7777778 C24,23.0050772 23.0050772,24 21.7777778,24 C20.5504783,24 19.5555556,23.0050772 19.5555556,21.7777778 L19.5555556,19.5555556 L21.7777778,19.5555556 Z M4.44444444,0 L4.44444444,1.77777778 C4.44444444,3.2505371 5.63835179,4.44444444 7.11111111,4.44444444 L13.3333333,4.44444444 C14.8060926,4.44444444 16,3.2505371 16,1.77777778 L16,0 L19.5555556,0 C20.0464753,0 20.4444444,0.397969124 20.4444444,0.888888889 L20.4444444,12.4444444 L14.2222222,12.4444444 C13.2850117,12.4444444 12.5171866,13.1696691 12.4493206,14.0895446 L12.4444444,14.2222222 L12.4444444,23.1111111 L0.888888889,23.1111111 C0.397969124,23.1111111 0,22.713142 0,22.2222222 L0,0.888888889 C0,0.397969124 0.397969124,0 0.888888889,0 L4.44444444,0 Z M8,16.8888889 L4.44444444,16.8888889 C3.95352468,16.8888889 3.55555556,17.286858 3.55555556,17.7777778 C3.55555556,18.2336318 3.89870239,18.6093397 4.34078123,18.6606865 L4.44444444,18.6666667 L8,18.6666667 C8.49091974,18.6666667 8.88888889,18.2686975 8.88888889,17.7777778 C8.88888889,17.286858 8.49091974,16.8888889 8,16.8888889 Z M16.4444444,14.2222222 C17.6717439,14.2222222 18.6666667,15.217145 18.6666667,16.4444444 L18.6666667,18.6666667 L16.4444444,18.6666667 C15.217145,18.6666667 14.2222222,17.6717439 14.2222222,16.4444444 C14.2222222,15.217145 15.217145,14.2222222 16.4444444,14.2222222 Z M21.7777778,14.2222222 C23.0050772,14.2222222 24,15.217145 24,16.4444444 C24,17.6226519 23.0830792,18.5867011 21.9238895,18.6619398 L21.7777778,18.6666667 L19.5555556,18.6666667 L19.5555556,16.4444444 C19.5555556,15.217145 20.5504783,14.2222222 21.7777778,14.2222222 Z M8,12.4444444 L4.44444444,12.4444444 C3.95352468,12.4444444 3.55555556,12.8424136 3.55555556,13.3333333 C3.55555556,13.7891874 3.89870239,14.1648953 4.34078123,14.216242 L4.44444444,14.2222222 L8,14.2222222 C8.49091974,14.2222222 8.88888889,13.8242531 8.88888889,13.3333333 C8.88888889,12.8424136 8.49091974,12.4444444 8,12.4444444 Z M16,8 L4.44444444,8 C3.95352468,8 3.55555556,8.39796915 3.55555556,8.88888889 C3.55555556,9.34474294 3.89870239,9.72045084 4.34078123,9.77179759 L4.44444444,9.77777778 L16,9.77777778 C16.4909197,9.77777778 16.8888889,9.37980863 16.8888889,8.88888889 C16.8888889,8.39796915 16.4909197,8 16,8 Z M14.2222222,0 L14.2222222,1.77777778 C14.2222222,2.26869754 13.8242531,2.66666667 13.3333333,2.66666667 L7.11111111,2.66666667 L7.00744792,2.66068645 C6.56536906,2.6093397 6.22222222,2.23363186 6.22222222,1.77777778 L6.22222222,0 L14.2222222,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
EventType.displayName = 'EventType';
export default EventType;