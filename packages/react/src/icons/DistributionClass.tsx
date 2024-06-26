import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DistributionClass = ({
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
          id="分布类"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="视觉修正模版" transform="translate(-2.000000, -0.500000)"></g>
          <path
            d="M27.6666667,2 C28.9536458,2 30,3.04270835 30,4.33333332 L30,27.6666667 C30,28.9536458 28.9536458,30 27.6666667,30 L4.33333332,30 C3.04635418,30 2,28.9536458 2,27.6666667 L2,4.33333332 C2,3.04635418 3.04635418,2 4.33333332,2 Z M28,4 L4,4 L4,28 L28,28 L28,4 Z M16.5,19 C18.4329966,19 20,20.5670034 20,22.5 C20,24.4329966 18.4329966,26 16.5,26 C14.5670034,26 13,24.4329966 13,22.5 C13,20.5670034 14.5670034,19 16.5,19 Z M16.5,21 C15.6715729,21 15,21.6715729 15,22.5 C15,23.3284271 15.6715729,24 16.5,24 C17.3284271,24 18,23.3284271 18,22.5 C18,21.6715729 17.3284271,21 16.5,21 Z M8.5,14 C10.4329966,14 12,15.5670034 12,17.5 C12,19.4329966 10.4329966,21 8.5,21 C6.56700338,21 5,19.4329966 5,17.5 C5,15.5670034 6.56700338,14 8.5,14 Z M8.5,16 C7.67157288,16 7,16.6715729 7,17.5 C7,18.3284271 7.67157288,19 8.5,19 C9.32842712,19 10,18.3284271 10,17.5 C10,16.6715729 9.32842712,16 8.5,16 Z M8.5,6 C10.4329966,6 12,7.56700338 12,9.5 C12,11.4329966 10.4329966,13 8.5,13 C6.56700338,13 5,11.4329966 5,9.5 C5,7.56700338 6.56700338,6 8.5,6 Z M16.5,6 C18.4329966,6 20,7.56700338 20,9.5 C20,11.4329966 18.4329966,13 16.5,13 C14.5670034,13 13,11.4329966 13,9.5 C13,7.56700338 14.5670034,6 16.5,6 Z M8.5,8 C7.67157288,8 7,8.67157288 7,9.5 C7,10.3284271 7.67157288,11 8.5,11 C9.32842712,11 10,10.3284271 10,9.5 C10,8.67157288 9.32842712,8 8.5,8 Z M16.5,8 C15.6715729,8 15,8.67157288 15,9.5 C15,10.3284271 15.6715729,11 16.5,11 C17.3284271,11 18,10.3284271 18,9.5 C18,8.67157288 17.3284271,8 16.5,8 Z"
            id="形状结合"
            fill={fill}
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
DistributionClass.displayName = 'DistributionClass';
export default DistributionClass;
