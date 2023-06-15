import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const OutwardPaymentStatement = ({
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
          id="482.对外付款结算单"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M18.24,15.36 C21.4211602,15.36 24,17.9388398 24,21.12 C24,24.3011602 21.4211602,26.88 18.24,26.88 C15.0588398,26.88 12.48,24.3011602 12.48,21.12 C12.48,17.9388398 15.0588398,15.36 18.24,15.36 Z M19.9984582,0 C20.6170171,0 21.1184729,0.501441085 21.1184729,1.11999999 L21.1184729,14.9221901 C20.2057323,14.4909837 19.1823978,14.2493508 18.1015357,14.2493508 C14.2564579,14.2493508 11.1394066,17.3072666 11.1394066,21.0793968 C11.1394066,22.1239404 11.3784207,23.1137181 11.8057219,23.9989655 L1.11999999,23.9989655 C0.501441085,23.9989655 0,23.4974656 0,22.8789067 L0,1.11999999 C0,0.501441085 0.501441085,0 1.11999999,0 L19.9984582,0 Z M18.7802137,18.8524886 L18.7802137,20.0313539 C17.7001462,20.0313539 15.8100281,20.8734007 15.36,23.2311312 C16.2979533,22.0345386 17.397468,21.7448372 18.582015,21.717657 L18.7802137,21.7154473 L18.7802137,22.8943126 L21.0073128,21.0935116 C21.1385185,20.9874137 21.1553327,20.8230357 21.0567906,20.7021421 L21.0074928,20.6532897 L18.7802137,18.8524886 Z M7.82361849,5.02371133 C7.63951113,4.79844683 7.32723514,4.74028619 7.07837694,4.86296245 L7.07837694,4.86296245 L7.00896,4.90368 L6.95863824,4.94865089 C6.76330101,5.14724162 6.74681847,5.45634675 6.92965352,5.68080147 L6.92965352,5.68080147 L10.39104,9.92928 L7.17164237,9.92981723 L7.09045912,9.93723522 C6.90610492,9.97129421 6.76073779,10.1186936 6.72727662,10.2973098 L6.72727662,10.2973098 L6.72,10.3755315 L6.72710996,10.4556492 C6.76451816,10.6635742 6.94542287,10.8212458 7.17164237,10.8212458 L7.17164237,10.8212458 L10.31136,10.82112 L10.31136,12.60384 L7.19501252,12.6041029 L7.1096284,12.6120916 C6.91573488,12.6487705 6.76284577,12.8075082 6.72765312,12.9998642 L6.72765312,12.9998642 L6.72,13.0841029 L6.72767453,13.1703835 C6.76800212,13.3943027 6.96239896,13.5641029 7.19501252,13.5641029 L7.19501252,13.5641029 L10.31136,13.56384 L10.3113808,16.5822591 L10.3190105,16.6683576 C10.3541137,16.8638733 10.5068047,17.0180415 10.7032615,17.0535287 L10.7032615,17.0535287 L10.73088,17.05632 L10.7582468,17.0538155 C10.9814853,17.0146926 11.1507692,16.825146 11.1507692,16.5822591 L11.1507692,16.5822591 L11.1504,13.56384 L14.2203721,13.5641029 L14.3057562,13.5561142 C14.5273488,13.5141955 14.6953846,13.3128529 14.6953846,13.0841029 L14.6953846,13.0841029 L14.6877101,12.9978223 C14.6473825,12.773903 14.4529857,12.6041029 14.2203721,12.6041029 L14.2203721,12.6041029 L11.1504,12.60384 L11.1504,10.82112 L14.2437422,10.8212458 L14.3249255,10.8138277 C14.535616,10.7749032 14.6953846,10.5879422 14.6953846,10.3755315 L14.6953846,10.3755315 L14.6882747,10.2954138 C14.6508664,10.0874888 14.4699617,9.92981723 14.2437422,9.92981723 L14.2437422,9.92981723 L11.14368,9.92928 L14.2561358,5.69801736 C14.4324616,5.45823756 14.4007186,5.14616854 14.2039695,4.94828943 L14.2039695,4.94828943 L14.15328,4.90464 L14.0933413,4.86762126 C13.8433546,4.74001404 13.5361001,4.80858968 13.3684361,5.03939454 L13.3684361,5.03939454 L10.7652404,8.62293323 L7.82361849,5.02371133 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
OutwardPaymentStatement.displayName = 'OutwardPaymentStatement';
export default OutwardPaymentStatement;
