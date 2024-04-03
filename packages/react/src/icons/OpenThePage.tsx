import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const OpenThePage = ({
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
          d="M903.125 125C922.109788 125 937.5 140.390212 937.5 159.375L937.5 840.625C937.5 859.609788 922.109788 875 903.125 875L96.875 875C77.890212 875 62.5 859.609788 62.5 840.625L62.5 159.375C62.5 140.390212 77.890212 125 96.875 125L903.125 125zM875 375L125 375L125 812.5L875 812.5L875 375zM562.5 625C579.758897 625 593.75 638.9911 593.75 656.25C593.75 673.5089 579.758897 687.5 562.5 687.5L312.5 687.5C295.241102 687.5 281.25 673.5089 281.25 656.25C281.25 638.9911 295.241102 625 312.5 625L562.5 625zM687.5 468.75C704.7589 468.75 718.75 482.741103 718.75 500C718.75 517.258897 704.7589 531.25 687.5 531.25L312.5 531.25C295.241102 531.25 281.25 517.258897 281.25 500C281.25 482.741103 295.241102 468.75 312.5 468.75L687.5 468.75zM875 187.5L125 187.5L125 312.5L875 312.5L875 187.5zM218.75 218.75C236.008898 218.75 250 232.741102 250 250C250 267.258898 236.008898 281.25 218.75 281.25C201.491102 281.25 187.5 267.258898 187.5 250C187.5 232.741102 201.491102 218.75 218.75 218.75zM312.5 218.75C329.758897 218.75 343.75 232.741102 343.75 250C343.75 267.258898 329.758897 281.25 312.5 281.25C295.241102 281.25 281.25 267.258898 281.25 250C281.25 232.741102 295.241102 218.75 312.5 218.75zM406.25 218.75C423.508897 218.75 437.5 232.741102 437.5 250C437.5 267.258898 423.508897 281.25 406.25 281.25C388.991103 281.25 375 267.258898 375 250C375 232.741102 388.991103 218.75 406.25 218.75z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
OpenThePage.displayName = 'OpenThePage';
export default OpenThePage;
