import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Hide = ({
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
          id="1503-隐藏"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 8.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12,0 C13.9122898,0 15.8070859,0.610075421 17.686131,1.82118291 L18.9844145,0.523899125 C19.2427248,0.265588911 19.6615283,0.265588911 19.9198386,0.523899125 C20.1781488,0.782209366 20.1781488,1.201013 19.9198386,1.45932321 L19.9198386,1.45932321 L18.7820886,2.59701944 C20.4010527,3.84591596 22.0085028,5.54255973 23.605568,7.68111045 C24.1660559,8.43164077 24.1253719,9.47189725 23.5079799,10.1763612 C19.7231612,14.4949595 15.8870232,16.6835372 12,16.6835372 C10.0828417,16.6835372 8.17806912,16.1511354 6.28572725,15.0933572 L4.95305358,16.4261082 C4.69474339,16.6844184 4.27593976,16.6844184 4.01762952,16.4261082 C3.7593193,16.1677979 3.7593193,15.7489943 4.01762952,15.4906841 L4.01762952,15.4906841 L5.12964669,14.3807883 C3.57532071,13.3333947 2.02943338,11.9306151 0.492013074,10.1763739 C-0.125369406,9.47192144 -0.166053467,8.43168159 0.394424741,7.68116265 C4.19889881,2.58670953 8.06234366,0 12,0 Z M17.8380336,3.54019593 L15.2406408,6.14027407 C15.6992278,6.78757216 15.9687476,7.57827242 15.9687476,8.43192241 C15.9687476,10.6237573 14.1919144,12.4005906 12.0000795,12.4005906 C11.1459086,12.4005906 10.3547642,12.1307417 9.70724624,11.6716439 L7.2617256,14.1172233 C8.85167972,14.9480033 10.431089,15.3606478 11.9999939,15.3606478 C15.4533268,15.3606478 18.957551,13.3614322 22.5130946,9.30444393 C22.7188993,9.06961431 22.732461,8.72284987 22.5456273,8.47266725 C20.9644781,6.35542883 19.3948432,4.71354101 17.8380336,3.54019593 Z M11.9999939,1.3228894 C8.55391269,1.3228894 5.03362595,3.67984275 1.45436844,8.47271537 C1.2675415,8.72288953 1.28110289,9.06963773 1.48689768,9.30445591 C3.02904581,11.0640917 4.56153882,12.4366157 6.08441192,13.4268059 L8.77059829,10.739131 C8.30527549,10.0889628 8.03141133,9.29242484 8.03141133,8.43192241 C8.03141133,6.24008751 9.80824461,4.46325423 12.0000795,4.46325423 C12.8600148,4.46325423 13.6560699,4.73675748 14.3060023,5.20152131 L16.7254859,2.78000534 C15.1360467,1.80615065 13.5604122,1.3228894 11.9999939,1.3228894 Z M14.2841143,7.09566384 L10.6633683,10.7156917 C11.0556345,10.9457846 11.5124516,11.0777012 12.0000795,11.0777012 C13.4613027,11.0777012 14.6458583,9.89314569 14.6458583,8.43192241 C14.6458583,7.94448204 14.5140432,7.48782874 14.2841143,7.09566384 Z M12.0000795,5.78614362 C10.5388562,5.78614362 9.35430072,6.97069913 9.35430072,8.43192241 C9.35430072,8.92563876 9.48953206,9.38777017 9.72497478,9.78329666 L13.3508821,6.15647743 C12.955482,5.92124468 12.493558,5.78614362 12.0000795,5.78614362 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Hide.displayName = 'Hide';
export default Hide;
