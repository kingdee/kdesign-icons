import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const OrderList = ({
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
          id="158.数字列表"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="数字列表"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M5.68035552,1.73016973 L23.2672143,1.73016973 C23.6719206,1.73016973 24,2.11786912 24,2.59612054 C24,3.07437196 23.6719206,3.46207135 23.2672143,3.46207135 L5.68035552,3.46207135 C5.27564909,3.46207135 4.94756973,3.07437196 4.94756973,2.59612054 C4.94756973,2.11786912 5.27564909,1.73016973 5.68035552,1.73016973 Z M5.68035552,9.52372705 L23.2672143,9.52372705 C23.6719206,9.52372705 24,9.91142648 24,10.3896779 C24,10.8679293 23.6719206,11.2556287 23.2672143,11.2556287 L5.68035552,11.2556287 C5.27564909,11.2556287 4.94756973,10.8679293 4.94756973,10.3896779 C4.94756973,9.91142648 5.27564909,9.52372705 5.68035552,9.52372705 Z M5.68035552,17.3172844 L23.2672143,17.3172844 C23.6719206,17.3172844 24,17.7049838 24,18.1832352 C24,18.6614866 23.6719206,19.049186 23.2672143,19.049186 L5.68035552,19.049186 C5.27564909,19.049186 4.94756973,18.6614866 4.94756973,18.1832352 C4.94756973,17.7049838 5.27564909,17.3172844 5.68035552,17.3172844 Z M1.15786815,0 L1.65496337,0 L1.65496337,4.32802217 L0.994190452,4.32802217 L0.994190452,0.794076896 C0.733518565,1.04260478 0.400101036,1.22445445 0,1.33962591 L0,0.684967094 C0.193988381,0.636473848 0.394038899,0.551610669 0.612275827,0.430377555 C0.830512756,0.297021129 1.01237686,0.157603048 1.15786815,0 Z M1.63677696,7.70869415 C2.04900227,7.70869415 2.39454408,7.8238656 2.6612781,8.06633183 C2.92194999,8.30879806 3.055317,8.6179425 3.055317,8.99982681 C3.055317,9.37564946 2.90982571,9.71510218 2.63096742,10.0242466 C2.46122758,10.2000346 2.16418287,10.4303776 1.73377115,10.721337 C1.26698661,11.0304815 0.988128315,11.303256 0.897196262,11.5396605 L3.06137914,11.5396605 L3.06137914,12.1215795 L0.0788077797,12.1215795 C0.0788077797,11.6912019 0.218236929,11.3153793 0.5092195,10.9880499 C0.666835059,10.8001386 0.994190452,10.5394874 1.48522354,10.2000346 C1.77620611,9.99393834 1.98231877,9.83027364 2.10356151,9.70297887 C2.29754989,9.48475927 2.40060621,9.24835469 2.40060621,8.99376515 C2.40060621,8.75129893 2.33392271,8.56944926 2.2005557,8.44821614 C2.06718868,8.32698303 1.86713817,8.26636647 1.61252842,8.26636647 C1.33973226,8.26636647 1.1336196,8.35729131 0.994190452,8.54520263 C0.848699166,8.7270523 0.775953524,8.9877035 0.76382925,9.33927953 L0.103056327,9.33927953 C0.109118464,8.85434707 0.248547613,8.46640111 0.521343774,8.17544163 C0.800202071,7.86023554 1.17605456,7.70869415 1.63677696,7.70869415 Z M1.61252842,15.5022515 C2.04900227,15.5022515 2.39454408,15.6052996 2.6612781,15.8174576 C2.91588785,16.0296155 3.04925486,16.320575 3.04925486,16.690336 C3.04925486,17.1631451 2.80676939,17.4844129 2.33392271,17.6420159 C2.58853246,17.7208175 2.78252084,17.8420506 2.91588785,17.9996536 C3.06137914,18.1633183 3.13412478,18.3754763 3.13412478,18.6300658 C3.13412478,19.0301351 2.99469563,19.3574645 2.72189947,19.612054 C2.4309169,19.8666436 2.04900227,20 1.58827987,20 C1.14574387,20 0.788077797,19.8848285 0.521343774,19.6605473 C0.218236929,19.4059577 0.0484970952,19.0361967 0.0121242738,18.5512643 L0.678959333,18.5512643 C0.691083607,18.8422238 0.782015661,19.066505 0.963879768,19.2241081 C1.12149533,19.3695878 1.32760798,19.4423277 1.58221773,19.4423277 C1.86107603,19.4423277 2.08537509,19.3574645 2.25511493,19.1998614 C2.40060621,19.0543817 2.47941399,18.8785937 2.47941399,18.6603741 C2.47941399,18.4057846 2.40060621,18.2178732 2.24299065,18.0966401 C2.09749937,17.975407 1.87926244,17.9147904 1.59434201,17.9147904 L1.27911089,17.9147904 L1.27911089,17.4177347 L1.58827987,17.4177347 C1.85501389,17.4177347 2.05506441,17.3571181 2.18843142,17.2419467 C2.32179843,17.1267752 2.39454408,16.9570488 2.39454408,16.7388292 C2.39454408,16.5206096 2.32786057,16.3569449 2.20661783,16.2417735 C2.07325082,16.1205404 1.8732003,16.0659855 1.61859055,16.0659855 C1.35791867,16.0659855 1.15180601,16.1326637 1.00631473,16.2660201 C0.86082344,16.3993765 0.769891387,16.5994112 0.745642839,16.866124 L0.0969941905,16.866124 C0.133367012,16.4357464 0.290982571,16.1023554 0.575903006,15.8598892 C0.84263703,15.6174229 1.18817883,15.5022515 1.61252842,15.5022515 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
OrderList.displayName = 'OrderList';
export default OrderList;
