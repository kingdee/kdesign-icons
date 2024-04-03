import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DevelopAGlobalKanban = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="1876.研发全局看板"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M28.9,4 C29.5075132,4 30,4.49248678 30,5.1 L30,21.4454545 C30,22.0529678 29.5075132,22.5454545 28.9,22.5454545 L20.9627705,22.5454545 L20.9627705,25.8181818 L22.5741205,25.8181818 C22.9980832,25.8181818 23.3843096,26.0618302 23.5668902,26.4444642 L24.3091417,28 L7.69274251,28 L8.43499406,26.4444642 C8.61757463,26.0618302 9.00380098,25.8181818 9.4277637,25.8181818 L11.0391138,25.8181818 L11.0391138,22.5454545 L3.1,22.5454545 C2.49248678,22.5454545 2,22.0529678 2,21.4454545 L2,5.1 C2,4.49248678 2.49248678,4 3.1,4 L28.9,4 Z M18.2895848,7.27272727 C17.3655099,7.27272727 16.6163992,8.00535223 16.6163992,8.90909091 C16.6163992,9.06642193 16.6391025,9.21856702 16.6814798,9.36256355 L13.1920605,12.1263697 C12.7400438,11.8175267 12.1900756,11.6363636 11.5968423,11.6363636 C10.0567175,11.6363636 8.8081996,12.8574052 8.8081996,14.3636364 C8.8081996,15.8698675 10.0567175,17.0909091 11.5968423,17.0909091 C12.5782182,17.0909091 13.4411926,16.5951287 13.938189,15.8456962 L18.8544653,17.7886727 C18.9330176,18.621002 19.6489364,19.2727273 20.520499,19.2727273 C21.4445739,19.2727273 22.1936846,18.5401023 22.1936846,17.6363636 C22.1936846,16.732625 21.4445739,16 20.520499,16 C19.9431773,16 19.4341478,16.2859585 19.133419,16.7209481 L14.3450258,14.829134 C14.3716256,14.6778636 14.385485,14.5223329 14.385485,14.3636364 C14.385485,13.8332435 14.2306722,13.3382134 13.9628287,12.9194085 L17.3321668,10.2512547 C17.603431,10.43668 17.9335193,10.5454545 18.2895848,10.5454545 C19.2136597,10.5454545 19.9627705,9.81282959 19.9627705,8.90909091 C19.9627705,8.00535223 19.2136597,7.27272727 18.2895848,7.27272727 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
DevelopAGlobalKanban.displayName = 'DevelopAGlobalKanban';
export default DevelopAGlobalKanban;
