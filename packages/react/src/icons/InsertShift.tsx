import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const InsertShift = ({
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
          id="1175-插入班次"
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
              d="M21.2205714,9.74672779 C21.712563,9.74672779 22.1114009,10.1455658 22.1114009,10.6375573 L22.1114009,23.1091705 C22.1114009,23.5464963 21.7962696,23.9102194 21.3806991,23.9856475 L21.2205714,24 L5.18564018,24 C4.69364863,24 4.29481066,23.6011621 4.29481066,23.1091705 C4.29481066,22.6171789 4.69364863,22.218341 5.18564018,22.218341 L20.3297419,22.218341 L20.3297419,18.6550229 L5.18564018,18.6550229 C4.69364863,18.6550229 4.29481066,18.256185 4.29481066,17.7641934 C4.29481066,17.2722018 4.69364863,16.8733639 5.18564018,16.8733639 L20.3297419,16.8733639 L20.3297419,13.3100458 L5.18564018,13.3100458 C4.69364863,13.3100458 4.29481066,12.9112078 4.29481066,12.4192163 C4.29481066,11.9272248 4.69364863,11.5283868 5.18564018,11.5283868 L20.3297419,11.5283868 L20.3297419,10.6375573 C20.3297419,10.1455658 20.7285798,9.74672779 21.2205714,9.74672779 Z M9.11863084,0.260917942 L12.8981004,4.04038747 C13.0287894,4.17107652 13.1103836,4.33226917 13.142883,4.50104738 C13.1810719,4.60177446 13.2031058,4.71226719 13.2031058,4.82790624 C13.2031058,4.93337895 13.1847758,5.03457045 13.1511277,5.12846901 C13.1332674,5.28104071 13.0754718,5.4293378 12.9783274,5.55729433 L12.8981004,5.64919681 L9.11863084,9.42866639 C8.77074025,9.77655686 8.20669828,9.77655686 7.85880771,9.42866639 C7.53767793,9.1075366 7.51297567,8.60223039 7.78470085,8.25276581 L7.85880771,8.16884315 L10.3086791,5.71734381 L0.890829513,5.71873576 C0.398837971,5.71873576 0,5.31989781 0,4.82790624 C0,4.3359147 0.398837971,3.93707673 0.890829513,3.93707673 L10.2748276,3.93568478 L7.85880771,1.5207411 C7.51091713,1.17285054 7.51091713,0.608808475 7.85880771,0.260917942 C8.20669828,-0.0869726475 8.77074025,-0.0869726475 9.11863084,0.260917942 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
InsertShift.displayName = 'InsertShift';
export default InsertShift;