import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const TaxDeclarationSettings = ({
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
          id="440.个税申报设置"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M19.0932412,0 C19.3384715,0 19.5372701,0.1987985 19.5372701,0.444028865 L19.537855,10.8380545 C19.5039782,10.8269559 19.4688208,10.8207844 19.4339975,10.8207844 L16.0883117,10.8207844 C15.9633765,10.8207844 15.8185199,10.9128728 15.7654585,11.0198351 C15.7654585,11.0198351 14.6129673,13.5885482 13.072259,13.5885482 C12.5680113,13.5885482 11.8870233,13.3009731 11.8870233,13.3009731 C11.7765464,13.2582249 11.6395669,13.3058158 11.5727304,13.4217361 L9.88289175,16.3525718 C9.81978947,16.4620156 9.84413897,16.6274972 9.91892499,16.7064534 C9.91892499,16.7064534 11.1729841,17.9252635 11.1729841,18.9535236 C11.1729841,19.9817837 9.91892499,21.2005938 9.91892499,21.2005938 C9.83592214,21.2865935 9.81605521,21.4385549 9.88289175,21.5544754 L11.0008999,23.4939977 L0.444028865,23.49458 C0.1987985,23.49458 0,23.2957814 0,23.0505511 L0,0.444028865 C0,0.1987985 0.1987985,0 0.444028865,0 L19.0932412,0 Z M6.81929901,3.26111856 L5.61449678,3.26111856 L5.61449678,3.8740881 C4.28921436,3.8740881 3.20489237,4.97743329 3.20489237,6.32596629 C3.20489237,7.67449929 4.28921436,8.77784451 5.61449678,8.77784451 L5.61449678,8.77784451 L5.61449678,11.2297226 C4.95185557,11.2297226 4.40969458,10.6780501 4.40969458,10.0037835 L4.40969458,10.0037835 L3.20489237,10.0037835 C3.20489237,11.3523166 4.28921436,12.4556618 5.61449678,12.4556618 L5.61449678,12.4556618 L5.61449678,13.0686313 L6.81929901,13.0686313 L6.81929901,12.4556618 C8.14458143,12.4556618 9.22890345,11.3523166 9.28914355,10.0037835 C9.28914355,9.26822013 8.92770288,8.5939536 8.445782,8.16487494 C8.02410122,7.79709321 7.48194022,7.55190537 7.06025944,7.55190537 L7.06025944,7.55190537 L6.81929901,7.55190537 L6.81929901,5.10002721 C7.48194022,5.10002721 8.02410122,5.65169979 8.02410122,6.32596629 L8.02410122,6.32596629 L9.22890345,6.32596629 C9.22890345,4.97743329 8.14458146,3.8740881 6.81929901,3.8740881 L6.81929901,3.8740881 L6.81929901,3.26111856 Z M6.81929901,8.77784451 C7.48194022,8.77784451 8.02410122,9.32951709 8.02410122,10.0037835 C8.02410122,10.6780501 7.48194022,11.2297226 6.81929901,11.2297226 L6.81929901,11.2297226 L6.81929901,8.77784451 Z M5.61449678,5.10002721 L5.61449678,7.55190537 C4.95185557,7.55190537 4.40969458,7.00023279 4.40969458,6.32596629 C4.40969458,5.65169979 4.95185557,5.10002721 5.61449678,5.10002721 L5.61449678,5.10002721 Z M15.9202103,19.2620771 C15.9202103,18.0788977 16.8394128,17.1163648 17.9693288,17.1163648 C19.0992448,17.1163648 20.0184471,18.0788977 20.0184471,19.2620771 C20.0184471,20.4452564 19.0992448,21.4079872 17.9693288,21.4079872 C16.8394128,21.4079872 15.9202103,20.4452564 15.9202103,19.2620771 Z M16.7203797,12.8195695 C16.5942324,12.8195695 16.4485284,12.9133016 16.3958392,13.0208805 C16.3958392,13.0208805 15.5346438,15.0009711 14.3538532,15.0009711 C13.9674005,15.0009711 13.4923903,14.7919187 13.4923903,14.7919187 C13.3818218,14.7485074 13.2432716,14.800564 13.186454,14.9019044 L11.9277078,17.1470194 C11.8693123,17.2511741 11.8925916,17.4097798 11.9716264,17.496674 C11.9716264,17.496674 12.8982591,18.4189353 12.8982591,19.2293542 C12.8982591,20.0397732 11.9716264,20.9620345 11.9716264,20.9620345 C11.8889754,21.0509888 11.8708902,21.2103487 11.9277078,21.3116891 L13.186454,23.5568041 C13.2448495,23.6609588 13.3790277,23.7101207 13.4923903,23.6667898 C13.4923903,23.6667898 13.9674005,23.4577374 14.3538532,23.4577374 C15.5346438,23.4577374 16.3956884,25.437828 16.3956884,25.437828 C16.4487714,25.549009 16.588664,25.639139 16.7202397,25.639139 L19.1745556,25.639139 C19.3007174,25.639139 19.4464259,25.5454069 19.4991069,25.437828 C19.4991069,25.437828 20.3601515,23.4577374 21.5409421,23.4577374 C21.9273948,23.4577374 22.4025258,23.6667898 22.4025258,23.6667898 C22.5131194,23.7102011 22.6516843,23.6581445 22.7084954,23.5568041 L23.9670995,21.3116891 C24.0254883,21.2075344 24.0021928,21.0489287 23.9231458,20.9620345 C23.9231458,20.9620345 22.99637,20.0397732 22.99637,19.2293542 C22.99637,18.4189353 23.9231458,17.496674 23.9231458,17.496674 C24.0058095,17.4077197 24.0239106,17.2483598 23.9670995,17.1470194 L22.7084954,14.9019044 C22.6501067,14.7977497 22.5159133,14.7485878 22.4025258,14.7919187 C22.4025258,14.7919187 21.9273948,15.0009711 21.5409421,15.0009711 C20.3601515,15.0009711 19.498956,13.0208805 19.498956,13.0208805 C19.4458646,12.9096995 19.3059761,12.8195695 19.1744156,12.8195695 L16.7203797,12.8195695 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
TaxDeclarationSettings.displayName = 'TaxDeclarationSettings';
export default TaxDeclarationSettings;