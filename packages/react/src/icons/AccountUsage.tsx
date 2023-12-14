import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AccountUsage = ({
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
          id="515.账户用途"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M20.5897436,0 C21.3686067,0 22,0.631393312 22,1.4102564 L22,20.5897436 C22,21.3686067 21.3686067,22 20.5897436,22 L1.4102564,22 C0.631393312,22 0,21.3686067 0,20.5897436 L0,1.4102564 C0,0.631393312 0.631393312,0 1.4102564,0 L20.5897436,0 Z M19.0384615,16.9230769 L2.96153846,16.9230769 C2.72787953,16.9230769 2.53846154,17.1124949 2.53846154,17.3461538 C2.53846154,17.5798128 2.72787953,17.7692308 2.96153846,17.7692308 L2.96153846,17.7692308 L19.0384615,17.7692308 C19.2721205,17.7692308 19.4615385,17.5798128 19.4615385,17.3461538 C19.4615385,17.1124949 19.2721205,16.9230769 19.0384615,16.9230769 L19.0384615,16.9230769 Z M19.0384615,12.6923077 L2.96153846,12.6923077 C2.72787953,12.6923077 2.53846154,12.8817257 2.53846154,13.1153846 C2.53846154,13.3490436 2.72787953,13.5384615 2.96153846,13.5384615 L2.96153846,13.5384615 L19.0384615,13.5384615 C19.2721205,13.5384615 19.4615385,13.3490436 19.4615385,13.1153846 C19.4615385,12.8817257 19.2721205,12.6923077 19.0384615,12.6923077 L19.0384615,12.6923077 Z M5.99835662,3.45675968 C5.47793074,3.52327411 4.87001948,3.92328884 4.82291197,4.53027173 L4.82291197,5.28080205 C4.72252812,5.28080205 4.59214126,5.33710729 4.63504272,5.77826816 C4.6776638,6.21973838 4.95133603,6.34193932 5.15659018,6.55787922 C5.36184436,6.77350976 5.31669966,7.11783795 5.63747937,7.29355982 C5.63747937,7.29355982 5.6411246,7.29665352 5.64841506,7.30129401 C5.63551656,7.31676255 5.64336781,7.33470591 5.67813764,7.35450558 L5.67813764,7.77957924 C5.67813764,7.77957924 4.86637428,8.08214255 4.48362572,8.22012137 C4.1008772,8.35810012 3.78542511,8.90104355 3.78542511,9.6249681 L8.83265859,9.6249681 C8.83265859,8.90104355 8.5172065,8.35810012 8.15128203,8.22012137 C7.94378472,8.15577247 7.47457888,7.9814256 7.18483032,7.87234429 L7.03604533,7.81612938 C6.97594962,7.79334 6.93994603,7.77957924 6.93994603,7.77957924 L6.93994603,7.35419623 C6.99013793,7.32542486 6.98452989,7.30129401 6.94050688,7.28149442 C7.23913477,7.10206015 7.20857101,6.76855986 7.40092667,6.55756987 C7.59720796,6.34162997 7.87985305,6.21911967 7.92247415,5.77795878 C7.96509518,5.33648855 7.72142597,5.28049269 7.72142597,5.28049269 L7.72142597,4.43529528 C7.62749138,3.71229885 6.52270808,3.34662413 5.99835662,3.45675968 Z M19.0384615,7.61538462 L12.2692308,7.61538462 C12.0355718,7.61538462 11.8461538,7.80480258 11.8461538,8.03846154 C11.8461538,8.27212049 12.0355718,8.46153846 12.2692308,8.46153846 L12.2692308,8.46153846 L19.0384615,8.46153846 C19.2721205,8.46153846 19.4615385,8.27212049 19.4615385,8.03846154 C19.4615385,7.80480258 19.2721205,7.61538462 19.0384615,7.61538462 L19.0384615,7.61538462 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AccountUsage.displayName = 'AccountUsage';
export default AccountUsage;
