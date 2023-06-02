import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ValueManage = ({
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
          id="269.资金管控策略"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="资金管控策略"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M18.2307376,0 C18.8116452,0 19.2825637,0.477556398 19.2825637,1.06665205 L19.2822,11.3758441 L16.1365885,9.9129634 C15.9821604,9.84121854 15.8065718,9.84121854 15.6521437,9.9129634 L10.2059197,12.444506 C9.98585465,12.5468967 9.84364448,12.7780179 9.84364448,13.0333564 L9.84364448,18.8678615 C9.84364448,20.9178266 11.0336925,22.6923935 13.0807608,24 L1.05182609,23.999572 C0.470918596,23.999572 0,23.5220155 0,22.9329199 L0,1.06665205 C0,0.477556398 0.470918596,0 1.05182609,0 L18.2307376,0 Z M7.91958779,9.42840327 L3.47465441,9.42840327 C3.00785566,9.42840327 2.62944052,9.81215236 2.62944052,10.2855344 C2.62944052,10.7063117 2.9284352,11.0562743 3.32272615,11.128849 L3.47465441,11.1426655 L7.91958779,11.1426655 C8.38638654,11.1426655 8.76480168,10.7589093 8.76480168,10.2855344 C8.76480168,9.81215236 8.38638654,9.42840327 7.91958779,9.42840327 Z M15.8079094,5.14276542 L3.47465441,5.14276542 C3.00785566,5.14276542 2.62944052,5.52651451 2.62944052,5.99989653 C2.62944052,6.42067387 2.9284352,6.77063647 3.32272615,6.84321107 L3.47465441,6.85702764 L15.8079094,6.85702764 C16.274708,6.85702764 16.6531231,6.47327147 16.6531231,5.99989653 C16.6531231,5.52651451 16.274708,5.14276542 15.8079094,5.14276542 Z M15.760416,11.1875449 L11.221896,13.2971638 C11.0385085,13.3824894 10.92,13.5750903 10.92,13.7878725 L10.92,18.64996 C10.92,20.9931476 12.785808,22.9045545 15.80124,23.9722209 C15.9046242,24.0088211 16.0163838,24.0088211 16.119768,23.9722209 C19.14024,22.9024116 21,20.9990404 21,18.6515671 L21,13.7878725 C21,13.5750903 20.8814915,13.3824894 20.698104,13.2971638 L16.16412,11.1875449 C16.0354299,11.1277576 15.8891061,11.1277576 15.760416,11.1875449 Z M18.4696443,19.0882418 C18.4696443,19.3515165 18.2546482,19.5676809 17.9829082,19.5776229 L16.4653941,19.5776229 L16.4653941,20.6056376 C16.4653941,20.848407 16.2388133,21.0461156 15.959556,21.0461156 C15.6795772,21.0461156 15.4533572,20.8487563 15.4533572,20.6056376 L15.4533572,19.5776229 L13.9358432,19.5776229 C13.6641031,19.5676809 13.4491069,19.3515165 13.4491069,19.0882418 C13.4491069,18.8249671 13.6641031,18.6088026 13.9358432,18.5988607 L15.4533572,18.5988607 L15.4533572,17.6197492 L13.9358432,17.6197492 C13.6641031,17.6098072 13.4491069,17.3936427 13.4491069,17.130368 C13.4491069,16.8670933 13.6641031,16.6509289 13.9358432,16.640987 L14.9738574,16.640987 L14.0036731,14.8871092 C13.8802804,14.6645998 13.9531615,14.3802628 14.1667536,14.2517173 C14.3803456,14.1231718 14.6531084,14.1996703 14.7757796,14.4214811 L15.8902829,16.4369908 C15.9260019,16.5012635 15.9447633,16.5714746 15.9487321,16.640987 C15.957254,16.5694876 15.9777282,16.4997513 16.0133149,16.4369908 L17.1451364,14.4214811 C17.270694,14.1993209 17.5470648,14.1228224 17.7642649,14.2517173 C17.9803825,14.3802628 18.0547068,14.6649491 17.9295101,14.8871092 L16.9448939,16.640987 L17.9829082,16.640987 C18.2625262,16.640987 18.4891069,16.8603526 18.4891069,17.130368 C18.4891069,17.4000342 18.2625262,17.6197492 17.9829082,17.6197492 L16.4653941,17.6197492 L16.4653941,18.5988607 L17.9829082,18.5988607 C18.2546482,18.6088026 18.4696443,18.8249671 18.4696443,19.0882418 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ValueManage.displayName = 'ValueManage';
export default ValueManage;