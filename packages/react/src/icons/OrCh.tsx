import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const OrCh = ({
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
          id="1122-或者"
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
              d="M12,24 C5.3723077,24 0,18.6276923 0,12 C0,5.3723077 5.3723077,0 12,0 C18.6276923,0 24,5.3723077 24,12 C24,18.6276923 18.6276923,24 12,24 Z M6.9083077,9.98584615 L6.9083077,13.9273846 L11.6510769,13.9273846 L11.6510769,9.98584615 L6.9083077,9.98584615 L6.9083077,9.98584615 Z M12.0516923,14.664 C10.1497531,15.2009018 8.21012985,15.5940103 6.24923077,15.84 L6.48184615,16.7575385 C8.35767005,16.4572685 10.2167557,16.0604335 12.0516923,15.5686154 L12.0516923,14.664 L12.0516923,14.664 Z M16.4067692,17.8689231 C17.0529231,17.8689231 17.5569231,16.9643077 17.9058461,15.1809231 L17.1046154,14.6510769 C16.8849231,16.1243077 16.6135385,16.8609231 16.3033846,16.8609231 C15.9415385,16.8609231 15.5409231,16.5249231 15.0886154,15.8529231 C14.9371052,15.5952164 14.8032592,15.3275244 14.688,15.0516923 C15.5926154,13.7335384 16.3421539,12.1052308 16.9495385,10.1538461 L16.1353846,9.71446153 C15.6443077,11.3427692 15.0369231,12.7513846 14.3132308,13.9403077 C14.2091939,13.5698754 14.1229414,13.1946771 14.0547692,12.816 C13.8350769,11.6012308 13.7187692,10.2055385 13.6929231,8.62892309 L17.7378461,8.62892309 L17.7378461,7.7243077 L16.4843077,7.7243077 C16.2840141,7.22908048 16.0553268,6.74581661 15.7993846,6.27692309 L14.856,6.432 C15.1144615,6.8196923 15.36,7.25907691 15.5796923,7.7243077 L13.68,7.7243077 L13.68,6.07015385 L12.7495385,6.07015385 L12.7495385,7.7243077 L6.24923077,7.7243077 L6.24923077,8.62892309 L12.7495385,8.62892309 C12.7624616,10.4123077 12.9175385,11.9630769 13.2147692,13.2812308 C13.344,13.8498461 13.4861539,14.3796923 13.6670769,14.8707692 C12.9433846,15.8270769 12.1163077,16.5766154 11.1987692,17.1323077 L11.7027692,17.9335385 C12.5686154,17.4166154 13.3698461,16.7187692 14.0935385,15.84 C14.2227692,16.1113846 14.3778462,16.3698461 14.5587692,16.6153846 C15.1532308,17.4424615 15.7606154,17.856 16.4067692,17.8689231 L16.4067692,17.8689231 Z M10.7335385,13.0873846 L7.83876923,13.0873846 L7.83876923,10.8516923 L10.7335385,10.8516923 L10.7335385,13.0873846 L10.7335385,13.0873846 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
OrCh.displayName = 'OrCh';
export default OrCh;