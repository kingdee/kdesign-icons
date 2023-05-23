import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Release = ({
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
          id="1482-发布"
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
              d="M19.1117066,3.43735736 L2.80487507,11.5898843 L7.34511793,14.0662188 C7.77612635,14.3018498 7.93451101,14.8422679 7.69887998,15.2732763 C7.46324895,15.7042847 6.92283091,15.8626694 6.49182247,15.6270384 L0.463645675,12.3365178 C0.173114974,12.1782508 -0.00547239317,11.8717189 5.68408952e-16,11.5409241 C0.00572832764,11.2101294 0.194589555,10.9098184 0.490311148,10.7614767 L21.8049204,0.104172032 C22.1138194,-0.0605875749 22.4907973,-0.0278371804 22.7666555,0.187723885 C23.0078333,0.375753295 23.1354143,0.674561364 23.1044183,0.978799856 L21.3284971,22.2969645 C21.3031134,22.5959813 21.1285628,22.8620017 20.8643632,23.0043182 C20.6001636,23.1466346 20.28199,23.1460302 20.0183331,23.0027109 L13.0195327,19.1859915 C12.5885242,18.9508514 12.4297416,18.4108313 12.6648817,17.9798228 C12.9000219,17.5488144 13.440042,17.3900318 13.8710504,17.6251719 L19.6699041,20.7894759 L21.0867301,3.79467484 L10.6640817,17.1967465 L10.6640817,23.1111506 C10.6640817,23.6020486 10.2661303,24 9.77523228,24 C9.28433429,24 8.88638285,23.6020486 8.88638285,23.1111506 L8.88638285,16.8892046 C8.88620645,16.6915955 8.95188559,16.4995622 9.07304122,16.343451 L19.1117066,3.43735736 Z"
              id="路径"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Release.displayName = 'Release';
export default Release;
