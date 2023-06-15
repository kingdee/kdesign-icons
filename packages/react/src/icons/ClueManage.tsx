import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ClueManage = ({
  size = '1em',
  fill = 'currentColor',
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
          id="234.线索管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="线索管理"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M19.6227721,0 C20.0590165,0 20.4126626,0.349071744 20.4126626,0.7796736 L20.4126626,23.2203264 C20.4126626,23.6509282 20.0590165,24 19.6227721,24 L3.40201972,24 C2.96577524,24 2.61212926,23.6509282 2.61212926,23.2203264 L2.61212926,0.7796736 C2.61212926,0.349071744 2.96577524,0 3.40201972,0 L19.6227721,0 Z M1.54787246,0.786713295 L1.54787246,23.2132867 L0.78989046,23.2132867 C0.353646018,23.2132867 5.44342296e-16,22.864215 5.44342296e-16,22.4336131 L5.44342296e-16,1.56638689 C5.44342296e-16,1.13578504 0.353646018,0.786713295 0.78989046,0.786713295 L1.54787246,0.786713295 Z M22.2101095,0.786713295 C22.6463541,0.786713295 23,1.13578504 23,1.56638689 L23,1.56638689 L23,22.4336131 C23,22.864215 22.6463541,23.2132867 22.2101095,23.2132867 L22.2101095,23.2132867 L21.4521276,23.2132867 L21.4521276,0.786713295 L22.2101095,0.786713295 Z M14.3134155,4.61989183 L14.3134155,6.3711012 L9.16360852,6.3711012 C8.00255642,6.3711012 5.93110888,7.83832633 5.93110888,9.70213579 C5.93110888,11.5038182 7.65527715,12.7914549 9.02343068,12.8752955 L9.16360852,12.8796463 L14.0117268,12.8735135 C14.6426208,12.8735135 16.1822417,13.7222921 16.1822417,15.1656613 C16.1822417,16.5512958 14.8322054,17.4456328 14.0999046,17.5149628 L14.0117268,17.519308 L8.71886355,17.519308 L8.71886355,15.8541427 L5.92655403,17.9810877 L8.71886355,20.3121995 L8.71886355,18.4374223 L14.0117268,18.4374223 C15.199597,18.4374223 17.1213068,17.3723454 17.1213068,15.1656613 C17.1213068,13.0325333 15.3712035,12.0502677 14.1374243,11.9871535 L14.0117268,11.9838937 L9.16360852,11.9900265 C8.37987009,11.9900265 6.86004459,11.1676414 6.86004459,9.70213579 C6.86004459,8.29525035 8.26071577,7.4006543 9.06617107,7.3313376 L9.16360852,7.32699397 L14.3134155,7.32699397 L14.3134155,9.15502393 L17.1486294,6.88557241 L14.3134155,4.61989183 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ClueManage.displayName = 'ClueManage';
export default ClueManage;
