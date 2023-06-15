import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DocumentFiling = ({
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
          id="778.凭证归档"
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
              d="M1.47368421,2.94736842 L26.5263158,2.94736842 C27.3402091,2.94736842 28,3.60715932 28,4.42105263 L28,22.1052632 C28,22.9191565 27.3402091,23.5789474 26.5263158,23.5789474 L1.47368421,23.5789474 C0.659790895,23.5789474 0,22.9191565 0,22.1052632 L0,4.42105263 C0,3.60715932 0.659790895,2.94736842 1.47368421,2.94736842 Z M13.2631579,7.36842105 L13.2631579,17.6842105 L14.7368421,17.6842105 L14.7368421,7.36842105 L13.2631579,7.36842105 Z M11.7894737,16.2105263 L11.7894737,17.6842105 L13.2631579,17.6842105 L13.2631579,16.2105263 L11.7894737,16.2105263 Z M10.3157895,14.7368421 L10.3157895,16.2105263 L11.7894737,16.2105263 L11.7894737,14.7368421 L10.3157895,14.7368421 L10.3157895,14.7368421 Z M8.84210526,13.2631579 L8.84210526,14.7368421 L10.3157895,14.7368421 L10.3157895,13.2631579 L8.84210526,13.2631579 L8.84210526,13.2631579 Z M13.2631579,17.6842105 L13.2631579,19.1578947 L14.7368421,19.1578947 L14.7368421,17.6842105 L13.2631579,17.6842105 L13.2631579,17.6842105 Z M14.7368421,16.2105263 L14.7368421,17.6842105 L16.2105263,17.6842105 L16.2105263,16.2105263 L14.7368421,16.2105263 Z M16.2105263,14.7368421 L16.2105263,16.2105263 L17.6842105,16.2105263 L17.6842105,14.7368421 L16.2105263,14.7368421 Z M17.6842105,13.2631579 L17.6842105,14.7368421 L19.1578947,14.7368421 L19.1578947,13.2631579 L17.6842105,13.2631579 Z M2.94736842,8.18059071e-16 L25.0526316,8.18059071e-16 L25.0526316,1.47368421 L2.94736842,1.47368421 L2.94736842,8.18059071e-16 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DocumentFiling.displayName = 'DocumentFiling';
export default DocumentFiling;
