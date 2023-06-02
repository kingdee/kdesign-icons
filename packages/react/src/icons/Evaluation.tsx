import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Evaluation = ({
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
          id="249.面试评价"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="面试评价"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M19.4933386,3.13399308e-05 C19.8628086,-0.00245692148 20.2181759,0.143312497 20.4812594,0.405403771 C20.744343,0.667495072 20.8935907,1.02443768 20.896168,1.39770367 L20.896168,7.26652124 L12.3566006,15.9036755 C12.3259529,15.9613785 12.3106291,15.9810819 12.3036636,16.0050077 L11.1696983,20.2116972 C11.1042694,20.4590594 11.1731439,20.7229361 11.3507985,20.9055406 C11.5306698,21.0845473 11.7910645,21.1536634 12.0347997,21.087094 L16.1652756,19.9471079 C16.2176902,19.9555146 16.2709423,19.938278 16.3087625,19.9006639 L20.896168,15.2619056 L20.896168,22.6023276 C20.8935907,22.9755936 20.744343,23.3325362 20.4812594,23.5946275 C20.2181759,23.8567188 19.8628086,24.0024882 19.4933386,23.9999679 L1.40282941,23.9999679 C1.03335948,24.0024882 0.677992047,23.8567188 0.414908503,23.5946275 C0.151824986,23.3325362 0.00257724379,22.9755936 0,22.6023276 L0,1.39770367 C0.00257724379,1.02443768 0.151824986,0.667495072 0.414908503,0.405403771 C0.677992047,0.143312497 1.03335948,-0.00245692148 1.40282941,3.13399308e-05 L19.4933386,3.13399308e-05 Z M8.09052631,15.9999888 L3.84631579,15.9999888 C3.55331419,15.9999888 3.31578947,16.2387686 3.31578947,16.5333185 C3.31578947,16.8278684 3.55331419,17.0666482 3.84631579,17.0666482 L3.84631579,17.0666482 L8.09052631,17.0666482 C8.3835279,17.0666482 8.62105262,16.8278684 8.62105262,16.5333185 C8.62105262,16.2387686 8.3835279,15.9999888 8.09052631,15.9999888 L8.09052631,15.9999888 Z M12.0694737,12.0000157 L3.84631579,12.0000157 C3.55331419,12.0000157 3.31578947,12.2387956 3.31578947,12.5333454 C3.31578947,12.8278953 3.55331419,13.0666752 3.84631579,13.0666752 L3.84631579,13.0666752 L12.0694737,13.0666752 C12.3624753,13.0666752 12.6,12.8278953 12.6,12.5333454 C12.6,12.2387956 12.3624753,12.0000157 12.0694737,12.0000157 L12.0694737,12.0000157 Z M5.9741472,2.02227237 C5.34896831,2.09871471 4.61869465,2.55843554 4.56210518,3.25601652 L4.56210518,4.11857076 C4.4415157,4.11857076 4.28488415,4.18328011 4.33642098,4.69028851 C4.38762099,5.19765245 4.71637886,5.33809308 4.96294726,5.5862641 C5.20951567,5.83407955 5.15528411,6.22980209 5.54063142,6.43175214 C5.54063142,6.43175214 5.54501038,6.43530761 5.55376828,6.4406408 C5.53827355,6.45841809 5.54770511,6.47903974 5.58947355,6.50179468 L5.58947355,6.9903147 C5.58947355,6.9903147 5.30673547,7.09113404 4.97396324,7.20895485 L4.68190415,7.31215279 C4.48626589,7.38112062 4.29599994,7.44782017 4.15452627,7.49661201 C3.69473681,7.65518544 3.31578947,8.27916844 3.31578947,9.11114577 L9.378947,9.11114577 C9.378947,8.27916844 8.99999964,7.65518544 8.56042074,7.49661201 C8.186526,7.38568169 7.10526292,6.9903147 7.10526292,6.9903147 L7.10526292,6.50143914 C7.16555766,6.46837336 7.15882082,6.4406408 7.10593661,6.41788586 C7.46467343,6.21166925 7.42795762,5.82839082 7.6590313,5.58590853 C7.89482078,5.33773753 8.23435759,5.19694136 8.2855576,4.68993296 C8.33675758,4.18256902 8.04404181,4.11821522 8.04404181,4.11821522 L8.04404181,3.14686392 C7.93119971,2.31595325 6.60404189,1.89569803 5.9741472,2.02227237 Z M21.8169924,12.6652704 L19.8123534,10.554185 L21.8434609,8.63591198 C22.0357056,8.44028474 22.4076575,8.46983993 22.6277637,8.69220761 L23.8077006,9.93774802 C23.9277671,10.0565878 23.9968087,10.2183291 23.9999455,10.3881129 C24.0018615,10.5157578 23.9532121,10.6388844 23.8648168,10.7301088 L21.8169924,12.6652704 Z M14.2163596,16.1133767 L18.9291421,11.3212127 L20.896168,13.3408177 L16.2307502,18.0175757 L12.8469641,19.3827444 L14.2163596,16.1133767 L14.2163596,16.1133767 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Evaluation.displayName = 'Evaluation';
export default Evaluation;