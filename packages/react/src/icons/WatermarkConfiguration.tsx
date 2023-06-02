import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const WatermarkConfiguration = ({
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
          id="785.水印配置"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M15.0436692,0.432301899 L18.2799006,3.66778788 L22.8558259,3.66820319 C23.6709821,3.66820319 24.3317969,4.32901789 24.3317969,5.14417417 L24.3313816,9.72074486 L27.5676981,12.9563309 C28.1441006,13.5327334 28.1441006,14.4672666 27.5676981,15.0436692 L24.3313816,18.2784246 L24.3317969,22.8558259 C24.3317969,23.6709821 23.6709821,24.3317969 22.8558259,24.3317969 L18.2784246,24.3313816 L15.0436692,27.5676981 C14.4672666,28.1441006 13.5327334,28.1441006 12.9563309,27.5676981 L9.72074486,24.3313816 L5.14417417,24.3317969 C4.32901789,24.3317969 3.66820319,23.6709821 3.66820319,22.8558259 L3.66778788,18.2799006 L0.432301899,15.0436692 C-0.144100633,14.4672666 -0.144100633,13.5327334 0.432301899,12.9563309 L3.66778788,9.71926889 L3.66820319,5.14417417 C3.66820319,4.32901789 4.32901789,3.66820319 5.14417417,3.66820319 L9.71926889,3.66778788 L12.9563309,0.432301899 C13.5327334,-0.144100633 14.4672666,-0.144100633 15.0436692,0.432301899 Z M18.2537595,17.5068519 L9.80142362,17.5068519 C9.68818057,17.5068519 9.59381136,17.6445621 9.59381136,17.8211137 L9.59381136,18.1353755 C9.59381136,18.308396 9.68503492,18.4496372 9.80142362,18.4496372 L18.2285943,18.4496372 C18.3418374,18.4496372 18.4362066,18.308396 18.4362066,18.1353755 L18.4362066,17.8211137 C18.4362066,17.6445621 18.344983,17.5068519 18.2537595,17.5068519 M18.4487892,16.4616668 L18.4487892,15.7448674 C18.4487892,15.3423299 18.3701481,15.2575852 18.0021082,15.2575852 L16.6809392,15.2575852 C16.5771331,15.243461 16.4701813,15.1693094 16.3758121,15.0880957 C16.3726665,15.0845646 16.3695208,15.0845646 16.3663752,15.0810336 C16.3286275,15.0492543 16.2782973,14.9927578 16.2248214,14.9291993 C16.1996563,14.900951 16.1744911,14.8691717 16.1524716,14.8373925 C16.1115783,14.784427 16.070685,14.7279305 16.0297917,14.674965 C15.2433816,13.6227178 15.7529753,12.8917944 16.3097537,11.8960436 C16.4167054,11.7512713 16.5205116,11.6100301 16.5991526,11.4370095 C16.8350756,10.9779755 16.9671925,10.458914 16.9671925,9.88688694 C16.9671925,8.10724728 15.6491692,6.6418694 13.988271,6.6418694 C12.352538,6.6418694 11.0093496,8.07899905 11.0093496,9.88688694 C11.0093496,10.6354655 11.2452726,11.3240166 11.6416233,11.8677954 C12.273897,12.958884 13.3025214,13.8487038 11.6416233,15.2575852 L10.0593661,15.2575852 C9.76996722,15.2575852 9.61268519,15.4306057 9.61268519,15.7448674 L9.61268519,16.493446 C9.61268519,16.7794595 9.79827797,16.722963 10.0876769,16.722963 L18.2065748,16.722963 C18.4770999,16.6911838 18.4487892,16.7759285 18.4487892,16.4616668"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
WatermarkConfiguration.displayName = 'WatermarkConfiguration';
export default WatermarkConfiguration;