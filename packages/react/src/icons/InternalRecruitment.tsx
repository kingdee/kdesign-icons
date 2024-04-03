import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const InternalRecruitment = ({
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
          id="1901内部招聘"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M19.9703813,2.6759946 C20.001292,2.77362597 20.0170225,2.87542614 20.0170225,2.97783394 L20.0170225,30 L4,30 C3.44771525,30 3,29.5522847 3,29 L3,7.73231679 C3,7.29631093 3.28249064,6.9105617 3.69816066,6.77895799 L18.7151831,2.02447513 C19.2417087,1.85777387 19.80368,2.14946907 19.9703813,2.6759946 Z M9,21 L7,21 C6.44771525,21 6,21.4477153 6,22 L6,24 C6,24.5522847 6.44771525,25 7,25 L9,25 C9.55228475,25 10,24.5522847 10,24 L10,22 C10,21.4477153 9.55228475,21 9,21 Z M16,21 L14,21 C13.4477153,21 13,21.4477153 13,22 L13,24 C13,24.5522847 13.4477153,25 14,25 L16,25 C16.5522847,25 17,24.5522847 17,24 L17,22 C17,21.4477153 16.5522847,21 16,21 Z M9,14 L7,14 C6.44771525,14 6,14.4477153 6,15 L6,17 C6,17.5522847 6.44771525,18 7,18 L9,18 C9.55228475,18 10,17.5522847 10,17 L10,15 C10,14.4477153 9.55228475,14 9,14 Z M16,14 L14,14 C13.4477153,14 13,14.4477153 13,15 L13,17 C13,17.5522847 13.4477153,18 14,18 L16,18 C16.5522847,18 17,17.5522847 17,17 L17,15 C17,14.4477153 16.5522847,14 16,14 Z M22.3511234,12.5066713 L28.3511234,14.7566713 C28.7414272,14.9030352 29,15.2761559 29,15.6930005 L29,29 C29,29.5522847 28.5522847,30 28,30 L21,30 L21,13.4430005 C21,12.8907157 21.4477153,12.4430005 22,12.4430005 C22.119912,12.4430005 22.2388464,12.4645674 22.3511234,12.5066713 Z"
            id="形状"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
InternalRecruitment.displayName = 'InternalRecruitment';
export default InternalRecruitment;
