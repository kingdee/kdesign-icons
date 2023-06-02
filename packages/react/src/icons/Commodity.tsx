import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Commodity = ({
  size = '1em',
  color = 'currentColor',
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
          id="704.商品"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M21.0148432,0 C21.5827833,0 22.0576052,0.431846604 22.1113244,0.997240468 L23.9949861,20.8227855 C24.0525224,21.4283553 23.6082534,21.9659091 23.0026836,22.0234454 L22.898505,22.0283834 L22.898505,22.0283834 L1.10141916,22.0283834 C0.49312215,22.0283834 -5.42606404e-16,21.5352612 -5.42606404e-16,20.9269642 L0.00602047834,20.8119603 L0.00602047834,20.8119603 L2.08746775,0.986415291 C2.14633396,0.425721659 2.61909115,0 3.18286646,0 L21.0148432,0 Z M17.0601885,4.40567668 C16.147743,4.40567668 15.4080597,5.14535992 15.4080597,6.05780544 C15.4080597,6.65594394 15.7259194,7.17984237 16.2045341,7.46983206 C15.5606358,8.90033227 13.9673363,9.91271779 12.1038022,9.91271779 C10.2402682,9.91271779 8.64696866,8.90033227 8.00566645,7.4697999 C8.48168502,7.17984237 8.79954471,6.65594394 8.79954471,6.05780544 C8.79954471,5.14535992 8.05986144,4.40567668 7.14741595,4.40567668 C6.23497042,4.40567668 5.49528718,5.14535992 5.49528718,6.05780544 C5.49528718,6.88726676 6.10654464,7.57396126 6.90278309,7.69120344 C7.65290044,9.62600064 9.69823103,11.0141369 12.1038022,11.0141369 C14.5093734,11.0141369 16.5547039,9.62600064 17.3044276,7.69200611 C18.1010598,7.57396126 18.7123172,6.88726676 18.7123172,6.05780544 C18.7123172,5.14535992 17.972634,4.40567668 17.0601885,4.40567668 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Commodity.displayName = 'Commodity';
export default Commodity;