import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ListRadioBoxChecked = ({
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
          id="1237-列表单选框选中"
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
              d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M12,1.7142857 C6.31935686,1.7142857 1.7142857,6.31935686 1.7142857,12 C1.7142857,17.6806431 6.31935686,22.2857143 12,22.2857143 C17.6806431,22.2857143 22.2857143,17.6806431 22.2857143,12 C22.2857143,6.31935686 17.6806431,1.7142857 12,1.7142857 Z M12,4.8 C15.9764502,4.8 19.2,8.0235498 19.2,12 C19.2,15.9764502 15.9764502,19.2 12,19.2 C8.0235498,19.2 4.8,15.9764502 4.8,12 C4.8,8.0235498 8.0235498,4.8 12,4.8 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ListRadioBoxChecked.displayName = 'ListRadioBoxChecked';
export default ListRadioBoxChecked;
