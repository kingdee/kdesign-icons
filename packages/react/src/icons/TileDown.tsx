import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const TileDown = ({
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
          id="1142-向下平铺"
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
              d="M18.2954685,0 C18.6926877,0.0110534731 19.0692272,0.179530144 19.3421726,0.468331345 C19.615118,0.757132515 19.7620871,1.14257574 19.7507173,1.53978607 L19.7507173,1.53978607 L19.7507173,5.43453905 C19.7576183,6.25004988 19.1106844,6.92114313 18.2954685,6.94413322 L18.2954685,6.94413322 L13.2869102,6.94273684 L13.2869102,10.6526306 L17.5861579,10.653679 C19.8341299,10.653679 21.6722352,12.4085261 21.8053076,14.623054 L21.8130215,14.8805426 L21.8141125,17.4314933 C23.09217,17.9192123 24,19.1565689 24,20.6059606 C24,22.4818437 22.4792963,24.0025474 20.603413,24.0025474 C18.7275299,24.0025474 17.2068262,22.4818437 17.2068262,20.6059606 C17.2068262,19.1548698 18.116786,17.9163115 19.3972102,17.4297812 L19.397671,14.8805426 C19.397671,13.9426011 18.6848411,13.1711499 17.7713746,13.0783823 L17.5861579,13.0690297 L13.2869102,13.0678869 L13.2878097,17.4603309 C14.5272947,17.9666762 15.400691,19.184322 15.400691,20.6059606 C15.400691,22.4818437 13.8799873,24.0025474 12.0041042,24.0025474 C10.1282211,24.0025474 8.60751732,22.4818437 8.60751732,20.6059606 C8.60751732,19.1271167 9.55261717,17.8690127 10.8717711,17.4026945 L10.8716538,13.0678869 L6.3789065,13.0690297 C5.44096493,13.0690297 4.66951369,13.7818595 4.57674613,14.6953259 L4.56739347,14.8805426 L4.5682161,17.41686 C5.86680258,17.8940907 6.79317382,19.1418428 6.79317382,20.6059606 C6.79317382,22.4818437 5.27247004,24.0025474 3.39658689,24.0025474 C1.52070377,24.0025474 0,22.4818437 0,20.6059606 C0,19.1695959 0.891584405,17.941472 2.15151658,17.4448252 L2.15204281,14.8805426 C2.15204281,12.6325709 3.90688996,10.7944654 6.12141776,10.6613931 L6.3789065,10.653679 L10.8716538,10.6526306 L10.8716538,6.96223891 L6.19216662,6.96224836 C5.89972691,6.99076201 5.60865227,6.91473607 5.36916491,6.75091124 L5.23206473,6.64221439 C4.90649726,6.3459913 4.72578793,5.92286701 4.73691783,5.48284607 L4.73691783,5.48284607 L4.73691783,1.53978607 C4.72554791,1.14257574 4.87251701,0.757132515 5.14546242,0.468331345 C5.41840784,0.179530144 5.79494736,0.0110534731 6.19216662,0 L6.19216662,0 L18.2954685,0 Z M12.0041042,19.4737649 C11.3788098,19.4737649 10.8719086,19.9806662 10.8719086,20.6059606 C10.8719086,21.2312548 11.3788098,21.7381561 12.0041042,21.7381561 C12.6293986,21.7381561 13.1362999,21.2312548 13.1362999,20.6059606 C13.1362999,19.9806662 12.6293986,19.4737649 12.0041042,19.4737649 Z M20.603413,19.4737649 C19.9781188,19.4737649 19.4712175,19.9806662 19.4712175,20.6059606 C19.4712175,21.2312548 19.9781188,21.7381561 20.603413,21.7381561 C21.2287074,21.7381561 21.7356087,21.2312548 21.7356087,20.6059606 C21.7356087,19.9806662 21.2287074,19.4737649 20.603413,19.4737649 Z M3.39658689,19.4737649 C2.77129251,19.4737649 2.26439126,19.9806662 2.26439126,20.6059606 C2.26439126,21.2312548 2.77129251,21.7381561 3.39658689,21.7381561 C4.02188128,21.7381561 4.52878253,21.2312548 4.52878253,20.6059606 C4.52878253,19.9806662 4.02188128,19.4737649 3.39658689,19.4737649 Z M17.9670013,2.44554257 L6.64504489,2.44554257 L6.64504489,4.65558846 L17.9670013,4.65558846 L17.9670013,2.44554257 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
TileDown.displayName = 'TileDown';
export default TileDown;
