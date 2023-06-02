import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const OffDay = ({
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
          id="405.休息日"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M14.6117051,24.1717657 C15.2501975,24.1717657 15.7677979,24.6893662 15.7677979,25.3278586 C15.7677979,25.9663511 15.2501975,26.4839514 14.6117051,26.4839514 L4.31196893,26.4839514 C3.6734765,26.4839514 3.15587611,25.9663511 3.15587611,25.3278586 C3.15587611,24.6893662 3.6734765,24.1717657 4.31196893,24.1717657 L14.6117051,24.1717657 Z M17.6574502,8.90011819 C18.3539875,8.90011819 18.9186424,9.46477317 18.9186424,10.1613104 L18.9178827,10.8294368 L20.7419202,10.8301321 C22.4792603,10.8301321 23.8989955,12.189959 23.9948425,13.9033295 L24,14.0882118 L24,15.642956 C24,17.4423438 22.5413081,18.9010358 20.7419202,18.9010358 L20.7419202,18.9010358 L18.0189577,18.9004519 C16.8658098,20.8813035 14.7195506,22.2127919 12.2623056,22.2127919 L6.65633679,22.2127919 C2.9801435,22.2127919 0,19.2326484 0,15.5564551 L0,10.1613104 C0,9.46477317 0.564654975,8.90011819 1.26119218,8.90011819 L17.6574502,8.90011819 Z M20.7419202,13.1423177 L18.9178827,13.1416225 L18.9186424,15.5564551 C18.9186424,15.9074061 18.8914821,16.2520134 18.8391489,16.5882899 L20.7419202,16.5888502 C21.2643232,16.5888502 21.6878143,16.165359 21.6878143,15.642956 L21.6878143,15.642956 L21.6878143,14.0882118 C21.6878143,13.5658089 21.2643232,13.1423177 20.7419202,13.1423177 L20.7419202,13.1423177 Z M8.3211259,0.00934011068 C8.96550809,-0.0930005897 9.26539141,0.673306537 8.69442701,0.957364346 C7.76653944,1.41914549 7.0447863,1.99574792 7.0447863,2.67169571 C7.0447863,4.56674579 15.1140512,3.18817439 15.1140512,5.52653439 C15.1140512,6.61284334 13.5265331,7.23038205 11.8260647,7.58083658 C11.2443701,7.70065004 10.8659862,7.0341875 11.3279534,6.69970817 C11.6989955,6.43112623 11.9440979,6.12610108 11.9440979,5.79012406 C11.9440979,4.30144143 3.33775387,6.31901811 3.33775387,2.96673645 C3.33775387,1.21995559 5.88309135,0.397236278 8.3211259,0.00934011068 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
OffDay.displayName = 'OffDay';
export default OffDay;