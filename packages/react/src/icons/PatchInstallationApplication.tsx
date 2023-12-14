import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PatchInstallationApplication = ({
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
          id="666.补丁安装申请"
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
              d="M11.535687,0.169782957 L12.1431005,0.594285705 C13.3085498,1.35539934 14.5546246,1.99286722 15.8599542,2.49575657 C17.9755625,3.3234113 20.0472302,3.38243981 20.1053869,3.38243981 L21.1043882,3.3975109 L21.1043882,3.39625498 C21.5954885,3.39876686 21.9948305,3.79061554 22,4.27917045 L22,15.1052464 C21.9935381,16.118778 20.5460847,19.3025486 18.0014098,21.6486171 C15.6841919,23.7899697 12.1366387,25.3636441 11.0032309,25.1174827 C9.86982319,24.8713214 6.32226986,23.7899697 4.005052,21.6486171 C1.46037715,19.3025486 0,16.0283514 0,15.1052464 L0,4.27665863 C0.00138997257,3.79412343 0.401682085,3.40232065 0.898196565,3.3975109 L1.90365977,3.38243981 C1.96052402,3.37992797 4.03219176,3.32341133 6.14263059,2.49575657 C8.38230632,1.61660888 9.85043767,0.599309399 9.86465372,0.590517922 L10.4591435,0.172294804 C10.7790635,-0.0565013991 11.2146403,-0.0575176985 11.535687,0.169782957 Z M12.5714286,7.85714286 L9.42857143,7.85714286 L9.42857143,14.9285714 L6.28571429,14.9285714 L11,20.4285714 L15.7142857,14.9285714 L12.5714286,14.9285714 L12.5714286,7.85714286 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PatchInstallationApplication.displayName = 'PatchInstallationApplication';
export default PatchInstallationApplication;
