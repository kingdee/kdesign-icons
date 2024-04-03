import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ItemFormulaView = ({
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
          d="M875.000625 62.5C892.26 62.5 906.250625 76.49125 906.250625 93.75L906.250625 906.25C906.250625 923.509375 892.26 937.5 875.000625 937.5L125.000625 937.5C107.741875 937.5 93.750625 923.509375 93.750625 906.25L93.750625 93.75C93.750625 76.49125 107.741875 62.5 125.000625 62.5L875.000625 62.5zM843.750625 125L156.250625 125L156.250625 875L843.750625 875L843.750625 125zM750.000625 531.25C767.26 531.25 781.250625 545.240625 781.250625 562.5C781.250625 579.759375 767.26 593.75 750.000625 593.75L687.500625 593.75L687.500625 781.25C687.500625 798.509375 673.51 812.5 656.250625 812.5C638.99125 812.5 625.000625 798.509375 625.000625 781.25L625.000625 593.75L562.500625 593.75C545.24125 593.75 531.250625 579.759375 531.250625 562.5C531.250625 545.240625 545.24125 531.25 562.500625 531.25L750.000625 531.25zM437.500625 437.5C454.76 437.5 468.750625 451.490625 468.750625 468.75C468.750625 486.009375 454.76 500 437.500625 500L250.000625 500C232.741875 500 218.750625 486.009375 218.750625 468.75C218.750625 451.490625 232.741875 437.5 250.000625 437.5L437.500625 437.5zM750.000625 250C767.26 250 781.250625 263.99125 781.250625 281.25C781.250625 298.50875 767.26 312.5 750.000625 312.5L250.000625 312.5C232.741875 312.5 218.750625 298.50875 218.750625 281.25C218.750625 263.99125 232.741875 250 250.000625 250L750.000625 250z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
ItemFormulaView.displayName = 'ItemFormulaView';
export default ItemFormulaView;
