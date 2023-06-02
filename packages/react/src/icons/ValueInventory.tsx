import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ValueInventory = ({
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
          id="267.货值盘点"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="货值盘点"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M17.5291878,12.1434851 C20.6160675,12.1434851 23.1184781,14.6683651 23.1184781,17.7829626 C23.1184781,19.1370333 22.6455039,20.3796431 21.8571546,21.3517779 L23.820201,23.0552024 C24.0354435,23.2419782 24.0610588,23.5708537 23.8774144,23.7897664 C23.8682095,23.800739 23.8585607,23.8113181 23.8484928,23.8214764 C23.6250943,24.0468808 23.2691136,24.060514 23.0296805,23.8528348 L21.0662432,22.1497909 C20.1027598,22.945219 18.8712083,23.4224402 17.5291878,23.4224402 C14.4423081,23.4224402 11.9398976,20.89756 11.9398976,17.7829626 C11.9398976,14.6683651 14.4423081,12.1434851 17.5291878,12.1434851 Z M22.9613415,6.53879965 L22.9607529,13.6871924 C21.7111812,11.9114304 19.6661273,10.7541726 17.3553128,10.7541726 C13.5509532,10.7541726 10.4669104,13.8908015 10.4669104,17.7600293 C10.4669104,20.0452165 11.5426702,22.0748622 13.2072342,23.3537078 L1.83690732,23.3528559 C1.32965938,23.3528559 0.918453661,22.9346387 0.918453661,22.4187417 L0.918453661,6.53879965 L22.9613415,6.53879965 Z M18.7979983,14.7078947 L18.7464444,14.7826304 L17.5089139,16.9791629 C17.4700035,17.0475602 17.4476171,17.1235599 17.4382993,17.201481 C17.4354063,17.1509771 17.4253248,17.100135 17.4073533,17.0510976 L17.3743911,16.9791629 L16.1557963,14.7826304 C16.021668,14.5408977 15.7234299,14.4575285 15.4898889,14.5976193 C15.2822969,14.7221444 15.1962677,14.9808199 15.2744697,15.2070774 L15.3115772,15.2900789 L16.372374,17.201481 L15.2374121,17.201481 C14.9402923,17.2123159 14.7052161,17.4478951 14.7052161,17.7348157 C14.7052161,17.9930443 14.8956279,18.2096864 15.1503105,18.2583312 L15.2374121,18.2681506 L16.8966577,18.2681506 L16.8966577,19.3352009 L15.2374121,19.3352009 C14.9402923,19.3460357 14.7052161,19.581615 14.7052161,19.8685357 C14.7052161,20.1267643 14.8956279,20.3434063 15.1503105,20.3920511 L15.2374121,20.4018705 L16.8966577,20.4018705 L16.8966577,21.5222163 C16.8966577,21.7871706 17.1440061,22.0022557 17.4501341,22.0022557 C17.7249394,22.0022557 17.9530915,21.8277284 17.9959739,21.5999488 L18.003216,21.5222163 L18.003216,20.4018705 L19.6624617,20.4018705 C19.9595815,20.3910356 20.1946577,20.1554564 20.1946577,19.8685357 C20.1946577,19.6103071 20.004246,19.393665 19.7495633,19.3450203 L19.6624617,19.3352009 L18.003216,19.3352009 L18.003216,18.2681506 L19.6624617,18.2681506 C19.9681953,18.2681506 20.2159381,18.0287019 20.2159381,17.7348157 C20.2159381,17.4699757 20.0152664,17.2498465 19.7522523,17.2084691 L19.6624617,17.201481 L18.5274998,17.201481 L19.6040765,15.2900789 C19.7409662,15.0479655 19.6597002,14.7377101 19.4233978,14.5976193 C19.2122991,14.4727557 18.9500818,14.524754 18.7979983,14.7078947 Z M22.9613415,0 C23.4685894,0 23.8797952,0.418217202 23.8797952,0.934114236 L23.8797952,4.67057118 L0,4.67057118 L0,0.934114236 C0,0.418217202 0.411205723,0 0.918453661,0 L22.9613415,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ValueInventory.displayName = 'ValueInventory';
export default ValueInventory;