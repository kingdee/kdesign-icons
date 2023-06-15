import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const EditNotification = ({
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
          id="308.修改通知"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="修改通知"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M4.61538462,3.66666667 L4.61538462,6.41666667 C4.61538462,7.42918871 5.44193584,8.25 6.46153846,8.25 C7.4347955,8.25 8.23215239,7.50211202 8.30262859,6.55349045 L8.30769231,6.41666667 L8.30769231,3.66666667 L15.6923077,3.66666667 L15.6923077,6.41666667 C15.6923077,7.38316498 16.4454257,8.17498466 17.400681,8.24497145 L17.5384615,8.25 C18.5117186,8.25 19.3090755,7.50211202 19.3795517,6.55349045 L19.3846154,6.41666667 L19.3846154,3.66666667 L23,3.66666667 C23.5128358,3.66666667 23.9355072,3.93887449 23.9932723,4.28956202 L24,4.37179489 L24,21.2948718 C24,21.6564868 23.6139598,21.9545243 23.1166211,21.9952561 L23,22 L1,22 C0.48716417,22 0.0644928295,21.7277922 0.00672773908,21.3771046 L0,21.2948718 L0,4.37179489 C0,4.01017986 0.386040192,3.7121424 0.883378885,3.67141057 L1,3.66666667 L4.61538462,3.66666667 Z M13.331799,12.2111996 L11.5260246,14.0127074 L10.8457097,14.6914149 L10.2325864,15.3030896 C10.0478095,15.48743 9.89382868,15.6424434 9.77064408,15.76813 C9.64745945,15.8938166 9.56906927,15.9734181 9.5354735,16.0069345 C9.45708323,16.0851395 9.39689076,16.1563619 9.35489602,16.2206017 C9.31290131,16.2848416 9.27510599,16.3560639 9.24151015,16.4342689 C9.21351369,16.4845435 9.17711826,16.5767137 9.13232383,16.7107794 C9.08752949,16.844845 9.04133521,16.9914794 8.99374118,17.1506824 C8.94614713,17.3098854 8.9013527,17.4635024 8.85935796,17.6115332 C8.81736322,17.7595641 8.79076652,17.872682 8.77956793,17.950887 C8.75717078,18.0961248 8.77116896,18.1994672 8.82156267,18.2609139 C8.87195641,18.3223606 8.97274377,18.344705 9.12392492,18.3279467 C9.19671582,18.3167747 9.307302,18.2916373 9.45568338,18.2525348 C9.60406488,18.2134323 9.76084522,18.1673473 9.92602468,18.1142796 C10.091204,18.0612119 10.2493843,18.0067477 10.4005653,17.950887 C10.5517464,17.8950263 10.666532,17.8475447 10.7449223,17.8084422 C10.8233125,17.7749258 10.898903,17.7302372 10.9716939,17.6743765 C11.0444849,17.6185158 11.1088768,17.5654482 11.1648698,17.5151735 C11.187267,17.4984153 11.2572582,17.4313825 11.3748436,17.314075 C11.4924288,17.1967675 11.6408103,17.0473401 11.8199879,16.8657928 C11.9543711,16.7296323 12.1013528,16.5832599 12.2609328,16.4266754 L12.4247123,16.2666868 L13.0966283,15.5879793 L14.9024026,13.7864715 L13.331799,12.2111996 Z M14.9233999,11.0004189 C14.8422101,10.9976259 14.7596204,11.0087981 14.6756309,11.0339354 C14.5916415,11.0590727 14.5104516,11.1023647 14.4320614,11.1638115 C14.3704691,11.2140861 14.2934787,11.2825155 14.2010902,11.3690996 C14.1394979,11.4268224 14.083505,11.478959 14.0331113,11.5255096 L13.9617202,11.5911459 L15.5323239,13.1580387 C15.5715189,13.1245222 15.6135137,13.0854197 15.6583081,13.0407312 C15.6975032,13.0016287 15.7436974,12.9569401 15.7968907,12.9066655 C15.8500842,12.8563908 15.9102766,12.7977371 15.9774682,12.7307042 C16.0390605,12.6636714 16.0838549,12.5938456 16.1118514,12.5212266 C16.1398479,12.4486077 16.1538462,12.3759888 16.1538462,12.3033698 C16.1538462,12.230751 16.146847,12.1609251 16.1328487,12.0938922 C16.1188506,12.0268594 16.1006528,11.9682056 16.0782556,11.917931 C15.9998654,11.7503489 15.8892792,11.5897494 15.7464971,11.4361325 C15.6037149,11.2825155 15.4735312,11.1749837 15.3559459,11.1135369 C15.2999529,11.0856065 15.2341611,11.0604692 15.1585706,11.0381249 C15.08298,11.0157807 15.0045898,11.003212 14.9233999,11.0004189 Z M6.46153846,0 C6.97133973,0 7.38461538,0.410405659 7.38461538,0.916666667 L7.38461538,6.41666667 C7.38461538,6.92292765 6.97133973,7.33333333 6.46153846,7.33333333 C5.95173717,7.33333333 5.53846154,6.92292765 5.53846154,6.41666667 L5.53846154,0.916666667 C5.53846154,0.410405659 5.95173717,0 6.46153846,0 Z M17.5384615,0 C18.0482628,0 18.4615385,0.410405659 18.4615385,0.916666667 L18.4615385,6.41666667 C18.4615385,6.92292765 18.0482628,7.33333333 17.5384615,7.33333333 C17.0286603,7.33333333 16.6153846,6.92292765 16.6153846,6.41666667 L16.6153846,0.916666667 C16.6153846,0.410405659 17.0286603,0 17.5384615,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
EditNotification.displayName = 'EditNotification';
export default EditNotification;
