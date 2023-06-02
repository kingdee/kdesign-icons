import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Apithree = ({
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
          id="1282-api3"
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
              d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M12,3.07999999 C8.77592863,3.07999999 6.09488117,5.40496145 5.54197099,8.46965568 C3.2247913,9.01532196 1.5,11.0962377 1.5,13.58 C1.5,16.4505 3.80373002,18.782935 6.66318163,18.8292966 L6.75,18.83 L12.17512,18.83 L11.64,19.52 L12.4,20 L13.26312,18.83 L13.27672,18.83 L13.9364812,17.9312409 L14.2326,17.53 L7.35499999,17.53 L7.28678561,17.5294641 C5.04007361,17.494141 3.22999999,15.7170476 3.22999999,13.53 C3.22999999,11.4866132 4.81008672,9.80109211 6.85008689,9.55966541 C6.98452325,6.91461785 9.23880108,4.81000001 12,4.81000001 C14.7581309,4.81000001 17.0104665,6.90994344 17.1494509,9.55098797 C19.2281988,9.75694565 20.85,11.4598161 20.85,13.53 C20.85,15.7170476 19.0399264,17.494141 16.7932144,17.5294641 L16.725,17.53 L16.715,17.52992 L16.715,17.53 L15.15296,17.53 L14.23528,18.83 L17.25,18.83 C20.1205,18.83 22.452935,16.52627 22.4992966,13.6668184 L22.5,13.58 C22.5,11.0962377 20.7752087,9.01532196 18.4580129,8.4697548 C17.9051188,5.40496145 15.2240714,3.07999999 12,3.07999999 Z M8.85093751,9.973125 L7.77281249,9.973125 L5.874375,14.8246875 L6.88218751,14.8246875 L7.30406249,13.6528125 L9.29625,13.6528125 L9.74156249,14.8246875 L10.749375,14.8246875 L8.85093751,9.973125 Z M13.3040625,9.973125 L11.265,9.973125 L11.265,14.8246875 L12.2025,14.8246875 L12.2025,13.066875 L13.23375,13.066875 C15.10875,13.066875 15.10875,13.066875 15.10875,11.473125 C15.0159375,10.0345312 15.0159375,10.0345312 13.3381195,9.97420313 L13.3040625,9.973125 Z M16.8665625,9.973125 L15.9290625,9.973125 L15.9290625,14.8246875 L16.8665625,14.8246875 L16.8665625,9.973125 Z M8.311875,10.723125 C8.35875,10.910625 8.35875,10.910625 8.4525,11.145 C8.47593751,11.191875 8.47593751,11.191875 9.10875,12.9496875 L7.53843751,12.9496875 C8.14781249,11.2153125 8.14781249,11.2153125 8.17125,11.1684375 C8.19468751,11.098125 8.19468751,11.098125 8.24156249,10.910625 C8.28620537,10.7766964 8.28620537,10.7766964 8.28833119,10.7278019 L8.28843751,10.723125 L8.311875,10.723125 Z M13.14,10.6996875 C14.1009375,10.723125 14.1009375,10.723125 14.1478125,11.4965625 C14.1478125,12.3403125 14.1478125,12.3403125 13.14,12.36375 L12.2025,12.36375 L12.2025,10.6996875 L13.14,10.6996875 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Apithree.displayName = 'Apithree';
export default Apithree;