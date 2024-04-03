import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SalesPriceManagement = ({
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
          id="1831.销售价格管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M10,4 L10,5 C10,6.0543618 10.8158778,6.91816512 11.8507377,6.99451426 L12,7 L20,7 C21.1045695,7 22,6.1045695 22,5 L22,4 L26.9993054,4 C27.5519738,4 28,4.45127869 28,5.00329963 L28,28.9967004 C28,29.5508075 27.5525308,30 26.9993054,30 L5.00069463,30 C4.44802625,30 4,29.5487213 4,28.9967004 L4,5.00329963 C4,4.44919255 4.44746922,4 5.00069463,4 L10,4 Z M18.1333743,12.3389424 L16.5613999,15.2782676 C16.511974,15.3697946 16.4835375,15.4714946 16.478216,15.575766 C16.4661894,15.4743924 16.4401318,15.3719999 16.3905222,15.2782676 L14.8426009,12.3389424 C14.6722243,12.0154638 14.293387,11.9039019 13.9967313,12.0913666 C13.7000757,12.2788314 13.5988519,12.6934953 13.7702307,13.0179927 L15.117709,15.575766 L13.6760225,15.575766 C13.2986058,15.5902649 13,15.9055091 13,16.2894566 C13,16.6734041 13.2986058,16.9886483 13.6760225,17.0031472 L15.7836809,17.0031472 L15.7836809,18.4310377 L13.6760225,18.4310377 C13.2986058,18.4455366 13,18.7607808 13,19.1447283 C13,19.5286758 13.2986058,19.8439199 13.6760225,19.8584189 L15.7836809,19.8584189 L15.7836809,21.3576275 C15.7836809,21.7121805 16.0978754,22 16.4867349,22 C16.8745921,22 17.1892877,21.711671 17.1892877,21.3576275 L17.1892877,19.8584189 L19.2969461,19.8584189 C19.6743628,19.8439199 19.9729686,19.5286758 19.9729686,19.1447283 C19.9729686,18.7607808 19.6743628,18.4455366 19.2969461,18.4310377 L17.1892877,18.4310377 L17.1892877,17.0031472 L19.2969461,17.0031472 C19.6853044,17.0031472 20,16.6827251 20,16.2894566 C20,15.8956787 19.6853045,15.575766 19.2969461,15.575766 L17.8552596,15.575766 L19.2227822,13.0179927 C19.3966665,12.6940047 19.2934384,12.2788314 18.9932749,12.0913666 C18.6916081,11.9033924 18.3077598,12.0149543 18.1333743,12.3389424 Z M21,2 L21,4 C21,5.1045695 20.1045695,6 19,6 L13,6 C11.8954305,6 11,5.1045695 11,4 L11,2 L21,2 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
SalesPriceManagement.displayName = 'SalesPriceManagement';
export default SalesPriceManagement;
