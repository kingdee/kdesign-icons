import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const FinancialStatementSubmission = ({
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
          id="382.财务报表报送"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M16,0 L16,8 L24,8 L24,26 C24,27.1045695 23.1045695,28 22,28 L2,28 C0.895430496,28 0,27.1045695 0,26 L0,2 C0,0.895430496 0.895430496,0 2,0 L16,0 Z M2.6715729,10.2573593 C2.3110889,10.6178433 2.28335939,11.1850743 2.58838426,11.5773655 L2.6715729,11.6715729 L5,13.9994661 L3,14 C2.44771526,14 2,14.4477153 2,15 C2,15.5128358 2.38604019,15.9355072 2.88337888,15.9932723 L3,16 L5.5,15.9994661 L5.5,17.9994661 L3,18 C2.44771526,18 2,18.4477153 2,19 C2,19.5128358 2.38604019,19.9355072 2.88337888,19.9932723 L3,20 L5.5,19.9994661 L5.5,23 C5.5,23.5522847 5.94771526,24 6.5,24 C7.01283581,24 7.4355072,23.6139598 7.49327229,23.1166211 L7.5,23 L7.5,19.9994661 L10,20 C10.5522847,20 11,19.5522847 11,19 C11,18.4871642 10.6139598,18.0644928 10.1166211,18.0067277 L10,18 L7.5,17.9994661 L7.5,15.9994661 L10,16 C10.5522847,16 11,15.5522847 11,15 C11,14.4871642 10.6139598,14.0644928 10.1166211,14.0067277 L10,14 L8,13.9994661 L10.3284271,11.6715729 L10.4116157,11.5773655 C10.6912219,11.2177653 10.6912219,10.7111669 10.4116157,10.3515667 L10.3284271,10.2573593 L10.2342198,10.1741707 C9.87461949,9.89456461 9.36802122,9.89456461 9.0084209,10.1741707 L8.9142136,10.2573593 L6.5,12.6714661 L4.08578643,10.2573593 C3.69526214,9.86683501 3.06209718,9.86683501 2.6715729,10.2573593 Z M20,21 L13,21 L13,23 L20,23 L20,21 Z M18,16 L13,16 L13,18 L18,18 L18,16 Z M21,11 L13,11 L13,13 L21,13 L21,11 Z M18,0 L24,6 L18,6 L18,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
FinancialStatementSubmission.displayName = 'FinancialStatementSubmission';
export default FinancialStatementSubmission;
