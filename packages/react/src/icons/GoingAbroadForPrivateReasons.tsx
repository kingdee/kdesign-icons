import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const GoingAbroadForPrivateReasons = ({
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
          id="774.因私出国"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M13.3377267,15.099578 C13.3515739,14.8975891 13.3827285,14.7095312 13.4034986,14.5075424 C14.0265945,14.1836649 14.6808463,13.8388904 15.3627912,13.4697393 C15.2900964,13.999088 15.2312488,14.5423689 15.2000929,15.099578 L20.2887149,15.099578 C20.2090972,13.6160059 19.9737055,12.2020856 19.613693,11.0737351 C19.9079336,10.8996081 20.2056358,10.7254797 20.5033365,10.5478689 C20.7352667,10.4085655 20.9464282,10.2831931 21.1679727,10.1473736 C21.7287595,11.5195041 22.1268495,13.2120297 22.2583919,15.0960956 L25.290795,15.0960956 C24.916938,12.8637728 23.5668955,10.9588113 21.6872206,9.83394322 C22.3830113,9.41603609 23.016493,9.02947169 23.6049729,8.6672839 C25.9450468,10.4294612 27.4612476,13.2120297 27.4612476,16.3498184 C27.4612476,21.5632148 23.2968864,25.7980112 18.0974922,25.9791058 C18.0351831,25.9860705 17.9728727,26 17.9105636,26 C17.8863321,26 17.8655619,25.9930353 17.8413303,25.9930353 C17.8101758,25.9930353 17.7824827,25.9965176 17.7513268,25.9965176 C12.6557818,25.9965176 8.48103629,22.0925649 8.07948486,17.1333957 C8.96220544,16.7224533 10.4230202,16.0294233 12.2576933,15.0960956 L13.3377267,15.0960956 L13.3377267,15.099578 Z M25.3600283,16.9035465 L22.3103165,16.9035465 C22.2583919,19.4005437 21.784147,21.5980413 21.0364303,23.2000196 C23.511508,22.0263956 25.1592526,19.6199457 25.3600283,16.9035465 Z M17.7547897,23.9418057 C19.2640676,23.9418057 20.2056358,20.4104864 20.3094851,16.9035465 L15.1793227,16.9035465 C15.2866349,20.4104864 16.2489718,23.9418057 17.7547897,23.9418057 Z M14.7362324,23.3288744 C13.9054379,21.7164476 13.3515739,19.4701953 13.292725,16.9035465 L10.1460882,16.9035465 C10.3572483,19.7905904 12.1746141,22.2353506 14.7362324,23.3288744 Z M18.9075179,9.49613485 C14.8123887,11.968754 10.9976529,13.9398848 8.49142066,15.1692296 L4.50014214,15.1692296 L0,10.6001072 L2.03891029,9.90359487 L5.80864434,11.3349285 L6.97868128,11.919998 C7.95140393,11.1573177 8.93451239,10.4050832 9.92454234,9.66329713 L5.05400468,1.78922234 L5.06092899,1.75787958 C5.03323454,1.46534486 5.05746613,1.16584397 5.20285575,0.883756394 C5.61133008,0.0897319717 6.59097707,-0.227180751 7.39407853,0.173313125 L16.1174294,4.54741284 C16.3389753,4.65885436 16.505135,4.82601806 16.6436003,5.00711126 C21.697605,1.8310136 26.6650691,-0.397826839 27.8801077,2.13051446 C28.5412825,3.50612593 26.5923743,4.85387845 18.9075179,9.49613485 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
GoingAbroadForPrivateReasons.displayName = 'GoingAbroadForPrivateReasons';
export default GoingAbroadForPrivateReasons;
