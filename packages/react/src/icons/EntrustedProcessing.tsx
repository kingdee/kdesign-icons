import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const EntrustedProcessing = ({
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
          id="555.受托加工"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M16.2303041,3.93896752 C16.2202007,2.89132472 16.6261722,1.88360702 17.3567842,1.14277625 C18.0873961,0.401945511 19.0812137,-0.00970413058 20.1144056,0.00017375423 C20.4449775,-0.00118199714 20.7742656,0.0423551183 21.093349,0.129972458 L19.5059252,1.73959886 C19.0020502,2.23438767 18.8003739,2.96618762 18.978291,3.65416399 C19.1562082,4.34214036 19.6860821,4.87942532 20.3645687,5.05983099 C21.0430553,5.24023669 21.7647611,5.0357395 22.2527249,4.52481705 L23.8535852,2.9015662 C23.952706,3.23811171 24.001872,3.58774305 23.9998286,3.93896752 C24.0095703,4.98661034 23.6035989,5.99432804 22.8729868,6.73515878 C22.1423749,7.47598955 21.1485573,7.88763919 20.1153653,7.87739448 C19.7689865,7.87981873 19.42418,7.82996541 19.0922737,7.72947234 L7.02535782,19.9719758 C6.53739399,20.4828982 5.81568826,20.6873953 5.13720161,20.5069897 C4.45871499,20.326584 3.92884115,19.789299 3.75092395,19.1013226 C3.57300672,18.4133463 3.77468315,17.6815463 4.27855807,17.1867576 L16.3627494,4.93354927 C16.2763636,4.60999842 16.2334274,4.27610781 16.2351029,3.94091386 L16.2303041,3.93896752 Z M4.46570901,8.04088737 L2.86964753,9.65927234 L0,6.74948819 L1.59030298,5.13694222 C2.0837724,5.33491308 2.64606614,5.21676697 3.02131991,4.83626469 C3.39657367,4.45576238 3.51309012,3.88560405 3.31785,3.38523269 L5.16152655,1.51576933 C5.96013492,0.727156026 6.99736848,0.234195321 8.10603445,0.116348044 C9.25640469,0.000645363527 10.4129598,0.263375383 11.4046894,0.86569047 L10.7990883,1.39314965 C9.98168697,1.30944234 9.15605137,1.39925894 8.37476399,1.65687927 C7.66240393,1.90632301 7.02544927,2.33768074 6.52532894,2.90935158 L12.0074114,8.46810988 L10.247233,10.2529073 C10.2033868,10.2111367 10.1723894,10.1573999 10.1579764,10.0981729 L6.57811509,6.46824149 C6.46774405,6.40790483 6.37464847,6.33589009 6.27675413,6.27847293 L6.22204845,6.22300214 L6.20573274,6.23954605 C5.69913283,5.98710502 5.08995094,6.09291127 4.69508856,6.50192351 C4.30022619,6.91093575 4.20888775,7.53075296 4.46858825,8.03894103 L4.46570901,8.04088737 Z M21.6864734,17.1604819 C22.0624983,17.5274046 22.2756953,18.0332701 22.277342,18.5624271 C22.2789513,19.0915841 22.068871,19.5987886 21.6951111,19.968083 C21.3334674,20.3483751 20.8336385,20.5613355 20.3126504,20.5572255 C19.7916623,20.5528714 19.2952622,20.3318184 18.9396737,19.9457 L13.3932881,14.3227124 L16.1400877,11.5374943 L21.6864734,17.1604819 Z M4.83905111,18.5229227 C4.83905111,18.8539497 5.0357065,19.1523819 5.33731715,19.2790604 C5.63892782,19.405739 5.98609673,19.335717 6.21693956,19.1016454 C6.44778236,18.8675739 6.51683854,18.5155493 6.39190733,18.2097201 C6.26697607,17.903891 5.9726605,17.7044851 5.64619947,17.7044851 C5.43150191,17.702384 5.22499449,17.7879372 5.07317333,17.9418818 C4.92135217,18.0958264 4.83697912,18.3052222 4.83905111,18.5229227 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
EntrustedProcessing.displayName = 'EntrustedProcessing';
export default EntrustedProcessing;
