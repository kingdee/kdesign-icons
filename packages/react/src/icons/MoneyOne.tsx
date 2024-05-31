import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const MoneyOne = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        version="1.1"
        width={size}
        height={size}
      >
        <path
          d="M777.777778 0C900.507722 0 1000 99.492278 1000 222.222222L1000 777.777778C1000 900.507722 900.507722 1000 777.777778 1000L222.222222 1000C99.492278 1000 0 900.507722 0 777.777778L0 222.222222C0 99.492278 99.492278 0 222.222222 0L777.777778 0zM684.228628 213.237767C671.596028 195.867944 647.274256 192.027664 629.904433 204.660263L500 299.111111L370.095566 204.660263C352.725742 192.027664 328.403973 195.867944 315.771374 213.237767C303.138776 230.607591 306.979055 254.92936 324.348878 267.561959L437.666667 349.997257L347.222222 350C325.744482 350 308.333333 367.411149 308.333333 388.888889C308.333333 410.366629 325.744482 427.777778 347.222222 427.777778L461.111111 427.775034L461.111111 544.441701L319.444444 544.444444C297.966704 544.444444 280.555556 561.855594 280.555556 583.333333C280.555556 604.811072 297.966704 622.222222 319.444444 622.222222L461.111111 622.219478L461.111111 777.777778C461.111111 799.255517 478.52226 816.666667 500 816.666667C521.47774 816.666667 538.888889 799.255517 538.888889 777.777778L538.888889 622.219478L680.555556 622.222222C702.033294 622.222222 719.444444 604.811072 719.444444 583.333333C719.444444 561.855594 702.033294 544.444444 680.555556 544.444444L538.888889 544.441701L538.888889 427.775034L652.777778 427.777778C674.255517 427.777778 691.666667 410.366629 691.666667 388.888889C691.666667 367.411149 674.255517 350 652.777778 350L562.277778 349.997257L675.651122 267.561959C693.020944 254.92936 696.861222 230.607591 684.228628 213.237767z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
MoneyOne.displayName = 'MoneyOne';
export default MoneyOne;