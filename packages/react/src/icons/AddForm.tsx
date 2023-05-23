import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AddForm = ({
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
          id="64.新增单据"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="新增单据"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M17.7777778,11.5555556 C21.2142162,11.5555556 24,14.3413394 24,17.7777778 C24,21.2142162 21.2142162,24 17.7777778,24 C14.3413394,24 11.5555556,21.2142162 11.5555556,17.7777778 C11.5555556,14.3413394 14.3413394,11.5555556 17.7777778,11.5555556 Z M21.3333333,0 C21.8242531,0 22.2222222,0.397969124 22.2222222,0.888888889 L22.2232978,11.1256525 C20.9518862,10.2742992 19.4228165,9.77777778 17.7777778,9.77777778 C13.3594998,9.77777778 9.77777778,13.3594998 9.77777778,17.7777778 C9.77777778,19.4228165 10.2742992,20.9518862 11.1256525,22.2232978 L0.888888889,22.2222222 C0.397969124,22.2222222 0,21.8242531 0,21.3333333 L0,0.888888889 C0,0.397969124 0.397969124,0 0.888888889,0 L21.3333333,0 Z M17.7777778,14.2222222 C17.3219237,14.2222222 16.9462158,14.5653691 16.8948691,15.0074479 L16.8888889,15.1111111 L16.8888889,16.888 L15.1111111,16.8888889 C14.6201914,16.8888889 14.2222222,17.286858 14.2222222,17.7777778 C14.2222222,18.2336318 14.5653691,18.6093397 15.0074479,18.6606865 L15.1111111,18.6666667 L16.8888889,18.6666667 L16.8888889,20.4444444 C16.8888889,20.9353642 17.286858,21.3333333 17.7777778,21.3333333 C18.2336318,21.3333333 18.6093397,20.9901865 18.6606865,20.5481076 L18.6666667,20.4444444 L18.6666667,18.6666667 L20.4444444,18.6666667 C20.9353642,18.6666667 21.3333333,18.2686975 21.3333333,17.7777778 C21.3333333,17.3219237 20.9901865,16.9462158 20.5481076,16.8948691 L20.4444444,16.8888889 L18.6666667,16.8888889 L18.6666667,15.1111111 C18.6666667,14.6201914 18.2686975,14.2222222 17.7777778,14.2222222 Z M8,9.77777778 L4.44444444,9.77777778 C3.95352468,9.77777778 3.55555556,10.1757469 3.55555556,10.6666667 C3.55555556,11.1225207 3.89870239,11.4982286 4.34078123,11.5495754 L4.44444444,11.5555556 L8,11.5555556 C8.49091974,11.5555556 8.88888889,11.1575864 8.88888889,10.6666667 C8.88888889,10.1757469 8.49091974,9.77777778 8,9.77777778 Z M11.5555556,4.44444444 L4.44444444,4.44444444 C3.95352468,4.44444444 3.55555556,4.84241357 3.55555556,5.33333333 C3.55555556,5.78918741 3.89870239,6.16489526 4.34078123,6.21624201 L4.44444444,6.22222222 L11.5555556,6.22222222 C12.0464753,6.22222222 12.4444444,5.8242531 12.4444444,5.33333333 C12.4444444,4.84241357 12.0464753,4.44444444 11.5555556,4.44444444 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AddForm.displayName = 'AddForm';
export default AddForm;
