import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const FormatBrush = ({
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
          id="1035.格式刷"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M14.6997276,-6.71462886e-16 C15.6016851,-6.71462886e-16 16.3333333,0.64131962 16.3333333,1.43045274 L16.3333333,10.0036329 L22.8663943,10.0036329 C23.7683516,10.0036329 24.5,10.6437605 24.5,11.4340857 L24.5,17.1487444 L24.4983788,17.2113223 C24.4994558,17.2341321 24.5,17.2570725 24.5,17.2801325 L24.5,26.4673131 C24.5,27.3128454 23.7683516,28 22.8650317,28 L22.8663943,27.9987227 L1.63224338,27.9987227 C0.730559908,27.9980178 0,27.3125888 0,26.4673131 L0,17.2801325 L0.0021733425,17.2190566 C0.000730359001,17.1971501 0,17.1737375 0,17.1487444 L0,11.4328936 C0,10.6437605 0.730285858,10.0036329 1.63224338,10.0036329 L8.1666667,10.0036329 L8.1666667,1.43045274 C8.1666667,0.64131962 8.89695252,-6.71462886e-16 9.79891001,-6.71462886e-16 L14.6997276,-6.71462886e-16 Z M22.8663943,17.2801325 L1.63224338,17.2801325 L1.63224338,26.4673131 L4.89945504,26.4673131 L4.89945504,22.6394276 C4.91735315,22.2286981 5.27775359,21.9043634 5.71625794,21.9043634 C6.15476226,21.9043634 6.51516271,22.2286981 6.53306085,22.6394276 L6.53306085,26.4673131 L11.4325159,26.4673131 L11.4325159,21.1080179 C11.450414,20.6972883 11.8108144,20.3729538 12.2493188,20.3729538 C12.6878231,20.3729538 13.0482236,20.6972883 13.0661217,21.1080179 L13.0661217,26.4673131 L17.9655767,26.4673131 L17.9655767,22.6394276 C17.9655767,22.2161879 18.3315768,21.8730841 18.7830608,21.8730841 C19.2345449,21.8730841 19.600545,22.2161879 19.600545,22.6394276 L19.600545,26.4673131 L22.8663943,26.4673131 L22.8663943,17.2801325 Z M14.6997276,1.43045274 L9.79891001,1.43045274 L9.79891001,11.4328936 L1.63224338,11.4328936 L1.63224338,15.7206757 L22.8663943,15.7206757 L22.8663943,11.4328936 L14.6997276,11.4328936 L14.6997276,1.43045274 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
FormatBrush.displayName = 'FormatBrush';
export default FormatBrush;