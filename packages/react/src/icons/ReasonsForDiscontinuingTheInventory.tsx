import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ReasonsForDiscontinuingTheInventory = ({
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
          id="1972.终止盘点原因"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M25.5,19 C28.5375661,19 31,21.4624339 31,24.5 C31,27.5375661 28.5375661,30 25.5,30 C22.4624339,30 20,27.5375661 20,24.5 C20,21.4624339 22.4624339,19 25.5,19 Z M9,4 L9,5 C9,6.0543618 9.81587779,6.91816512 10.8507377,6.99451426 L11,7 L21,7 C22.1045695,7 23,6.1045695 23,5 L23,4 L26,4 C26.5522847,4 27,4.44771525 27,5 L27.000839,18.1741301 C26.519064,18.0602586 26.0165691,18 25.5,18 C21.9101491,18 19,20.9101491 19,24.5 C19,26.2469007 19.6891263,27.8328473 20.8103588,29.0008195 L6,29 C5.44771525,29 5,28.5522847 5,28 L5,5 C5,4.44771525 5.44771525,4 6,4 L9,4 Z M26.7963624,21.9072751 L25.5,23.2036376 L24.2036376,21.9072751 C23.845657,21.5492945 23.2652557,21.5492945 22.9072751,21.9072751 C22.5492945,22.2652557 22.5492945,22.845657 22.9072751,23.2036376 L24.2038733,24.4997643 L22.9072751,25.7963624 C22.5492945,26.154343 22.5492945,26.7347443 22.9072751,27.0927249 C23.2652557,27.4507055 23.845657,27.4507055 24.2036376,27.0927249 L25.5,25.795891 L26.7963624,27.0927249 C27.154343,27.4507055 27.7347443,27.4507055 28.0927249,27.0927249 C28.4507055,26.7347443 28.4507055,26.154343 28.0927249,25.7963624 L26.7961267,24.4997643 L28.0927249,23.2036376 C28.4507055,22.845657 28.4507055,22.2652557 28.0927249,21.9072751 C27.7347443,21.5492945 27.154343,21.5492945 26.7963624,21.9072751 Z M12,18 L10,18 C9.44771525,18 9,18.4477153 9,19 L9,21 C9,21.5522847 9.44771525,22 10,22 L12,22 C12.5522847,22 13,21.5522847 13,21 L13,19 C13,18.4477153 12.5522847,18 12,18 Z M21,14 L10,14 C9.44771525,14 9,14.4477153 9,15 C9,15.5522847 9.44771525,16 10,16 L21,16 C21.5522847,16 22,15.5522847 22,15 C22,14.4477153 21.5522847,14 21,14 Z M21.0370845,10 L9.96291554,10 C9.43111197,10 9,10.431112 9,10.9629155 C9,11.4947191 9.43111197,11.9258311 9.96291554,11.9258311 L21.0370845,11.9258311 C21.568888,11.9258311 22,11.4947191 22,10.9629155 C22,10.431112 21.568888,10 21.0370845,10 Z M22,3 L22,5 C22,5.55228475 21.5522847,6 21,6 L11,6 C10.4477153,6 10,5.55228475 10,5 L10,3 L22,3 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
ReasonsForDiscontinuingTheInventory.displayName =
  'ReasonsForDiscontinuingTheInventory';
export default ReasonsForDiscontinuingTheInventory;