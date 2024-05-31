import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PoolStandard = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        version="1.1"
        width={size}
        height={size}
      >
        <path
          d="M437.5 93.75C454.758897 93.75 468.75 107.741102 468.75 125C468.75 142.258898 454.758897 156.25 437.5 156.25L156.25 156.25L156.25 843.75L843.75 843.75L843.75 562.5C843.75 546.473881 855.813756 533.2654 871.355591 531.460241L875 531.25C892.258897 531.25 906.25 545.241103 906.25 562.5L906.25 875C906.25 892.258897 892.258897 906.25 875 906.25L125 906.25C107.741102 906.25 93.75 892.258897 93.75 875L93.75 125C93.75 107.741102 107.741102 93.75 125 93.75L437.5 93.75zM718.75 656.25C736.008897 656.25 750 670.241103 750 687.5C750 704.758897 736.008897 718.75 718.75 718.75L281.25 718.75C263.991102 718.75 250 704.758897 250 687.5C250 670.241103 263.991102 656.25 281.25 656.25L718.75 656.25zM375 468.75C392.258897 468.75 406.25 482.741103 406.25 500C406.25 517.258897 392.258897 531.25 375 531.25L281.25 531.25C263.991102 531.25 250 517.258897 250 500C250 482.741103 263.991102 468.75 281.25 468.75L375 468.75zM843.75 125C861.008897 125 875 138.991102 875 156.25L875 375C875 392.258897 861.008897 406.25 843.75 406.25C826.491103 406.25 812.5 392.258897 812.5 375L812.5 231.6875L553.347087 490.847088C541.143203 503.050972 521.356797 503.050972 509.152913 490.847088C496.949028 478.643203 496.949028 458.856797 509.152913 446.652913L768.25 187.5L625 187.5C608.973881 187.5 595.7654 175.436244 593.960241 159.89441L593.75 156.25C593.75 138.991102 607.741103 125 625 125L843.75 125zM375 281.25C392.258897 281.25 406.25 295.241102 406.25 312.5C406.25 329.758897 392.258897 343.75 375 343.75L281.25 343.75C263.991102 343.75 250 329.758897 250 312.5C250 295.241102 263.991102 281.25 281.25 281.25L375 281.25z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
PoolStandard.displayName = 'PoolStandard';
export default PoolStandard;