import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PersonalTaxSystem = ({
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
          id="437.个税体系"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M3,0 C4.65685424,0 6,1.34314576 6,3 C6,3.75667044 5.71986457,4.44791172 5.25764813,4.97566941 L8.07520482,8.09044175 C9.03118379,7.3190185 10.2473678,6.85714286 11.5714286,6.85714286 C13.2021717,6.85714286 14.6692772,7.55775933 15.6881592,8.67440665 L18.391282,6.50702858 C18.1433504,6.11163217 18,5.64398532 18,5.14285714 C18,3.72269637 19.1512678,2.57142857 20.5714286,2.57142857 C21.9915893,2.57142857 23.1428571,3.72269637 23.1428571,5.14285714 C23.1428571,6.56301792 21.9915893,7.71428571 20.5714286,7.71428571 C20.0767297,7.71428571 19.6146585,7.57458994 19.2225111,7.33249456 L16.3551458,9.57089143 C16.8553497,10.4064263 17.1428571,11.3839234 17.1428571,12.4285714 C17.1428571,13.7776869 16.6633363,15.0148044 15.8654347,15.9787836 L18.740137,18.1697195 C19.2900645,17.5403992 20.0986068,17.1428571 21,17.1428571 C22.6568542,17.1428571 24,18.4860029 24,20.1428571 C24,21.7997114 22.6568542,23.1428571 21,23.1428571 C19.3431458,23.1428571 18,21.7997114 18,20.1428571 C18,19.800248 18.0574318,19.4710527 18.1631933,19.1643735 L15.0821212,16.7549858 C14.1239589,17.5334457 12.9021785,18 11.5714286,18 C10.0835186,18 8.73183634,17.4167396 7.73254741,16.4663841 L4.39964744,19.6202955 C4.85913718,20.084821 5.14285714,20.723563 5.14285714,21.4285714 C5.14285714,22.8487322 3.99158935,24 2.57142857,24 C1.15126779,24 0,22.8487322 0,21.4285714 C0,20.0084107 1.15126779,18.8571429 2.57142857,18.8571429 C2.8313687,18.8571429 3.08230039,18.8957127 3.31881279,18.9674416 L6.93762728,15.5229581 C6.34537522,14.6378283 6,13.5735332 6,12.4285714 C6,11.1403173 6.43723236,9.95418429 7.17139603,9.01047344 L4.26849534,5.71941359 C3.88320908,5.89944176 3.45334785,6 3,6 C1.34314576,6 0,4.65685424 0,3 C0,1.34314576 1.34314576,0 3,0 Z"
              id="路径"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PersonalTaxSystem.displayName = 'PersonalTaxSystem';
export default PersonalTaxSystem;