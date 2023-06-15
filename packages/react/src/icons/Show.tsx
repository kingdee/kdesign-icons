import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Show = ({
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
          id="1502-显示"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 8.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12.0000376,0 C15.9381258,0 19.8008122,2.58614795 23.6052938,7.68039642 C24.1662542,8.43116837 24.1254351,9.47205441 23.5074038,10.1765914 C19.7240876,14.4943341 15.8878579,16.6836307 12.0000376,16.6836307 C8.11354003,16.6836307 4.27731033,14.4943341 0.491348475,10.1752686 C-0.125573808,9.47064108 -0.165829835,8.4306018 0.394781314,7.68039642 C4.1992629,2.58747079 8.06194935,0 12.0000376,0 Z M12.0000376,1.32283783 C8.55404502,1.32283783 5.03397357,3.68013483 1.45437441,8.47277627 C1.2675108,8.72313606 1.28130117,9.07010182 1.48744536,9.30484127 C5.04323343,13.360662 8.54743083,15.3607928 12.0000376,15.3607928 C15.4526443,15.3607928 18.9581645,13.360662 22.5126298,9.30484127 C22.7194831,9.06987486 22.7332848,8.72207212 22.5457007,8.47145344 C18.9661015,3.68013483 15.4460301,1.32283783 12.0000376,1.32283783 Z M12.0000376,4.46325482 C14.191787,4.46325482 15.968551,6.24001883 15.968551,8.4317683 C15.968551,10.6235178 14.191787,12.4002818 12.0000376,12.4002818 C9.80828809,12.4002818 8.03152408,10.6235178 8.03152408,8.4317683 C8.03152408,6.24001883 9.80828809,4.46325482 12.0000376,4.46325482 L12.0000376,4.46325482 Z M12.0000376,5.78609265 C10.5388712,5.78609265 9.35436191,6.97060199 9.35436191,8.4317683 C9.35436191,9.89293462 10.5388712,11.077444 12.0000376,11.077444 C13.4612039,11.077444 14.6457132,9.89293462 14.6457132,8.4317683 C14.6457132,6.97060199 13.4612039,5.78609265 12.0000376,5.78609265 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Show.displayName = 'Show';
export default Show;
