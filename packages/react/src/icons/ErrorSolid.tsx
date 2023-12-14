import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ErrorSolid = ({
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
          id="193.状态_错误"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="状态_错误"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M8.78033009,7.71966991 C8.48743687,7.4267767 8.01256315,7.4267767 7.71966991,7.71966991 C7.45932038,7.98001944 7.43039266,8.38415604 7.63288675,8.67645826 L10.5,12 L7.71966991,15.2196699 C7.4267767,15.5125632 7.4267767,15.9874368 7.71966991,16.2803301 C7.98001944,16.5406795 8.38415604,16.5696073 8.67645826,16.3671132 L12,13.5 L15.2196699,16.2803301 C15.5125632,16.5732233 15.9874368,16.5732233 16.2803301,16.2803301 C16.5406795,16.0199805 16.5696073,15.6158439 16.3671132,15.3235417 L13.5,12 L16.2803301,8.78033009 C16.5732233,8.48743687 16.5732233,8.01256315 16.2803301,7.71966991 C16.0199805,7.45932038 15.6158439,7.43039266 15.3235417,7.63288675 L12,10.5 L11.9267767,10.5732233 L8.78033009,7.71966991 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ErrorSolid.displayName = 'ErrorSolid';
export default ErrorSolid;
