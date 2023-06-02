import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const IndexData = ({
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
          id="416.指数数据"
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
              d="M22.8,0 C23.4627417,0 24,0.537258291 24,1.2 C24,1.86274168 23.4627417,2.4 22.8,2.4 L22.4,2.4 L22.4,13.6 L22.8,13.6 C23.4627417,13.6 24,14.1372583 24,14.8 C24,15.4627417 23.4627417,16 22.8,16 L18.08,16 L20.7029438,18.6225397 C21.1422835,19.0618795 21.1697423,19.7571294 20.7853199,20.228458 L20.7029438,20.3195959 C20.2636039,20.7589358 19.568354,20.7863945 19.0970254,20.4019722 L19.0058874,20.3195959 L14.6864,16 L10.096,16 L5.77746033,20.3195959 C5.30883118,20.7882251 4.54903319,20.7882251 4.08040404,20.3195959 C3.6117749,19.8509668 3.6117749,19.0911688 4.08040404,18.6225397 L6.7024,16 L1.2,16 C0.537258317,16 0,15.4627417 0,14.8 C0,14.1372583 0.537258317,13.6 1.2,13.6 L1.6,13.6 L1.6,2.4 L1.2,2.4 C0.537258317,2.4 0,1.86274168 0,1.2 C0,0.537258291 0.537258317,0 1.2,0 L22.8,0 Z M18.1354163,6.02220032 C17.8891331,5.65538104 17.3921154,5.55766733 17.0252961,5.80395057 L17.0252961,5.80395057 L12.856,8.6024 L10.9445143,6.6415924 L10.8736718,6.57706959 C10.6028286,6.35848161 10.2163316,6.33848353 9.92227128,6.53813545 L9.92227128,6.53813545 L5.20839089,9.73861896 L5.13422674,9.79547809 C4.83101394,10.0572009 4.76544433,10.5104278 4.99589847,10.8498556 L4.99589847,10.8498556 L5.05275761,10.9240198 C5.31448044,11.2272326 5.76770732,11.2928022 6.10713518,11.062348 L6.10713518,11.062348 L10.2664,8.2384 L12.1759642,10.1971704 L12.246513,10.2614551 C12.5162099,10.4793229 12.9008695,10.5002735 13.1947703,10.3029478 L13.1947703,10.3029478 L17.9171666,7.13232064 L17.9916245,7.07584663 C18.2961899,6.81569912 18.3641079,6.36281815 18.1354163,6.02220032 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
IndexData.displayName = 'IndexData';
export default IndexData;