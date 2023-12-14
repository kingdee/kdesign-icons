import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ProjectExpenditureBudgetAdjustmentSheet = ({
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
          id="453.项目支出预算调剂单"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M16.0137912,14.2532593 C15.2018687,14.2532593 14.4346707,14.4086575 13.7121971,14.719454 C12.9897236,15.0302503 12.3601396,15.452528 11.8165643,15.9829088 C11.2764294,16.5132897 10.8463857,17.1315042 10.5298735,17.8409308 C10.2133613,18.5503573 10.0551052,19.3037007 10.0551052,20.1009611 C10.0551052,20.9151124 10.2133613,21.6785905 10.5298735,22.3880171 C10.8463857,23.0974437 11.2764294,23.7156582 11.8165643,24.246039 C12.3566993,24.7764199 12.9897236,25.1986976 13.7121971,25.5094939 C14.4346707,25.8202903 15.2018687,25.9756885 16.0137912,25.9756885 C16.8463559,25.9756885 17.6204346,25.8202903 18.3429081,25.5094939 C19.0653816,25.1986976 19.6949656,24.7764199 20.2385409,24.246039 C20.7786758,23.7156582 21.2087195,23.0974437 21.5252317,22.3880171 C21.8417439,21.6785905 22,20.9151124 22,20.1009611 C22,19.3037007 21.8417439,18.5503573 21.5252317,17.8409308 C21.2087195,17.1315042 20.7786758,16.5132897 20.2385409,15.9829088 C19.6984059,15.452528 19.0653816,15.0302503 18.3429081,14.719454 C17.6204346,14.4086575 16.8463559,14.2532593 16.0137912,14.2532593 Z M0.837925437,0 C0.375151954,0 -4.23382636e-16,0.375152014 -4.23382636e-16,0.837925437 L-4.23382636e-16,24.2998377 C1.44782185,23.1675913 2.27934542,22.6014681 2.49457076,22.6014681 C2.7097961,22.6014681 3.5559159,23.1675913 5.03293003,24.2998377 L7.52534912,22.6014681 L10.0997813,24.2998377 L10.5255066,24.018227 C10.2397232,23.6217389 9.99489116,23.1918569 9.7917329,22.7278588 C9.43648341,21.9164958 9.25885868,21.0433147 9.25885868,20.1121791 C9.25885868,19.2003617 9.43648341,18.3387715 9.7917329,17.5274086 C10.1469824,16.7160457 10.6296583,16.0090007 11.2358993,15.4024104 C11.8460017,14.79582 12.5526393,14.3128658 13.3635348,13.9574115 C14.1744305,13.6019573 15.0355244,13.4242301 15.9468165,13.4242301 C16.8812771,13.4242301 17.7500938,13.6019573 18.5609894,13.9574115 C19.1262047,14.2051724 19.6426428,14.5148785 20.1089961,14.8852214 L20.1064178,6.56030564 L13.5887654,6.56030564 L13.592558,0 L0.837925437,0 Z M16.4294261,17.6811268 L19.5494341,20.0441282 L16.4294261,22.3880171 L16.4294261,20.4998967 L12.7503816,20.4998967 C12.479288,20.4998967 12.2595233,20.280132 12.2595233,20.0090384 C12.2595233,19.7680664 12.4331645,19.5676504 12.6621492,19.5260886 L12.7503816,19.5181801 L16.4294261,19.5181801 L16.4294261,17.6811268 Z M4.65355017,12.1065497 L9.55267153,12.1065497 C9.80888923,12.1065497 10.0165945,12.3142551 10.0165945,12.5704727 C10.0165945,12.7982216 9.85248164,12.98764 9.63606235,13.0269213 L9.55267153,13.0343957 L4.65355017,13.0343957 C4.39733259,13.0343957 4.18962718,12.8266902 4.18962718,12.5704727 C4.18962718,12.3142551 4.39733259,12.1065497 4.65355017,12.1065497 Z M4.65073727,8.37925437 L15.3824519,8.37925437 C15.637116,8.37925437 15.843562,8.5857004 15.843562,8.84036454 C15.843562,9.06673261 15.6804442,9.25500246 15.465337,9.29404559 L15.3824519,9.30147475 L4.65073727,9.30147475 C4.39607318,9.30147475 4.18962718,9.09502863 4.18962718,8.84036454 C4.18962718,8.5857004 4.39607318,8.37925437 4.65073727,8.37925437 Z M14.4837744,0 L14.4837744,5.79470305 L20.1102105,5.79470305 L14.4837744,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ProjectExpenditureBudgetAdjustmentSheet.displayName =
  'ProjectExpenditureBudgetAdjustmentSheet';
export default ProjectExpenditureBudgetAdjustmentSheet;
