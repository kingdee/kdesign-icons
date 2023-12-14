import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ReturnOne = ({
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
          id="997.返回"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M8.87169548,13.1764706 L19.7538131,13.1764706 C20.1524013,13.1764706 20.4768719,13.5454117 20.4768719,14 C20.4768719,14.4545882 20.1524014,14.8235294 19.7538131,14.8235294 L8.8782837,14.8235294 L15.2688719,20.0825882 C15.5668477,20.3438976 15.6252993,20.7854538 15.4055778,21.1152941 C15.3099667,21.2700635 15.151747,21.3755745 14.9721172,21.4043532 C14.7924874,21.4331319 14.6092247,21.3823303 14.4700484,21.2651764 L7.19004841,15.2748235 C6.8110193,14.9629064 6.59086766,14.4981852 6.58958794,14.0073148 C6.58831934,13.5164444 6.80605545,13.0505865 7.18346017,12.7367059 L14.3860484,6.73647057 C14.5245065,6.61945638 14.7068979,6.56822305 14.8860347,6.59602558 C15.0651715,6.62382812 15.2234537,6.72793497 15.3199308,6.88141176 C15.5408461,7.21006573 15.4845274,7.6514639 15.188166,7.91411764 L8.87334252,13.1764706 L8.87169548,13.1764706 Z M14.0006367,28 C8.99876677,28 4.37675107,25.3318923 1.87575046,21.0001838 C-0.625250153,16.6684753 -0.625250153,11.3315247 1.87575046,6.9998162 C4.37675107,2.66810771 8.99876677,-5.48580788e-16 14.0006367,-5.48580788e-16 C21.7323745,0.000351604097 28,6.26826212 28,14 C28,21.7317379 21.7323745,27.9996484 14.0006367,28 Z M14.0006367,26.3529411 C18.4140599,26.3529411 22.4923226,23.9987443 24.6990959,20.1766432 C26.9058692,16.3545422 26.9058692,11.6454578 24.6990959,7.82335676 C22.4923226,4.00125572 18.4140599,1.64705883 14.0006367,1.64705883 C7.17852918,1.6473891 1.64829352,7.1778925 1.64829352,14 C1.64829352,20.8221075 7.17852918,26.3526109 14.0006367,26.3529411 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ReturnOne.displayName = 'ReturnOne';
export default ReturnOne;
