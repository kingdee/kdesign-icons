import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CharacterSettings = ({
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
          id="905.角色设置"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M13.6339007,15.1068873 L13.6644668,16.3726045 C13.6644668,16.3726045 14.0534908,16.5601697 14.6273011,16.8283183 C14.1122888,19.9058327 16.049029,22.8623555 19.0760681,23.6195653 L0,23.6195653 C0,20.7769116 1.365752,18.645616 3.02466134,18.1037612 C4.68218131,17.5619064 8.20006947,16.3726045 8.20006947,16.3726045 L8.16116707,14.4900064 C7.35255297,13.7717014 7.37895102,12.7088324 6.63841612,12.0030318 C5.76728031,11.1735771 4.60576589,10.7039696 4.42514762,9.00615785 C4.24313998,7.30834611 4.79610976,7.09160418 5.22264675,7.09160418 L5.22264675,4.20310123 C5.42132685,1.86895743 8.00138937,0.329534021 10.2104898,0.0738897002 C12.437652,-0.348479178 17.1267801,1.05756459 17.5255297,3.83908595 L17.5255297,7.09021481 C17.5255297,7.09021481 18.5606113,7.30695674 18.3786037,9.00476848 C18.1979854,10.7025802 16.998958,11.1735771 16.1653352,12.0044211 C15.3317124,12.8352652 15.4845432,14.1579467 14.1229594,14.8359599 C14.1229594,14.8359599 13.938173,14.9554458 13.6366794,15.1068873 L13.6339007,15.1068873 Z M26.3883293,16.1211283 L28,16.4504093 L28,18.2843795 L26.3869399,18.6122711 C26.2799073,19.0176265 26.1191693,19.4068554 25.9089962,19.7696174 L26.8204238,21.1409269 L26.8190344,21.1437056 L25.5241403,22.4385997 L25.5213616,22.4413784 L24.1500521,21.5299508 C23.7888156,21.7383565 23.401181,21.8995236 22.9968739,22.0065052 L22.6689823,23.6195653 L20.8350122,23.6195653 L20.5071205,22.0078946 C20.103367,21.9000306 19.7156233,21.7393272 19.3539423,21.5299508 L17.9812435,22.4413784 L16.6807919,21.1409269 L17.5922195,19.7696174 C17.3833518,19.4063786 17.2231284,19.0172647 17.1156652,18.6122711 L15.5026051,18.2843795 L15.5026051,16.4504093 L17.1142758,16.1225177 C17.2212574,15.7168213 17.3838138,15.3277973 17.5949983,14.9651714 L16.6835707,13.5938619 L17.9826329,12.2934104 L19.3553317,13.2034486 C19.7165683,12.9936535 20.1042028,12.8324864 20.5085099,12.7255048 L20.8336228,11.1152235 L22.6675929,11.1152235 L22.9954845,12.7268942 C23.3984022,12.8352652 23.7874262,12.9964322 24.1486627,13.2048379 L25.5199722,12.2934104 L25.522751,12.2961891 L26.817645,13.5910832 L26.8218131,13.5938619 L25.9103856,14.9651714 C26.1201806,15.3264079 26.2813477,15.7168213 26.3883293,16.1225177 L26.3883293,16.1211283 Z M21.7533866,19.4514532 C22.9043795,19.452986 23.8386876,18.521166 23.8402242,17.3701731 C23.841757,16.2191803 22.909937,15.2848721 21.7589441,15.2833355 C20.6079512,15.2818028 19.673643,16.2136228 19.6721065,17.3646156 C19.6705737,18.5156085 20.6023937,19.4499167 21.7533866,19.4514532 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CharacterSettings.displayName = 'CharacterSettings';
export default CharacterSettings;
