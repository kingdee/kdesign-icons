import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SalesManagementTwo = ({
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
          id="1839.销售管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M20.6020818,9.99888538 C23.2085331,12.1484375 26.0968051,15.3434881 27.0142842,18.9389845 C28.684446,25.4841597 26.2919831,30 16,30 C5.70801695,30 3.31555395,25.4841597 4.98571584,18.9389845 C5.90319489,15.3434881 8.7914669,12.1484375 11.3979182,9.99888538 L20.6020818,9.99888538 Z M16.0307034,14.1840692 C15.7830765,14.061858 15.4832636,14.1635275 15.3610525,14.4111544 L14.0441307,17.0795293 L11.0994041,17.5074232 C10.9905856,17.5232354 10.8900144,17.574479 10.8132601,17.6532208 C10.6205095,17.8509626 10.6245556,18.1675192 10.8222974,18.3602699 L12.9531216,20.4373101 L12.4501022,23.370138 C12.4315138,23.4785168 12.4491712,23.5900008 12.5003407,23.6873311 C12.6288411,23.9317534 12.9311547,24.0257266 13.175577,23.8972262 L15.8094205,22.5125327 L18.443264,23.8972262 C18.5405943,23.9483958 18.6520783,23.9660531 18.7604571,23.9474647 C19.0326254,23.9007842 19.2154193,23.6423062 19.1687388,23.370138 L18.6657194,20.4373101 L20.7965436,18.3602699 C20.8752854,18.2835155 20.926529,18.1829443 20.9423413,18.0741258 C20.9820501,17.8008534 20.7927093,17.547132 20.5194369,17.5074232 L17.5747103,17.0795293 L16.2577885,14.4111544 C16.2091234,14.3125481 16.1293097,14.2327343 16.0307034,14.1840692 Z M16,9 L11.4957429,9 C11.4957429,9 11.5732369,7.93064715 10.1898734,6.32661788 C8.80650997,4.72258861 6.86980107,3.65323577 7.69981918,2.58388292 C8.52983729,1.51453007 9.35985558,2.58388292 10.7432188,2.58388292 C12.126582,2.58388292 12.0042002,1 13.3783631,1 C14.7525259,1 14.893309,2.58388292 16,2.58388292 C15.9999998,4.18791219 16,9 16,9 Z M16,9 L20.5042571,9 C20.5042571,9 20.4267631,7.93064715 21.8101266,6.32661788 C23.19349,4.72258861 25.1301989,3.65323577 24.3001808,2.58388292 C23.4701627,1.51453007 22.6401444,2.58388292 21.2567812,2.58388292 C19.873418,2.58388292 19.9957998,1 18.6216369,1 C17.2474741,1 17.106691,2.58388292 16,2.58388292 C16.0000002,4.18791219 16,9 16,9 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
SalesManagementTwo.displayName = 'SalesManagementTwo';
export default SalesManagementTwo;