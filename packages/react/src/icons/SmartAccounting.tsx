import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SmartAccounting = ({
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
          id="808.智能会计"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M14,28 C8.99828183,28 4.37650352,25.331615 1.87564437,21 C-0.625214789,16.6683848 -0.625214789,11.331615 1.87564437,7 C4.37650352,2.66838481 8.99828183,0 14,0 C21.7319865,0 28,6.26801346 28,14 C28,21.7319863 21.7319865,28 14,28 L14,28 Z M5.89473701,10.3157894 C4.26695039,10.3157894 2.94736861,11.6353712 2.94736861,13.2631578 C2.94736861,14.8909444 4.26695039,16.2105262 5.89473701,16.2105262 L22.1052632,16.2105262 C23.7330498,16.2105262 25.0526316,14.8909444 25.0526316,13.2631578 C25.0526316,11.6353712 23.7330498,10.3157894 22.1052632,10.3157894 L5.89473701,10.3157894 L5.89473701,10.3157894 Z M7.36842121,14.736842 C6.84192454,14.736842 6.35542154,14.4559594 6.0921732,13.9999999 C5.82892486,13.5440404 5.82892486,12.9822752 6.0921732,12.5263157 C6.35542154,12.0703562 6.84192454,11.7894736 7.36842121,11.7894736 C8.18231452,11.7894736 8.84210541,12.4492645 8.84210541,13.2631578 C8.84210541,14.0770511 8.18231452,14.736842 7.36842121,14.736842 L7.36842121,14.736842 Z M11.7894738,14.736842 C11.2629771,14.736842 10.7764741,14.4559594 10.5132258,13.9999999 C10.2499775,13.5440404 10.2499775,12.9822752 10.5132258,12.5263157 C10.7764741,12.0703562 11.2629771,11.7894736 11.7894738,11.7894736 C12.6033671,11.7894736 13.263158,12.4492645 13.263158,13.2631578 C13.263158,14.0770511 12.6033671,14.736842 11.7894738,14.736842 Z M16.2105264,14.736842 C15.6840297,14.736842 15.1975267,14.4559594 14.9342784,13.9999999 C14.6710301,13.5440404 14.6710301,12.9822752 14.9342784,12.5263157 C15.1975267,12.0703562 15.6840297,11.7894736 16.2105264,11.7894736 C17.0244197,11.7894736 17.6842106,12.4492645 17.6842106,13.2631578 C17.6842106,14.0770511 17.0244197,14.736842 16.2105264,14.736842 L16.2105264,14.736842 Z M20.631579,14.736842 C20.1050823,14.736842 19.6185793,14.4559594 19.355331,13.9999999 C19.0920827,13.5440404 19.0920827,12.9822752 19.355331,12.5263157 C19.6185793,12.0703562 20.1050823,11.7894736 20.631579,11.7894736 C21.4454723,11.7894736 22.1052632,12.4492645 22.1052632,13.2631578 C22.1052632,14.0770511 21.4454723,14.736842 20.631579,14.736842 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SmartAccounting.displayName = 'SmartAccounting';
export default SmartAccounting;
