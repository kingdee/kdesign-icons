import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ApitwoOne = ({
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
          id="1279Api21"
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
              d="M10.1590974,0.528167552 L10.171279,0.544503219 L11.7175294,2.65087816 C11.8113452,2.64808356 11.9055086,2.64667635 12,2.64667635 C12.0708686,2.64667635 12.1415526,2.6474679 12.2120439,2.64904266 L12.2824706,2.65087816 L13.8287211,0.544503219 C14.2272922,0.00155089922 14.9660685,-0.158114304 15.5517056,0.169062707 L15.5694048,0.179126298 L20.4305952,2.99174715 C21.0130882,3.32876992 21.2530219,4.04696827 20.9932137,4.66640072 L20.9851877,4.68514068 L19.9386243,7.0789461 C20.0238671,7.21675635 20.1056366,7.35695073 20.1838102,7.49940654 L20.2225967,7.57082232 L22.8139087,7.85936251 C23.4823998,7.9337984 23.9897666,8.49513523 24,9.16698657 L24,9.18737915 L24,14.8126209 C24,15.4866664 23.4993181,16.0539993 22.8341164,16.1382332 L22.8139087,16.1406375 L20.2225967,16.4291777 C20.1456252,16.5723839 20.0650374,16.7133491 19.9809557,16.8519507 L19.9386243,16.9210539 L20.9851877,19.3148593 C21.2551076,19.9322475 21.023698,20.6532495 20.4481415,20.9979238 L20.4305952,21.0082529 L15.5694048,23.8208737 C14.9869118,24.1578965 14.2462962,24.007031 13.8409026,23.4718324 L13.8287211,23.4554968 L12.2824706,21.3491218 C12.1886548,21.3519165 12.0944914,21.3533236 12,21.3533236 C11.9291314,21.3533236 11.8584474,21.3525321 11.7879561,21.3509574 L11.7175294,21.3491218 L10.171279,23.4554968 C9.77270781,23.9984491 9.03393149,24.1581143 8.4482944,23.8309373 L8.4305952,23.8208737 L3.5694048,21.0082529 C2.9869118,20.6712301 2.7469781,19.9530317 3.00678625,19.3335993 L3.01481236,19.3148593 L4.06137574,16.9210539 C3.97613286,16.7832436 3.89436339,16.6430493 3.81618988,16.5005935 L3.77740337,16.4291777 L1.18609132,16.1406375 C0.517600179,16.0662016 0.0102333952,15.5048648 0,14.8330134 L0,14.8126209 L0,9.18737915 C0,8.51333358 0.500681856,7.94600069 1.16588367,7.86176684 L1.18609132,7.85936251 L3.77740337,7.57082232 C3.85437484,7.42761613 3.93496266,7.28665088 4.01904433,7.14804933 L4.06137574,7.0789461 L3.01481236,4.68514068 C2.74489236,4.0677525 2.97630195,3.34675046 3.55185848,3.00207613 L3.5694048,2.99174715 L8.4305952,0.179126298 C9.01308823,-0.157896499 9.75370378,-0.00703103998 10.1590974,0.528167552 Z M15.6432439,2.4 L13.7845706,4.84864814 L12.2264674,4.80376236 C12.1135974,4.80105198 12.1135974,4.80105198 12,4.8005058 C11.891812,4.801026 11.8866601,4.80105075 11.7889135,4.80339323 L11.7735326,4.80376236 L10.2154294,4.84864814 L8.35675615,2.4 L5.24324388,4.14215437 L6.50253018,6.92773204 L5.67966828,8.214256 C5.613614,8.31753019 5.5502805,8.42238623 5.4897345,8.52872538 L5.45374193,8.592706 L4.71470669,9.92243924 L1.6,10.2578456 L1.6,13.7421544 L4.71470669,14.0775608 L5.45374193,15.407294 C5.51317028,15.5142224 5.57539942,15.6196875 5.64036273,15.7235905 L5.67966828,15.785744 L6.50253018,17.072268 L5.24324388,19.8578456 L8.35675615,21.6 L10.2154294,19.1513519 L11.7735326,19.1962376 C11.8864026,19.198948 11.8864026,19.198948 12,19.1994942 C12.108188,19.198974 12.1133399,19.1989492 12.2110865,19.1966068 L12.2264674,19.1962376 L13.7845706,19.1513519 L15.6432439,21.6 L18.7567561,19.8578456 L17.4974698,17.072268 L18.3203318,15.785744 C18.386386,15.6824698 18.4497195,15.5776138 18.5102655,15.4712746 L18.5462581,15.407294 L19.2852933,14.0775608 L22.4,13.7421544 L22.4,10.2578456 L19.2852933,9.92243924 L18.5462581,8.592706 C18.4868297,8.48577761 18.4246006,8.38031252 18.3596373,8.27640955 L18.3203318,8.214256 L17.4974698,6.92773204 L18.7567561,4.14215437 L15.6432439,2.4 Z M9.02500004,9.02733332 L11.05,14.2023334 L9.97499999,14.2023334 L9.5,12.9523333 L7.37499999,12.9523333 L6.92500004,14.2023334 L5.85,14.2023334 L7.87499999,9.02733332 L9.02500004,9.02733332 Z M13.775,9.02733332 L13.8113275,9.02848333 C15.601,9.09283333 15.601,9.09283333 15.7,10.6273333 C15.7,12.3273333 15.7,12.3273333 13.7,12.3273333 L13.7,12.3273333 L12.6,12.3273333 L12.6,14.2023334 L11.6,14.2023334 L11.6,9.02733332 L13.775,9.02733332 Z M17.575,9.02733332 L17.575,14.2023334 L16.575,14.2023334 L16.575,9.02733332 L17.575,9.02733332 Z M8.45,9.82733332 L8.42500004,9.82733332 L8.42488663,9.832322 C8.42261906,9.88447621 8.42261906,9.88447621 8.37499999,10.0273333 C8.32500004,10.2273333 8.32500004,10.2273333 8.3,10.3023334 C8.27499999,10.3523333 8.27499999,10.3523333 7.62500004,12.2023334 L7.62500004,12.2023334 L9.3,12.2023334 C8.62500004,10.3273333 8.62500004,10.3273333 8.6,10.2773333 C8.5,10.0273333 8.5,10.0273333 8.45,9.82733332 L8.45,9.82733332 Z M13.6,9.80233336 L12.6,9.80233336 L12.6,11.5773333 L13.6,11.5773333 C14.675,11.5523333 14.675,11.5523333 14.675,10.6523333 C14.625,9.82733332 14.625,9.82733332 13.6,9.80233336 L13.6,9.80233336 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ApitwoOne.displayName = 'ApitwoOne';
export default ApitwoOne;
