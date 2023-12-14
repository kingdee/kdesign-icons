import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ContactDetails = ({
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
          id="1323-联系方式"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M18.312516,24 C17.4851985,24 16.6471226,23.8201266 15.87019,23.4460346 C12.4422795,21.9532833 9.35609598,19.8490685 6.70511804,17.1909181 C4.0469677,14.5327678 1.94633923,11.4429685 0.460789822,8.00785589 C0.424809187,7.93233807 0.406818882,7.8927416 0.360079623,7.77765695 L0.302522467,7.64455231 C-0.010425999,6.86761973 -0.0859438232,5.75616216 0.101102096,4.67703972 C0.316926581,3.44326579 0.849285748,2.34621229 1.60464183,1.59085623 C2.39236267,0.803135359 3.3851494,0.267190002 4.47141462,0.0405772569 C5.23397275,-0.117690098 6.01452118,0.195258368 6.46413082,0.835500141 L10.4064102,6.46474933 C10.8560199,7.10860695 10.8812122,7.9575008 10.4639674,8.62655078 C10.2373546,8.99344055 9.96400261,9.33513797 9.65825619,9.64088439 C9.0395613,10.2595793 8.29143692,10.7271792 7.47129202,11.0041471 C9.00358069,13.0976031 10.8344433,14.9284065 12.9278994,16.4607545 C13.209409,15.6372539 13.6757471,14.8891481 14.2911621,14.2737903 C14.5753768,13.98972 14.8888557,13.7365247 15.226362,13.5184342 C15.895412,13.0868148 16.7478921,13.1047755 17.4061241,13.5652031 L23.0785263,17.5434335 C23.7367585,18.0038315 24.0425345,18.8095722 23.8626611,19.5937068 C23.6216738,20.6296467 23.0964871,21.5792209 22.3411309,22.3346067 C21.2512499,23.4244877 19.7908633,24 18.3125455,24 L18.312516,24 Z M1.89957036,6.99349267 L1.94633923,7.1049911 C1.99310812,7.21648956 2.00031017,7.23447986 2.0290591,7.29203702 L2.03984736,7.31364318 C4.87066917,13.8565157 10.0322887,19.0289533 16.5715751,21.8705633 L16.6003537,21.8849378 C18.1146817,22.6115153 19.9347265,22.3021827 21.1253473,21.1115914 C21.6504749,20.5864639 22.0173943,19.9245863 22.1864795,19.2052108 C22.2080856,19.1080869 22.1721051,19.0145787 22.0929713,18.9570217 L16.4133671,14.9859636 C16.3378492,14.9319927 16.2371094,14.9284065 16.1615619,14.9751754 C15.9277768,15.1262703 15.7083364,15.3024983 15.5105023,15.5039187 C14.9673548,16.0470662 14.5932927,16.7304906 14.4350253,17.4822605 C14.3450738,17.8995054 14.0573473,18.2412028 13.6616789,18.3994701 C13.2624244,18.5577375 12.8163713,18.5073823 12.4638856,18.2628089 C9.80573525,16.421158 7.52164711,14.1370995 5.67640998,11.4753333 C5.4318069,11.1228476 5.38145182,10.6767945 5.53974878,10.2775399 C5.69801614,9.88190125 6.03971356,9.59052928 6.45695841,9.50419358 C7.20514206,9.34592623 7.8921231,8.97183442 8.43530016,8.4287166 C8.65112464,8.21289211 8.83817056,7.97549111 9.00002411,7.72012943 C9.0500169,7.6415236 9.04717735,7.54041425 8.9928517,7.4647381 L5.05057232,1.8319027 C4.99660135,1.75638487 4.90670908,1.71678841 4.82037336,1.73477874 C4.06501727,1.89304607 3.37439078,2.26352205 2.82404131,2.81387153 C2.3204607,3.31745213 1.95715712,4.08718266 1.80250562,4.97205715 C1.67301689,5.72379738 1.71255408,6.51516371 1.89962963,6.99355194 L1.89957036,6.99349267 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ContactDetails.displayName = 'ContactDetails';
export default ContactDetails;
