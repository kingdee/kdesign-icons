import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AssignateFiles = ({
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
          id="1992.外派档案"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M21.2173913,3 C21.7696761,3 22.2173913,3.44771525 22.2173913,4 L22.2173913,16.4814815 C22.2173913,17.0133112 22.6456407,17.4444444 23.173913,17.4444444 L26.449618,19.0933262 C26.7870797,19.2631933 27,19.608744 27,19.9865472 L27,28.0403739 C27,28.5764762 26.5736962,29 26.0478237,29 L5.95217629,29 C5.43546885,29 5,28.5703607 5,28.0403739 L5,3.95962613 C5,3.42352376 5.42630385,3 5.95217629,3 L21.2173913,3 Z M12.9804796,16.9669225 C12.5314717,16.788652 12.0532821,16.7274862 11.7301537,16.797578 C10.9902139,16.894959 10.1257701,17.4827068 10.0591606,18.3737113 L10.0591606,19.4759244 C9.91624518,19.4759244 9.73100723,19.5587752 9.79179114,20.2066919 C9.83558481,20.6749117 10.0506298,20.8984529 10.2766787,21.1058991 L10.3812067,21.201333 C10.4332779,21.2493108 10.4846222,21.2983044 10.5332702,21.3511228 C10.8251584,21.668033 10.7612002,22.1734028 11.2170601,22.4318795 C11.2712719,22.4722819 11.3255286,22.5090549 11.3798301,22.5421982 L11.3798086,23.1205579 L9.56226789,23.7593478 C9.17406803,23.8927502 8.81997873,24.6396117 8.5,26 L11.1730745,26 C11.0605551,25.7890284 11.0251048,25.5305601 11.0941297,25.2786149 C11.4953209,23.8081998 11.9452664,22.9692144 12.560048,22.7590915 L13.3058827,22.5009486 C13.4139499,22.4385325 13.3301845,22.3912399 13.1480256,22.3594877 C13.4899199,22.0873492 13.4690312,21.6407841 13.7242895,21.3511228 C13.7863948,21.2807003 13.8545204,21.2170489 13.923589,21.1535265 L14.0272644,21.0575096 L14.0716152,21.0150103 L14.0226337,20.8983853 L13.9091271,20.6075779 C13.8475564,20.4582715 13.8050339,20.3860907 13.7441028,20.3215913 C13.7085193,20.283924 13.67485,20.2506959 13.6272684,20.2067309 L13.3725323,19.9780332 C12.9189837,19.5641273 12.684352,19.1758136 12.6236387,18.5429371 C12.561657,17.8987815 12.6772077,17.4542937 12.939143,17.2351034 L12.98026,17.2030737 Z M15.9272388,14.0007832 L15.8547001,14.0000113 C15.7157103,14.0004334 15.586711,14.0126698 15.4723238,14.0370697 C14.4883432,14.164415 13.3387956,14.9330139 13.2502175,16.0981822 L13.2502175,17.5395484 C13.0601669,17.5395484 12.8138352,17.6478926 12.8946664,18.4951744 C12.9753027,19.3429632 13.4925378,19.5773247 13.8806941,19.9917488 C14.2688504,20.4061729 14.183798,21.067046 14.7900059,21.4050564 C14.7900059,21.4050564 14.8022889,21.4140584 14.8305529,21.4347492 C14.8307544,21.4561269 14.8311789,21.4763126 14.8318265,21.4953063 L14.8324457,21.511767 C14.8133475,21.5486431 14.8031308,21.5882515 14.8031308,21.6305921 L14.8031308,22.4007555 C14.8031308,22.4007555 14.2872175,22.5845555 13.7119615,22.7878728 L13.2373175,22.9552459 C12.9765607,23.0469476 12.7292702,23.1334247 12.5383244,23.1992487 C12.1996195,23.3160092 11.8817534,23.8087259 11.5847262,24.6773988 C11.51977,24.8675779 11.5154303,25.0637949 11.5613797,25.2450611 L11.5157197,25.4137871 C11.4516907,25.659184 11.5845906,25.9139663 11.8124805,25.9828353 C11.8500358,25.9941847 11.888854,26 11.92786,26 L15.998,25.999 L20.0715772,26 C20.3082697,26 20.5,25.793204 20.5,25.5383033 C20.5,25.4962199 20.4946287,25.4543362 20.4841723,25.4137871 C20.4692816,25.3564292 20.4543466,25.300172 20.4405092,25.2468617 C20.4605372,25.1679816 20.47119,25.0853601 20.4712115,25.0002527 C20.4712386,24.8928964 20.4539782,24.7862362 20.419164,24.6846768 C20.1258618,23.8114776 19.8168342,23.3163349 19.492081,23.1992487 C18.9022257,23.0245236 17.1954511,22.400732 17.1954511,22.400732 L17.1958408,21.5878293 C17.1936664,21.5599792 17.1866728,21.5334563 17.1751564,21.5083228 L17.164,21.491 L17.1729537,21.4337759 C17.2001114,21.4157377 17.2148374,21.4050564 17.2148374,21.4050564 C17.8210452,21.067046 17.7525336,20.4064385 18.1241492,19.9917488 C18.4957972,19.5773368 19.0295622,19.3422268 19.1101877,18.494945 C19.1910405,17.6471562 18.7303571,17.5395484 18.7303571,17.5395484 L18.7303571,15.9162324 C18.5813131,14.7521865 17.0890536,14.0705297 16.0263827,14.0051776 L15.9973572,14.0035144 C15.9505779,14.0010426 15.9047065,13.9998706 15.8547001,14.0000113 Z M26,12.7515405 C26.5522847,12.7515405 27,13.1992557 27,13.7515405 L27,17.002354 C27,17.1542257 26.9654082,17.3041024 26.8988491,17.4406121 C26.6568058,17.9370328 26.0581625,18.1432464 25.5617418,17.9012031 L23.5617418,16.926049 C23.2180466,16.7584712 23,16.4095724 23,16.0271999 L23,13.7515405 C23,13.1992557 23.4477153,12.7515405 24,12.7515405 L26,12.7515405 Z M26,7.87577023 C26.5522847,7.87577023 27,8.32348548 27,8.87577023 L27,10.7763864 C27,11.3286712 26.5522847,11.7763864 26,11.7763864 L24,11.7763864 C23.4477153,11.7763864 23,11.3286712 23,10.7763864 L23,8.87577023 C23,8.32348548 23.4477153,7.87577023 24,7.87577023 L26,7.87577023 Z M19.5,5 L7.5,5 C7.22385763,5 7,5.22385763 7,5.5 L7,7.5 C7,7.77614237 7.22385763,8 7.5,8 L19.5,8 C19.7761424,8 20,7.77614237 20,7.5 L20,5.5 C20,5.22385763 19.7761424,5 19.5,5 Z M26,3 C26.5522847,3 27,3.44771525 27,4 L27,5.90061618 C27,6.45290093 26.5522847,6.90061618 26,6.90061618 L24,6.90061618 C23.4477153,6.90061618 23,6.45290093 23,5.90061618 L23,4 C23,3.44771525 23.4477153,3 24,3 L26,3 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
AssignateFiles.displayName = 'AssignateFiles';
export default AssignateFiles;
