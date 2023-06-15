import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const GeneralLedgerTransactionManagement = ({
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
          id="960.总账往来管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 1.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M21.7,16.8 C25.179392,16.8 28,19.6206066 28,23.1 C28,26.5793934 25.179392,29.4 21.7,29.4 C18.220608,29.4 15.4,26.5793934 15.4,23.1 C15.4,19.6206066 18.220608,16.8 21.7,16.8 Z M19.6,0 L19.599748,15.6899148 C16.367974,16.6040966 14,19.575514 14,23.1 C14,24.3605306 14.30289,25.5503178 14.839874,26.600546 L3.230766,26.6 C2.45757399,26.6 1.83076599,25.973199 1.83076599,25.2 L1.82979999,22.4 L3.5,22.4 C4.59157999,22.4 5.48863,21.5671568 5.59038201,20.502244 L5.59999999,20.3 C5.59999999,19.1402022 4.65980201,18.2 3.5,18.2 L1.82979999,18.2 L1.82979999,15.4 L3.5,15.4 C4.59157999,15.4 5.48863,14.5671568 5.59038201,13.502244 L5.59999999,13.3 C5.59999999,12.2084256 4.76715399,11.3113714 3.70224401,11.2096138 L3.5,11.2 L1.82979999,11.2 L1.82979999,8.40000001 L3.5,8.40000001 C4.59157999,8.40000001 5.48863,7.56715681 5.59038201,6.50224401 L5.59999999,6.29999999 C5.59999999,5.20842559 4.76715399,4.31137141 3.70224401,4.20961381 L3.5,4.20000001 L1.82979999,4.20000001 L1.83076599,1.40000001 C1.83076599,0.626801003 2.45757399,0 3.230766,0 L19.6,0 Z M21.7,19.6 L18.9,19.6 C18.513404,19.6 18.2,19.9134012 18.2,20.3 L18.2,20.3 L18.2,23.1 C18.2,23.4865988 18.513404,23.8 18.9,23.8 C19.286596,23.8 19.6,23.4865988 19.6,23.1 L19.6,23.1 L19.6,21 L21,21 L21,25.9 C21,26.2865988 21.313404,26.6 21.7,26.6 L21.7,26.6 L24.5,26.6 C24.886596,26.6 25.2,26.2865988 25.2,25.9 L25.2,25.9 L25.2,23.1 C25.2,22.7134012 24.886596,22.4 24.5,22.4 C24.113404,22.4 23.8,22.7134012 23.8,23.1 L23.8,23.1 L23.8,25.2 L22.4,25.2 L22.4,20.3 C22.4,19.9134012 22.086596,19.6 21.7,19.6 L21.7,19.6 Z M3.5,19.6 C3.88659601,19.6 4.20000001,19.9134012 4.20000001,20.3 C4.20000001,20.6865988 3.88659601,21 3.5,21 L0.700000006,21 C0.313404,21 0,20.6865988 0,20.3 C0,19.9134012 0.313404,19.6 0.700000006,19.6 L3.5,19.6 Z M13.57909,11.2 L8.82090999,11.2 C8.61982802,11.2 8.45422199,11.3356768 8.41100399,11.517898 L8.40000001,11.6124736 L8.40000001,12.1875264 C8.40000001,12.3742206 8.53844599,12.543909 8.724394,12.5885816 L8.82090999,12.6 L10.5,12.6 L10.5,13.9986 L8.82090999,14 C8.61982802,14 8.45422199,14.1356768 8.41100399,14.317898 L8.40000001,14.4124736 L8.40000001,14.9875264 C8.40000001,15.1742206 8.53844599,15.343909 8.724394,15.3885816 L8.82090999,15.4 L10.5,15.3986 L10.5,17.9169214 C10.5,18.051572 10.58393,18.1583878 10.69817,18.1902518 L10.769934,18.2 L11.630066,18.2 C11.747344,18.2 11.856614,18.1119876 11.88978,17.9921756 L11.9,17.9169214 L11.9,15.3986 L13.57909,15.4 C13.780172,15.4 13.945778,15.2643232 13.988996,15.082102 L14,14.9875264 L14,14.4124736 C14,14.2257794 13.861554,14.056091 13.675606,14.0114184 L13.57909,14 L11.9,13.9986 L11.9,12.6 L13.57909,12.6 C13.780172,12.6 13.945778,12.4643232 13.988996,12.282102 L14,12.1875264 L14,11.6124736 C14,11.3946644 13.811546,11.2 13.57909,11.2 Z M22.4,0 C23.173192,0 23.8,0.626801003 23.8,1.40000001 L23.800252,15.6899148 C23.132606,15.501059 22.428112,15.4 21.7,15.4 C21.464226,15.4 21.23093,15.4105966 21.000546,15.4313404 L21,0 L22.4,0 Z M3.5,12.6 C3.88659601,12.6 4.20000001,12.9134012 4.20000001,13.3 C4.20000001,13.6865988 3.88659601,14 3.5,14 L0.700000006,14 C0.313404,14 0,13.6865988 0,13.3 C0,12.9134012 0.313404,12.6 0.700000006,12.6 L3.5,12.6 Z M9.79999999,8.40000001 L8.81246802,8.40000001 L8.73546801,8.406125 C8.59845001,8.4302106 8.56419201,8.522843 8.64789799,8.6395162 L8.69965601,8.69964902 L10.900344,10.900351 L10.977022,10.961097 C11.113354,11.0453882 11.28743,11.044985 11.423314,10.9608632 L11.499656,10.900351 L13.700344,8.69964902 L13.751948,8.63926 C13.834506,8.5222214 13.79476,8.43003699 13.66169,8.40608719 L13.587532,8.40000001 L12.6,8.40000001 L11.2,9.79999999 L9.79999999,8.40000001 Z M3.5,5.59999999 C3.88659601,5.59999999 4.20000001,5.9134012 4.20000001,6.29999999 C4.20000001,6.68659879 3.88659601,7 3.5,7 L0.700000006,7 C0.313404,7 0,6.68659879 0,6.29999999 C0,5.9134012 0.313404,5.59999999 0.700000006,5.59999999 L3.5,5.59999999 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
GeneralLedgerTransactionManagement.displayName =
  'GeneralLedgerTransactionManagement';
export default GeneralLedgerTransactionManagement;
