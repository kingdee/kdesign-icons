import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const RowNumber = ({
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
          id="229.预约排号"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="预约排号"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M19.1111111,14.0607197 C21.8111699,14.0607197 24,16.2857034 24,19.0303599 C24,21.7750163 21.8111699,24 19.1111111,24 C16.4110523,24 14.2222222,21.7750163 14.2222222,19.0303599 C14.2222222,16.2857034 16.4110523,14.0607197 19.1111111,14.0607197 Z M19.8533226,4.1214394 L19.8533226,13.1535925 C19.5924954,13.1175002 19.3261775,13.0988539 19.0555556,13.0988539 C15.8338945,13.0988539 13.2222222,15.7414298 13.2222222,19.0012124 C13.2222222,20.5918346 13.8440577,22.0355009 14.855171,23.0969016 L4.27768229,23.0964291 C3.85549127,23.0964291 3.51323785,22.7485225 3.51323785,22.3193581 L3.51323785,4.1214394 L19.8533226,4.1214394 Z M19.7065265,15.7197605 C19.3715095,15.7226817 19.0921477,15.9785196 19.0453453,16.3074767 L19.0384799,16.39887 L19.0373333,19.095417 L16.6915219,19.0959021 C16.3565049,19.0987947 16.077143,19.3546326 16.0303407,19.6835897 L16.0234432,19.774983 C16.0202061,20.1155324 16.2667969,20.3948521 16.5896028,20.4364295 L16.6794,20.4417417 L19.699238,20.4417417 C19.8745817,20.4401423 20.0437174,20.3676026 20.1690338,20.2402164 C20.2943501,20.1128301 20.3654808,19.9411349 20.3673167,19.7626608 C20.3675818,19.7317019 20.365814,19.7012488 20.3621118,19.6714345 L20.3624512,16.3865479 C20.3660175,16.0150395 20.0722301,15.7163993 19.7065265,15.7197605 Z M9.81143706,5.92858128 C8.99034081,5.92858128 8.32995556,6.35381567 8.12705183,7.10697674 C8.05357039,7.35511125 8.00379261,7.69374188 8,9.0005835 L8,9.1441122 C8,10.49085 8.05072594,10.8182902 8.12705183,11.0664247 C8.33848889,11.8195857 8.99034081,12.2535778 9.81143706,12.2535778 C10.6244741,12.2535778 11.2763259,11.8283434 11.4962964,11.0664247 C11.5617186,10.8280209 11.602963,10.5146903 11.6062815,9.28958712 L11.6062815,9.1441122 C11.6062815,7.71806873 11.5636148,7.36338244 11.4962964,7.10697674 C11.2763259,6.35381567 10.624,5.92858128 9.81143706,5.92858128 Z M15.1111111,6.01713123 L14.1966222,6.01713123 L13.0962964,6.82381154 L13.0962964,7.93993018 L14.0951704,7.21352863 L14.0951704,12.1655144 L15.1111111,12.1655144 L15.1111111,6.01713123 Z M9.81143706,6.92111917 C10.1589333,6.92111917 10.4552296,7.10746331 10.5225482,7.45290545 C10.5618963,7.60762463 10.5860741,7.86743598 10.5898667,8.86678543 L10.5898667,9.40635633 C10.5860741,10.3444019 10.5614222,10.5672364 10.5140148,10.7302267 C10.4210963,11.0756688 10.1584593,11.2440111 9.81143706,11.2440111 C9.44782222,11.2440111 9.15958517,11.0756688 9.09226667,10.7302267 C9.05813333,10.5531268 9.01594072,10.3049924 9.01594072,9.1445988 C9.01594072,7.91365714 9.04106667,7.62124768 9.09179261,7.45290545 C9.18518517,7.10746331 9.44734817,6.92111917 9.81143706,6.92111917 Z M21.8044444,0 C22.6488265,0 23.3333333,0.695813088 23.3333333,1.55414201 L23.3333333,7.48330626 C23.3333333,7.91247067 22.9910799,8.26037726 22.5688889,8.26037726 L20.2222222,8.26037726 L20.2222222,5.89941464 L20.2355556,5.89943384 C20.6252703,5.89943384 20.9468726,5.60299275 20.9940439,5.21983695 L21,5.12236284 L21,3.52858029 C21,3.13242845 20.7083757,2.80551417 20.3314459,2.75756376 L20.2355556,2.75150928 L3.09777778,2.75150928 C2.708063,2.75150928 2.3864607,3.04795035 2.33928943,3.43110615 L2.33333333,3.52858029 L2.33333333,5.12236284 C2.33333333,5.51851465 2.62495755,5.84542892 3.00188749,5.89337934 L3.09777778,5.89943384 L3.11111111,5.89941464 L3.11111111,8.26037726 L0.764444444,8.26037726 C0.342253454,8.26037726 0,7.91247067 0,7.48330626 L0,1.55414201 C0,0.695813088 0.68450688,0 1.52888889,0 L21.8044444,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
RowNumber.displayName = 'RowNumber';
export default RowNumber;
