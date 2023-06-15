import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Knowledge = ({
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
          id="1290-知识"
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
              d="M11.6848646,0.0646839744 C11.8861036,-0.0215613248 12.1138964,-0.0215613248 12.3151354,0.0646839744 L12.3151354,0.0646839744 L23.5151354,4.86468398 C23.5207086,4.86707246 23.5262337,4.86950848 23.5317108,4.87199121 C23.5479613,4.87920128 23.5642568,4.88731591 23.5802251,4.89595796 C23.5945197,4.90346014 23.6082021,4.91125614 23.6215323,4.91935987 C23.6299241,4.92514337 23.6385618,4.93073628 23.6470826,4.93648901 C23.8401124,5.06321195 23.9537161,5.25693998 23.9884929,5.46267914 C23.9959608,5.50710387 24,5.55308024 24,5.6 L24,10.4 C24,10.8418278 23.6418278,11.2 23.2,11.2 C22.7581722,11.2 22.4,10.8418278 22.4,10.4 L22.4,6.8128 L20.724,7.5312 L20.7245749,14.8184224 C20.7245749,15.0795466 20.5973618,15.3219998 20.3876179,15.4708134 L20.3051826,15.5220827 L12.3806077,19.8084603 C12.144631,19.9360994 11.8603854,19.9369565 11.6236433,19.810743 L11.6236433,19.810743 L3.58356175,15.5243654 C3.32280765,15.3853506 3.15991846,15.1139182 3.15991846,14.8184224 L3.15991846,14.8184224 L3.15919999,7.4816 L0.484864555,6.33531599 C-0.129297211,6.07210383 -0.160005307,5.23180096 0.392740293,4.91087969 L0.484864555,4.86468398 L11.6848646,0.0646839744 Z M4.75919999,8.2904 L4.75919999,14.3376 L11.9968,18.196 L19.124,14.3408 L19.124,8.2968 L12.3077364,11.1384431 C12.2906441,11.1455661 12.273366,11.152071 12.2559342,11.1579579 C12.1961365,11.1781829 12.1341712,11.191162 12.0717005,11.1967817 C12.048425,11.1988707 12.0252362,11.1999381 12.0020447,11.1999974 C11.892742,11.2 11.7854841,11.1784386 11.6848646,11.135316 L11.7376,11.1536 L11.6960424,11.1400066 L4.75919999,8.2904 Z M12,1.67039999 L2.83119999,5.6 L12,9.5288 L21.1688,5.6 L12,1.67039999 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Knowledge.displayName = 'Knowledge';
export default Knowledge;
