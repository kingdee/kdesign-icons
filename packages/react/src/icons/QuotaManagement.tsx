import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const QuotaManagement = ({
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
          id="723.配额管理"
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
              d="M11.2358749,0 L11.2358749,4.47040253 C7.431902,4.88476717 4.47246344,8.0907656 4.47246344,11.9857932 C4.47246344,16.1602209 7.87439037,19.546172 12.0685143,19.546172 C13.7407603,19.546172 15.2858284,19.0092256 16.5399113,18.0983707 L16.8240752,17.8816101 L20,21.0449881 C17.8803379,22.8847672 15.1064589,24 12.0708933,24 C5.40501963,24 0,18.6203631 0,11.9857932 C0,5.63062352 4.96015227,0.426203627 11.2358749,0 Z M12,0 C20,0 24,6 24,12 C24,14.8916428 22.9170944,17.6055979 21.1111544,19.6918295 L20.8348857,20 L17.4436917,16.8183985 C18.5563083,15.514776 19.2218459,13.8632031 19.2218459,12.0638704 C19.2218459,8.24399307 16.2217875,5.08252437 12.3106304,4.53711157 L12,4.49952336 L12,0 Z M13.9224796,8 L14.6666667,8.5870868 L12.3720935,10.2778852 L12.2173016,10.4 L14.6666667,10.4 L14.6666667,11.2 L12.340744,11.2 L12.340744,12.8 L14.6666667,12.8 L14.6666667,13.6 L12.340744,13.6 L12.340744,16 L11.6190476,16 L11.6190476,13.6 L9.33333333,13.6 L9.33333333,12.8 L11.6190476,12.8 L11.6190476,11.2 L9.33333333,11.2 L9.33333333,10.4 L11.7826984,10.4 L11.6279065,10.2778852 L9.33333333,8.5870868 L10.0775204,8 L12,9.6 L13.9224796,8 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
QuotaManagement.displayName = 'QuotaManagement';
export default QuotaManagement;
