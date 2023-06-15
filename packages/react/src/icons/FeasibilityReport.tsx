import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const FeasibilityReport = ({
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
          id="725.可研申报"
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
              d="M17.5714286,11.1429039 C21.1218305,11.1429039 24,14.0210734 24,17.5714753 C24,21.1218773 21.1218305,24.0000468 17.5714286,24.0000468 C14.0210266,24.0000468 11.1428571,21.1218773 11.1428571,17.5714753 C11.1428571,14.0210734 14.0210266,11.1429039 17.5714286,11.1429039 Z M17.1428571,13.7143325 L14.4459029,16.4112867 C14.3655301,16.4916595 14.3203772,16.6006683 14.3203772,16.7143325 C14.3203772,16.951026 14.5122552,17.1429039 14.7489487,17.1429039 L14.7489487,17.1429039 L16.2857143,17.1429039 L16.2857143,21.4286182 L18,21.4286182 L18,17.1429039 L19.5367656,17.1429039 C19.6504298,17.1429039 19.7594386,17.097751 19.8398114,17.0173782 C20.007179,16.8500106 20.007179,16.5786543 19.8398114,16.4112867 L19.8398114,16.4112867 L17.1428571,13.7143325 Z M18.8571429,0 C19.3305299,0 19.7142857,0.383755915 19.7142857,0.857142857 L19.7156137,10.6063963 C19.0377214,10.3979553 18.3176772,10.285761 17.5714286,10.285761 C13.5476397,10.285761 10.2857143,13.5476864 10.2857143,17.5714753 C10.2857143,19.3697693 10.9372302,21.0158936 12.0170964,22.2866825 L0.857142857,22.285761 C0.383755943,22.285761 0,21.9020052 0,21.4286182 L0,0.857142857 C0,0.383755915 0.383755943,0 0.857142857,0 L18.8571429,0 Z M9.42859464,12.857213 L5.99997681,12.857213 C5.52660268,12.857213 5.14285714,13.2409586 5.14285714,13.7143326 C5.14285714,14.1877068 5.52660268,14.5714523 5.99997681,14.5714523 L5.99997681,14.5714523 L9.42859464,14.5714523 C9.90196875,14.5714523 10.2857143,14.1877068 10.2857143,13.7143326 C10.2857143,13.2409586 9.90196875,12.857213 9.42859464,12.857213 L9.42859464,12.857213 Z M12.8571661,8.57149872 L5.99997681,8.57149872 C5.52660268,8.57149872 5.14285714,8.95524428 5.14285714,9.42861839 C5.14285714,9.90199249 5.52660268,10.285738 5.99997681,10.285738 L5.99997681,10.285738 L12.8571661,10.285738 C13.3305402,10.285738 13.7142857,9.90199249 13.7142857,9.42861839 C13.7142857,8.95524428 13.3305402,8.57149872 12.8571661,8.57149872 L12.8571661,8.57149872 Z M14.5714753,4.28578443 L5.99995324,4.28578443 C5.52659213,4.28578443 5.14285714,4.66951942 5.14285714,5.14288052 C5.14285714,5.61624163 5.52659213,5.99997662 5.99995324,5.99997662 L5.99995324,5.99997662 L14.5714753,5.99997662 C15.0448365,5.99997662 15.4285714,5.61624163 15.4285714,5.14288052 C15.4285714,4.66951942 15.0448365,4.28578443 14.5714753,4.28578443 L14.5714753,4.28578443 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
FeasibilityReport.displayName = 'FeasibilityReport';
export default FeasibilityReport;
