import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ApplicationFormForChange = ({
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
          d="M218.75 193.75L218.75 281.25L781.25 281.25L781.25 193.75L828.125 193.75C854.013347 193.75 875 213.337542 875 237.5L875 893.75C875 917.912456 854.013347 937.5 828.125 937.5L171.875 937.5C145.986653 937.5 125 917.912456 125 893.75L125 237.5C125 213.337542 145.986653 193.75 171.875 193.75L218.75 193.75zM568.214641 367.3837C544.058775 360.776163 519.921875 378.519063 519.921875 402.109375C519.921875 417.743116 530.602469 431.745553 546.456253 436.097572C616.533666 455.462463 666.40625 517.649706 666.40625 587.5L666.084738 597.042081C663.957931 628.724506 651.338556 659.021653 629.977906 683.727316L625.859375 688.125L551.273972 688.125L516.827694 816.724431L530.603634 814.914581C650.507175 799.161944 743.75 700.932156 743.75 587.5C743.75 485.476716 671.174447 395.681147 568.214641 367.3837zM483.172306 358.275569L469.396366 360.085419C349.503063 375.836713 256.25 474.085894 256.25 587.5C256.25 689.523284 328.825553 779.318853 431.785359 807.6163C455.941225 814.223838 480.078125 796.480938 480.078125 772.890625C480.293541 757.472909 469.598938 743.637425 453.739141 738.930888C383.469541 719.537288 333.59375 657.353613 333.59375 587.5L333.915263 577.957919C336.042069 546.275494 348.661444 515.978347 370.022094 491.272684L374.046875 486.875L448.726028 486.875L483.172306 358.275569zM500 62.5C538.832522 62.5 570.3125 91.881313 570.3125 128.125L570.3125 150L687.5 150C713.388347 150 734.375 169.587542 734.375 193.75L734.375 237.5L265.625 237.5L265.625 193.75C265.625 169.587542 286.611653 150 312.5 150L429.6875 150L429.6875 128.125C429.6875 91.881313 461.167478 62.5 500 62.5z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
ApplicationFormForChange.displayName = 'ApplicationFormForChange';
export default ApplicationFormForChange;