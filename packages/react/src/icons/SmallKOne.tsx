import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SmallKOne = ({
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
          id="1346-小K"
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
              d="M20.4911577,3.50783897 C22.8440988,5.86078014 24,8.68430956 24,11.9994983 C24,15.3156905 22.8440988,18.1392199 20.4911577,20.4911577 C18.1392199,22.8230277 15.3156905,24 11.9994983,24 C8.68430956,24 5.86078014,22.8440988 3.50783897,20.4911577 C1.17596891,18.1392199 0,15.3156905 0,12.0005017 C0,8.68531293 1.15489777,5.86178351 3.50783897,3.50884234 C5.86078014,1.17596891 8.68430956,0 12.0005017,0 C15.3166938,0 18.1402233,1.15489777 20.492161,3.50783897 L20.4911577,3.50783897 Z M19.7817635,4.21723317 C17.6244826,2.05995235 15.0608303,1.00338644 12.0005017,1.00338644 C8.96024082,1.00338644 6.38655462,2.06797945 4.21723317,4.21723317 C2.05995235,6.37451399 1.00338644,8.94017308 1.00338644,12.0005017 C1.00338644,15.0417659 2.06797945,17.6144488 4.21723317,19.7827668 C6.37451399,21.9400476 8.93916971,22.997617 11.9994983,22.997617 C15.0407626,22.997617 17.6134454,21.9320206 19.7817635,19.7827668 C21.9390443,17.625486 22.9966136,15.0608303 22.9966136,12.0005017 C22.9966136,8.94017308 21.9390443,6.37551736 19.7817635,4.21823654 L19.7817635,4.21723317 Z M20.4299511,9.83720057 C20.8644174,10.4111376 21.071115,11.1275555 21.071115,11.9593628 C21.071115,12.7901668 20.8433463,13.5065847 20.4289477,14.0805218 C20.0155525,14.6825536 19.4988085,14.9695221 18.8987834,14.9695221 L5.18249092,14.9695221 C4.58246583,14.9695221 4.06572182,14.6825536 3.65132323,14.0805218 C3.21685689,13.5055813 3.01015931,12.7901668 3.01015931,11.9593628 C3.01015931,11.1275555 3.21685692,10.4392324 3.6523266,9.83720057 C4.06572182,9.26426692 4.56139472,8.94920357 5.14135208,8.94920357 L18.9609933,8.94920357 C19.5198796,8.97729838 20.0155525,9.2642669 20.4299511,9.83720057 L20.4299511,9.83720057 Z M5.01693214,10.9569798 L5.01693214,12.9637527 L7.02370501,12.9637527 L7.02370501,10.9569798 L5.01693214,10.9569798 Z M9.03047787,10.9569798 L9.03047787,12.9637527 L11.0372507,12.9637527 L11.0372507,10.9569798 L9.03047787,10.9569798 Z M13.0440236,10.9569798 L13.0440236,12.9637527 L15.0507964,12.9637527 L15.0507964,10.9569798 L13.0440236,10.9569798 Z M17.0575693,10.9569798 L17.0575693,12.9637527 L19.0643422,12.9637527 L19.0643422,10.9569798 L17.0575693,10.9569798 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SmallKOne.displayName = 'SmallKOne';
export default SmallKOne;
