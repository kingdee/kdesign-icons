import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CostAccountingOne = ({
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
          id="1793.费用核算"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M28,2 C28.5522847,2 29,2.44771525 29,3 L29,29 C29,29.5522847 28.5522847,30 28,30 L25,30 L25,2 L28,2 Z M23,2 L23,30 L5,30 C4.44771525,30 4,29.5522847 4,29 L4,25 L6.5,25 C6.74545989,25 6.94960837,24.8231248 6.99194433,24.5898756 L7,24.5 L7,21.4999727 C7,21.2238303 6.77614237,20.9999727 6.5,20.9999727 L4,20.999 L4,18 L6.5,18 C6.74545989,18 6.94960837,17.8231248 6.99194433,17.5898756 L7,17.5 L7,14.4999727 C7,14.2238303 6.77614237,13.9999727 6.5,13.9999727 L4,13.999 L4,11 L6.5,11 C6.74545989,11 6.94960837,10.8231248 6.99194433,10.5898756 L7,10.5 L7,7.49997271 C7,7.22383034 6.77614237,6.99997271 6.5,6.99997271 L4,6.999 L4,3 C4,2.44771525 4.44771525,2 5,2 L23,2 Z M5.5,22 C5.77614237,22 6,22.2238576 6,22.5 L6,23.5 C6,23.7761424 5.77614237,24 5.5,24 L2.50290548,24 C2.2267631,24 2.00290548,23.7761424 2.00290548,23.5 L2.00290548,22.5 C2.00290548,22.2238576 2.2267631,22 2.50290548,22 L5.5,22 Z M18.3621778,10.4426971 C18.0158767,10.2215384 17.5752344,10.3527951 17.375047,10.7339791 L15.5704846,14.1922048 C15.5137457,14.2998898 15.4811018,14.4195437 15.4675146,14.5422229 C15.4611868,14.422953 15.4312738,14.3024845 15.3743239,14.1922048 L13.5973735,10.7339791 C13.4017881,10.3533945 12.9668984,10.2221378 12.6263498,10.4426971 C12.2858012,10.6632564 12.1696004,11.1511239 12.3663363,11.5329072 L13.9131863,14.5422229 L12.2581891,14.5422229 C11.8249301,14.5592814 11.4821429,14.9301779 11.4821429,15.3819064 C11.4821429,15.833635 11.8249301,16.2045315 12.2581891,16.22159 L14.677695,16.22159 L14.677695,17.9015565 L12.2581891,17.9015565 C11.8249301,17.918615 11.4821429,18.2895115 11.4821429,18.7412401 C11.4821429,19.1929686 11.8249301,19.5638651 12.2581891,19.5809236 L14.677695,19.5809236 L14.677695,21.3447986 C14.677695,21.7619433 15.0383774,22.1005737 15.4847722,22.1005737 C15.9300165,22.1005737 16.2912741,21.7613439 16.2912741,21.3447986 L16.2912741,19.5809236 L18.71078,19.5809236 C19.1440389,19.5638651 19.4868262,19.1929686 19.4868262,18.7412401 C19.4868262,18.2895115 19.1440389,17.918615 18.71078,17.9015565 L16.2912741,17.9015565 L16.2912741,16.22159 L18.71078,16.22159 C19.1565995,16.22159 19.5178571,15.8446015 19.5178571,15.3819064 C19.5178571,14.9186121 19.1565995,14.5422229 18.71078,14.5422229 L17.0557827,14.5422229 L18.6256428,11.5329072 C18.8252549,11.1517232 18.7067532,10.6632564 18.3621778,10.4426971 Z M5.5,15 C5.77614237,15 6,15.2238576 6,15.5 L6,16.5 C6,16.7761424 5.77614237,17 5.5,17 L2.50290548,17 C2.2267631,17 2.00290548,16.7761424 2.00290548,16.5 L2.00290548,15.5 C2.00290548,15.2238576 2.2267631,15 2.50290548,15 L5.5,15 Z M5.5,8 C5.77614237,8 6,8.22385763 6,8.5 L6,9.5 C6,9.77614237 5.77614237,10 5.5,10 L2.50290548,10 C2.2267631,10 2.00290548,9.77614237 2.00290548,9.5 L2.00290548,8.5 C2.00290548,8.22385763 2.2267631,8 2.50290548,8 L5.5,8 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
CostAccountingOne.displayName = 'CostAccountingOne';
export default CostAccountingOne;