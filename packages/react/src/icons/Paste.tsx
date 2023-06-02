import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Paste = ({
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
          id="1206-粘贴"
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
              d="M3.42857142,3.42857142 L15.4285714,3.42857142 L15.4285714,7.77010675 C15.4285714,8.40933887 15.1961514,8.57142858 14.6368757,8.57142858 L4.15937151,8.57142858 C3.60009582,8.57142858 3.42857142,8.29602277 3.42857142,7.65679059 L3.42857142,3.42857142 Z M4.92899336,6.85842891 L13.7142857,6.85842891 L13.7142857,5.14157112 L4.92899336,5.14157112 L4.92899336,6.85842891 Z M6.58991879,0 L12.2672241,0 C13.0664142,0 13.7142857,0.518005769 13.7142857,1.15699823 L13.7142857,5.14285715 L5.14285715,5.14285715 L5.14285715,1.15699823 C5.14285715,0.518005769 5.79072872,0 6.58991879,0 Z M6.85714285,1.71621189 L6.85714285,3.42857142 L12,3.42857142 L12,1.71428573 L6.85714285,1.71428573 L6.85714285,1.71621189 Z M1.71428573,20.5714286 L9.42941529,20.5714286 L9.42941529,22.2857143 L1.01251583,22.3703704 C0.453318768,22.3703704 0,21.9444106 0,21.3966588 L0,4.42036387 C0,3.87261204 0.453318768,3.42857142 1.01251583,3.42857142 C12.000561,3.42857142 17.6809827,3.42857142 18.0537807,3.42857142 C18.6129777,3.42857142 18.8746164,3.87261204 18.8746164,4.42036387 L18.8746164,9.5879255 L17.1579091,9.5879255 L17.1579091,5.14157112 L1.71428573,5.14285715 L1.71428573,20.5714286 Z M18.0008438,18.1236297 L18.0008438,24 L16.4989453,24 L16.4989453,17.6459163 C16.4989453,17.0981645 16.9522641,16.6541239 17.5114612,16.6541239 L24,16.6541239 L24,18.1236297 L18.0008438,18.1236297 Z M18.8650426,24 L11.2113129,24 C10.7001189,24 10.2857143,23.5855488 10.2857143,23.0742972 L10.2857143,11.211417 C10.2857143,10.7001655 10.7001189,10.2857143 11.2113129,10.2857143 L23.0744014,10.2857143 C23.5855954,10.2857143 24,10.7001655 24,11.211417 L24,19.7648229 L18.8650426,24 Z M12,22.2857143 L18.8650426,22.2857143 L22.2857143,19.4356515 L22.2857143,12 L12,12 L12,22.2857143 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Paste.displayName = 'Paste';
export default Paste;