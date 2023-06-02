import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Sun = ({
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
          id="163.太阳"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="太阳"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12,17.1428571 C9.15967842,17.1428571 6.85714286,14.8403216 6.85714286,12 C6.85714286,9.15967842 9.15967842,6.85714286 12,6.85714286 C14.8403216,6.85714286 17.1428571,9.15967842 17.1428571,12 C17.1428571,14.8403216 14.8403216,17.1428571 12,17.1428571 Z M12,15.4285714 C13.8935477,15.4285714 15.4285714,13.8935477 15.4285714,12 C15.4285714,10.1064523 13.8935477,8.57142857 12,8.57142857 C10.1064523,8.57142857 8.57142857,10.1064523 8.57142857,12 C8.57142857,13.8935477 10.1064523,15.4285714 12,15.4285714 Z M0.857142857,11.1428571 L4.28571429,11.1428571 C4.7591012,11.1428571 5.14285714,11.5266131 5.14285714,12 C5.14285714,12.4733869 4.7591012,12.8571429 4.28571429,12.8571429 L0.857142857,12.8571429 C0.383755941,12.8571429 0,12.4733869 0,12 C0,11.5266131 0.383755941,11.1428571 0.857142857,11.1428571 Z M19.7142857,11.1428571 L23.1428571,11.1428571 C23.616244,11.1428571 24,11.5266131 24,12 C24,12.4733869 23.616244,12.8571429 23.1428571,12.8571429 L19.7142857,12.8571429 C19.2408988,12.8571429 18.8571429,12.4733869 18.8571429,12 C18.8571429,11.5266131 19.2408988,11.1428571 19.7142857,11.1428571 Z M12.8571429,0.857142857 L12.8571429,4.28571429 C12.8571429,4.7591012 12.4733869,5.14285714 12,5.14285714 C11.5266131,5.14285714 11.1428571,4.7591012 11.1428571,4.28571429 L11.1428571,0.857142857 C11.1428571,0.383755941 11.5266131,0 12,0 C12.4733869,0 12.8571429,0.383755941 12.8571429,0.857142857 Z M12.8571429,19.7142857 L12.8571429,23.1428571 C12.8571429,23.616244 12.4733869,24 12,24 C11.5266131,24 11.1428571,23.616244 11.1428571,23.1428571 L11.1428571,19.7142857 C11.1428571,19.2408988 11.5266131,18.8571429 12,18.8571429 C12.4733869,18.8571429 12.8571429,19.2408988 12.8571429,19.7142857 Z M4.72690168,3.51471862 L7.15126782,5.93908474 C7.48600287,6.27381984 7.48600287,6.81653269 7.15126782,7.15126782 C6.81653269,7.48600287 6.27381984,7.48600287 5.93908474,7.15126782 L3.51471862,4.72690168 C3.17998352,4.39216657 3.17998352,3.84945375 3.51471862,3.51471862 C3.84945375,3.17998352 4.39216657,3.17998352 4.72690168,3.51471862 Z M18.0609153,16.8487322 L20.4852814,19.2730983 C20.8200165,19.6078335 20.8200165,20.1505462 20.4852814,20.4852814 C20.1505462,20.8200165 19.6078335,20.8200165 19.2730983,20.4852814 L16.8487322,18.0609153 C16.5139972,17.7261801 16.5139972,17.1834673 16.8487322,16.8487322 C17.1834673,16.5139972 17.7261801,16.5139972 18.0609153,16.8487322 Z M20.4852814,4.72690168 L18.0609153,7.15126782 C17.7261801,7.48600287 17.1834673,7.48600287 16.8487322,7.15126782 C16.5139972,6.81653269 16.5139972,6.27381984 16.8487322,5.93908474 L19.2730983,3.51471862 C19.6078335,3.17998352 20.1505462,3.17998352 20.4852814,3.51471862 C20.8200165,3.84945375 20.8200165,4.39216657 20.4852814,4.72690168 Z M7.15126782,18.0609153 L4.72690168,20.4852814 C4.39216657,20.8200165 3.84945375,20.8200165 3.51471862,20.4852814 C3.17998352,20.1505462 3.17998352,19.6078335 3.51471862,19.2730983 L5.93908474,16.8487322 C6.27381984,16.5139972 6.81653269,16.5139972 7.15126782,16.8487322 C7.48600287,17.1834673 7.48600287,17.7261801 7.15126782,18.0609153 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Sun.displayName = 'Sun';
export default Sun;