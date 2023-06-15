import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ChangeBilling = ({
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
          id="615.变更结算"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M17.5714286,13.1387579 C21.1218306,13.1387579 24,16.0169274 24,19.5673293 C24,23.1177313 21.1218306,25.9959007 17.5714286,25.9959007 C14.0210266,25.9959007 11.1428571,23.1177313 11.1428571,19.5673293 C11.1428571,16.0169274 14.0210266,13.1387579 17.5714286,13.1387579 Z M19.7390535,15.7072717 C19.7390535,15.7072717 17.9217275,17.0721381 17.6073042,17.3111443 L17.566924,17.3393168 L15.4183777,15.7072717 L14.5821163,16.3355802 L17.1605849,18.1450965 L17.3348588,18.2747732 L14.5821163,18.2757855 L14.5821163,19.1319567 L17.1495665,19.1310756 L17.1495665,20.8436804 L14.5821163,20.8442992 L14.5821163,21.7004705 L17.1495665,21.6999828 L17.1506301,24.2689842 L17.9616181,24.2689842 L17.960895,21.6999828 L20.575315,21.7004705 L20.575315,20.8442992 L17.960895,20.8436804 L17.960895,19.1310756 L20.575315,19.1319567 L20.575315,18.2757855 L17.8205766,18.2747732 L17.9968464,18.1450965 L20.575315,16.3355802 L19.7390535,15.7072717 Z M16.284137,1.13869491 L20.5620058,1.13869491 C21.0405968,1.13869491 21.4285714,1.52556827 21.4285714,1.98517117 L21.429796,13.3859514 C20.310943,12.6860902 18.9884262,12.2815683 17.5714286,12.2815683 C13.5476397,12.2815683 10.2857143,15.5434937 10.2857143,19.5672825 C10.2857143,20.9842804 10.6902361,22.306797 11.3900974,23.4256501 L0.866565522,23.4244721 C0.387974607,23.4244721 0,23.037662 0,22.578059 L0,1.98517117 C0,1.51771006 0.37193297,1.13869491 0.866565522,1.13869491 L5.14141222,1.13869491 L5.14285714,1.9959008 C5.14285714,2.87504795 5.80464032,3.59962737 6.65722095,3.69865326 L6.85714286,3.71018652 L14.5714286,3.71018652 C15.4505757,3.71018652 16.1751552,3.04840333 16.274181,2.19582274 L16.2857143,1.9959008 L16.284137,1.13869491 Z M15.8571429,10.5673294 L5.14285714,10.5673294 L5.14285714,11.4244722 L8.57142857,13.9555286 L8.57142857,11.4244722 L15.8571429,11.4244722 C16.0938363,11.4244722 16.2857143,11.2325943 16.2857143,10.9959008 C16.2857143,10.7592074 16.0938363,10.5673294 15.8571429,10.5673294 Z M12.8571429,5.42447223 L12.8571429,7.95280625 L5.57142857,7.95280625 C5.33473511,7.95280625 5.14285714,8.14468422 5.14285714,8.38137768 C5.14285714,8.57862223 5.27610574,8.74474492 5.45749729,8.79464012 L5.57142857,8.80994911 L16.3385906,8.80994911 L16.2934266,8.13894607 L12.8571429,5.42447223 Z M6.36561432,0 L15.0518261,0.0552099164 L15.0518261,1.63818084 C15.0518261,2.27070634 14.5390628,2.78346959 13.9065373,2.78346959 L13.899258,2.78346959 L7.5036237,2.74279555 C6.87395183,2.73879332 6.36561432,2.2272145 6.36561432,1.59752993 L6.36561432,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ChangeBilling.displayName = 'ChangeBilling';
export default ChangeBilling;
