import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const OrderManagement = ({
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
          id="1845.订单管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M26.663231,17 C26.663231,18.3156238 27.7572421,19.3822658 29.1066236,19.3822658 C29.5482532,19.3822658 29.9623522,19.2680489 30.3200608,19.0681229 L32,21.9318771 C31.2650266,22.3426509 30.7698546,23.1149574 30.7698546,24 C30.7698546,24.8850426 31.2650266,25.6573491 32,26.0681229 L30.3200608,28.9318771 C29.9623522,28.7319511 29.5482532,28.6177342 29.1066236,28.6177342 C27.7572421,28.6177342 26.6634209,29.684191 26.6634209,31 L23.3365791,31 C23.3365791,29.684191 22.2427579,28.6177342 20.8933764,28.6177342 C20.4517468,28.6177342 20.037458,28.7319511 19.6801291,28.9318771 L18,26.0681229 C18.7349734,25.6573491 19.2299555,24.8850426 19.2299555,24 C19.2299555,23.1149574 18.7349734,22.3426509 18,21.9318771 L19.6801291,19.0681229 C20.037458,19.2680489 20.4517468,19.3822658 20.8933764,19.3822658 C22.2427579,19.3822658 23.336769,18.3156238 23.336769,17 Z M26.133703,2 C26.6859877,2 27.133703,2.44771525 27.133703,3 L27.072981,14.974 L22.8615602,14.9746935 C22.8615602,16.6662099 21.4549745,18.0376067 19.7200553,18.0376067 C19.1522459,18.0376067 18.6195888,17.8907563 18.160166,17.6337087 L16,21.3156783 C16.9449658,21.843816 17.5813714,22.8367816 17.5813714,23.9746935 C17.5813714,25.1126054 16.9449658,26.105571 16,26.6337087 L17.922981,29.911 L6.004981,29.9117803 C5.45269625,29.9117803 5.004981,29.464065 5.004981,28.9117803 L5.13373999,2.99503141 C5.13647443,2.44469282 5.58338226,2 6.13372764,2 L26.133703,2 Z M25.0250624,21.6924457 C23.7338192,21.6924457 22.6833749,22.743609 22.6833749,24.0357359 C22.6833749,25.3278629 23.7338192,26.3792423 25.0250624,26.3792423 C26.3163055,26.3792423 27.3667498,25.3278629 27.3667498,24.0357359 C27.3667498,22.743609 26.3163055,21.6924457 25.0250624,21.6924457 Z M14.6712917,18.0219727 L10.6712376,18.0219727 C10.1189678,18.0219727 9.67126465,18.4696758 9.67126465,19.0219456 C9.67126465,19.5742154 10.1189678,20.0219185 10.6712376,20.0219185 L14.6712917,20.0219185 C15.2235615,20.0219185 15.6712646,19.5742154 15.6712646,19.0219456 C15.6712646,18.4696758 15.2235615,18.0219727 14.6712917,18.0219727 Z M18.588406,13.0000541 L10.5883518,13.0000541 C10.036082,13.0000541 9.58837891,13.4477573 9.58837891,14.0000271 C9.58837891,14.5522969 10.036082,15 10.5883518,15 L18.588406,15 C19.1406758,15 19.5883789,14.5522969 19.5883789,14.0000271 C19.5883789,13.4477573 19.1406758,13.0000541 18.588406,13.0000541 Z M20.5908749,8.1963982 L10.5907657,8.1963982 C10.0385111,8.1963982 9.59082031,8.64408902 9.59082031,9.19634363 C9.59082031,9.74859824 10.0385111,10.1962891 10.5907657,10.1962891 L20.5908749,10.1962891 C21.1431295,10.1962891 21.5908203,9.74859824 21.5908203,9.19634363 C21.5908203,8.64408902 21.1431295,8.1963982 20.5908749,8.1963982 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
OrderManagement.displayName = 'OrderManagement';
export default OrderManagement;