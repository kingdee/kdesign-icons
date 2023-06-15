import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Design = ({
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
          id="880.设计"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M25.4368114,8.26988786 C24.9701408,8.74278078 24.6341379,8.74278078 24.1643561,8.26988786 L19.5007609,3.56429223 C19.0340902,3.08984374 19.0340902,2.75072974 19.5007609,2.27939239 L21.4094438,0.353598213 C21.6335239,0.127312831 21.9387684,2.15878538e-16 22.2572288,2.15878538e-16 C22.5756891,2.15878538e-16 22.8809336,0.127312831 23.1050138,0.353598213 L27.3454943,4.632968 C27.8165038,5.10731818 27.8165038,5.87285464 27.3454943,6.34720482 L25.4368114,8.26988786 L25.4368114,8.26988786 Z M23.9185763,9.80523427 L10.3851277,23.464684 C10.27278,23.5772497 10.120273,23.6405068 9.96123516,23.6405068 C9.80219732,23.6405068 9.64969028,23.5772497 9.53734266,23.464684 L4.45063267,18.3281958 C4.21615584,18.0912039 4.21615584,17.7096247 4.45063267,17.4726329 L17.9840813,3.81318324 C18.0964909,3.70014011 18.2493318,3.63657962 18.4087516,3.63657962 C18.5681713,3.63657962 18.7210122,3.70014011 18.8334218,3.81318324 L23.9201318,8.94811586 C24.1504797,9.18679009 24.1504797,9.56500447 23.9201318,9.80367871 L23.9185763,9.80523427 Z M6.74198552,13.1465961 L4.85041385,11.25658 L8.40022186,7.65232705 L7.47932513,6.7174302 L3.92329484,10.329461 L2.21683586,8.62144641 L5.77131058,5.00786008 L4.85352499,4.0745188 L1.28660572,7.69432741 L0.389042517,6.79520864 C0.135588895,6.55148669 -0.00526002757,6.21344928 0.000150315997,5.86186735 C0.000150315997,5.49630868 0.129262527,5.18519492 0.389042517,4.92852607 L4.9079699,0.412709828 C5.42431968,-0.103569925 6.26141382,-0.103569925 6.7777636,0.412709828 L13.1244843,6.75320828 L6.81354168,13.0610398 C6.78709701,13.0874845 6.76687462,13.1170403 6.74198552,13.1465961 Z M1.1730492,27.2120492 L0.693934003,27.3784951 L0.569488499,27.2540496 L0.734378792,26.7718232 L1.1730492,27.2120492 Z M1.43749589,24.7044723 L3.22328888,26.5042654 L1.34416176,27.151382 L0.793490407,26.596044 L1.43749589,24.7044723 Z M1.65371996,24.0666891 L3.6012921,18.3266402 L9.53734266,24.3218024 L3.85329425,26.2880413 L1.65371996,24.0666891 L1.65371996,24.0666891 Z M21.2647759,14.885722 L27.6114966,21.2262204 C27.8601896,21.4737755 28,21.810216 28,22.1611173 C28,22.5120186 27.8601896,22.8484591 27.6114966,23.0960141 L23.0941248,27.6087193 C22.8499305,27.8635444 22.5105636,28.0050412 22.1576724,27.999167 C21.8059091,28.0055252 21.4675077,27.8645246 21.2243311,27.6102748 L20.2287671,26.6193775 L23.504795,23.295127 L22.5807871,22.3617857 L19.2985369,25.6922585 L17.5905224,23.9873551 L20.8758837,20.6522156 L19.954987,19.7188743 L16.6634034,23.0602361 L14.8651658,21.2635541 C14.8962772,21.238665 21.2647759,14.885722 21.2647759,14.885722 L21.2647759,14.885722 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Design.displayName = 'Design';
export default Design;
