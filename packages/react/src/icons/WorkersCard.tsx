import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const WorkersCard = ({
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
          id="278.工卡"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="工卡" transform="translate(4.000000, 4.000000)">
            <rect id="矩形" x="0" y="0" width="24" height="24"></rect>
            <path
              d="M21.8181818,3.27272727 C22.4206742,3.27272727 22.9090909,3.76114391 22.9090909,4.36363636 L22.9090909,20.7272727 C22.9090909,21.3297651 22.4206742,21.8181818 21.8181818,21.8181818 L2.18181818,21.8181818 C1.57932573,21.8181818 1.09090909,21.3297651 1.09090909,20.7272727 L1.09090909,4.36363636 C1.09090909,3.76114391 1.57932573,3.27272727 2.18181818,3.27272727 L21.8181818,3.27272727 Z M9.81818182,7.63636364 L5.45454545,7.63636364 C4.89508817,7.63636364 4.43399219,8.05749839 4.37097571,8.60004968 L4.36363636,8.72727273 L4.36363636,16.3636364 C4.36363636,16.9230936 4.78477112,17.3841897 5.3273224,17.4472061 L5.45454545,17.4545455 L9.81818182,17.4545455 L9.81818182,17.4545455 C10.3776391,17.4545455 10.8387351,17.0334107 10.9017516,16.4908594 L10.9090909,16.3636364 L10.9090909,8.72727273 C10.9090909,8.12478027 10.4206743,7.63636364 9.81818182,7.63636364 Z M19.0909091,16.3636364 L14.7272727,16.3636364 C14.4260265,16.3636364 14.1818182,16.6078447 14.1818182,16.9090909 C14.1818182,17.1768653 14.3747729,17.3995728 14.6292266,17.4457574 L14.7272727,17.4545455 L19.0909091,17.4545455 C19.3921553,17.4545455 19.6363636,17.2103372 19.6363636,16.9090909 C19.6363636,16.6078447 19.3921553,16.3636364 19.0909091,16.3636364 Z M9.81818182,8.72727273 L9.81818182,16.3636364 L5.45454545,16.3636364 L5.45454545,8.72727273 L9.81818182,8.72727273 Z M19.0909091,12 L14.7272727,12 C14.4260265,12 14.1818182,12.2442083 14.1818182,12.5454545 C14.1818182,12.813229 14.3747729,13.0359364 14.6292266,13.0821211 L14.7272727,13.0909091 L19.0909091,13.0909091 C19.3921553,13.0909091 19.6363636,12.8467008 19.6363636,12.5454545 C19.6363636,12.2442083 19.3921553,12 19.0909091,12 Z M19.0909091,7.63636364 L14.7272727,7.63636364 C14.4260265,7.63636364 14.1818182,7.88057196 14.1818182,8.18181818 C14.1818182,8.44959261 14.3747729,8.67230004 14.6292266,8.71848472 L14.7272727,8.72727273 L19.0909091,8.72727273 C19.3921553,8.72727273 19.6363636,8.4830644 19.6363636,8.18181818 C19.6363636,7.88057196 19.3921553,7.63636364 19.0909091,7.63636364 Z"
              id="形状结合"
              fill={color}
              fillRule="nonzero"
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
WorkersCard.displayName = 'WorkersCard';
export default WorkersCard;
