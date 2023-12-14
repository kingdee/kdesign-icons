import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ViewGraph = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="1161-视图_图表"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M10.7586207,2.45560786 L10.7586207,13.2142286 L19.1596318,19.935791 C17.1880026,22.3968558 14.1573581,23.9728492 10.7586207,23.9728492 C4.81679854,23.9728492 0,19.1560506 0,13.2142286 C0,7.2724064 4.81679854,2.45560786 10.7586207,2.45560786 Z M9.10262069,4.26057338 L8.89575459,4.30154806 C4.76153464,5.16124209 1.65517241,8.82497042 1.65517241,13.2142286 C1.65517241,18.2419242 5.73092503,22.3176768 10.7586207,22.3176768 C12.9063395,22.3176768 14.9292627,21.570464 16.5309147,20.254938 L16.7147586,20.0989182 L9.10344828,14.0096898 L9.10262069,4.26057338 Z M12.4137931,5.64513953e-16 C18.8839058,0.425880497 24,5.8087975 24,12.3866423 C24,15.0898218 23.1359854,17.5911999 21.6690554,19.6296776 L12.4137931,12.3866423 L12.4137931,5.64513953e-16 Z M14.0689655,1.91519407 L14.0681379,11.5789182 L21.2209655,17.1767113 L21.2971288,17.0247809 C21.9354404,15.6912003 22.2948991,14.2292857 22.3399899,12.7124845 L22.3448276,12.3866423 C22.3448276,7.41208926 18.9570423,3.1942258 14.3271912,1.97965101 L14.0689655,1.91519407 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ViewGraph.displayName = 'ViewGraph';
export default ViewGraph;
