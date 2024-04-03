import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PunchInEquipment = ({
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
          id="1945打卡设备"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组-10"
            transform="translate(2.000000, 4.000000)"
            fill="#999999"
            fillRule="nonzero"
          >
            <path
              d="M24,0 C25.1045695,0 26,0.8954305 26,2 L26,8 L19,8 C18.4871642,8 18.0644928,8.38604019 18.0067277,8.88337887 L18,9 L18,18 L15,18 L15,21 L16.4698903,21 C16.8391113,21 17.1782904,21.203449 17.352124,21.5291882 L17.8857829,22.5291882 C17.9545532,22.6580539 17.9922507,22.7952111 18.001487,22.9320702 L18.0008263,23.075443 C17.9755801,23.4050301 17.7875894,23.7150766 17.474361,23.8822337 C17.3294748,23.9595535 17.1677758,24 17.0035492,24 L8.99636873,24 C8.44408398,24 7.99636873,23.5522847 7.99636873,23 C7.99636873,22.8357734 8.03681525,22.6740744 8.11413507,22.5291882 L8.64779392,21.5291882 C8.82162753,21.203449 9.16080657,21 9.53002758,21 L11,21 L11,18 L2,18 C0.8954305,18 0,17.1045695 0,16 L0,2 C0,0.8954305 0.8954305,0 2,0 L24,0 Z M27,9 C27.5522847,9 28,9.44771525 28,10 L28,23 C28,23.5522847 27.5522847,24 27,24 L20,24 C19.4477153,24 19,23.5522847 19,23 L19,10 C19,9.44771525 19.4477153,9 20,9 L27,9 Z M26.5,10 L20.5,10 C20.2238576,10 20,10.2238576 20,10.5 L20,20.5 C20,20.7761424 20.2238576,21 20.5,21 L26.5,21 C26.7761424,21 27,20.7761424 27,20.5 L27,10.5 C27,10.2238576 26.7761424,10 26.5,10 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PunchInEquipment.displayName = 'PunchInEquipment';
export default PunchInEquipment;
