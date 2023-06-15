import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SingleOrganizationEnterprises = ({
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
          id="849.单组织企业"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M23.4540527,23.5023405 L26.2644001,23.5023405 L26.2644001,26.2616408 L1.37965016,26.2616408 L1.37965016,23.5023405 L4.13895048,23.5023405 L4.13895048,11.0675536 L0,11.0675536 L13.7965016,0 L28,11.0675536 L23.4540527,11.0675536 L23.4540527,23.5023405 Z M9.65755112,23.5023405 L17.9354521,23.5023405 L17.9354521,16.6040897 L9.65755112,16.6040897 L9.65755112,23.5023405 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SingleOrganizationEnterprises.displayName = 'SingleOrganizationEnterprises';
export default SingleOrganizationEnterprises;
