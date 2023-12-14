import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Entity = ({
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
          id="1.实体"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="实体"
            transform="translate(4.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12.3090162,0.0566180008 L12.4063713,0.100654224 L18.0152611,3.06900196 L18.0850552,3.11522886 L18.1616649,3.17875086 L18.2244114,3.24388687 C18.3293267,3.36321027 18.4011609,3.51373805 18.4221914,3.68456532 L18.4285714,3.78941039 L18.4285714,10.0225694 L23.5866897,12.7530507 L23.6564838,12.7992777 L23.7330934,12.8627996 L23.79584,12.9279357 C23.9007553,13.0472591 23.9725895,13.1977868 23.9936199,13.3686141 L24,13.4734592 L24,20.2101888 C24,20.4855581 23.8632023,20.741162 23.6378095,20.8977158 L23.5492284,20.9516257 L17.9777998,23.8989449 L17.9032132,23.9341219 L17.8417017,23.9571378 L17.7396734,23.983883 L17.686302,23.9930605 L17.6085852,24 L17.5342719,24 L17.4414334,23.9909357 L17.3616645,23.9740074 L17.2628026,23.9433358 L17.2049983,23.9188528 L12,21.1659623 L6.83494269,23.8989449 L6.76035599,23.9341219 L6.69884456,23.9571378 L6.59681623,23.983883 L6.54344484,23.9930605 L6.46572806,24 L6.39141479,24 L6.29857621,23.9909357 L6.21880737,23.9740074 L6.1199455,23.9433358 L6.06214113,23.9188528 L0.450771593,20.9516257 C0.203983104,20.8210731 0.0397645166,20.5815601 0.00631825371,20.3123709 L0,20.2101888 L0,13.4734592 C0,13.2592461 0.0782616137,13.0711237 0.203861733,12.927238 L0.267205138,12.8620637 L0.317698807,12.8188867 L0.368988946,12.7812307 L0.413310336,12.7530507 L5.57142857,10.0225694 L5.57142857,3.78941039 C5.57142857,3.57519732 5.64969019,3.38707495 5.7752903,3.24318916 L5.83863371,3.17801491 L5.88912738,3.13483789 L5.94041752,3.09718183 L5.98473891,3.06900196 L11.5936287,0.100654224 C11.815611,-0.0167757039 12.0771458,-0.0314544449 12.3090162,0.0566180008 Z M22.2857143,14.8831198 L18.4285714,16.9235068 L18.4285714,21.7470052 L22.2857143,19.7066182 L22.2857143,14.8831198 Z M11.1428571,14.8831198 L7.28571429,16.9235068 L7.28571429,21.7470052 L11.1428571,19.7066182 L11.1428571,14.8831198 Z M17.5714286,11.4827556 L13.8085714,13.4734592 L17.5705714,15.4641628 L21.3342857,13.4726171 L17.5714286,11.4827556 Z M6.42857143,11.4827556 L2.66571429,13.4734592 L6.42771429,15.4641628 L10.1914286,13.4726171 L6.42857143,11.4827556 Z M16.7142857,5.19907106 L12.8571429,7.23945803 L12.8571429,12.0629564 L16.7142857,10.0225694 L16.7142857,5.19907106 Z M12,1.79870679 L8.23714286,3.78941039 L11.9991429,5.78011398 L15.7628571,3.7885683 L12,1.79870679 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Entity.displayName = 'Entity';
export default Entity;
