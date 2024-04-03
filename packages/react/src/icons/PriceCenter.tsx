import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PriceCenter = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="1864.价格中心"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M16.076225,15.0783583 C17.8595831,18.5034955 21.9920849,16.7397686 23.1160414,15.3141411 C24.4760715,16.839675 26.3776836,17.3656185 27.2558984,17.3656185 L27.2558984,28.5260405 C27.2558984,29.0638995 26.3999282,30 25.7710069,30 L6.39583682,30 C5.81133611,30 4.92825587,29.4799808 4.92825587,28.5260405 C4.85692154,25.6856828 4.92825587,20.3010411 4.92825587,17.5442233 C5.78426774,17.3771435 7.81637314,17.5442233 9.05132869,15.6228049 C9.69333758,16.9594439 11.3927251,17.0484324 12.4419418,17.0484324 C13.4911585,17.0484324 15.2915475,16.665617 16.076225,15.0783583 Z M18.501703,18.9626123 C18.2140595,18.7974898 17.8480547,18.8954893 17.6817757,19.1800905 L16.1828761,21.762086 C16.1357478,21.8424862 16.1086332,21.9318227 16.0973475,22.023418 C16.0920916,21.9343682 16.0672453,21.8444235 16.0199418,21.762086 L14.5439771,19.1800905 C14.3815207,18.8959368 14.020294,18.7979373 13.7374286,18.9626123 C13.4545633,19.1272872 13.358045,19.491541 13.5214571,19.7765897 L14.8062965,22.023418 L13.4316282,22.023418 C13.0717561,22.0361543 12.7870313,22.3130747 12.7870313,22.6503462 C12.7870313,22.9876177 13.0717561,23.2645381 13.4316282,23.2772744 L15.4413101,23.2772744 L15.4413101,24.5315782 L13.4316282,24.5315782 C13.0717561,24.5443145 12.7870313,24.8212349 12.7870313,25.1585064 C12.7870313,25.4957779 13.0717561,25.7726983 13.4316282,25.7854346 L15.4413101,25.7854346 L15.4413101,27.1023865 C15.4413101,27.413837 15.740899,27.6666667 16.1116819,27.6666667 C16.4815093,27.6666667 16.7815759,27.4133895 16.7815759,27.1023865 L16.7815759,25.7854346 L18.7912578,25.7854346 C19.1511299,25.7726983 19.4358547,25.4957779 19.4358547,25.1585064 C19.4358547,24.8212349 19.1511299,24.5443145 18.7912578,24.5315782 L16.7815759,24.5315782 L16.7815759,23.2772744 L18.7912578,23.2772744 C19.1615629,23.2772744 19.4616295,22.9958055 19.4616295,22.6503462 C19.4616295,22.3044393 19.1615629,22.023418 18.7912578,22.023418 L17.4165895,22.023418 L18.7205414,19.7765897 C18.8863426,19.4919885 18.7879131,19.1272872 18.501703,18.9626123 Z M25.5885425,4.89655172 C25.9373255,4.89655172 28.7083411,10.5678356 29.6572718,11.6948078 C30.6990979,13.1345694 29.210775,15.1377161 27.2759551,15.3881094 C25.3411352,15.701101 23.8528122,14.8873227 22.9598184,13.0093727 C22.3644893,14.574331 21.248247,15.513306 19.3134271,15.4507077 C17.6018557,15.3881094 16.5600296,14.5117327 15.9647004,13.0719711 C15.2949551,14.6995277 14.1042967,15.5759044 12.1694768,15.4507077 C10.6067377,15.3881094 9.63932777,14.6369294 8.8951663,13.0719711 C8.74633401,13.3223644 8.67191784,13.5727577 8.59750168,13.7605527 C7.92775634,14.8873227 6.58826566,15.5759044 5.09994268,15.513306 C3.61161971,15.3881094 2.42096132,14.5743311 2.04888057,13.3223644 C1.97446441,12.9467744 1.97446441,12.5085861 2.12329674,12.1329961 C2.71862591,10.6306361 5.94512342,4.89655172 6.3916203,4.89655172 L25.5885425,4.89655172 Z M23.9162661,2 C24.0943836,2 24.2572139,2.10063462 24.3368705,2.25994781 L24.8321377,3.25048229 C24.9482844,3.48277568 24.8541289,3.76524218 24.6218355,3.88138887 C24.5565387,3.91403725 24.4845373,3.93103448 24.4115333,3.93103448 L7.58846669,3.93103448 C7.32875479,3.93103448 7.11821669,3.72049639 7.11821669,3.46078448 C7.11821669,3.38778048 7.13521392,3.31577906 7.1678623,3.25048229 L7.66312954,2.25994781 C7.74278614,2.10063462 7.90561637,2 8.08373393,2 L23.9162661,2 Z"
            id="形状结合"
            fill={fill}
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
PriceCenter.displayName = 'PriceCenter';
export default PriceCenter;
