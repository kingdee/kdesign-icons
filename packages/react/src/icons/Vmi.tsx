import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Vmi = ({
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
          id="1835.VMI管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M10,4 L10,5 C10,6.0543618 10.8158778,6.91816512 11.8507377,6.99451426 L12,7 L20,7 C21.1045695,7 22,6.1045695 22,5 L22,4 L26.9993054,4 C27.5519738,4 28,4.45127869 28,5.00329963 L28,28.9967004 C28,29.5508075 27.5525308,30 26.9993054,30 L5.00069463,30 C4.44802625,30 4,29.5487213 4,28.9967004 L4,5.00329963 C4,4.44919255 4.44746922,4 5.00069463,4 L10,4 Z M14.1935484,13 L13.1788536,13 L11.8241599,17.9431567 C11.642562,18.6029624 11.4026407,18.9328652 11.1037332,18.9328652 C10.8406151,18.9328652 10.6185885,18.6076753 10.4376534,17.9572954 L9.05578627,13.0006733 L8,13.0006733 L9.59925439,18.7712802 C9.71126185,19.1725498 9.90744058,19.4876407 10.1884534,19.714533 C10.4270492,19.9043955 10.7213173,20 11.0719205,20 C11.4284886,20 11.7320354,19.9077618 11.982561,19.7239588 C12.2847823,19.5031259 12.4962046,19.1745696 12.6168281,18.7389632 L14.1935484,13 Z M20.7130917,13 C20.4413702,13 20.1958985,13.0855452 19.9759672,13.2559672 C19.7042457,13.4658201 19.5204966,13.7812679 19.4233012,14.2016422 L18.5258397,18.0531793 C18.4932047,18.1808287 18.4258065,18.2449876 18.3222259,18.2449876 C18.2150981,18.2449876 18.1427336,18.1614474 18.1037136,17.9936987 L17.2552045,14.3386481 C17.1814211,14.0158488 17.0969959,13.7625549 17.0033477,13.5801031 C16.9265084,13.4388021 16.8151421,13.3167133 16.678417,13.2238877 C16.4783505,13.0842085 16.2286221,13.0140348 15.9313602,13.0140348 C15.5957876,13.0140348 15.3240661,13.1082681 15.116905,13.2974031 C14.8451835,13.5440138 14.7096774,13.870823 14.7096774,14.2751575 L14.7096774,20 L15.9129143,20 L15.9129143,14.5224365 C15.9129143,14.4014703 15.9533533,14.3399847 16.0342312,14.3399847 C16.0959539,14.3399847 16.1406496,14.400802 16.1697373,14.5224365 L16.6982818,16.9303991 C16.8983483,17.8379798 17.047334,18.4107313 17.1445294,18.6479855 C17.2864206,18.998186 17.4786831,19.2354401 17.7213169,19.3604163 C17.9213834,19.4640061 18.1235783,19.5154669 18.3271921,19.5154669 C18.5898274,19.513817 18.8430065,19.422926 19.0401951,19.2594997 C19.3215789,19.0454794 19.5166307,18.7471039 19.5928611,18.4140729 L20.5094779,14.4669658 C20.5350183,14.3546878 20.5761667,14.2978805 20.6307948,14.2978805 C20.6989026,14.2978805 20.7329564,14.3546878 20.7329564,14.4669658 L20.7329564,19.9993317 L21.9354839,19.9993317 L21.9354839,14.2016422 C21.9354839,13.8427535 21.8077818,13.5453504 21.5523778,13.3107695 C21.3189669,13.1035898 21.0394413,13 20.7130917,13 Z M24,13 L22.9677419,13 L22.9677419,20 L24,20 L24,13 Z M21,2 L21,4 C21,5.1045695 20.1045695,6 19,6 L13,6 C11.8954305,6 11,5.1045695 11,4 L11,2 L21,2 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
Vmi.displayName = 'Vmi';
export default Vmi;
