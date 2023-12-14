import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const List = ({
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
          id="130.列表"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="列表"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M0.923076923,0 L2.76923077,0 C3.27903206,0 3.69230769,0.407013876 3.69230769,0.909090909 C3.69230769,1.41116794 3.27903206,1.81818182 2.76923077,1.81818182 L0.923076923,1.81818182 C0.413275628,1.81818182 0,1.41116794 0,0.909090909 C0,0.407013876 0.413275628,0 0.923076923,0 Z M6.46153846,0 L23.0769231,0 C23.5867243,0 24,0.407013876 24,0.909090909 C24,1.41116794 23.5867243,1.81818182 23.0769231,1.81818182 L6.46153846,1.81818182 C5.95173717,1.81818182 5.53846154,1.41116794 5.53846154,0.909090909 C5.53846154,0.407013876 5.95173717,0 6.46153846,0 Z M0.923076923,9.09090909 L2.76923077,9.09090909 C3.27903206,9.09090909 3.69230769,9.497923 3.69230769,10 C3.69230769,10.502077 3.27903206,10.9090909 2.76923077,10.9090909 L0.923076923,10.9090909 C0.413275628,10.9090909 0,10.502077 0,10 C0,9.497923 0.413275628,9.09090909 0.923076923,9.09090909 Z M6.46153846,9.09090909 L23.0769231,9.09090909 C23.5867243,9.09090909 24,9.497923 24,10 C24,10.502077 23.5867243,10.9090909 23.0769231,10.9090909 L6.46153846,10.9090909 C5.95173717,10.9090909 5.53846154,10.502077 5.53846154,10 C5.53846154,9.497923 5.95173717,9.09090909 6.46153846,9.09090909 Z M6.46153846,18.1818182 L23.0769231,18.1818182 C23.5867243,18.1818182 24,18.5888321 24,19.0909091 C24,19.5929861 23.5867243,20 23.0769231,20 L6.46153846,20 C5.95173717,20 5.53846154,19.5929861 5.53846154,19.0909091 C5.53846154,18.5888321 5.95173717,18.1818182 6.46153846,18.1818182 Z M0.923076923,18.1818182 L2.76923077,18.1818182 C3.27903206,18.1818182 3.69230769,18.5888321 3.69230769,19.0909091 C3.69230769,19.5929861 3.27903206,20 2.76923077,20 L0.923076923,20 C0.413275628,20 0,19.5929861 0,19.0909091 C0,18.5888321 0.413275628,18.1818182 0.923076923,18.1818182 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
List.displayName = 'List';
export default List;
