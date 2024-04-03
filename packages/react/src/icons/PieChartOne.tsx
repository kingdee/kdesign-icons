import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PieChartOne = ({
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
          id="饼图"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="视觉修正模版" transform="translate(-2.000000, -0.500000)"></g>
          <g
            id="编组"
            transform="translate(1.000000, 1.000000)"
            fill="#333333"
            fillRule="nonzero"
          >
            <path
              d="M16.8461538,2.68292309 C18.7606154,2.68292309 20.5218462,3.01984617 22.128,3.69599999 C23.7332308,4.37123077 25.1192308,5.30676923 26.2855385,6.50215383 C27.4509231,7.69753844 28.3615385,9.11215384 29.0169231,10.746 C29.6723077,12.3798461 30,14.154 30,16.0675384 C30,17.9829231 29.6330769,19.7884615 28.8992308,21.4813846 C28.1667693,23.1710769 27.1693846,24.6475385 25.9084615,25.9084615 C24.6470769,27.1693846 23.1710769,28.1667692 21.4813846,28.8992308 C19.7884615,29.6330769 17.9829231,30 16.0675384,30 C14.1535385,30 12.3789231,29.6676923 10.7446154,29.0021539 C9.11076924,28.3370769 7.69615383,27.4116923 6.50076923,26.2264615 C5.30538463,25.0407692 4.3703077,23.6307692 3.69553846,21.9969231 C3.02030768,20.3626154 2.68292309,18.5875385 2.68292309,16.6730769 C2.68292309,16.3610769 2.7983077,16.0864615 3.02446154,15.8607692 C3.23701272,15.6404554 3.5306464,15.5169958 3.83676922,15.5192308 C4.16815384,15.5192308 4.45015382,15.6355384 4.66753846,15.8653846 C4.88123076,16.0906154 4.99061538,16.3638462 4.99061538,16.6730769 C4.99061538,18.2783077 5.26846152,19.7529231 5.82369232,21.0992308 C6.37938461,22.4464615 7.15107694,23.6081539 8.13830768,24.5861539 C9.12599998,25.5646154 10.2927692,26.3261538 11.6395385,26.8726154 C12.9863077,27.4190769 14.4618462,27.6923077 16.0670769,27.6923077 C17.6704615,27.6923077 19.1778461,27.3863077 20.5910769,26.7738462 C22.0070769,26.16 23.2375385,25.3306154 24.2838462,24.2838462 C25.3306154,23.2375385 26.1604616,22.0070769 26.7738462,20.5910769 C27.3863077,19.1778461 27.6923077,17.6704615 27.6923077,16.0675384 C27.6923077,14.4609231 27.4283077,12.9844615 26.9003077,11.6367692 C26.3732308,10.2904615 25.6301539,9.12415384 24.6710769,8.13692307 C23.712,7.14969231 22.5701538,6.37846154 21.2427692,5.82323075 C19.9158461,5.26846152 18.4509231,4.99015384 16.8461538,4.99015384 C16.5170769,4.99015384 16.2369231,4.88076923 16.0195385,4.66338462 C15.8021539,4.44553845 15.6923077,4.16538463 15.6923077,3.83676922 C15.6923077,3.52753843 15.8016923,3.25430768 16.0153846,3.02907691 C16.2323077,2.79923077 16.5147692,2.68292309 16.8461538,2.68292309 L16.8461538,2.68292309 Z M14.3076923,13.1538462 C14.3076923,13.4829231 14.1978462,13.7630769 13.9804615,13.9804615 C13.7630769,14.1978461 13.4829231,14.3076923 13.1538462,14.3076923 L1.15384616,14.3076923 C0.844615377,14.3076923 0.571384628,14.1983077 0.346153827,13.9846154 C0.116307687,13.7676923 0,13.4852308 0,13.1538462 C0,11.3344615 0.34292309,9.62123076 1.02830768,8.01507692 C1.71276922,6.41123075 2.64738461,5.01646155 3.83215385,3.83215385 C5.01646155,2.64738461 6.41123078,1.71276922 8.01507692,1.02830768 C9.62123076,0.34292306 11.3344615,0 13.1538462,0 C13.4852308,0 13.7676923,0.116307687 13.9846154,0.346153827 C14.1983077,0.571384598 14.3076923,0.844615377 14.3076923,1.15384616 L14.3076923,13.1538462 L14.3076923,13.1538462 Z M12,12 L12,2.35984613 C10.799428,2.48469234 9.62844504,2.81078886 8.53615384,3.32446153 C7.39764869,3.85653736 6.36047039,4.58276521 5.47107692,5.47061539 C4.58285346,6.36007346 3.85630791,7.39741557 3.324,8.53615384 C2.81048671,9.62847341 2.48454653,10.7994552 2.35984613,12 L12,12 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PieChartOne.displayName = 'PieChartOne';
export default PieChartOne;
