import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PriceControl = ({
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
          id="552.价格管控"
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
              d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.37221052 5.37221052,0 12,0 Z M8.81557895,8.35073683 L8.80192424,8.3886359 C8.55463208,9.07513089 5.03266483,18.8576842 5.14357895,18.8576842 C5.352,18.6467368 15.6745263,15.0126315 15.6745263,15.0126315 C15.6745263,15.0126315 16.3107445,12.9298542 17.0227886,10.6641039 L17.182041,10.158364 C17.8755695,7.96046529 18.6009187,5.72339139 18.8576842,5.14357895 C18.9776842,4.87073686 8.81557895,8.35073683 8.81557895,8.35073683 Z M10.1254737,10.1557895 C9.56842105,11.4126315 7.95536846,15.48 7.45515788,16.6105263 C7.656,16.5233685 12.9397895,14.0425263 13.9490526,13.608 L10.1254737,10.1557895 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PriceControl.displayName = 'PriceControl';
export default PriceControl;
