import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const InterestRateCapVolatilitySurface = ({
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
          id="412.利率上限波动率曲面"
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
              d="M18,11.1428571 C21.3137084,11.1428571 24,13.8291487 24,17.1428571 C24,20.4565656 21.3137084,23.1428571 18,23.1428571 C14.6862916,23.1428571 12,20.4565656 12,17.1428571 C12,13.8291487 14.6862916,11.1428571 18,11.1428571 Z M19.7142857,0 C20.1876726,0 20.5714286,0.383755941 20.5714286,0.857142857 L20.571924,9.86770406 C19.7674953,9.58331726 18.9018191,9.42857143 18,9.42857143 C13.7395177,9.42857143 10.2857143,12.8823748 10.2857143,17.1428571 C10.2857143,19.1188931 11.0286817,20.9213997 12.2505078,22.2862683 L0.857142857,22.2857143 C0.383755941,22.2857143 0,21.9019583 0,21.4285714 L0,0.857142857 C0,0.383755941 0.383755941,0 0.857142857,0 L19.7142857,0 Z M20.0654297,17.2901786 C19.5687779,17.2901786 19.1711775,17.4485212 18.8726283,17.7652065 C18.5740792,18.0818918 18.4248047,18.5080915 18.4248047,19.0438058 C18.4248047,19.5292969 18.5643136,19.9206194 18.8433314,20.2177734 C19.1223494,20.5149274 19.492048,20.6635045 19.9524274,20.6635045 C20.4434989,20.6635045 20.8383092,20.5051618 21.1368583,20.1884766 C21.4354074,19.8717913 21.5846819,19.4483817 21.5846819,18.9182478 C21.5846819,18.4020647 21.4514509,18.0016741 21.1849888,17.7170759 C20.9185268,17.4324777 20.5453404,17.2901786 20.0654297,17.2901786 Z M20.6220703,14.0884486 L19.5631976,14.0884486 L15.3570033,20.5756138 L16.4075055,20.5756138 L20.6220703,14.0884486 Z M20.023577,18.0518974 C20.2216797,18.0518974 20.3800223,18.1307199 20.4986049,18.288365 C20.6171875,18.4460101 20.6764788,18.6713169 20.6764788,18.9642857 C20.6764788,19.5892857 20.4532645,19.9017857 20.0068359,19.9017857 C19.5631976,19.9017857 19.3413783,19.6004464 19.3413783,18.9977679 C19.3413783,18.3671875 19.5687779,18.0518974 20.023577,18.0518974 Z M3.42857143,12.8571429 C2.98899785,12.8571429 2.62670814,13.1880345 2.57719521,13.6143248 L2.57142857,13.7142857 L2.57142857,18.8571429 C2.57142857,19.3305297 2.95518451,19.7142857 3.42857143,19.7142857 C3.86814501,19.7142857 4.23043472,19.3833941 4.27994765,18.9571038 L4.28571429,18.8571429 L4.28571429,13.7142857 C4.28571429,13.2408988 3.90195835,12.8571429 3.42857143,12.8571429 Z M7.71428571,10.2857143 C7.27471216,10.2857143 6.9124224,10.6166059 6.86290947,11.0428962 L6.85714286,11.1428571 L6.85714286,18.8571429 C6.85714286,19.3305297 7.24089883,19.7142857 7.71428571,19.7142857 C8.15385926,19.7142857 8.51614903,19.3833941 8.56566196,18.9571038 L8.57142857,18.8571429 L8.57142857,11.1428571 C8.57142857,10.6694703 8.1876726,10.2857143 7.71428571,10.2857143 Z M16.0433873,14.000558 C15.5411552,14.000558 15.1428572,14.1602958 14.8484933,14.4797712 C14.5541295,14.7992467 14.4069476,15.2240513 14.4069476,15.7541853 C14.4069476,16.2396764 14.5457589,16.6303013 14.8233817,16.9260603 C15.1010044,17.2218192 15.4714006,17.3696986 15.9345703,17.3696986 C16.4284319,17.3696986 16.8232422,17.2120536 17.1190011,16.8967634 C17.4147601,16.5814732 17.5626395,16.1615513 17.5626395,15.6369978 C17.5626395,15.1263951 17.4294085,14.7260044 17.1629464,14.4358259 C16.8964844,14.1456473 16.523298,14.000558 16.0433873,14.000558 Z M16.0182757,14.7622767 C16.4479632,14.7622767 16.6628069,15.0650112 16.6628069,15.6704799 C16.6628069,16.2954799 16.4381975,16.6079799 15.9889788,16.6079799 C15.5481306,16.6079799 15.3277065,16.3080357 15.3277065,15.7081473 C15.3277065,15.077567 15.5578962,14.7622767 16.0182757,14.7622767 Z M16.7819559,3.094765 C15.9291159,5.11178408 14.7653556,6.03840077 13.2171746,6.03840077 C12.311655,6.03840077 11.8139913,5.81737629 10.8575908,5.07728157 L10.6726784,4.93235819 L10.4399003,4.75015762 C9.22054072,3.81034431 8.43322363,3.45551904 7.08311229,3.45551904 C4.81427786,3.45551904 3.03274541,4.7987212 1.80019359,7.34026637 C1.59362842,7.76620767 1.77146789,8.27895549 2.19740923,8.48552067 C2.62335053,8.69208592 3.13609838,8.51424642 3.34266355,8.08830506 C4.3096543,6.09435179 5.53591099,5.16980475 7.08311229,5.16980475 C7.97267015,5.16980475 8.4639264,5.38844977 9.41170064,6.12197659 L9.59496677,6.26561897 L9.82928091,6.44901224 C11.0572617,7.39536403 11.8515706,7.75268648 13.2171746,7.75268648 C15.5201161,7.75268648 17.2591918,6.36798841 18.3609013,3.76237786 C18.5452575,3.3263641 18.3412487,2.8234549 17.905235,2.63909872 C17.4692212,2.45474252 16.966312,2.65875127 16.7819559,3.094765 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
InterestRateCapVolatilitySurface.displayName =
  'InterestRateCapVolatilitySurface';
export default InterestRateCapVolatilitySurface;
