import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ExpandTwo = ({
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
          id="1501-扩展"
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
              d="M21.1764706,-2.70842172e-16 C22.7358628,-2.70842172e-16 24,1.26413718 24,2.82352941 L24,21.1764706 C24,22.7358628 22.7358628,24 21.1764706,24 L2.82352941,24 C1.26413718,24 -2.70842172e-16,22.7358628 -2.70842172e-16,21.1764706 L-2.70842172e-16,2.82352941 C-2.70842172e-16,1.26413718 1.26413718,-2.70842172e-16 2.82352941,-2.70842172e-16 L21.1764706,-2.70842172e-16 Z M21.1764706,1.41176469 L2.82352941,1.41176469 C2.0438333,1.41176469 1.41176469,2.0438333 1.41176469,2.82352941 L1.41176469,21.1764706 C1.41176469,21.9561666 2.0438333,22.5882353 2.82352941,22.5882353 L21.1764706,22.5882353 C21.9561666,22.5882353 22.5882353,21.9561666 22.5882353,21.1764706 L22.5882353,2.82352941 C22.5882353,2.0438333 21.9561666,1.41176469 21.1764706,1.41176469 Z M10.2854264,12.845841 C10.5317389,12.599968 10.9200384,12.599968 11.166351,12.845841 C11.2828163,12.9606358 11.3488101,13.1203788 11.3488101,13.2874969 C11.3488101,13.454615 11.2828163,13.614358 11.166351,13.7291529 L11.166351,13.7291529 L5.74527613,19.007824 L10.6649016,19.007824 C11.0482744,19.0304654 11.3467728,19.3635345 11.3425359,19.7639389 C11.3425359,20.1542105 11.0391487,20.4705882 10.6649016,20.4705882 L10.6649016,20.4705882 L4.33579664,20.4705882 C3.908887,20.4705882 3.52941177,20.2868593 3.52941177,19.8275373 L3.52941177,19.8275373 L3.52941177,13.3122297 C3.55773486,12.9441911 3.85298643,12.6609289 4.20704613,12.6621122 C4.57684199,12.6293478 4.90311076,12.9128803 4.93889123,13.2980966 L4.93889123,13.2980966 L4.93889123,18.3153075 L10.2854264,12.845841 Z M19.6909913,3.55340121 C19.9045401,3.48971087 20.1343364,3.55506609 20.2873096,3.72299707 C20.4090751,3.8413437 20.475792,4.00883566 20.4702707,4.18231916 L20.4702707,4.18231916 L20.4160599,4.18231916 L20.4160599,10.6905603 C20.3911074,11.0613926 20.0949048,11.3486561 19.7384257,11.3477443 C19.3819466,11.3486561 19.0857439,11.0613926 19.0607912,10.6905603 L19.0607912,10.6905603 L19.0607912,5.67334945 L13.7210325,11.1640154 C13.47472,11.4098885 13.0864205,11.4098885 12.8401079,11.1640154 C12.7232725,11.0479792 12.6571466,10.8870788 12.6571466,10.7188263 C12.6571466,10.5505738 12.7232725,10.3896733 12.8401079,10.2736372 L12.8401079,10.2736372 L18.2611828,4.98789952 L13.334781,4.98789952 L13.3076756,5.01616549 C13.1265815,5.00530203 12.9572241,4.91917778 12.8375054,4.77706713 C12.7177866,4.63495649 12.6577024,4.4487249 12.6706993,4.26005063 C12.6706993,3.86977893 12.9740865,3.55340121 13.3483336,3.55340121 L13.3483336,3.55340121 L19.6909913,3.55340121 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ExpandTwo.displayName = 'ExpandTwo';
export default ExpandTwo;
