import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AssessmentArrangements = ({
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
          id="1961.考核安排"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M22.514977,17 C23.3986175,17 24.2335829,17.1723343 25.0198733,17.5170029 C25.8061636,17.8616715 26.4913594,18.3299712 27.0829493,18.9181556 C27.6707949,19.5063401 28.1388249,20.1919308 28.4832949,20.9786744 C28.827765,21.7654179 29,22.6008646 29,23.4850144 C29,24.3878963 28.827765,25.2345821 28.4832949,26.0213256 C28.1388249,26.8080692 27.6707949,27.4936599 27.0829493,28.0818444 C26.4951037,28.6700288 25.8061636,29.1383285 25.0198733,29.4829971 C24.2335829,29.8276657 23.3986175,30 22.514977,30 C21.608871,30 20.7664171,29.8276657 19.9801267,29.4829971 C19.1938364,29.1383285 18.5086406,28.6700288 17.9170507,28.0818444 C17.3292051,27.4936599 16.8611751,26.8080692 16.5167051,26.0213256 C16.172235,25.2345821 16,24.3878963 16,23.4850144 C16,22.6008646 16.172235,21.7654179 16.5167051,20.9786744 C16.8611751,20.1919308 17.3292051,19.5063401 17.9170507,18.9181556 C18.5048963,18.3299712 19.1938364,17.8616715 19.9801267,17.5170029 C20.7664171,17.1723343 21.608871,17 22.514977,17 Z M20.9907259,2 L27.0005836,8.00383173 L27.0003478,17.52671 C26.5155378,17.1597578 25.9842341,16.8493317 25.4075461,16.5965418 C24.500288,16.1988473 23.5282258,16 22.4827189,16 C21.4631336,16 20.499712,16.1988473 19.5924539,16.5965418 C18.6851959,16.9942363 17.8945853,17.5345821 17.2119816,18.2132565 C16.5336982,18.8919308 15.9936636,19.6829971 15.5961982,20.5907781 C15.1987327,21.4985591 15,22.462536 15,23.4827089 C15,24.5244957 15.1987327,25.5014409 15.5961982,26.4092219 C15.8129666,26.9043045 16.0721401,27.364672 16.373018,27.7910256 L16.0481077,28 L13.2319474,26.1828023 L10.5055008,28 C8.88980124,26.7885349 7.96423442,26.1828023 7.72880033,26.1828023 C7.49336624,26.1828023 6.58376613,26.7885349 5,28 L5,3 C5,2.44771525 5.44771525,2 6,2 L20.9907259,2 Z M22.0416667,19.6041667 C21.6619709,19.6041667 21.3541667,19.9119709 21.3541667,20.2916667 L21.3541667,23.9583333 C21.3541667,24.3380291 21.6619709,24.6458333 22.0416667,24.6458333 L25.7083333,24.6458333 C26.0880291,24.6458333 26.3958333,24.3380291 26.3958333,23.9583333 L26.3895573,23.8650437 C26.3440334,23.5294744 26.0563878,23.2708333 25.7083333,23.2708333 L22.7291667,23.2708333 L22.7291667,20.2916667 C22.7291667,19.9119709 22.4213624,19.6041667 22.0416667,19.6041667 Z M15,15 L9,15 L9,17 L15,17 L15,15 Z M21,10 L9,10 L9,12 L21,12 L21,10 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
AssessmentArrangements.displayName = 'AssessmentArrangements';
export default AssessmentArrangements;
