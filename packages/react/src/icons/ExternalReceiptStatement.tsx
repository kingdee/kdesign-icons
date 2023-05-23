import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ExternalReceiptStatement = ({
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
          id="483.对外收款结算单"
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
              d="M18,15.0933333 C21.3137085,15.0933333 24,17.7318686 24,20.9866667 C24,24.2414648 21.3137085,26.88 18,26.88 C14.6862915,26.88 12,24.2414648 12,20.9866667 C12,17.7318686 14.6862915,15.0933333 18,15.0933333 Z M19.2528,0 C20.2177519,0 21,0.78224809 21,1.7472 L21.0007538,14.8568957 C20.0929462,14.4273672 19.0750912,14.1866667 18,14.1866667 C14.1764902,14.1866667 11.076923,17.2311303 11.076923,20.9866667 C11.076923,22.0266151 11.3145966,23.0120387 11.7395009,23.8933919 L1.7472,23.8933919 C0.78224809,23.8933919 0,23.1110852 0,22.1461333 L0,1.7472 C0,0.78224809 0.78224809,0 1.7472,0 L19.2528,0 Z M17.4372775,18.6666666 L15.117195,20.5091529 C14.9606227,20.633559 14.9611853,20.8355036 15.1173825,20.9595651 L17.4372775,22.8020513 L17.4372775,21.5958974 C18.7498595,21.5958974 19.9686855,21.854359 21,23.1466667 C20.5312207,20.734359 18.5623478,19.8728205 17.4372775,19.8728205 L17.4372775,18.6666666 Z M7.82361849,5.02371133 C7.63951113,4.79844683 7.32723514,4.74028619 7.07837694,4.86296245 L7.07837694,4.86296245 L7.00896,4.90368 L6.95863824,4.94865089 C6.76330101,5.14724162 6.74681847,5.45634675 6.92965352,5.68080147 L6.92965352,5.68080147 L10.39104,9.92928 L7.17164237,9.92981723 L7.09045912,9.93723522 C6.90610492,9.97129421 6.76073779,10.1186936 6.72727662,10.2973098 L6.72727662,10.2973098 L6.72,10.3755315 L6.72710996,10.4556492 C6.76451816,10.6635742 6.94542287,10.8212458 7.17164237,10.8212458 L7.17164237,10.8212458 L10.31136,10.82112 L10.31136,12.60384 L7.19501252,12.6041029 L7.1096284,12.6120916 C6.91573488,12.6487705 6.76284577,12.8075082 6.72765312,12.9998642 L6.72765312,12.9998642 L6.72,13.0841029 L6.72767453,13.1703835 C6.76800212,13.3943027 6.96239896,13.5641029 7.19501252,13.5641029 L7.19501252,13.5641029 L10.31136,13.56384 L10.3113808,16.5822591 L10.3190105,16.6683576 C10.3541137,16.8638733 10.5068047,17.0180415 10.7032615,17.0535287 L10.7032615,17.0535287 L10.73088,17.05632 L10.7582468,17.0538155 C10.9814853,17.0146926 11.1507692,16.825146 11.1507692,16.5822591 L11.1507692,16.5822591 L11.1504,13.56384 L14.2203721,13.5641029 L14.3057562,13.5561142 C14.5273488,13.5141955 14.6953846,13.3128529 14.6953846,13.0841029 L14.6953846,13.0841029 L14.6877101,12.9978223 C14.6473825,12.773903 14.4529857,12.6041029 14.2203721,12.6041029 L14.2203721,12.6041029 L11.1504,12.60384 L11.1504,10.82112 L14.2437422,10.8212458 L14.3249255,10.8138277 C14.535616,10.7749032 14.6953846,10.5879422 14.6953846,10.3755315 L14.6953846,10.3755315 L14.6882747,10.2954138 C14.6508664,10.0874888 14.4699617,9.92981723 14.2437422,9.92981723 L14.2437422,9.92981723 L11.14368,9.92928 L14.2561358,5.69801736 C14.4324616,5.45823756 14.4007186,5.14616854 14.2039695,4.94828943 L14.2039695,4.94828943 L14.15328,4.90464 L14.0933413,4.86762126 C13.8433546,4.74001404 13.5361001,4.80858968 13.3684361,5.03939454 L13.3684361,5.03939454 L10.7652404,8.62293323 L7.82361849,5.02371133 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ExternalReceiptStatement.displayName = 'ExternalReceiptStatement';
export default ExternalReceiptStatement;
