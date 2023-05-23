import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AutomaticTransferTaskSettings = ({
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
          id="523.自动划拨任务设置"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(6.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M4.99909091,1.62337664 L5,2.64025972 C5,3.37998659 5.56635226,3.98743476 6.28909836,4.05264591 L6.41818182,4.05844154 L13.5818182,4.05844154 C14.321545,4.05844154 14.9289932,3.49208931 14.9942044,2.76934319 L15,2.64025972 L14.9990909,1.62337664 L18.5818182,1.62337664 C19.3650584,1.62337664 20,2.25831825 20,3.04155846 L20,24.0363636 C20,24.8196038 19.3650584,25.4545455 18.5818182,25.4545455 L1.41818182,25.4545455 C0.634941615,25.4545455 0,24.8196038 0,24.0363636 L0,3.04155846 C0,2.25831825 0.634941615,1.62337664 1.41818182,1.62337664 L4.99909091,1.62337664 Z M8.8023191,8.33556145 L3.69747898,10.9320465 L8.8023191,13.5285315 L8.8023191,11.5958095 L11.3154712,11.5958095 C13.2985052,11.5958095 14.2998393,12.4547971 14.2998393,14.1532497 C14.2998393,15.9297921 13.2788712,16.7692572 11.1976672,16.7692572 L6.03002054,16.7692572 C5.65265236,16.7692572 5.34673501,17.0751745 5.34673501,17.4525427 C5.34673501,17.8299108 5.65265236,18.1358282 6.03002054,18.1358282 L11.2762032,18.1358282 C14.0642313,18.1358282 15.4975133,16.8473469 15.4975133,14.2899068 C15.5171473,11.5958095 14.0445973,10.2682834 11.1387652,10.2682835 L8.8023191,10.2682835 L8.8023191,8.33556145 Z M14.1666666,0 L14.1666666,1.82857143 C14.1666666,2.61181161 13.531725,3.24675325 12.7484848,3.24675325 L7.25151517,3.24675325 C6.468275,3.24675325 5.83333335,2.61181161 5.83333335,1.82857143 L5.83333335,0 L14.1666666,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AutomaticTransferTaskSettings.displayName = 'AutomaticTransferTaskSettings';
export default AutomaticTransferTaskSettings;
