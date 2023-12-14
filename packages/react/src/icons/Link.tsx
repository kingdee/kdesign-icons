import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Link = ({
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
          id="132.链接"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="链接"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M9.62141956,5.89489922 C9.28674763,6.22957121 8.74413711,6.22957121 8.40946515,5.89489922 C8.07479313,5.56022726 8.07479313,5.01761674 8.40946515,4.68294478 L10.8333741,2.25903587 C13.8454219,-0.753011958 18.7289162,-0.753011958 21.7409641,2.25903587 C24.753012,5.2710837 24.753012,10.1545781 21.7409641,13.1666259 L19.3170552,15.5905348 C18.9823832,15.9252068 18.4397727,15.9252068 18.1051008,15.5905348 C17.7704288,15.2558629 17.7704288,14.7132523 18.1051008,14.3785804 L20.5290097,11.9546715 C22.8717135,9.61196759 22.8717135,5.81369419 20.5290097,3.47099031 C18.1863058,1.12828646 14.3880324,1.12828646 12.0453284,3.47099031 L9.62141956,5.89489922 Z M14.3785804,18.1051008 C14.7132523,17.7704288 15.2558629,17.7704288 15.5905348,18.1051008 C15.9252068,18.4397727 15.9252068,18.9823832 15.5905348,19.3170552 L13.1666259,21.7409641 C10.1545781,24.753012 5.2710837,24.753012 2.25903587,21.7409641 C-0.753011958,18.7289162 -0.753011958,13.8454219 2.25903587,10.8333741 L4.68294478,8.40946515 C5.01761674,8.07479313 5.56022726,8.07479313 5.89489922,8.40946515 C6.22957121,8.74413711 6.22957121,9.28674763 5.89489922,9.62141956 L3.47099031,12.0453284 C1.12828646,14.3880324 1.12828646,18.1863058 3.47099031,20.5290097 C5.81369419,22.8717135 9.61196759,22.8717135 11.9546715,20.5290097 L14.3785804,18.1051008 Z M9.17752011,16.0346629 C8.84278498,16.3693981 8.30007213,16.3693981 7.96533703,16.0346629 C7.6306019,15.6999278 7.6306019,15.157215 7.96533703,14.8224799 L15.6796227,7.10819417 C16.0143578,6.77345907 16.5570707,6.77345907 16.8918058,7.10819417 C17.2265409,7.44292928 17.2265409,7.98564213 16.8918058,8.32037726 L9.17752011,16.0346629 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Link.displayName = 'Link';
export default Link;
