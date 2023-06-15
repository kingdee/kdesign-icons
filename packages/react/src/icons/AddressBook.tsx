import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AddressBook = ({
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
          id="417.通讯录"
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
              d="M9.86170136,12.6793304 C15.2151964,12.6793304 19.5825213,16.9057738 19.7234028,22.2592688 L19.7234028,22.5410317 L0,22.5410317 C0,17.0466552 4.36732491,12.6793304 9.86170136,12.6793304 Z M22.6142467,14.7672801 C23.3795771,14.7672801 24,15.387703 24,16.1530334 C24,16.9183637 23.3795771,17.5387866 22.6142467,17.5387866 L19.8427402,17.5387866 C19.0774098,17.5387866 18.4569869,16.9183637 18.4569869,16.1530334 C18.4569869,15.387703 19.0774098,14.7672801 19.8427402,14.7672801 L22.6142467,14.7672801 Z M9.86170136,-8.40223507e-16 C12.9610932,-8.40223507e-16 15.4969594,2.53586608 15.4969594,5.63525794 C15.4969594,8.73464979 12.9610932,11.2705158 9.86170136,11.2705158 C6.76230953,11.2705158 4.22644345,8.73464979 4.22644345,5.63525794 C4.22644345,2.53586608 6.76230953,-8.40223507e-16 9.86170136,-8.40223507e-16 Z M22.6142467,8.30043149 C23.3795771,8.30043149 24,8.92085438 24,9.68618476 C24,10.4515151 23.3795771,11.071938 22.6142467,11.071938 L18.9189047,11.071938 C18.1535743,11.071938 17.5331514,10.4515151 17.5331514,9.68618476 C17.5331514,8.92085438 18.1535743,8.30043149 18.9189047,8.30043149 L22.6142467,8.30043149 Z M22.6142467,1.83358288 C23.3795771,1.83358288 24,2.45400577 24,3.21933615 C24,3.98466656 23.3795771,4.60508943 22.6142467,4.60508943 L17.9950691,4.60508943 C17.2297388,4.60508943 16.6093159,3.98466656 16.6093159,3.21933615 C16.6093159,2.45400577 17.2297388,1.83358288 17.9950691,1.83358288 L22.6142467,1.83358288 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AddressBook.displayName = 'AddressBook';
export default AddressBook;
