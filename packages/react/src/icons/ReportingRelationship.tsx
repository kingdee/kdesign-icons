import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ReportingRelationship = ({
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
          id="950.汇报关系"
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
              d="M22.1111928,19.1804894 C22.3779369,19.8318756 22.5931007,20.5068415 22.7891061,21.1847548 C22.9733217,21.8184564 22.719841,22.3165753 22.1922476,22.6835327 C21.6543382,23.0578587 21.0383213,23.2450218 20.4119883,23.3968154 C19.0679515,23.7210348 17.6959139,23.8684072 16.3194552,23.9376723 C14.7130954,24.0187272 13.1067356,24.0555703 11.5003758,24.1100981 C9.28242028,24.0776761 7.06888596,24.0231483 4.86419398,23.7799838 C3.76774289,23.6591384 2.67571298,23.5043973 1.6337897,23.1212289 C1.31446247,23.0065346 1.00818373,22.8583352 0.720080457,22.6791115 C0.0657467419,22.2635212 -0.134679801,21.7138219 0.0863788861,20.969591 C0.249962315,20.4066282 0.434177888,19.8495603 0.63755188,19.299861 C0.876295263,18.6587908 1.34788713,18.1916202 1.87695425,17.7819247 C2.93508851,16.966955 4.14649011,16.4334667 5.35789172,15.8999784 C6.23917902,15.5109151 7.12636122,15.1336416 7.99585872,14.7209988 C8.3362891,14.5618365 8.65313989,14.3540413 8.93609501,14.1064556 C9.41358177,13.6864441 9.35905396,12.8051568 8.85061898,12.4116723 C7.09099183,11.0425822 6.2377053,9.19158413 5.96506625,7.02815644 C5.77937695,5.54264206 5.96506625,4.11018176 6.64592701,2.76614494 C7.55226762,0.977043299 9.037782,0.0898611003 11.0243627,0.00733252361 C12.1443934,-0.0368792139 13.227581,0.10901952 14.2031867,0.714720324 C15.4484839,1.48547828 16.2221893,2.62761483 16.5744095,4.01291594 C17.2803236,6.79383423 16.7866259,9.34779893 14.9120482,11.5731231 C14.6556201,11.878184 14.3078211,12.1066114 14.0012864,12.3689343 C13.9408637,12.4219884 13.8612826,12.4662001 13.821492,12.5325178 C13.457482,13.1617982 13.6741195,14.1315089 14.3210846,14.4601495 C15.3173225,14.9671108 16.3400873,15.4224917 17.3613784,15.88082 C18.5521479,16.4143083 19.7473385,16.9360068 20.8054728,17.7170808 C21.3419085,18.112039 21.8547647,18.551209 22.1111928,19.1804894 Z M26.3407823,16.6972634 C27.6420811,17.4577053 28.0945146,18.6278426 27.9839852,20.1045147 C27.9441947,20.6394767 27.7408207,20.8988522 27.2603865,21.0152765 C26.1845675,21.2761257 25.1087486,21.5413961 24.0005077,21.8110877 C23.8678725,21.1714913 23.7308161,20.6276869 23.6423926,20.0765139 C23.4655457,18.9697467 22.8672135,18.1311974 22.0227693,17.4400206 C20.8673692,16.4938894 19.5395434,15.8425032 18.1851905,15.244171 C17.6178065,14.9951115 17.0062108,14.8359493 16.4579853,14.5544679 C16.0956197,14.3581762 15.7744045,14.0939992 15.5118541,13.7763413 C15.0549995,13.2399056 15.1478441,12.573782 15.6842799,12.1198749 C17.4969611,10.5813064 18.1999277,8.58588332 18.0835035,6.25887221 C18.0333969,5.22579127 17.8211805,4.22071111 17.5234882,3.23331564 C17.5116984,3.1891039 17.5058035,3.14489216 17.4836976,3.04173144 C17.8020221,2.95920286 18.1115043,2.8471998 18.4298288,2.80004061 C19.9330278,2.57898192 21.3330662,2.77646102 22.4530969,3.92301874 C23.1634321,4.64809124 23.6026021,5.53232599 23.7455533,6.52266891 C24.08451,8.86589099 23.4699668,10.9069995 21.6779178,12.5236754 C21.2741172,12.8876854 21.1208499,13.2944334 21.3065392,13.8117107 C21.371383,13.9959263 21.5084394,14.2051952 21.6720229,14.2921449 C22.4398334,14.7018403 23.2341709,15.0614291 24.00935,15.4563873 C24.7933715,15.8572404 25.5818142,16.2521986 26.3407823,16.6972634 L26.3407823,16.6972634 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ReportingRelationship.displayName = 'ReportingRelationship';
export default ReportingRelationship;
