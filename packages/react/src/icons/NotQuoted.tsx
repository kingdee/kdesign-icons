import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const NotQuoted = ({
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
          d="M730.907561 422.111076L930.259903 621.463414C1020.911951 712.115469 1026.430326 849.630211 935.090331 936.788983C843.616748 1024.07522 710.30457 1019.951947 621.037969 930.685344L421.685631 731.333007C406.672145 716.319521 406.672145 691.97785 421.685631 676.964365C436.699117 661.950879 461.040787 661.950879 476.054273 676.964365L675.406611 876.316701C735.595817 936.505909 821.235105 939.154684 882.009799 881.162045C940.74533 825.115225 937.215601 737.156402 875.891259 675.832056L676.53892 476.479718C661.525433 461.466232 661.525433 437.124563 676.53892 422.111076C691.552405 407.09759 715.894075 407.09759 730.907561 422.111076zM590.147106 529.514577L689.823274 629.190746C704.836761 644.204232 704.836761 668.545902 689.823274 683.559388C674.809789 698.572874 650.468119 698.572874 635.454632 683.559388L535.778464 583.883219C520.764978 568.869733 520.764978 544.528063 535.778464 529.514577C550.791949 514.501091 575.133619 514.501091 590.147106 529.514577zM377.177748 67.955811L576.530087 267.30815C591.543572 282.321635 591.543572 306.663306 576.530087 321.676792C561.5166 336.690277 537.17493 336.690277 522.161445 321.676792L322.809391 122.324738C264.172204 63.68878 171.950959 61.74938 116.850071 116.849867C61.749386 171.950953 63.688787 264.172198 122.32446 322.8091L321.676798 522.161438C336.690284 537.174924 336.690284 561.516594 321.676798 576.53008C306.663313 591.543566 282.321642 591.543566 267.308156 576.53008L67.955533 377.177457C-20.206967 289.01311 -23.169658 148.132936 62.481429 62.481225C148.132942 -23.169665 289.013116 -20.206973 377.177748 67.955811zM357.56596 296.938557L457.242129 396.614727C472.255615 411.628213 472.255615 435.969882 457.242129 450.983369C442.228643 465.996855 417.886973 465.996855 402.873487 450.983369L303.197318 351.307199C288.183832 336.293714 288.183832 311.952044 303.197318 296.938557C318.210804 281.925072 342.552474 281.925072 357.56596 296.938557z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
NotQuoted.displayName = 'NotQuoted';
export default NotQuoted;
