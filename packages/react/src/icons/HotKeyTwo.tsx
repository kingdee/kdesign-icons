import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const HotKeyTwo = ({
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
          id="1321-快捷键"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 9.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.5,1.25052632 C1.41715731,1.25052632 1.35,1.31273517 1.35,1.38947368 L1.35,12.5052632 C1.35,12.5816842 1.4175,12.6442105 1.5,12.6442105 L22.5,12.6442105 C22.5828427,12.6442105 22.65,12.5820017 22.65,12.5052632 L22.65,1.38947368 C22.65,1.31273517 22.5828427,1.25052632 22.5,1.25052632 L1.5,1.25052632 Z M1.5,0 L22.5,0 C23.3284271,0 24,0.622088564 24,1.38947368 L24,12.5052632 C24,13.2726483 23.3284271,13.8947368 22.5,13.8947368 L1.5,13.8947368 C0.671572876,13.8947368 0,13.2726483 0,12.5052632 L0,1.38947368 C0,0.622088564 0.671572876,0 1.5,0 Z M18.4327501,6.66947368 L18.4327501,4.52204211 C18.4327499,4.17671881 18.7349578,3.89677895 19.1077499,3.89677895 C19.4805422,3.89677895 19.7827499,4.17671881 19.7827499,4.52204211 L19.7827499,7.15370526 C19.8579628,7.45868584 19.6791173,7.76838586 19.3635,7.87970526 C19.252246,7.92201971 19.1307805,7.93593421 19.0117499,7.92 L16.125,7.92 C15.7522077,7.92 15.45,7.64006016 15.45,7.29473684 C15.45,6.94941355 15.7522077,6.66947368 16.125,6.66947368 L18.4327499,6.66947368 L18.4327501,6.66947368 Z M4.125,5.14105263 C3.7522078,5.14105263 3.45,4.86111279 3.45,4.51578947 C3.45,4.17046618 3.7522078,3.89052632 4.125,3.89052632 L4.875,3.89052632 C5.2477922,3.89052632 5.55,4.17046618 5.55,4.51578947 C5.55,4.86111279 5.2477922,5.14105263 4.875,5.14105263 L4.125,5.14105263 L4.125,5.14105263 Z M4.125,7.92 C3.7522078,7.92 3.45,7.64006016 3.45,7.29473684 C3.45,6.94941355 3.7522078,6.66947368 4.125,6.66947368 L5.625,6.66947368 C5.9977922,6.66947368 6.3,6.94941355 6.3,7.29473684 C6.3,7.64006016 5.9977922,7.92 5.625,7.92 L4.125,7.92 L4.125,7.92 Z M4.125,10.6989474 C3.7522078,10.6989474 3.45,10.4190075 3.45,10.0736842 C3.45,9.72836092 3.7522078,9.44842105 4.125,9.44842105 L4.875,9.44842105 C5.2477922,9.44842105 5.55,9.72836092 5.55,10.0736842 C5.55,10.4190075 5.2477922,10.6989474 4.875,10.6989474 L4.125,10.6989474 L4.125,10.6989474 Z M18.375,10.6989474 C18.0022077,10.6989474 17.7,10.4190075 17.7,10.0736842 C17.7,9.72836092 18.0022077,9.44842105 18.375,9.44842105 L19.125,9.44842105 C19.4977923,9.44842105 19.8,9.72836092 19.8,10.0736842 C19.8,10.4190075 19.4977923,10.6989474 19.125,10.6989474 L18.375,10.6989474 L18.375,10.6989474 Z M7.125,10.6989474 C6.7522078,10.6989474 6.45,10.4190075 6.45,10.0736842 C6.45,9.72836092 6.7522078,9.44842105 7.125,9.44842105 L16.125,9.44842105 C16.4977923,9.44842105 16.8,9.72836092 16.8,10.0736842 C16.8,10.4190075 16.4977923,10.6989474 16.125,10.6989474 L7.125,10.6989474 L7.125,10.6989474 Z M7.875,5.14105263 C7.5022078,5.14105263 7.2,4.86111279 7.2,4.51578947 C7.2,4.17046618 7.5022078,3.89052632 7.875,3.89052632 L8.625,3.89052632 C8.9977922,3.89052632 9.3,4.17046618 9.3,4.51578947 C9.3,4.86111279 8.9977922,5.14105263 8.625,5.14105263 L7.875,5.14105263 L7.875,5.14105263 Z M8.625,7.92 C8.2522078,7.92 7.95,7.64006016 7.95,7.29473684 C7.95,6.94941355 8.2522078,6.66947368 8.625,6.66947368 L9.375,6.66947368 C9.7477922,6.66947368 10.05,6.94941355 10.05,7.29473684 C10.05,7.64006016 9.7477922,7.92 9.375,7.92 L8.625,7.92 L8.625,7.92 Z M12.375,7.92 C12.0022078,7.92 11.7,7.64006016 11.7,7.29473684 C11.7,6.94941355 12.0022078,6.66947368 12.375,6.66947368 L13.125,6.66947368 C13.4977923,6.66947368 13.8,6.94941355 13.8,7.29473684 C13.8,7.64006016 13.4977923,7.92 13.125,7.92 L12.375,7.92 L12.375,7.92 Z M11.625,5.14105263 C11.2522078,5.14105263 10.95,4.86111279 10.95,4.51578947 C10.95,4.17046618 11.2522078,3.89052632 11.625,3.89052632 L12.375,3.89052632 C12.7477923,3.89052632 13.05,4.17046618 13.05,4.51578947 C13.05,4.86111279 12.7477923,5.14105263 12.375,5.14105263 L11.625,5.14105263 L11.625,5.14105263 Z M15.375,5.14105263 C15.0022077,5.14105263 14.7,4.86111279 14.7,4.51578947 C14.7,4.17046618 15.0022077,3.89052632 15.375,3.89052632 L16.125,3.89052632 C16.4977923,3.89052632 16.8,4.17046618 16.8,4.51578947 C16.8,4.86111279 16.4977923,5.14105263 16.125,5.14105263 L15.375,5.14105263 L15.375,5.14105263 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
HotKeyTwo.displayName = 'HotKeyTwo';
export default HotKeyTwo;