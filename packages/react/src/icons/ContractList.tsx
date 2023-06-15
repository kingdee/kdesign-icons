import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ContractList = ({
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
          id="586.合同清单"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M21.220672,14.1025641 C21.651083,14.1025641 22,14.4514812 22,14.8818921 L22,20.3745182 C22,20.8049291 21.651083,21.1538462 21.220672,21.1538462 L0.779328,21.1538462 C0.348917022,21.1538462 0,20.8049291 0,20.3745182 L0,14.8818921 C0,14.4514812 0.348917022,14.1025641 0.779328,14.1025641 L21.220672,14.1025641 Z M14.1464733,17.2364673 L7.85352667,17.2364673 C7.4191783,17.2364673 7.07142862,17.5872413 7.07142862,18.019943 C7.07142862,18.4245387 7.37334985,18.7532904 7.76231754,18.7981906 L7.85352667,18.8034188 L14.1464733,18.8034188 C14.5497968,18.8034188 14.8784511,18.5009657 14.9233439,18.1113128 L14.9285714,18.019943 L14.9233097,17.9280158 C14.8781317,17.5363192 14.5475613,17.2364673 14.1464733,17.2364673 Z M18.8635291,0 C19.2939401,0 19.6428571,0.348917022 19.6428571,0.779328 L19.6428571,13.3234471 L2.35714287,13.3234471 L2.35714287,0.779328 C2.35714287,0.348917022 2.70605989,0 3.13647087,0 L18.8635291,0 Z M17.2857143,10.1851851 L4.71428572,10.1851851 L4.71428572,10.968661 L17.2857143,10.968661 L17.2857143,10.1851851 Z M6.20086568,3.91737892 C5.30891769,3.91737892 4.71428572,4.65855126 4.71428572,5.39972359 C4.71428572,5.84442699 4.86294371,6.14089596 5.1602597,6.43736484 L5.1602597,7.91970952 C5.1602597,8.067944 5.30891769,8.21617846 5.45757569,8.067944 L6.20086568,7.17853721 L6.94415565,8.067944 C7.09281362,8.21617846 7.24147161,8.067944 7.24147161,7.91970952 L7.24147161,6.43736484 C7.39012958,6.28913036 7.68744562,5.84442699 7.68744562,5.39972359 C7.68744562,4.51031677 6.94415565,3.91737892 6.20086568,3.91737892 Z M17.2857143,7.05128203 L10.2142857,7.05128203 L10.2142857,7.83475787 L17.2857143,7.83475787 L17.2857143,7.05128203 Z M17.2857143,3.91737892 L10.2142857,3.91737892 L10.2142857,4.7008547 L17.2857143,4.7008547 L17.2857143,3.91737892 Z M5.17575385,13.7558892 L8.63943385,13.7558892 C8.87855105,13.7558892 9.07239385,13.949732 9.07239385,14.1888492 L9.07239385,14.1888492 C9.07239385,14.4279664 8.87855105,14.6218092 8.63943385,14.6218092 L5.17575385,14.6218092 C4.93663664,14.6218092 4.74279385,14.4279664 4.74279385,14.1888492 L4.74279385,14.1888492 C4.74279385,13.949732 4.93663664,13.7558892 5.17575385,13.7558892 L5.17575385,13.7558892 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ContractList.displayName = 'ContractList';
export default ContractList;
