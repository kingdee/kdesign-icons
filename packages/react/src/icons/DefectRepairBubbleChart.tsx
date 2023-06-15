import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DefectRepairBubbleChart = ({
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
          id="664.缺陷修复气泡图"
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
              d="M4.9854532,0.750577872 C6.13988709,1.76925043 6.33574737,3.49639607 5.4387287,4.74767634 L8.3380178,8.15076635 C9.23792785,7.52965712 10.305849,7.19770573 11.3993119,7.19919709 C12.9353591,7.19919709 14.3238018,7.84117636 15.3066319,8.87194304 L18.5467315,6.32442537 C17.781088,5.39389602 17.8242142,4.03992823 18.6475236,3.16000324 C19.4708331,2.28007826 20.8190251,2.14705277 21.798447,2.84910307 C22.7778688,3.55115335 23.084811,4.87058006 22.5158157,5.93279761 C21.9468204,6.99501517 20.6783281,7.47063968 19.5511624,7.04440208 L15.9978532,9.7671141 C16.5066688,10.5902875 16.7994778,11.5598562 16.7994778,12.5990226 C16.7994778,13.6489886 16.4994687,14.629357 15.9810526,15.4573302 L18.9091426,17.6460595 C20.0165386,16.5701443 21.7597792,16.5104094 22.9382361,17.5079959 C24.1166929,18.5055825 24.3454704,20.2346691 23.4670017,21.5043756 C22.588533,22.7740819 20.8897347,23.1697096 19.5406264,22.4187766 C18.1915182,21.6678435 17.6327317,20.0156115 18.2491224,18.6000286 L15.2970316,16.3357018 C14.2797456,17.3995018 12.8712771,18.0004914 11.3993119,17.9988481 C10.1976062,18.0009991 9.02982575,17.6004976 8.08240996,16.8612849 L4.50750009,20.4515688 C5.08591912,21.5128324 4.78483113,22.8386193 3.80475271,23.5459906 C2.82467426,24.253362 1.47144991,24.1215748 0.646290841,23.2383957 C-0.178868229,22.3552166 -0.218461797,20.9962516 0.553878409,20.0665351 C1.32621862,19.1368186 2.66947507,18.9264792 3.68907494,19.5755971 L7.21478329,16.0117123 C6.42699801,15.0489985 5.99738846,13.8429447 5.99914593,12.5990226 C5.99914593,11.2070676 6.52596213,9.9375086 7.39118872,8.98113951 L4.55430153,5.56604987 C3.23726457,6.36346801 1.53035218,6.03452123 0.604028497,4.80477496 C-0.322295181,3.57502867 -0.167284749,1.84373918 0.962766025,0.798086496 C2.09281677,-0.247566214 3.83101934,-0.268094662 4.9854532,0.750577872 Z M11.9709675,9.99691062 C11.5731484,10.4707555 11.5403294,11.1263374 11.8077127,11.6521444 C11.7873585,11.6685027 11.7678964,11.685941 11.7494102,11.7043841 L9.21211705,14.2417102 C8.93300802,14.5208193 8.92878937,14.9733097 9.20274133,15.2472618 C9.47668513,15.5212056 9.92918365,15.5169951 10.2082845,15.237886 L12.7455859,12.7005598 C12.764029,12.6820709 12.7814673,12.662606 12.7978255,12.6422492 C13.3236325,12.9096407 13.9792061,12.8768216 14.4530509,12.4789861 C14.9611591,12.0524034 15.1178452,11.372456 14.9122324,10.807506 C14.9092622,10.7993298 14.3883185,11.3068587 14.3883185,11.3068587 C14.1295276,11.5656496 13.7388158,11.6791537 13.4069449,11.5392279 C12.7824359,11.2759245 12.6905392,10.5142069 13.122328,10.0824099 L13.6546873,9.55004238 L13.6603584,9.54436309 C13.5979406,9.5207325 13.5339574,9.50146417 13.4688703,9.48669714 C12.9432184,9.3672608 12.3546619,9.53989146 11.9709675,9.99691062 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DefectRepairBubbleChart.displayName = 'DefectRepairBubbleChart';
export default DefectRepairBubbleChart;
