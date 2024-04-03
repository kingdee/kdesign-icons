import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DialogueRobotPlatform = ({
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
          id="1816.对话机器人平台"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M28.4,8 C29.2836556,8 30,8.7163444 30,9.6 L30,23.8420544 C30,24.72571 29.2836556,25.4420544 28.4,25.4420544 L11.4230769,25.4420544 L8.29540987,27.908796 C7.94849368,28.1824033 7.44545999,28.1229747 7.17185268,27.7760585 C7.06053783,27.6349186 7,27.4604026 7,27.2806487 L7,22.8866268 L26.6254645,22.8866268 C27.5091201,22.8866268 28.2254645,22.1702824 28.2254645,21.2866268 L28.2254645,8 L28.4,8 Z M25.4,4 C26.2836556,4 27,4.7163444 27,5.6 L27,20.0159491 C27,20.8996047 26.2836556,21.6159491 25.4,21.6159491 L5.57142857,21.6159491 L3.22272002,23.8226014 C2.93059296,24.0970598 2.47128467,24.0827365 2.19682625,23.7906095 C2.07038682,23.6560303 2,23.4783162 2,23.2936585 L2,5.6 C2,4.7163444 2.7163444,4 3.6,4 L25.4,4 Z M12.8071429,8.19427359 L12.6214286,8.19427359 C12.1796008,8.19427359 11.8214286,8.55244579 11.8214286,8.99427359 L11.8214286,17.4605302 C11.8214286,17.902358 12.1796008,18.2605302 12.6214286,18.2605302 L12.8071429,18.2605302 C13.2489707,18.2605302 13.6071429,17.902358 13.6071429,17.4605302 L13.6071429,8.99427359 C13.6071429,8.55244579 13.2489707,8.19427359 12.8071429,8.19427359 Z M16.3785714,9.45255567 L16.1928571,9.45255567 C15.7510293,9.45255567 15.3928571,9.81072787 15.3928571,10.2525557 L15.3928571,16.2022481 C15.3928571,16.6440759 15.7510293,17.0022481 16.1928571,17.0022481 L16.3785714,17.0022481 C16.8203992,17.0022481 17.1785714,16.6440759 17.1785714,16.2022481 L17.1785714,10.2525557 C17.1785714,9.81072787 16.8203992,9.45255567 16.3785714,9.45255567 Z M23.5214286,9.45255567 L23.3357143,9.45255567 C22.8938865,9.45255567 22.5357143,9.81072787 22.5357143,10.2525557 L22.5357143,16.2022481 C22.5357143,16.6440759 22.8938865,17.0022481 23.3357143,17.0022481 L23.5214286,17.0022481 C23.9632564,17.0022481 24.3214286,16.6440759 24.3214286,16.2022481 L24.3214286,10.2525557 C24.3214286,9.81072787 23.9632564,9.45255567 23.5214286,9.45255567 Z M9.23571429,9.45255567 L9.05,9.45255567 C8.6081722,9.45255567 8.25,9.81072787 8.25,10.2525557 L8.25,16.2022481 C8.25,16.6440759 8.6081722,17.0022481 9.05,17.0022481 L9.23571429,17.0022481 C9.67754209,17.0022481 10.0357143,16.6440759 10.0357143,16.2022481 L10.0357143,10.2525557 C10.0357143,9.81072787 9.67754209,9.45255567 9.23571429,9.45255567 Z M19.95,11.1302651 L19.7642857,11.1302651 C19.3224579,11.1302651 18.9642857,11.4884373 18.9642857,11.9302651 L18.9642857,14.5245387 C18.9642857,14.9663665 19.3224579,15.3245387 19.7642857,15.3245387 L19.95,15.3245387 C20.3918278,15.3245387 20.75,14.9663665 20.75,14.5245387 L20.75,11.9302651 C20.75,11.4884373 20.3918278,11.1302651 19.95,11.1302651 Z M5.66428571,11.1302651 L5.47857143,11.1302651 C5.03674363,11.1302651 4.67857143,11.4884373 4.67857143,11.9302651 L4.67857143,14.5245387 C4.67857143,14.9663665 5.03674363,15.3245387 5.47857143,15.3245387 L5.66428571,15.3245387 C6.10611351,15.3245387 6.46428571,14.9663665 6.46428571,14.5245387 L6.46428571,11.9302651 C6.46428571,11.4884373 6.10611351,11.1302651 5.66428571,11.1302651 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
DialogueRobotPlatform.displayName = 'DialogueRobotPlatform';
export default DialogueRobotPlatform;
