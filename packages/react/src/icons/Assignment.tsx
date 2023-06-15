import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Assignment = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="941.分配"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M28,11.7457455 L14.3929578,11.7970166 L7.58788309,0.0108756902 C7.64847622,0.00310734007 7.71062303,0 7.77276983,0 L20.3031187,0.046610101 C20.8538875,0.0489738966 21.3622406,0.342754698 21.6392749,0.818784108 L27.9471752,11.6478642 C27.9658193,11.6789376 27.9829096,11.7131184 28,11.7457455 L28,11.7457455 Z M27.8772601,13.3304889 L21.7371561,23.9669139 C21.4585194,24.449537 20.9427409,24.7459614 20.3854632,24.7437613 L7.85511434,24.6971389 C7.30434544,24.6947751 6.79599234,24.4009943 6.51895811,23.9249649 L0.211057771,13.0958847 C-0.0692378044,12.6145516 -0.0704233494,12.0200008 0.207950431,11.5375537 L6.30455164,0.978812121 L13.219937,12.9576081 C13.2388997,12.9901738 13.2601885,13.0213282 13.2836374,13.0508283 C13.4298147,13.2604569 13.6697453,13.3847793 13.9253032,13.3833137 L27.8772601,13.3304889 L27.8772601,13.3304889 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Assignment.displayName = 'Assignment';
export default Assignment;
