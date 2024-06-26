import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const VoiceCall = ({
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
        viewBox="0 0 16 16"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="语音通话"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M8.52941176,13.57725 L8.52941176,14.475 C8.52941176,14.7649495 8.29238604,15 8,15 C7.70761396,15 7.47058824,14.7649495 7.47058824,14.475 L7.47058824,13.57725 C4.40476471,13.31125 2,10.75905 2,7.65000001 L2,7.3 C2,7.0100505 2.23702572,6.775 2.52941176,6.775 C2.82179781,6.775 3.05882353,7.0100505 3.05882353,7.3 L3.05882353,7.65000001 C3.05882353,10.3562 5.27105882,12.55 8,12.55 C10.7289412,12.55 12.9411765,10.3562 12.9411765,7.65000001 L12.9411765,7.3 C12.9411765,7.0100505 13.1782022,6.775 13.4705882,6.775 C13.7629743,6.775 14,7.0100505 14,7.3 L14,7.65000001 C14,10.759225 11.5952353,13.31125 8.52941176,13.57725 L8.52941176,13.57725 Z M4.47058824,4.49825 C4.47058824,2.56625 6.05052941,1 8,1 C9.94858823,1 11.5294118,2.56747499 11.5294118,4.49825 L11.5294118,7.65174999 C11.5294118,9.58374999 9.94947059,11.15 8,11.15 C6.05141177,11.15 4.47058824,9.582525 4.47058824,7.65174999 L4.47058824,4.49825 Z M5.52941177,4.49825 L5.52941177,7.65174999 C5.52941177,9.00275 6.63605882,10.1 8,10.1 C9.36482353,10.1 10.4705882,9.003975 10.4705882,7.65174999 L10.4705882,4.49825 C10.4705882,3.14725 9.36394118,2.05 8,2.05 C6.63517647,2.05 5.52941177,3.14602499 5.52941177,4.49825 Z"
            id="形状"
            fill={fill}
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
VoiceCall.displayName = 'VoiceCall';
export default VoiceCall;
