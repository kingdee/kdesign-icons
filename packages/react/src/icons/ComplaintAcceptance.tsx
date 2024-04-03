import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ComplaintAcceptance = ({
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
          id="1969.申诉受理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M25,18 C28.3137085,18 31,20.6862915 31,24 C31,27.3137085 28.3137085,30 25,30 C21.6862915,30 19,27.3137085 19,24 C19,20.6862915 21.6862915,18 25,18 Z M9.185,4 L9.18518519,5 C9.18518519,6.0543618 10.001063,6.91816512 11.0359228,6.99451426 L11.1851852,7 L19.6296296,7 C20.7341991,7 21.6296296,6.1045695 21.6296296,5 L21.629,4 L25.8148148,4 C26.3670996,4 26.8148148,4.44771525 26.8148148,5 L26.8149788,17.2375904 C26.2361386,17.0826242 25.6277183,17 25,17 C21.1340068,17 18,20.1340068 18,24 C18,25.9595103 18.8051427,27.7309694 20.1026501,29.0015996 L6,29 C5.44771525,29 5,28.5522847 5,28 L5,5 C5,4.44771525 5.44771525,4 6,4 L9.185,4 Z M22,23 C21.4477153,23 21,23.4477153 21,24 C21,24.5522847 21.4477153,25 22,25 C22.5522847,25 23,24.5522847 23,24 C23,23.4477153 22.5522847,23 22,23 Z M25,23 C24.4477153,23 24,23.4477153 24,24 C24,24.5522847 24.4477153,25 25,25 C25.5522847,25 26,24.5522847 26,24 C26,23.4477153 25.5522847,23 25,23 Z M28,23 C27.4477153,23 27,23.4477153 27,24 C27,24.5522847 27.4477153,25 28,25 C28.5522847,25 29,24.5522847 29,24 C29,23.4477153 28.5522847,23 28,23 Z M14.2445028,9.54671288 L10.7931483,12.9980674 C10.5978862,13.1933295 10.5978862,13.509912 10.7931483,13.7051742 L11.0793582,13.9913841 L11.7191215,13.9913841 L13.6413408,15.9127952 L13.6047396,15.9443457 L10.4732667,19.0758185 C10.2780045,19.2710807 10.2780045,19.5876632 10.4732667,19.7829253 L11.0456865,20.3553451 C11.2409486,20.5506072 11.5575311,20.5506072 11.7527932,20.3553451 L14.9011085,17.2062024 L14.9169223,17.1879313 L16.5173461,18.7896087 L16.5173461,19.4293719 L16.803556,19.7155818 C16.9988181,19.910844 17.3154006,19.910844 17.5106627,19.7155818 L20.9620173,16.2642273 C21.1572794,16.0689652 21.1572794,15.7523827 20.9620173,15.5571205 L20.6758074,15.2709106 L20.0360441,15.2709106 L15.2378195,10.472686 L15.2378195,9.83292276 L14.9516096,9.54671288 C14.7563475,9.35145073 14.439765,9.35145073 14.2445028,9.54671288 Z M20.6296296,3 L20.6296296,5 C20.6296296,5.55228475 20.1819144,6 19.6296296,6 L11.1851852,6 C10.6329004,6 10.1851852,5.55228475 10.1851852,5 L10.1851852,3 L20.6296296,3 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
ComplaintAcceptance.displayName = 'ComplaintAcceptance';
export default ComplaintAcceptance;
