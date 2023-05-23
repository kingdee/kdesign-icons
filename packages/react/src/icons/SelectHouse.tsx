import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SelectHouse = ({
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
          id="225.集中选房"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="集中选房"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M16.8321462,13.517878 C19.5929194,13.517878 21.8309683,15.750077 21.8309683,18.503634 C21.8309683,19.7007426 21.4079603,20.7993105 20.7028945,21.6587566 L22.4585591,23.1647222 C22.6510629,23.3298471 22.6739722,23.6205998 22.5097284,23.8141364 L22.4838622,23.8421706 L22.4838622,23.8421706 C22.2840642,24.0414465 21.9656902,24.0534993 21.7515515,23.8698941 L19.9955372,22.364265 C19.1338388,23.067488 18.032392,23.4893902 16.8321462,23.4893902 C14.0713731,23.4893902 11.8333242,21.2571911 11.8333242,18.503634 C11.8333242,15.750077 14.0713731,13.517878 16.8321462,13.517878 Z M12.000832,0.171257917 L22.6793655,8.4295863 C23.038948,8.70767231 23.106217,9.22616864 22.8296152,9.58768044 C22.5530132,9.94919214 22.0372838,10.0168221 21.6777014,9.73873616 L20.5356822,8.85554649 L20.5360414,13.6260904 C19.5063233,12.8483583 18.2263079,12.3874926 16.8392259,12.3874926 C13.4367694,12.3874926 10.6785335,15.1605273 10.6785335,18.5812389 C10.6785335,20.3762536 11.4380452,21.9929231 12.6516029,23.1241424 L2.46431783,23.1233195 L2.46431783,8.85554649 L1.32229858,9.73873616 C0.962716099,10.0168221 0.446986777,9.94919214 0.170384845,9.58768044 C-0.106217061,9.22616864 -0.0389480038,8.70767231 0.320634479,8.4295863 L10.9991679,0.171257917 C11.2944309,-0.0570859724 11.7055692,-0.0570859724 12.000832,0.171257917 Z M10.1017238,12.3874756 L5.75507816,12.3874756 C5.29860141,12.3874756 4.92855391,12.757212 4.92855391,13.2133084 C4.92855391,13.618721 5.22093713,13.9559046 5.60650941,14.0258292 L5.75507816,14.0391412 L10.1017238,14.0391412 C10.5582004,14.0391412 10.928248,13.669398 10.928248,13.2133084 C10.928248,12.757212 10.5582004,12.3874756 10.1017238,12.3874756 Z M17.8156162,8.25832839 L5.75507816,8.25832839 C5.29860141,8.25832839 4.92855391,8.62806482 4.92855391,9.08416123 C4.92855391,9.4895738 5.22093713,9.82675746 5.60650941,9.89668206 L5.75507816,9.90999407 L17.8156162,9.90999407 C18.2720929,9.90999407 18.6421404,9.54025087 18.6421404,9.08416123 C18.6421404,8.62806482 18.2720929,8.25832839 17.8156162,8.25832839 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SelectHouse.displayName = 'SelectHouse';
export default SelectHouse;
