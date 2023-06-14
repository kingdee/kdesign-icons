import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Disabled = ({
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
          id="1405-已禁用"
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
              d="M2.28571428,0 L24,0 L24,0 L0,24 L0,2.28571428 C0,1.02334915 1.02334915,0 2.28571428,0 Z M7.63061971,13.6460293 C7.87132013,13.4053289 8.02192229,13.1738356 8.08242622,12.9515494 C8.14293014,12.7292633 8.11103405,12.5145401 7.9867379,12.3073799 C7.86244183,12.1002197 7.6727094,11.807236 7.41754066,11.4284288 C7.19393916,11.546806 6.91641026,11.6717598 6.58495399,11.8032901 C6.8756359,12.1728902 7.06076479,12.4158924 7.14034061,12.5322967 C7.2199164,12.6487009 7.24096123,12.7637899 7.20347513,12.8775636 C7.16598898,12.9913373 7.08608434,13.1093857 6.96376118,13.2317089 L6.96376118,13.2317089 L5.49193735,14.7035327 C5.24202982,14.9534403 4.98423048,14.9455485 4.71853932,14.6798573 L4.71853932,14.6798573 L4.00827581,13.9695938 L6.50603582,11.4718338 L4.59227026,9.55806823 L1.40397629,12.7463622 L1.94456573,13.2869516 L4.54491934,10.686598 L5.37750602,11.5191847 L3.46768637,13.4290044 L3.08493326,13.0462512 L2.50093884,13.6302457 L4.18978762,15.3190945 C4.77904325,15.9083501 5.3551459,15.9215031 5.91809549,15.3585535 L5.91809549,15.3585535 L7.63061971,13.6460293 Z M8.79466267,8.51240251 C8.81965342,8.11912697 8.79334738,7.72453613 8.7157445,7.32862999 L8.7157445,7.32862999 L9.30763075,7.92051624 L9.78113976,7.44700723 L9.18333463,6.8492021 C9.5910785,6.90970603 9.99158822,6.91036368 10.3848638,6.8511751 C10.3480353,6.66177144 10.316468,6.43816999 10.2901619,6.18037066 C9.84295898,6.33294578 9.3911525,6.39542268 8.93474242,6.36780125 L8.93474242,6.36780125 L9.55227708,5.75026661 L9.15768624,5.35567577 L8.42374726,6.08961475 L8.05283191,5.71869938 L7.5793229,6.19220839 L7.95023827,6.56312376 L7.37413565,7.13922636 L7.76872649,7.5338172 L8.21856002,7.08398366 C8.26591094,7.51014175 8.23565897,7.97444366 8.12780417,8.47688935 C8.3803423,8.48215054 8.60262847,8.49398822 8.79466267,8.51240251 Z M6.99138257,10.2525481 C7.03347221,9.91056936 7.02229217,9.54951876 6.9578423,9.16939622 L6.9578423,9.16939622 L7.50829654,9.71985046 L7.98180552,9.24634145 L7.46489155,8.72942748 C7.67928593,8.67813065 7.89104966,8.63735623 8.10018281,8.6071043 L8.10018281,8.6071043 L8.01337279,8.00732623 C7.73715924,8.07309132 7.48330579,8.14017185 7.2518125,8.20856753 L7.2518125,8.20856753 L7.30310928,8.56764521 L7.01900388,8.28353981 L7.61089015,7.69165354 L7.21629934,7.2970627 L6.62441304,7.88894897 L6.25349767,7.5180336 L5.77998866,7.99154261 L6.15090403,8.36245798 L5.4682619,9.0451001 L5.86285274,9.43969094 L6.43500946,8.86753423 C6.47315326,9.30026885 6.4376401,9.73563408 6.3284699,10.1736299 C6.54944081,10.1894136 6.77041169,10.2157196 6.99138257,10.2525481 Z M10.9096696,7.33652184 L10.5111328,6.93798506 L7.14921886,10.299899 L7.54775563,10.6984358 L10.9096696,7.33652184 Z M10.1362715,11.4086992 C10.5203399,11.0246308 10.752162,10.7757098 10.8317379,10.661936 C10.9113137,10.5481624 10.9455115,10.4218933 10.9343315,10.2831289 C10.9231514,10.1443644 10.8386432,9.99606406 10.6808069,9.83822772 L10.6808069,9.83822772 L10.1796765,9.33709735 L11.793553,7.72322083 L11.3713408,7.30100863 L7.44910793,11.2232415 L7.87132013,11.6454537 L9.6469789,9.86979499 L10.0336779,10.256494 C10.146794,10.3696101 10.1533704,10.4761496 10.0534074,10.5761126 C9.90346291,10.7260571 9.74496893,10.8740287 9.5779255,11.0200272 C9.61606927,10.8924429 9.65355538,10.760255 9.69038388,10.6234635 L9.69038388,10.6234635 L9.01168764,10.5445453 C8.84332886,11.1706295 8.64208757,11.7243719 8.40796368,12.2057728 C8.61578148,12.2399706 8.85385128,12.2912674 9.12217308,12.3596631 C9.27474818,11.9861172 9.42469272,11.5481213 9.57200666,11.0456757 C9.7219511,11.1351163 9.91003946,11.2561241 10.1362715,11.4086992 Z M12.5038165,8.97801967 L12.3262506,8.31116117 C11.7080584,8.52424025 11.1464241,8.7465264 10.6413478,8.97801967 L10.6413478,8.97801967 L10.7991841,9.60147322 C11.3542419,9.36208812 11.9224527,9.15427025 12.5038165,8.97801967 L12.5038165,8.97801967 Z M13.5139691,8.0941362 C13.4653029,7.68244646 13.1713327,7.16619012 12.6320586,6.54536717 L12.6320586,6.54536717 L13.4863477,5.691078 L14.5912021,6.79593235 L15.1475751,6.23955929 L14.0427208,5.13470494 L14.8634697,4.31395598 L15.2225474,4.67303366 C15.3830143,4.83350059 15.3803838,4.99659814 15.2146556,5.16232627 C15.1909801,5.18600174 15.0357744,5.32542384 14.7490385,5.58059258 C14.9884235,5.69896985 15.2317546,5.8370766 15.4790315,5.99491294 C15.7394614,5.74237481 15.9400451,5.52929578 16.0807825,5.35567582 C16.2215199,5.18205583 16.2843256,5.01139529 16.2691996,4.84369416 C16.2540737,4.67599308 16.1629889,4.5086208 15.9959454,4.34157737 L15.9959454,4.34157737 L12.8984074,1.2440393 L9.57989846,4.56254822 L11.4384213,6.42107105 C12.1855133,7.15237939 12.597203,7.76925643 12.6734906,8.27170207 C12.944443,8.20067573 13.2246024,8.1414871 13.5139691,8.0941362 Z M11.9790108,4.18374103 L11.1424782,5.02027361 L10.6531855,4.53098098 L11.4897181,3.6944484 L11.9790108,4.18374103 Z M13.3561328,2.80661902 L12.5353838,3.62736797 L12.0460912,3.13807531 L12.8668401,2.31732638 L13.3561328,2.80661902 Z M12.9773256,5.18205583 L12.140793,6.01858841 L11.6515003,5.52929578 L12.4880329,4.6927632 L12.9773256,5.18205583 Z M14.3544476,3.80493382 L13.5336986,4.62568277 L13.044406,4.13639014 L13.8651549,3.31564118 L14.3544476,3.80493382 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Disabled.displayName = 'Disabled';
export default Disabled;
