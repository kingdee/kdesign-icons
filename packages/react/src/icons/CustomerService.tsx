import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CustomerService = ({
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
          id="757.客服"
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
              d="M16.947,23.5802024 C16.681,24.5042024 15.463,25.2000024 14,25.2000024 C12.3438,25.2000024 10.9998,24.3068024 10.9998,23.2036024 C10.9998,22.1018024 12.3438,21.2086024 14,21.2086024 C15.0682,21.2086024 16.0062,21.5796024 16.5382,22.1396024 C19.2065486,21.4578102 21.4891347,19.7326291 22.8732,17.3516024 C22.3128259,16.7954877 21.9982485,16.0382838 21.9996,15.2488024 L21.9996,12.1968024 C21.9996,11.1286024 22.5638,10.1934024 23.4108,9.67120239 C22.2501193,5.4312531 18.3959462,2.49217373 14,2.49480239 C9.60405383,2.49217373 5.74988069,5.4312531 4.5892,9.67120239 C5.46665644,10.210511 6.00102391,11.1668591 6.0004,12.1968024 L6.0004,15.2488024 C6.0004,16.8868024 4.6732,18.2140024 3.0352,18.2140024 L2.9652,18.2140024 C2.17878006,18.2140024 1.42456984,17.9015983 0.868486972,17.3455154 C0.312404103,16.7894325 0,16.0352223 0,15.2488024 L0,12.1968024 C0,10.8640024 0.8778,9.73700239 2.0874,9.36320239 C3.42035594,3.86616539 8.34366064,-0.00350928757 14,-3.97903932e-16 C19.6563394,-0.00350928757 24.5796441,3.86616539 25.9126,9.36320239 C27.1540423,9.74843055 28,10.896964 28,12.1968024 L28,15.2488024 C28,16.8868024 26.6728,18.2140024 25.0348,18.2140024 L24.9648,18.2140024 C24.6956067,18.2143606 24.427616,18.1780947 24.1682,18.1062024 C22.5880233,20.8213648 19.988082,22.7922393 16.947,23.5802024 Z"
              id="路径"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CustomerService.displayName = 'CustomerService';
export default CustomerService;
