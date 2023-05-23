import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Doing = ({
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
          id="799.在办"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M25.1873466,3.40029179 C24.6835997,3.49096624 24.22519,3.72436898 23.8675296,4.0820293 L10.121955,17.8443955 C10.0782969,17.9266741 10.0564679,17.9535407 10.0480721,17.9888029 L8.43104448,23.9179043 C8.33696213,24.2675077 8.43539372,24.6407807 8.68963457,24.8985317 C8.94579678,25.1507249 9.31661928,25.2479059 9.66354531,25.1537635 L15.5473095,23.5468108 C15.6223958,23.5583332 15.6984789,23.5333879 15.7521666,23.4796445 L25.1873466,14.0377478 L25.1873466,25.1873466 C25.1873466,26.1142409 24.4334054,26.866524 23.4964361,26.866524 L1.69091053,26.866524 C1.24380837,26.868735 0.814204206,26.6929174 0.496950551,26.3778691 C0.179696896,26.0628207 0.000886859618,25.6344534 0,25.1873466 L0,1.67915644 C0,0.752262085 0.753941241,0 1.69091053,0 L23.4964361,0 C24.430047,0 25.1873466,0.747224616 25.1873466,1.67915644 L25.1873466,3.40029179 Z M5.03746932,6.71662576 L5.03746932,8.3957822 L15.112408,8.3957822 L15.112408,6.71662576 L5.03746932,6.71662576 Z M5.03746932,11.7540951 L5.03746932,13.4332515 L10.0749386,13.4332515 L10.0749386,11.7540951 L5.03746932,11.7540951 L5.03746932,11.7540951 Z M25.3703746,11.0891491 L22.9624643,8.64093904 L25.4106744,6.35056965 C25.6407188,6.11884607 26.0907328,6.15242919 26.3560395,6.41941507 L27.76821,7.83494395 C27.912933,7.97673161 27.9961528,8.16970508 27.9999336,8.37227401 C28.0022421,8.52374834 27.9442528,8.66992972 27.8387346,8.77862987 L25.3703746,11.0891491 L25.3703746,11.0891491 Z M12.0983221,19.1507792 L21.1372213,10.0749386 L23.5081902,12.4862073 L14.5263824,21.4226779 L10.4477114,23.0514596 L12.0983221,19.1507792 L12.0983221,19.1507792 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Doing.displayName = 'Doing';
export default Doing;
