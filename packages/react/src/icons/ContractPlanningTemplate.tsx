import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ContractPlanningTemplate = ({
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
          id="579.合约规划模版"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M20.9632074,5.13412109 C21.5358121,5.13412109 22,5.59830895 22,6.17091372 L22,23.4573285 C22,24.0299332 21.5358121,24.4941211 20.9632074,24.4941211 L1.03679263,24.4941211 C0.464187863,24.4941211 0,24.0299332 0,23.4573285 L0,6.17091372 C0,5.59830895 0.464187863,5.13412109 1.03679263,5.13412109 L20.9632074,5.13412109 Z M18.1673468,17.7107057 L4.70733847,17.7107057 C4.41083034,17.7107057 4.17046302,17.9491827 4.17046302,18.2433588 C4.17046302,18.5081175 4.36516056,18.7277597 4.62025448,18.7690406 L4.70733847,18.7760121 L18.1673468,18.7760121 C18.4615231,18.7760121 18.7,18.5375351 18.7,18.2433588 C18.7,17.9491827 18.4615231,17.7107057 18.1673468,17.7107057 Z M18.1673468,12.2083744 L4.70733847,12.2083744 C4.41083034,12.2083744 4.17046302,12.4468513 4.17046302,12.7410276 C4.17046302,13.0057862 4.36516056,13.2254284 4.62025448,13.2667092 L4.70733847,13.2736807 L18.1673468,13.2736807 C18.4615231,13.2736807 18.7,13.0352038 18.7,12.7410276 C18.7,12.4468513 18.4615231,12.2083744 18.1673468,12.2083744 Z M20.3858789,2.64 C20.7913228,2.64 21.12,2.96867721 21.12,3.37412109 C21.12,3.77956497 20.7913228,4.10824218 20.3858789,4.10824218 L2.49412109,4.10824218 C2.08867721,4.10824218 1.76,3.77956497 1.76,3.37412109 C1.76,2.96867721 2.08867721,2.64 2.49412109,2.64 L20.3858789,2.64 Z M17.7458789,0 C18.1513228,0 18.48,0.328677212 18.48,0.734121091 C18.48,1.13956497 18.1513228,1.46824218 17.7458789,1.46824218 L4.25412109,1.46824218 C3.84867721,1.46824218 3.52,1.13956497 3.52,0.734121091 C3.52,0.328677212 3.84867721,0 4.25412109,0 L17.7458789,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ContractPlanningTemplate.displayName = 'ContractPlanningTemplate';
export default ContractPlanningTemplate;
