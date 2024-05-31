import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const GenerateComments = ({
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
          d="M507.8125 70.3125C749.437075 70.3125 945.3125 266.187922 945.3125 507.8125C945.3125 749.437075 749.437075 945.3125 507.8125 945.3125C266.187922 945.3125 70.3125 749.437075 70.3125 507.8125C70.3125 266.187922 266.187922 70.3125 507.8125 70.3125zM507.8125 132.8125C300.705719 132.8125 132.8125 300.705719 132.8125 507.8125C132.8125 714.919281 300.705719 882.8125 507.8125 882.8125C714.919281 882.8125 882.8125 714.919281 882.8125 507.8125C882.8125 300.705719 714.919281 132.8125 507.8125 132.8125zM507.8125 695.3125C533.700848 695.3125 554.6875 716.29915 554.6875 742.1875C554.6875 768.07585 533.700848 789.0625 507.8125 789.0625C481.924153 789.0625 460.9375 768.07585 460.9375 742.1875C460.9375 716.29915 481.924153 695.3125 507.8125 695.3125zM507.8125 226.5625C525.071398 226.5625 539.0625 240.553602 539.0625 257.8125L539.0625 601.5625C539.0625 618.821398 525.071398 632.8125 507.8125 632.8125C490.553602 632.8125 476.5625 618.821398 476.5625 601.5625L476.5625 257.8125C476.5625 240.553602 490.553602 226.5625 507.8125 226.5625z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
GenerateComments.displayName = 'GenerateComments';
export default GenerateComments;