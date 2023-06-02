import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const EnterpriseStandard = ({
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
          id="465.企业标准"
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
              d="M5.64705881,0.96 L5.64705881,3.78352939 L18.3529412,3.78352939 L18.3529412,0.96 L22.5882352,0.96 C23.3675295,0.96 24,1.60235296 24,2.3717647 L24,23.5482353 C24,24.3275293 23.3576471,24.96 22.5882352,24.96 L1.41176473,24.96 C0.63247061,24.96 0,24.317647 0,23.5482353 L0,2.3717647 C0,1.59247058 0.642352957,0.96 1.41176473,0.96 L5.64705881,0.96 Z M7.68,0 L17.28,0 L17.28,2.88 L7.68,2.88 L7.68,0 Z M6.2775,14.387168 L6.2775,21.132832 C6.2775,21.6559384 6.70156158,22.08 7.22466798,22.08 C7.74777437,22.08 8.17183592,21.6559384 8.17183592,21.132832 L8.17183592,14.387168 C8.17183592,13.8640616 7.74777437,13.44 7.22466798,13.44 C6.70156158,13.44 6.2775,13.8640616 6.2775,14.387168 Z M17.7740625,14.3942139 L17.7740625,21.1257861 C17.7740625,21.6527839 18.2012786,22.08 18.7282764,22.08 C19.2552741,22.08 19.6824902,21.6527839 19.6824902,21.1257861 L19.6824902,14.3942139 C19.6824902,13.8672161 19.2552741,13.44 18.7282764,13.44 C18.2012786,13.44 17.7740625,13.8672161 17.7740625,14.3942139 Z M12.0215625,9.60345704 L12.0215625,21.116543 C12.0215625,21.6486456 12.4529169,22.08 12.9850195,22.08 C13.5171222,22.08 13.9484766,21.6486456 13.9484766,21.116543 L13.9484766,9.60345704 C13.9484766,9.07135439 13.5171222,8.64 12.9850195,8.64 C12.4529169,8.64 12.0215625,9.07135439 12.0215625,9.60345704 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
EnterpriseStandard.displayName = 'EnterpriseStandard';
export default EnterpriseStandard;