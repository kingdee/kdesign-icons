import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const EventMonitoring = ({
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
          d="M812.5 156.25C847.017797 156.25 875 184.232203 875 218.75L875 687.5C875 722.017797 847.017797 750 812.5 750L625 750L625 843.75L671.875 843.75C697.763347 843.75 718.75 864.736653 718.75 890.625C718.75 916.513347 697.763347 937.5 671.875 937.5L328.125 937.5C302.236653 937.5 281.25 916.513347 281.25 890.625C281.25 864.736653 302.236653 843.75 328.125 843.75L375 843.75L375 750L187.5 750C152.982203 750 125 722.017797 125 687.5L125 218.75C125 184.232203 152.982203 156.25 187.5 156.25L812.5 156.25zM281.25 468.75C263.991102 468.75 250 482.741103 250 500L250 500L250 562.5L250.210242 566.144409C252.015401 581.686244 265.22388 593.75 281.25 593.75C298.508898 593.75 312.5 579.758897 312.5 562.5L312.5 562.5L312.5 500L312.289758 496.355591C310.484599 480.813756 297.27612 468.75 281.25 468.75zM406.25 406.25C388.991103 406.25 375 420.241103 375 437.5L375 437.5L375 562.5L375.210241 566.144409C377.0154 581.686244 390.223881 593.75 406.25 593.75C423.508897 593.75 437.5 579.758897 437.5 562.5L437.5 562.5L437.5 437.5L437.289759 433.855591C435.4846 418.313756 422.276119 406.25 406.25 406.25zM656.25 406.25C638.991103 406.25 625 420.241103 625 437.5L625 437.5L625 562.5L625.210241 566.144409C627.0154 581.686244 640.223881 593.75 656.25 593.75C673.508897 593.75 687.5 579.758897 687.5 562.5L687.5 562.5L687.5 437.5L687.289759 433.855591C685.4846 418.313756 672.276119 406.25 656.25 406.25zM531.25 343.75C513.991103 343.75 500 357.741103 500 375L500 375L500 562.5L500.210241 566.144409C502.0154 581.686244 515.223881 593.75 531.25 593.75C548.508897 593.75 562.5 579.758897 562.5 562.5L562.5 562.5L562.5 375L562.289759 371.355591C560.4846 355.813756 547.276119 343.75 531.25 343.75z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
EventMonitoring.displayName = 'EventMonitoring';
export default EventMonitoring;
