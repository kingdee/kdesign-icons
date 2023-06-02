import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SalesQuote = ({
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
          id="733.销售报价"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M5.28419867,1.55372473 L5.284125,1.562 L5.28754289,1.60569868 L5.29087311,1.64668724 L5.292375,1.66925 L5.30665487,1.78487694 C5.30996947,1.80856555 5.31356361,1.83202407 5.31745219,1.85538303 C5.32440574,1.89713488 5.33225902,1.93837825 5.34102209,1.97928418 C5.34698233,2.00712696 5.35346147,2.03520727 5.36036691,2.06311944 C5.37000684,2.10206502 5.38038669,2.14037797 5.39156395,2.17834936 C5.40046389,2.20858212 5.40985376,2.2385517 5.41973784,2.2682957 C5.42979159,2.29856817 5.44052369,2.32905448 5.4517724,2.35928943 C5.46447624,2.39340582 5.47753525,2.42647801 5.49120957,2.45922924 C5.50175197,2.48449119 5.5128469,2.50997337 5.52431308,2.53525137 C5.54225823,2.57480102 5.56097471,2.61358221 5.58056136,2.65184417 L5.61352831,2.71425063 C5.78812333,3.03451932 6.02398783,3.31578181 6.30550179,3.54268866 C6.32565101,3.5589375 6.34656129,3.5753085 6.36771135,3.59138027 C6.38779023,3.60663408 6.40780063,3.62141395 6.42801594,3.63592642 C6.51260087,3.69667221 6.60120615,3.75297667 6.69304996,3.80416993 C6.79052294,3.85853551 6.89234208,3.90742756 6.99739045,3.95001571 C7.01337398,3.95649658 7.02955611,3.962879 7.04581251,3.96911155 C7.06939637,3.9781522 7.0930236,3.98683766 7.11680049,3.99520558 C7.15533794,4.0087666 7.19416998,4.0214636 7.23337159,4.03330903 C7.25560011,4.04002948 7.27835312,4.04658749 7.30122517,4.05285755 C7.34239102,4.06413964 7.38376653,4.07444956 7.42550067,4.08381072 C7.53601857,4.10859097 7.64882277,4.12669571 7.76369146,4.13773382 L7.82229591,4.14273687 L8.03,4.15046297 L13.97,4.15046297 C15.4197475,4.15046297 16.607477,3.02863102 16.7124572,1.60569868 L16.713125,1.55308796 L20.6238014,1.55308796 C21.3838549,1.55308796 22,2.15530906 22,2.92741185 L22,22.6883289 C22,23.4472626 21.3886325,24.0625 20.6238014,24.0625 L1.37619853,24.0625 C0.616145063,24.0625 0,23.4604316 0,22.6883289 L0,2.92741185 C0,2.1684781 0.611367433,1.55308796 1.37619853,1.55308796 L5.28419867,1.55372473 Z M13.9738357,7.5625 L11,10.0375 L8.02616436,7.5625 L6.875,8.47064991 L10.4244178,11.0861036 L10.6638615,11.275 L6.875,11.275 L6.875,12.5125 L10.4107143,12.5125 L10.4107143,14.9875 L6.875,14.9875 L6.875,16.225 L10.4107143,16.225 L10.4107143,19.9375 L11.5270884,19.9375 L11.5270884,16.225 L15.125,16.225 L15.125,14.9875 L11.5270884,14.9875 L11.5270884,12.5125 L15.125,12.5125 L15.125,11.275 L11.3361384,11.275 L11.5755821,11.0861036 L15.125,8.47064991 L13.9738357,7.5625 Z M15.8125,0 C15.8125,1.51878306 14.5812831,2.75 13.0625,2.75 L8.9375,2.75 C7.41871694,2.75 6.1875,1.51878306 6.1875,0 L15.8125,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SalesQuote.displayName = 'SalesQuote';
export default SalesQuote;