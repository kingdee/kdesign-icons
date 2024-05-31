import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const NewPageEntry = ({
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
          d="M903.125 125C922.109788 125 937.5 140.390212 937.5 159.375L937.5 500C937.5 517.258898 923.5089 531.25 906.25 531.25L900.632775 530.746521C886.0547 528.100523 875 515.341243 875 500L875 375L125 375L125 812.5L468.75 812.5C486.008898 812.5 500 826.4911 500 843.75C500 861.0089 486.008898 875 468.75 875L96.875 875C77.890212 875 62.5 859.609788 62.5 840.625L62.5 159.375C62.5 140.390212 77.890212 125 96.875 125L903.125 125zM736.607144 468.75C753.866044 468.75 767.857144 481.741737 767.857144 497.767857L767.8125 642.8125L908.482144 642.857144C924.508263 642.857144 937.5 656.848244 937.5 674.107144C937.5 691.366044 924.508263 705.357144 908.482144 705.357144L767.8125 705.3125L767.857144 845.982144C767.857144 862.008263 753.866044 875 736.607144 875C719.348244 875 705.357144 862.008263 705.357144 845.982144L705.3125 705.3125L560.267857 705.357144C544.241737 705.357144 531.25 691.366044 531.25 674.107144C531.25 656.848244 544.241737 642.857144 560.267857 642.857144L705.3125 642.8125L705.357144 497.767857C705.357144 481.741737 719.348244 468.75 736.607144 468.75zM875 187.5L125 187.5L125 312.5L875 312.5L875 187.5zM218.75 218.75C236.008898 218.75 250 232.741102 250 250C250 265.341243 238.945302 278.100523 224.367227 280.746521L218.75 281.25C201.491102 281.25 187.5 267.258898 187.5 250C187.5 232.741102 201.491102 218.75 218.75 218.75zM312.5 218.75C329.758897 218.75 343.75 232.741102 343.75 250C343.75 265.341243 332.695301 278.100523 318.117227 280.746521L312.5 281.25C295.241102 281.25 281.25 267.258898 281.25 250C281.25 232.741102 295.241102 218.75 312.5 218.75zM406.25 218.75C423.508897 218.75 437.5 232.741102 437.5 250C437.5 265.341243 426.445301 278.100523 411.867227 280.746521L406.25 281.25C388.991103 281.25 375 267.258898 375 250C375 232.741102 388.991103 218.75 406.25 218.75z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
NewPageEntry.displayName = 'NewPageEntry';
export default NewPageEntry;