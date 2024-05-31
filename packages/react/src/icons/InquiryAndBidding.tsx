import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const InquiryAndBidding = ({
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
          id="1819.询价与竞价"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M15.0862029,2 C22.3135132,2 28.1724057,7.88210402 28.1724057,15.1380471 C28.1724057,18.3174609 27.047485,21.2330945 25.1754347,23.50566 L29.7879859,28.9094199 C30.1103366,29.2870156 30.0660314,29.8543267 29.6889685,30.1773004 L28.981226,30.7835181 C28.5966469,31.1083048 28.0288141,31.060417 27.7081218,30.6806522 L23.2520986,25.404978 C21.0137448,27.2017544 18.1749415,28.2760941 15.0862029,28.2760941 C7.85889259,28.2760941 2,22.3939901 2,15.1380471 C2,7.88210402 7.85889259,2 15.0862029,2 Z M15.0862029,4.71821663 C9.35419817,4.71821663 4.70749025,9.38333362 4.70749025,15.1380471 C4.70749025,20.8927605 9.35419817,25.5578775 15.0862029,25.5578775 C20.8182076,25.5578775 25.4649155,20.8927605 25.4649155,15.1380471 C25.4649155,9.38333362 20.8182076,4.71821663 15.0862029,4.71821663 Z M8.3149805,11.8724634 C8.45302941,11.8724634 8.58922808,11.9042204 8.71304038,11.9652779 L14.1330144,14.6381138 C14.4403532,14.7896766 14.6349545,15.102621 14.6349545,15.4452993 L14.6349545,22.0328861 C14.6349545,22.5299424 14.2320108,22.9328861 13.7349545,22.9328861 C13.5774328,22.9328861 13.4226699,22.8915429 13.2861333,22.8129883 L7.86615926,19.6946798 C7.58703422,19.534089 7.4149805,19.2366027 7.4149805,18.9145775 L7.4149805,12.7724634 C7.4149805,12.2754071 7.81792422,11.8724634 8.3149805,11.8724634 Z M21.8574252,11.8724634 C22.3544815,11.8724634 22.7574252,12.2754071 22.7574252,12.7724634 L22.7574252,18.9145775 C22.7574252,19.2366027 22.5853715,19.534089 22.3062465,19.6946798 L16.8862725,22.8129883 C16.7497358,22.8915429 16.5949729,22.9328861 16.4374512,22.9328861 C15.940395,22.9328861 15.5374512,22.5299424 15.5374512,22.0328861 L15.5374512,15.4452993 C15.5374512,15.102621 15.7320526,14.7896766 16.0393914,14.6381138 L21.4593654,11.9652779 C21.5831777,11.9042204 21.7193763,11.8724634 21.8574252,11.8724634 Z M15.4548427,7.11034347 L21.9627872,10.0748706 C22.1889554,10.1778957 22.2887826,10.4447596 22.1857575,10.6709278 C22.1407593,10.7697112 22.0615706,10.8488999 21.9627872,10.8938981 L15.4548427,13.8584252 C15.2178339,13.9663885 14.9456775,13.9663885 14.7086687,13.8584252 L8.20072417,10.8938981 C7.97455596,10.790873 7.87472877,10.5240091 7.97775389,10.2978408 C8.02275211,10.1990575 8.10194083,10.1198688 8.20072417,10.0748706 L14.7086687,7.11034347 C14.9456775,7.00238019 15.2178339,7.00238019 15.4548427,7.11034347 Z"
            id="形状结合"
            fill={fill}
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
InquiryAndBidding.displayName = 'InquiryAndBidding';
export default InquiryAndBidding;