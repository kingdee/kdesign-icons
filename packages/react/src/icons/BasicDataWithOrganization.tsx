import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BasicDataWithOrganization = ({
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
          id="1430-带组织的基础资料"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M13.0909091,-5.58099022e-16 C13.0931651,-5.58099022e-16 13.0954189,-5.58099022e-16 13.0976695,-5.58099022e-16 C13.1239047,0.000383668364 13.1494538,0.00250853237 13.1747978,0.00642870982 C13.1803975,0.00727713164 13.1858127,0.00819904582 13.1911986,0.00920005528 C13.2168098,0.0139799913 13.2423011,0.0206336553 13.2673178,0.0291675142 C13.2729142,0.0310719273 13.2782324,0.0329854778 13.2835124,0.0349785688 C13.3017175,0.0418388597 13.3197546,0.0497678139 13.3374207,0.058728096 C13.3493804,0.0648295593 13.3608,0.0711637004 13.37196,0.077885987 C13.3744309,0.0793485819 13.3769007,0.0808637237 13.3793618,0.0824004917 L13.4043873,0.0990217048 C13.4217131,0.111209891 13.4382971,0.124381074 13.4540586,0.138454246 L13.4578211,0.141850892 L19.4578211,5.59639637 L19.4721917,5.60994326 C19.4882477,5.62563981 19.5033371,5.64231949 19.5173651,5.65988497 L19.4578211,5.59639637 C19.4912902,5.62682281 19.5201044,5.66045815 19.5442211,5.6964073 C19.55256,5.70896083 19.5604735,5.721876 19.5678502,5.73513086 C19.5770706,5.75161646 19.5853953,5.76866236 19.5927851,5.78602494 C19.6084778,5.82276175 19.6202487,5.86158381 19.6275753,5.9019539 L19.6055313,5.81889425 C19.6128437,5.83973071 19.6188611,5.8609368 19.6235771,5.88238495 L19.6275753,5.9019539 C19.6318975,5.92814202 19.633896,5.945334 19.6350796,5.96257886 L19.6363637,6 L19.6363637,23.4545455 C19.6363637,23.7557917 19.3921549,24 19.0909091,24 L19.0909091,24 L0.545454537,24 C0.244208736,24 0,23.7557917 0,23.4545455 L0,23.4545455 L0,0.545454537 C0,0.244208291 0.244208736,-5.58099022e-16 0.545454537,-5.58099022e-16 L0.545454537,-5.58099022e-16 L13.0909091,-5.58099022e-16 Z M12.5454546,1.09090907 L1.0909091,1.09090907 L1.0909091,22.9090909 L18.5454546,22.9090909 L18.5454546,6.54545455 L13.0909091,6.54545455 C12.8231346,6.54545455 12.6004276,6.35249979 12.5542429,6.0980461 L12.5542429,6.0980461 L12.5454546,5.99999999 L12.5454546,1.09090907 Z M7.09090909,13.0909091 L7.09090909,14.1807273 L8.18181819,14.1818182 C8.44959273,14.1818182 8.67229965,14.3747729 8.71848438,14.6292266 L8.72727272,14.7272727 L8.72727272,16.9090909 C8.72727272,17.2103372 8.48306401,17.4545454 8.18181819,17.4545454 L8.18181819,17.4545454 L4.90909091,17.4545454 C4.60784509,17.4545454 4.36363638,17.2103372 4.36363638,16.9090909 L4.36363638,16.9090909 L4.36363638,14.7272727 C4.36363638,14.4260265 4.60784509,14.1818182 4.90909091,14.1818182 L4.90909091,14.1818182 L6.00000001,14.1807273 L6.00000001,12.5454545 C6.00000001,12.2776801 6.19295454,12.0549727 6.44740801,12.008788 L6.54545455,12 L9.27272729,11.9989091 L9.27272729,10.908 L8.18181819,10.9090909 C7.91404364,10.9090909 7.69133672,10.7161361 7.645152,10.4616825 L7.63636365,10.3636364 L7.63636365,8.18181819 C7.63636365,7.88057192 7.88057236,7.63636362 8.18181819,7.63636362 L8.18181819,7.63636362 L11.4545455,7.63636362 C11.7557913,7.63636362 12,7.88057192 12,8.18181819 L12,8.18181819 L12,10.3636364 C12,10.6648826 11.7557913,10.9090909 11.4545455,10.9090909 L11.4545455,10.9090909 L10.3636364,10.908 L10.3636364,12 L13.0909091,12 C13.3586836,12 13.5813906,12.1929548 13.6275753,12.4474084 L13.6363636,12.5454545 L13.6363636,14.1807273 L14.7272727,14.1818182 C14.9950473,14.1818182 15.2177542,14.3747729 15.2639389,14.6292266 L15.2727273,14.7272727 L15.2727273,16.9090909 C15.2727273,17.2103372 15.0285186,17.4545454 14.7272727,17.4545454 L14.7272727,17.4545454 L11.4545455,17.4545454 C11.1532996,17.4545454 10.9090909,17.2103372 10.9090909,16.9090909 L10.9090909,16.9090909 L10.9090909,14.7272727 C10.9090909,14.4260265 11.1532996,14.1818182 11.4545455,14.1818182 L11.4545455,14.1818182 L12.5454546,14.1807273 L12.5454546,13.0909091 L7.09090909,13.0909091 Z M14.1818182,15.2727273 L12,15.2727273 L12,16.3636364 L14.1818182,16.3636364 L14.1818182,15.2727273 Z M7.63636365,15.2727273 L5.45454545,15.2727273 L5.45454545,16.3636364 L7.63636365,16.3636364 L7.63636365,15.2727273 Z M10.9090909,8.72727272 L8.72727272,8.72727272 L8.72727272,9.81818183 L10.9090909,9.81818183 L10.9090909,8.72727272 Z M13.6363636,1.7781818 L13.6363636,5.45454545 L17.6803637,5.45454545 L13.6363636,1.7781818 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BasicDataWithOrganization.displayName = 'BasicDataWithOrganization';
export default BasicDataWithOrganization;
