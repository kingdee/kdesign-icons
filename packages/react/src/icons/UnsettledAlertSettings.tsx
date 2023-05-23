import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const UnsettledAlertSettings = ({
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
          id="493.未结算预警设置"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M14.1521739,22.8148149 C14.3521739,22.8148149 14.6521739,23.0132045 14.6521739,23.3107891 C14.6521739,25.1954911 13.052174,26.7826087 11.1521739,26.7826087 C9.25217394,26.7826087 7.65217391,25.1954912 7.65217391,23.3107891 C7.65217391,23.0132045 7.85217392,22.8148149 8.15217391,22.8148149 L8.15217391,22.8148149 L14.1521739,22.8148149 Z M11,0 C12.1,0 13,0.892753633 13,1.98389698 L13,1.98389698 L13,2.0830918 C17,2.97584543 20,6.54685991 20,10.8122383 L20,10.8122383 L20,16.863124 C21.1,17.0615136 22,18.0534622 22,19.3429952 C22,20.7317231 20.9,21.8228663 19.5,21.8228663 L19.5,21.8228663 L2.5,21.8228663 C1.1,21.8228663 0,20.7317231 0,19.3429952 C0,18.152657 0.899999997,17.1607085 2,16.9623188 L2,16.9623188 L2,10.9114332 C2,6.64605476 5,3.07504026 9,2.18228666 L9,2.18228666 L9,1.98389698 C9,0.892753633 9.9,0 11,0 Z M8.27353291,6.91855296 C8.09009261,6.69410463 7.77894806,6.63615472 7.53099152,6.7583865 L7.53099152,6.7583865 L7.46182609,6.79895652 L7.41168666,6.84376447 C7.21705716,7.04163567 7.20063434,7.34962085 7.38280695,7.57326234 L7.38280695,7.57326234 L10.8316522,11.8063478 L7.62391903,11.8068831 L7.54302992,11.8142742 C7.35934367,11.8482098 7.21450323,11.9950751 7.18116329,12.1730442 L7.18116329,12.1730442 L7.17391304,12.2509825 L7.18099724,12.3308099 C7.21826991,12.5379815 7.39851916,12.6950818 7.62391903,12.6950818 L7.62391903,12.6950818 L10.7522609,12.6949565 L10.7522609,14.4712174 L7.6472045,14.4714794 L7.56212974,14.4794391 C7.36893874,14.5159851 7.21660357,14.6741477 7.18153843,14.8658067 L7.18153843,14.8658067 L7.17391304,14.9497402 L7.18155977,15.0357082 C7.22174124,15.2588161 7.41543374,15.4280011 7.6472045,15.4280011 L7.6472045,15.4280011 L10.7522609,15.4277391 L10.7522816,18.435222 L10.7598837,18.5210085 C10.7948597,18.7158158 10.9469974,18.8694254 11.1427424,18.904784 L11.1427424,18.904784 L11.1702609,18.9075652 L11.1975285,18.9050698 C11.4199582,18.8660886 11.5886288,18.6772288 11.5886288,18.435222 L11.5886288,18.435222 L11.5882609,15.4277391 L14.6471099,15.4280011 L14.7321847,15.4200413 C14.9529744,15.3782745 15.1204013,15.1776614 15.1204013,14.9497402 L15.1204013,14.9497402 L15.1127546,14.8637722 C15.0725732,14.6406643 14.8788807,14.4714794 14.6471099,14.4714794 L14.6471099,14.4714794 L11.5882609,14.4712174 L11.5882609,12.6949565 L14.6703953,12.6950818 L14.7512845,12.6876907 C14.9612116,12.6489072 15.1204013,12.4626236 15.1204013,12.2509825 L15.1204013,12.2509825 L15.1133172,12.1711551 C15.0760445,11.9639834 14.8957952,11.8068831 14.6703953,11.8068831 L14.6703953,11.8068831 L11.5815652,11.8063478 L14.682744,7.59041585 C14.858431,7.35150482 14.8268029,7.04056648 14.6307667,6.84340433 L14.6307667,6.84340433 L14.5802609,6.79991304 L14.5205393,6.76302843 C14.2714584,6.63588358 13.9653171,6.70421073 13.7982606,6.93417934 L13.7982606,6.93417934 L11.2044968,10.5047342 L8.27353291,6.91855296 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
UnsettledAlertSettings.displayName = 'UnsettledAlertSettings';
export default UnsettledAlertSettings;
