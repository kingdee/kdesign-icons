import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const FillTheStyleScheme = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        version="1.1"
        width={size}
        height={size}
      >
        <path
          d="M912.500625 687.5C929.76 687.5 943.750625 701.490625 943.750625 718.75L943.750625 906.25C943.750625 923.509375 929.76 937.5 912.500625 937.5L100.000625 937.5C82.741875 937.5 68.750625 923.509375 68.750625 906.25L68.750625 718.75C68.750625 701.490625 82.741875 687.5 100.000625 687.5L912.500625 687.5zM881.250625 750L131.250625 750L131.250625 875L881.250625 875L881.250625 750zM443.750625 62.5C461.01 62.5 475.000625 76.49125 475.000625 93.75L475.000625 593.75C475.000625 611.009375 461.01 625 443.750625 625L100.000625 625C82.741875 625 68.750625 611.009375 68.750625 593.75L68.750625 93.75C68.750625 76.49125 82.741875 62.5 100.000625 62.5L443.750625 62.5zM912.500625 375C929.76 375 943.750625 388.990625 943.750625 406.25L943.750625 593.75C943.750625 611.009375 929.76 625 912.500625 625L568.750625 625C551.49125 625 537.500625 611.009375 537.500625 593.75L537.500625 406.25C537.500625 388.990625 551.49125 375 568.750625 375L912.500625 375zM412.500625 125L131.250625 125L131.250625 562.5L412.500625 562.5L412.500625 125zM881.250625 437.5L600.000625 437.5L600.000625 562.5L881.250625 562.5L881.250625 437.5zM912.500625 62.5C929.76 62.5 943.750625 76.49125 943.750625 93.75L943.750625 281.25C943.750625 298.50875 929.76 312.5 912.500625 312.5L568.750625 312.5C551.49125 312.5 537.500625 298.50875 537.500625 281.25L537.500625 93.75C537.500625 76.49125 551.49125 62.5 568.750625 62.5L912.500625 62.5zM881.250625 125L600.000625 125L600.000625 250L881.250625 250L881.250625 125z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
FillTheStyleScheme.displayName = 'FillTheStyleScheme';
export default FillTheStyleScheme;