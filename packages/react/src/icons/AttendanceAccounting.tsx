import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AttendanceAccounting = ({
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
          id="1938考勤核算"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组-5"
            transform="translate(2.000000, 2.000000)"
            fill="#999999"
            fillRule="nonzero"
          >
            <g
              id="使用期间变更单备份"
              transform="translate(0.000000, 0.000000)"
            >
              <g
                id="Group-Copy-3"
                transform="translate(14.000000, 14.000000) rotate(90.000000) translate(-14.000000, -14.000000) translate(0.000000, -0.000000)"
              >
                <g
                  id="Combined-Shape"
                  transform="translate(0.000000, -0.000000)"
                >
                  <path
                    d="M16,1 L16,8 C16,8.55228475 16.4477153,9 17,9 L25,8.999 L25,27 C25,27.5522847 24.5522847,28 24,28 L10,27.999 L10,1 L16,1 Z M9,1 L9,28 L3,28 C2.44771525,28 2,27.5522847 2,27 L2,22.999 L4,23 C4.51283584,23 4.93550716,22.6139598 4.99327227,22.1166211 L5,22 L5,21 C5,20.4477153 4.55228475,20 4,20 L2,19.999 L2,8.999 L4,9 C4.51283584,9 4.93550716,8.61395981 4.99327227,8.11662113 L5,8 L5,7 C5,6.44771525 4.55228475,6 4,6 L2,5.999 L2,2 C2,1.44771525 2.44771525,1 3,1 L9,1 Z M0,21 L4,21 L4,22 L0,22 L0,21 Z M0,7 L4,7 L4,8 L0,8 L0,7 Z M14,12 C13.4477153,12 13,12.4477153 13,13 L13,23 C13,23.5522847 13.4477153,24 14,24 C14.5522847,24 15,23.5522847 15,23 L15,13 C15,12.4477153 14.5522847,12 14,12 Z M19,12 C18.4477153,12 18,12.4477153 18,13 L18,23 C18,23.5522847 18.4477153,24 19,24 C19.5522847,24 20,23.5522847 20,23 L20,13 C20,12.4477153 19.5522847,12 19,12 Z M27.5,5.37347944e-14 C27.7761424,5.37347944e-14 28,0.223857625 28,0.5 L28,7.5 C28,7.77614237 27.7761424,8 27.5,8 L17.5,8 C17.2238576,8 17,7.77614237 17,7.5 L17,0.5 C17,0.223857625 17.2238576,5.37347944e-14 17.5,5.37347944e-14 L27.5,5.37347944e-14 Z M26.75,5 L25.25,5 C25.1119288,5 25,5.11192881 25,5.25 L25,6.75 C25,6.88807119 25.1119288,7 25.25,7 L26.75,7 C26.8880712,7 27,6.88807119 27,6.75 L27,5.25 C27,5.11192881 26.8880712,5 26.75,5 Z M22.75,5 L21.25,5 C21.1119288,5 21,5.11192881 21,5.25 L21,6.75 C21,6.88807119 21.1119288,7 21.25,7 L22.75,7 C22.8880712,7 23,6.88807119 23,6.75 L23,5.25 C23,5.11192881 22.8880712,5 22.75,5 Z M19.75,1 L18.25,1 C18.1119288,1 18,1.11192881 18,1.25 L18,6.75 C18,6.88807119 18.1119288,7 18.25,7 L19.75,7 C19.8880712,7 20,6.88807119 20,6.75 L20,1.25 C20,1.11192881 19.8880712,1 19.75,1 Z M26.75,1 L25.25,1 C25.1119288,1 25,1.11192881 25,1.25 L25,2.75 C25,2.88807119 25.1119288,3 25.25,3 L26.75,3 C26.8880712,3 27,2.88807119 27,2.75 L27,1.25 C27,1.11192881 26.8880712,1 26.75,1 Z M22.75,1 L21.25,1 C21.1119288,1 21,1.11192881 21,1.25 L21,2.75 C21,2.88807119 21.1119288,3 21.25,3 L22.75,3 C22.8880712,3 23,2.88807119 23,2.75 L23,1.25 C23,1.11192881 22.8880712,1 22.75,1 Z"
                    id="形状"
                    fill={fill}
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AttendanceAccounting.displayName = 'AttendanceAccounting';
export default AttendanceAccounting;
