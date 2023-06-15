import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DistributeCustom = ({
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
          id="231.分配客户"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="分配客户"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M21.3015385,13.04611 C22.2395728,13.04611 23,13.8102108 23,14.7527767 L23,22.2933333 C23,23.2358993 22.2395728,24 21.3015385,24 L13.4600674,24 C12.522033,24 11.7616059,23.2358993 11.7616059,22.2933333 L11.7616059,14.7527767 C11.7616059,13.8102108 12.522033,13.04611 13.4600674,13.04611 L21.3015385,13.04611 Z M8.11371025,0 C11.3153987,0 13.908559,2.54957827 13.908559,5.69239765 C13.908559,7.80270578 12.737603,9.64582898 10.9996094,10.6285261 C11.0748413,10.6577789 12.209363,11.1204402 13.2281615,11.7964876 L12.0723638,11.7964969 C11.1789977,11.7964969 10.4467267,12.4895587 10.3790123,13.3697885 L10.3739023,13.5031636 L10.3739023,22.7289339 C10.3739023,22.8874813 10.3954178,23.0409793 10.4356751,23.1866404 L1.28390243,23.186218 C0.617883974,23.186218 0.068249648,22.6847859 0.00589136862,22.0443687 L0,21.9227502 L0,18.0802686 C0,15.9880747 0.820591141,14.0090948 2.30964137,12.5124063 C3.14406272,11.6723588 4.13753123,11.033832 5.22550599,10.6285261 C3.48751239,9.64582898 2.3188615,7.80270578 2.3188615,5.69239765 C2.3188615,2.54957827 4.91202174,0 8.11371025,0 Z M20.6077598,19.1695668 L14.9769632,19.1695668 C14.7698221,19.1700374 14.5796799,19.286544 14.4819807,19.4728594 C14.3982386,19.6325582 14.3940191,19.8214135 14.4666887,19.9829553 L14.5094187,20.0611887 L15.7355067,21.9349989 L16.671649,21.2987565 L16.0297283,20.3165554 L20.6077598,20.3165554 L20.6077598,19.1695668 Z M19.2882229,15.7127767 L18.3511077,16.3498656 L18.9940345,17.3305894 L14.4154521,17.3305894 L14.4154521,18.4782093 L20.0445373,18.4782093 C20.2522033,18.4784047 20.4430943,18.3619481 20.5411216,18.1752583 C20.6251448,18.0152384 20.6292328,17.8259176 20.5560898,17.6641684 L20.5130948,17.5858546 L19.2882229,15.7127767 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DistributeCustom.displayName = 'DistributeCustom';
export default DistributeCustom;
