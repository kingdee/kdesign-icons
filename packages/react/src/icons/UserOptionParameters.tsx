import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const UserOptionParameters = ({
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
          id="1464-用户选项参数"
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
              d="M18.4737506,12.2218336 C18.6069334,12.0408256 18.8414971,11.9571807 19.0638972,12.0212297 C19.9940671,12.2891084 20.844467,12.786609 21.5469493,13.4661671 C21.7150453,13.628777 21.7607672,13.8804536 21.6606071,14.0917985 C21.5851952,14.2509208 21.5453227,14.4268812 21.5453227,14.6100982 C21.5453227,15.2537841 22.0386735,15.7670461 22.6321812,15.7670614 L22.6321812,15.7670614 L22.7443707,15.7735359 C22.9484654,15.8057229 23.1201538,15.9519486 23.18136,16.1546764 C23.3616774,16.7519226 23.454402,17.3772715 23.454402,18.0148963 C23.454402,18.4376363 23.4136502,18.8552686 23.3334285,19.2632858 C23.2790688,19.5397663 23.0230668,19.7293357 22.7427539,19.7006809 C22.7076302,19.6970908 22.6721158,19.695281 22.6362251,19.695281 C22.0386735,19.695281 21.5453227,20.2085429 21.5453227,20.8522288 C21.5453227,21.1337361 21.639832,21.3976822 21.8086328,21.6058242 C21.9794768,21.8164862 21.969579,22.1206745 21.7853998,22.3197838 C21.069026,23.0942274 20.1706133,23.6669818 19.1747765,23.9754322 C18.886559,24.064704 18.5806198,23.9030258 18.4919992,23.6146075 L18.4919992,23.6146075 L18.4456031,23.4889956 C18.2694759,23.0836577 17.8841091,22.8163451 17.4544387,22.8163451 C16.9818019,22.8163451 16.562771,23.1397933 16.4168781,23.6146075 L16.4168781,23.6146075 L16.3796118,23.7058822 C16.2604896,23.9358565 15.9902938,24.0547856 15.7341008,23.9754322 C14.7382662,23.6669828 13.8398546,23.0942296 13.1234721,22.319786 C12.9392885,22.1206756 12.9293907,21.8164796 13.1002424,21.6058165 C13.2690453,21.39768 13.3635546,21.1337361 13.3635546,20.8522288 C13.3635546,20.2085418 12.870206,19.695281 12.2726522,19.695281 C12.236768,19.695281 12.2012374,19.6970908 12.1661201,19.7006809 C11.8858084,19.7293357 11.6298052,19.5397663 11.5754455,19.2632858 C11.495226,18.8552752 11.4544754,18.4376417 11.4544754,18.0148963 C11.4544754,17.3772541 11.5471966,16.751903 11.7275162,16.154671 C11.7974671,15.9229851 12.0117203,15.7650966 12.2537294,15.7668912 L12.2537294,15.7668912 L12.3906584,15.7603163 C12.9337936,15.6980312 13.3635546,15.2108724 13.3635546,14.6100982 C13.3635546,14.4268812 13.3236821,14.2509208 13.2482702,14.0917985 C13.1481101,13.8804536 13.193832,13.628777 13.3619281,13.4661671 C14.0644103,12.786609 14.9148102,12.2891084 15.8449801,12.0212297 C16.0991517,11.9480313 16.36921,12.0677382 16.4856671,12.3052233 L16.4856671,12.3052233 L16.554826,12.4274032 C16.7563702,12.7385821 17.0905878,12.9297169 17.4544387,12.9297169 C17.8637714,12.9297169 18.235599,12.6878115 18.4232102,12.3052233 L18.4232102,12.3052233 L18.4737506,12.2218336 Z M19.1398829,13.1977374 L19.1171103,13.2286994 C18.7112182,13.7206615 18.1097383,14.0206193 17.4544387,14.0206193 C16.799139,14.0206193 16.1976591,13.7206615 15.791767,13.2286994 L15.791767,13.2286994 L15.7679035,13.1977374 L15.5918395,13.2676937 C15.2308293,13.4225353 14.8890125,13.6220537 14.5733708,13.8615636 L14.5733708,13.8615636 L14.3770029,14.0180961 L14.4184594,14.2017287 C14.4303764,14.2685509 14.4393764,14.3361039 14.445396,14.404221 L14.445396,14.404221 L14.454457,14.6100982 C14.454457,15.6781823 13.7295534,16.5779935 12.7498729,16.8035256 L12.7498729,16.8035256 L12.6806497,16.8162607 L12.6275489,17.0748952 C12.5912415,17.2798321 12.5668227,17.4878017 12.5545785,17.6980088 L12.5545785,17.6980088 L12.5453778,18.0148963 C12.5453778,18.190908 12.5538465,18.3657011 12.5706398,18.5388371 L12.5706398,18.5388371 L12.5813776,18.6260679 L12.7705979,18.6630593 C13.6872428,18.8831739 14.3779171,19.69779 14.4485018,20.6850556 L14.4485018,20.6850556 L14.454457,20.8522288 C14.454457,21.1853151 14.3836465,21.5079822 14.251031,21.8011754 L14.251031,21.8011754 L14.2166403,21.867139 L14.3369472,21.9771499 C14.6976453,22.2873916 15.098792,22.5426312 15.5284166,22.7343485 L15.5284166,22.7343485 L15.6129954,22.7682243 L15.6837579,22.6592116 C16.0501756,22.1356406 16.6268845,21.7873253 17.2757805,21.7329078 L17.2757805,21.7329078 L17.4544387,21.7254427 C18.1753986,21.7254427 18.825391,22.0880434 19.2251195,22.6592116 L19.2251195,22.6592116 L19.294791,22.7682243 L19.3804618,22.7343485 C19.8100853,22.5426312 20.2112309,22.2873916 20.5719258,21.977151 L20.5719258,21.977151 L20.6911461,21.867139 L20.6578409,21.8011677 C20.5517517,21.5666139 20.4852165,21.3131983 20.4628453,21.0506759 L20.4628453,21.0506759 L20.4544203,20.8522288 C20.4544203,19.7279306 21.2576398,18.7900829 22.3127028,18.6288573 L22.3127028,18.6288573 L22.3264089,18.6260679 L22.3382364,18.5388317 L22.3571657,18.2779413 L22.3634995,18.0148963 C22.3634995,17.6965415 22.3357884,17.3823147 22.2813262,17.0749061 L22.2813262,17.0749061 L22.2271367,16.8162607 L22.1564004,16.8035354 C21.2307501,16.5898636 20.5314249,15.7710311 20.4603755,14.7772714 L20.4603755,14.7772714 L20.4544203,14.6100982 C20.4544203,14.471942 20.4665828,14.3353719 20.4904179,14.2017287 L20.4904179,14.2017287 L20.5307835,14.0180961 L20.3355065,13.8615636 C20.0198648,13.6220537 19.678048,13.4225353 19.3170378,13.2676937 L19.3170378,13.2676937 L19.1398829,13.1977374 Z M9.81812175,0 C13.433056,0 16.3635363,2.93048026 16.3635363,6.54541451 C16.3635363,9.11824458 14.879105,11.3443651 12.7199844,12.4140342 C12.8094416,12.4377275 12.8986425,12.4650776 12.9873711,12.4936254 C12.6600644,12.7586841 12.3578058,13.052186 12.0833337,13.3703335 C11.3550767,13.1860288 10.5944603,13.090829 9.81812175,13.090829 C4.99108036,13.090829 1.09090241,16.7615847 1.09090241,21.2725971 C1.09090241,21.5738411 0.846695188,21.8180483 0.545451191,21.8180483 C0.244207218,21.8180483 0,21.5738411 0,21.2725971 C0,17.1005412 2.9134567,13.5802057 6.91532314,12.4120117 C4.75663998,11.3436168 3.27270724,9.11781148 3.27270724,6.54541451 C3.27270724,2.93048026 6.2031875,0 9.81812175,0 Z M17.4544387,15.2726338 C18.9606629,15.2726338 20.1816947,16.4936656 20.1816947,17.9998899 C20.1816947,19.5061141 18.9606629,20.7271459 17.4544387,20.7271459 C15.9482144,20.7271459 14.7271826,19.5061141 14.7271826,17.9998899 C14.7271826,16.4936656 15.9482144,15.2726338 17.4544387,15.2726338 Z M17.4544387,16.3635363 C16.5507035,16.3635363 15.818085,17.0961547 15.818085,17.9998899 C15.818085,18.9036251 16.5507035,19.6362435 17.4544387,19.6362435 C18.3581739,19.6362435 19.0907923,18.9036251 19.0907923,17.9998899 C19.0907923,17.0961547 18.3581739,16.3635363 17.4544387,16.3635363 Z M9.81812175,1.09090241 C6.80567655,1.09090241 4.36360967,3.5329693 4.36360967,6.54541451 C4.36360967,9.55785971 6.80567655,11.9999266 9.81812175,11.9999266 C12.8305669,11.9999266 15.2726338,9.55785971 15.2726338,6.54541451 C15.2726338,3.5329693 12.8305669,1.09090241 9.81812175,1.09090241 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
UserOptionParameters.displayName = 'UserOptionParameters';
export default UserOptionParameters;