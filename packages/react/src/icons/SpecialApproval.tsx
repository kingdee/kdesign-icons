import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SpecialApproval = ({
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
          id="567.专项审批"
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
              d="M9.27019964,22.6392069 L11.6257985,24.9948058 L9.48274449,25.5860266 C9.13934244,25.6632022 8.90023712,25.6343858 8.76542841,25.499577 C8.64747075,25.3816194 8.6090457,25.182192 8.65015332,24.9012948 L8.67264021,24.7759223 L9.27019964,22.6392069 Z M18.0195671,13.8898394 L20.375166,16.2454383 L12.2988268,24.3217776 L9.94322782,21.9661786 L18.0195671,13.8898394 Z M16.180697,0 C17.2320326,0 18.0843084,0.852275856 18.0843084,1.90361141 L18.0843084,12.4058356 L8.59861275,21.8915312 L1.90361141,21.8915312 C0.852275856,21.8915312 0,21.0392554 0,19.9879198 L0,1.90361141 C0,0.852275856 0.852275856,0 1.90361141,0 L16.180697,0 Z M20.7116801,12.5437829 L21.7212226,13.5533253 C22.0929258,13.9250286 22.0929258,14.5276785 21.7212226,14.8993818 L21.0481943,15.5724101 L18.6925954,13.2168112 L19.3656237,12.5437829 C19.7373269,12.1720796 20.3399769,12.1720796 20.7116801,12.5437829 Z M3.5692714,9.51805706 C3.17502056,9.51805706 2.85541712,9.83766048 2.85541712,10.2319113 C2.85541712,10.6261622 3.17502056,10.9457656 3.5692714,10.9457656 C3.96352224,10.9457656 4.28312568,10.6261622 4.28312568,10.2319113 C4.28312568,9.83766048 3.96352224,9.51805706 3.5692714,9.51805706 Z M14.515037,9.51805706 L7.37649422,9.51805706 C6.98224336,9.51805706 6.66263994,9.83766048 6.66263994,10.2319113 C6.66263994,10.593308 6.93119563,10.89198 7.27962839,10.939249 L7.37649422,10.9457656 L14.515037,10.9457656 C14.9092879,10.9457656 15.2288913,10.6261622 15.2288913,10.2319113 C15.2288913,9.83766048 14.9092879,9.51805706 14.515037,9.51805706 Z M3.5692714,5.71083424 C3.17502056,5.71083424 2.85541712,6.03043768 2.85541712,6.42468852 C2.85541712,6.81893936 3.17502056,7.1385428 3.5692714,7.1385428 C3.96352224,7.1385428 4.28312568,6.81893936 4.28312568,6.42468852 C4.28312568,6.03043768 3.96352224,5.71083424 3.5692714,5.71083424 Z M14.515037,5.71083424 L7.37649422,5.71083424 C6.98224336,5.71083424 6.66263994,6.03043768 6.66263994,6.42468852 C6.66263994,6.78608512 6.93119563,7.08475719 7.27962839,7.13202614 L7.37649422,7.1385428 L14.515037,7.1385428 C14.9092879,7.1385428 15.2288913,6.81893936 15.2288913,6.42468852 C15.2288913,6.03043768 14.9092879,5.71083424 14.515037,5.71083424 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SpecialApproval.displayName = 'SpecialApproval';
export default SpecialApproval;