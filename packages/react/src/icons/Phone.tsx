import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Phone = ({
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
          id="110.电话"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="电话"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.15108427,2.47171693 L2.85547538,0.767319048 C3.87856339,-0.255773016 5.53731683,-0.255773016 6.56040487,0.767319048 C6.62875184,0.83566631 6.69326392,0.90774368 6.75364521,0.983220575 L9.74216988,4.71889123 C10.4370949,5.58755084 10.3677379,6.83982201 9.58113624,7.62642669 L8.08621747,9.12135138 C8.8356338,10.476473 9.81529949,11.7599654 11.0276421,12.9723127 C12.2399759,14.1846514 13.5234534,15.1643156 14.8786262,15.9137607 L16.373507,14.4188243 C17.1601086,13.6322196 18.4123748,13.5628624 19.281031,14.2577901 L23.0166868,17.2463266 C24.1464986,18.1501795 24.3296772,19.7987941 23.4258279,20.9286103 C23.3654466,21.0040872 23.3009345,21.0761646 23.2325875,21.1445118 L21.5281904,22.8489157 C20.4579831,23.9191273 18.8682751,24.2796009 17.4411259,23.7756841 C14.313458,22.6713255 10.9472583,20.3018169 7.32271267,16.6772569 C3.69816339,13.0526933 1.32866299,9.68647718 0.224308982,6.55879066 C-0.279598288,5.1316342 0.0808792693,3.54192616 1.15108427,2.47171693 Z M2.38606077,3.70669828 C1.79150235,4.30125905 1.59123667,5.18443183 1.87118468,5.9772952 C2.87674722,8.82519029 5.10221576,11.9867885 8.55768912,15.4422755 C12.0131591,18.8977592 15.1747421,21.1232356 18.0226238,22.1288035 C18.8154845,22.4087573 19.6986565,22.208494 20.2932156,21.6139326 L21.997611,19.9095305 C22.0203933,19.886748 22.0418973,19.8627222 22.0620245,19.8375632 C22.3633076,19.4609579 22.302248,18.9114197 21.9256441,18.6101354 L18.1899883,15.6215989 C18.0162571,15.4826133 17.7658038,15.4964847 17.6084835,15.6538057 L16.1135645,17.1487306 C15.5630326,17.6992647 14.7145786,17.8189191 14.0333403,17.4421075 C12.5316375,16.6116275 11.1179152,15.5325489 9.79266564,14.2072942 C8.46740641,12.8820297 7.38832596,11.4682908 6.55784691,9.96656988 C6.18107487,9.28526865 6.30074165,8.43685157 6.85125223,7.88635879 L8.3461598,6.39144536 C8.50348008,6.2341244 8.51735148,5.98367016 8.37836651,5.80993825 L5.38984181,2.07426762 C5.36971471,2.04910865 5.34821069,2.02508283 5.32542837,2.00230043 C4.98439901,1.66126974 4.43148122,1.66126974 4.09045188,2.00230043 L2.38606077,3.70669828 Z M13.8063393,7.31804053 C13.3240509,7.31804053 12.933079,6.92706701 12.933079,6.44477679 C12.933079,5.96248655 13.3240509,5.57151308 13.8063393,5.57151308 C16.7000692,5.57151308 19.0459008,7.91735398 19.0459008,10.8110954 C19.0459008,11.2933855 18.6549288,11.6843591 18.1726405,11.6843591 C17.6903522,11.6843591 17.2993803,11.2933855 17.2993803,10.8110954 C17.2993803,8.88193444 15.7354925,7.31804053 13.8063393,7.31804053 Z M13.8063393,3.64412683 C13.3240509,3.64412683 12.933079,3.25315334 12.933079,2.77086312 C12.933079,2.2885729 13.3240509,1.89759941 13.8063393,1.89759941 C18.3880783,1.89759941 22.1023117,5.61184747 22.1023117,10.1936046 C22.1023117,10.6758948 21.7113397,11.0668683 21.2290514,11.0668683 C20.7467631,11.0668683 20.3557912,10.6758948 20.3557912,10.1936046 C20.3557912,6.57642796 17.4235016,3.64412683 13.8063393,3.64412683 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Phone.displayName = 'Phone';
export default Phone;
