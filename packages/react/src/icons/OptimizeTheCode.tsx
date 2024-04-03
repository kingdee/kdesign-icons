import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const OptimizeTheCode = ({
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
          d="M646.573625 62.5C693.016344 62.5 737.9018 73.793528 778.088056 95.086508C796.662387 104.928251 800.417856 129.933045 785.554056 144.796864L649.052787 281.25L709.052787 341.1875L845.526537 204.76958C859.03925 191.256864 880.933087 193.132364 892.196187 207.540514L895.237181 212.236083C916.529787 252.42345 927.823625 297.308701 927.823625 343.75C927.823625 499.079732 801.903356 625 646.573625 625C611.742649 625 577.786951 618.647218 546.031993 606.488008L536.24029 602.375L241.587377 897.097087C203.028586 935.655875 141.921691 937.924044 100.710182 903.901581L93.226536 897.097087C52.257821 856.128375 52.257821 789.704963 93.226536 748.736244L387.86529 454L383.835616 444.29163C373.702941 417.829164 367.602507 389.838409 365.850492 361.086411L365.323623 343.75C365.323623 188.419988 491.243756 62.5 646.573625 62.5zM646.573625 125C525.761536 125 427.823623 222.937801 427.823623 343.75C427.823623 379.927598 436.591869 414.775364 453.13718 446.002749C459.561857 458.128594 457.324126 473.027004 447.62071 482.73042L137.42071 792.930419C120.859763 809.491369 120.859763 836.341969 137.42071 852.902913C153.981656 869.463863 180.832256 869.463863 197.393202 852.902913L507.593202 542.702913C517.296619 532.999496 532.195029 530.761766 544.320873 537.186443C575.548259 553.731754 610.396024 562.5 646.573625 562.5C767.385556 562.5 865.323625 464.561935 865.323625 343.75C865.323625 323.077087 862.460525 302.838404 856.919262 283.461344L856.427787 282.1875L731.170712 407.513754C720.322812 418.361651 703.483787 419.566973 691.304531 411.129719L686.976537 407.513754L582.809869 303.347087C570.605991 291.143209 570.605984 271.356814 582.809855 259.152928L708.115287 133.8125L706.863112 133.404128C692.330494 129.248275 677.312925 126.598879 661.990712 125.533923L646.573625 125z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
OptimizeTheCode.displayName = 'OptimizeTheCode';
export default OptimizeTheCode;
