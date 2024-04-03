import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SystemSettings = ({
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
          d="M805 156.25C843.659931 156.25 875 187.590068 875 226.25L875 680C875 718.659931 843.659931 750 805 750L195 750C156.340068 750 125 718.659931 125 680L125 226.25C125 187.590068 156.340068 156.25 195 156.25L805 156.25zM532.177953 250L500.158697 250L500.158697 395.833269L506.44725 396.092547C543.747822 399.232772 572.906756 430.501563 572.957734 468.652775C573.011281 508.923503 540.418103 541.612906 500.158697 541.666734L500.158697 541.666734L500.158697 687.5L532.129331 687.5L543.604706 631.111109L554.091909 627.936306C564.463063 624.419416 574.469569 619.883113 583.963003 614.388891L583.963003 614.388891L632.003966 646.277778L677.516459 600.777778L645.618816 552.798609L650.779741 543.102622C655.616956 533.247813 659.4763 522.932944 662.297003 512.305556L662.297003 512.305556L718.75 500.833331L718.75 436.666669L662.345628 425.194444L659.176681 414.663303C655.65065 404.252169 651.064756 394.217013 645.521569 384.701388L645.521569 384.701388L677.419209 336.722222L631.955344 291.222222L583.914378 323.0625L574.264706 317.879341C564.452441 313.021266 554.168369 309.147569 543.556078 306.340277L543.556078 306.340277L532.177953 250zM499.841303 250L467.822047 250L456.443922 306.340277C442.2942 310.083333 428.727978 315.722222 416.085622 323.0625L416.085622 323.0625L368.044656 291.222222L322.580791 336.722222L354.478431 384.701388C347.087512 397.388888 341.398453 411 337.654372 425.194444L337.654372 425.194444L281.25 436.666669L281.25 500.833331L337.702997 512.305556C341.463934 526.475406 347.071347 540.089669 354.381184 552.798609L354.381184 552.798609L322.483541 600.777778L367.996034 646.277778L416.036997 614.388891C428.694906 621.714522 442.264953 627.337181 456.395294 631.111109L456.395294 631.111109L467.870669 687.5L499.841303 687.5L499.899656 554.214953L499.841303 541.666734C459.581897 541.612906 426.988719 508.923503 427.042266 468.652775C427.096075 428.38205 459.5819 395.779706 499.841303 395.833269L499.841303 395.833269L500.037034 331.018744L499.841303 250zM328.125 812.5H671.875A46.875 46.875 0 0 1 718.75 859.375V859.375A46.875 46.875 0 0 1 671.875 906.25H328.125A46.875 46.875 0 0 1 281.25 859.375V859.375A46.875 46.875 0 0 1 328.125 812.5z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
SystemSettings.displayName = 'SystemSettings';
export default SystemSettings;
