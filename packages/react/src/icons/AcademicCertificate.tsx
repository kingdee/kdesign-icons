import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AcademicCertificate = ({
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
          id="1340-学历证"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 7.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M23.2567973,5.39003633 L12.6463505,0.149518917 C12.2394162,-0.049839639 11.7631676,-0.049839639 11.3562333,0.149518917 L0.74578647,5.39003633 C0.295368987,5.60212821 0.00572219465,6.05292018 8.33173498e-17,6.55074156 C8.33173498e-17,7.04170653 0.286840946,7.48731061 0.747120616,7.71278096 L3.95840509,9.29774397 L3.95840509,14.6543319 C3.95840509,14.7984195 3.98508797,14.9371704 4.03178301,15.0652482 C4.10649507,15.3280746 4.28660451,15.637596 4.67884282,15.9404467 C5.26986859,16.3967239 6.39722023,16.8743474 7.7740568,17.2519102 C9.20292497,17.6428143 10.6464687,17.8589457 11.835191,17.8589457 C11.9018981,17.8589457 11.9686054,17.8589457 12.0366467,17.8562774 C13.2733982,17.8295945 15.199902,17.500061 16.7221602,17.055791 C18.9395075,16.4087312 20.0174958,15.6496033 20.0174958,14.7343806 C20.0265099,14.6743221 20.0309698,14.613668 20.0308372,14.552937 L20.0308372,9.30441468 L22.7725031,7.95159272 L22.7725031,14.9451753 L23.9892423,14.9451753 L23.9892423,6.73085099 C24.06137,6.17242833 23.765652,5.63108654 23.2567973,5.39003633 L23.2567973,5.39003633 Z M18.814098,14.552937 C18.814098,14.6009662 18.7887492,14.6236466 18.7834127,14.627649 C18.7859131,14.6263186 18.7886189,14.6254167 18.7914175,14.6249807 L18.7914175,14.7690683 C18.7193737,14.9264973 18.2017259,15.4227988 16.3632755,15.9604588 C14.9357415,16.3767117 13.1453203,16.684899 12.0099638,16.7102477 C11.9517116,16.7112345 11.8934515,16.7116792 11.835191,16.711595 C10.7732124,16.711595 9.41638797,16.5074579 8.11292934,16.1512414 C6.92554123,15.8257103 5.90492111,15.4041208 5.44997803,15.0532409 C5.29521733,14.933168 5.20182726,14.813095 5.20182726,14.7357147 L5.19782482,14.7357147 L5.19782482,14.7223733 L5.2058297,14.7250415 C5.19782484,14.7210391 5.17647852,14.6983587 5.17647852,14.6543319 L5.17647852,9.89944289 L11.3562333,12.9479618 C11.7631207,13.1475226 12.2394631,13.1475226 12.6463505,12.9479618 L18.8127638,9.9061136 L18.8127638,14.552937 L18.814098,14.552937 Z M22.6937886,6.69482911 L12.0806735,11.9326783 C12.0301461,11.9572932 11.9711035,11.9572932 11.9205762,11.9326783 L1.31012936,6.69616325 C1.25413708,6.66979556 1.21794356,6.61395414 1.21673929,6.55207571 C1.21673929,6.49070508 1.25276118,6.43467104 1.31012936,6.40665401 L11.9205762,1.16480245 C11.9711035,1.14018748 12.0301461,1.14018748 12.0806735,1.16480245 L22.6911203,6.40665401 C22.7484885,6.43467104 22.7845106,6.49070508 22.7845106,6.55074156 C22.7845106,6.61259242 22.7493906,6.66907162 22.6937886,6.69616325 L22.6937886,6.69482911 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AcademicCertificate.displayName = 'AcademicCertificate';
export default AcademicCertificate;
