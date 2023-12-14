import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SupplierConfiguration = ({
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
          id="913.供应商配置"
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
              d="M3.52637547,28.0004678 C2.78437338,28.0004678 2.91504041,27.5415776 2.91504041,26.9691316 L2.91504041,11.527088 L1.58970335,11.527088 C1.10125752,11.527088 0.566144921,11.6670884 0.143032604,11.2081982 C-0.0700791138,10.7493081 -0.0778569095,9.83308327 0.346810967,9.71797183 L12.7819571,0.171500482 C13.206625,-0.0571668273 13.3108475,-0.0571668273 13.7355154,0.171500482 L26.0011055,9.71797183 C26.4257734,9.94663914 26.6373295,10.954642 26.2126616,11.527088 L16.1232999,11.527088 L16.1232999,12.4448684 C16.1302055,13.2320845 15.4980602,13.8760651 14.7108514,13.8837613 C14.4592597,13.8844666 14.2122961,13.8161346 13.9968494,13.6862052 L12.7632904,12.9442031 L9.33328074,19.2271097 L10.6243955,20.000223 C11.0587525,20.2627284 11.3233515,20.7340455 11.3212863,21.2415599 C11.3212863,21.7548946 11.0568411,22.2231182 10.6228399,22.4828967 L9.33328074,23.2606767 L11.8937324,27.9506899 L3.52637547,28.0004678 Z M17.4113035,12.4448684 L21.4775372,12.4448684 C21.4775372,14.0502063 22.8153187,15.3537655 24.4642123,15.3537655 C25.0039916,15.3537655 25.5095485,15.2137651 25.9466609,14.9695422 L28,18.4648853 C27.0767075,18.9701999 26.5006519,19.937044 26.4957735,20.9895591 C26.4957735,22.0691177 27.1024419,23.0117871 28,23.5126774 L25.9466609,27.0095761 C25.4935071,26.7568169 24.9830908,26.6245264 24.4642123,26.6253528 C22.8153187,26.6253528 21.4775372,27.9273565 21.4775372,29.5342499 L17.4113035,29.5342499 C17.4113035,27.9273565 16.073522,26.6253528 14.4246284,26.6253528 C13.8848491,26.6253528 13.3792921,26.7653532 12.9421798,27.0095761 L10.8888407,23.5126774 C11.8110466,23.0072242 12.3863809,22.0411866 12.3915116,20.9895591 C12.3915116,19.908445 11.7863987,18.9673312 10.8888407,18.4648853 L12.9421798,14.9695422 C13.3777366,15.2137651 13.8848491,15.3522099 14.4246284,15.3522099 C16.0735219,15.3522099 17.4113035,14.0502063 17.4113035,12.4448684 Z M17.1110804,20.9988925 C17.1569337,22.2544207 18.1880551,23.2485719 19.4444203,23.2485719 C20.7007856,23.2485719 21.731907,22.2544207 21.7777602,20.9988925 C21.731907,19.7433643 20.7007856,18.7492131 19.4444203,18.7492131 C18.1880551,18.7492131 17.1569337,19.7433643 17.1110804,20.9988925 L17.1110804,20.9988925 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SupplierConfiguration.displayName = 'SupplierConfiguration';
export default SupplierConfiguration;
