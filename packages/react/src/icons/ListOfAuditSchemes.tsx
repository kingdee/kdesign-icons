import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ListOfAuditSchemes = ({
  size = '1em',
  color = 'currentColor',
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
          id="683.审核方案列表"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M5.5,1.83333857 L5.5,3.01191 C5.5,3.81778572 6.10663428,4.48198143 6.88816856,4.57276285 L7.07142856,4.58333858 L14.9285714,4.58333858 C15.7344628,4.58333858 16.3986586,3.97670428 16.4894243,3.19517 L16.5,3.01191 L16.5,1.83333857 L20.4285714,1.83333857 C21.29644,1.83333857 22,2.53688285 22,3.40476713 L22,24.0952328 C22,24.9631171 21.29644,25.6666614 20.4285714,25.6666614 L1.57142856,25.6666614 C0.703560011,25.6666614 0,24.9631171 0,24.0952328 L0,3.40476713 C0,2.53688285 0.703560011,1.83333857 1.57142856,1.83333857 L5.5,1.83333857 Z M16.2942214,18.49386 L6.67388857,18.49386 C6.51955857,18.49386 6.41666142,18.5946829 6.41666142,18.7459014 L6.41666142,18.9979586 C6.41666142,19.1491771 6.51955857,19.25 6.67388857,19.25 L16.2427728,19.25 C16.3971028,19.25 16.5,19.1491771 16.5,18.9979586 L16.5,18.7459014 C16.5,18.5946829 16.3971028,18.49386 16.2942214,18.49386 Z M11.4583386,9.16812286 C9.81207857,9.11771143 8.47449429,10.37795 8.47449429,11.9910528 C8.47449429,12.64637 8.73172142,13.2512914 9.09182999,13.7553743 C9.70918142,14.71316 10.73809,15.5197114 9.09182999,16.7799343 L7.54846714,16.7799343 C7.23979142,16.7799343 7.08546141,16.9311686 7.08546141,17.2336214 L7.08546141,17.8889543 C7.08546141,18.1409957 7.29124001,18.0905843 7.59991572,18.0905843 L15.6254214,18.0905843 C15.8826486,18.0401728 15.8826486,18.1409957 15.8826486,17.8385428 L15.8826486,17.18321 C15.8826486,16.8303457 15.7797671,16.7295386 15.4196428,16.7295386 L13.87628,16.7295386 C13.6704857,16.5783043 13.6190529,16.3766586 13.5676043,16.3262628 C12.6415771,15.3180657 13.1560314,14.6627486 13.7733828,13.7553743 C13.8248314,13.6545671 13.9277286,13.5537443 14.03061,13.40251 C14.2878372,12.9992343 14.3907343,12.4951514 14.3907343,12.0414643 C14.3907343,10.4787728 13.1045986,9.16812286 11.4583386,9.16812286 Z M15.5833386,0 L15.5833386,2.09523284 C15.5833386,2.96311715 14.8797786,3.66666143 14.01191,3.66666143 L7.98809,3.66666143 C7.12022143,3.66666143 6.41666142,2.96311715 6.41666142,2.09523284 L6.41666142,0 L15.5833386,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ListOfAuditSchemes.displayName = 'ListOfAuditSchemes';
export default ListOfAuditSchemes;
