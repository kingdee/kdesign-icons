import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Wechat = ({
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
          id="1318-微信"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M11.691,6.02521615 C12.30825,6.02521615 12.72075,5.60545459 12.72075,4.98000228 C12.72075,4.3476936 12.309,3.93859747 11.691,3.93859747 C11.073,3.93859747 10.45275,4.3476936 10.45275,4.98000228 C10.4535,5.60545459 11.07375,6.02521615 11.691,6.02521615 Z M5.93175,3.93859747 C5.3145,3.93859747 4.6905,4.3476936 4.6905,4.98000228 C4.6905,5.60545459 5.3145,6.02521615 5.93175,6.02521615 C6.54675,6.02521615 6.9585,5.60545459 6.9585,4.98000228 C6.95775,4.3476936 6.54675,3.93859747 5.93175,3.93859747 Z M24,12.716261 C24,9.4099722 20.9805,6.59277034 17.274,6.29947051 C17.27925,6.25833238 17.2815,6.21567058 17.2725,6.1730088 C16.52925,2.65341103 12.80325,-5.1159077e-16 8.60475,-5.1159077e-16 C3.86025,-5.1159077e-16 0,3.36037786 0,7.49095339 C0,9.70708109 1.11375,11.7038053 3.22425,13.2784824 L2.4885,15.5250828 C2.44125,15.6713519 2.484,15.8320953 2.59875,15.933417 C2.6685,15.9943625 2.75625,16.0263589 2.84475,16.0263589 C2.90175,16.0263589 2.9595,16.0126461 3.01275,15.9859825 L5.775,14.5819525 L6.1155,14.6520397 C6.966,14.8295433 7.70025,14.9834304 8.60475,14.9834304 C8.871,14.9834304 9.141,14.9712413 9.40575,14.9483868 C9.513,14.9392451 9.60375,14.8843941 9.66525,14.805165 C10.66125,17.3366853 13.40625,19.164286 16.6365,19.164286 C17.46375,19.164286 18.3015,18.9616425 19.053,18.7704263 L21.18225,19.9527673 C21.2385,19.9840019 21.30075,20 21.36225,20 C21.44625,20 21.53025,19.9710509 21.59775,19.9154382 C21.71625,19.8179256 21.765,19.657182 21.72075,19.5101512 L21.177,17.6734088 C23.00025,16.2099569 24,14.4592998 24,12.716261 Z M9.342,14.1888546 C9.09825,14.2101855 8.85075,14.2208509 8.6055,14.2208509 C7.7775,14.2208509 7.077,14.0753437 6.267,13.9054584 L5.796,13.8087076 C5.715,13.7911857 5.6295,13.802613 5.55525,13.8414657 L3.486,14.893536 L4.02375,13.2525806 C4.07625,13.0918371 4.0185,12.916619 3.88275,12.8198682 C1.80375,11.3480364 0.75,9.55471754 0.75,7.49095339 C0.75,3.78090122 4.2735,0.761817696 8.60475,0.761817696 C12.4335,0.761817696 15.8235,3.12802346 16.52325,6.27509237 C12.5085,6.3284196 9.26025,9.19513958 9.26025,12.716261 C9.26025,13.2282025 9.33675,13.7241459 9.46575,14.2025673 C9.42675,14.1926637 9.3855,14.1850455 9.342,14.1888546 Z M20.5185,17.2262217 C20.39325,17.3222108 20.34,17.4875252 20.385,17.6398888 L20.73975,18.838228 L19.284,18.0291776 C19.2285,17.9979431 19.16625,17.9819449 19.104,17.9819449 C19.07325,17.9819449 19.0425,17.985754 19.0125,17.994134 C18.23175,18.194492 17.424,18.4009446 16.63725,18.4009446 C12.98325,18.4009446 10.011,15.8503791 10.011,12.7154992 C10.011,9.58061935 12.98325,7.0308155 16.63725,7.0308155 C20.2215,7.0308155 23.25,9.63394658 23.25,12.7154992 C23.25,14.278749 22.28025,15.8808517 20.5185,17.2262217 Z M14.367,9.99885727 C13.95525,9.99885727 13.5435,10.4201424 13.5435,10.8376186 C13.5435,11.2581419 13.95525,11.6733326 14.367,11.6733326 C14.98575,11.6733326 15.3945,11.2581419 15.3945,10.8376186 C15.3945,10.4193806 14.98575,9.99885727 14.367,9.99885727 Z M18.891,9.99885727 C18.48525,9.99885727 18.0735,10.4201424 18.0735,10.8376186 C18.0735,11.2581419 18.48525,11.6733326 18.891,11.6733326 C19.5075,11.6733326 19.92375,11.2581419 19.92375,10.8376186 C19.92375,10.4193806 19.50825,9.99885727 18.891,9.99885727 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Wechat.displayName = 'Wechat';
export default Wechat;