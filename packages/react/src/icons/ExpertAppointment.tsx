import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ExpertAppointment = ({
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
          id="775.专家任命"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M15.3466605,23.267236 C15.3448836,24.8616615 15.7586419,26.4290257 16.5471517,27.8148283 C16.3588096,27.8330843 16.1706189,27.8531662 15.9819728,27.8699004 C15.2086854,27.9395725 14.4337768,27.9898948 13.6579733,28.0208182 C12.9055172,28.0498754 12.2434291,28.0658501 11.6776435,28.0658501 C11.1117036,28.0658501 10.4593531,28.0465291 9.71359248,28.0048435 C8.97102536,27.9633105 8.20579096,27.9149324 7.42153963,27.8537744 C6.63728829,27.7926164 5.8562319,27.7220263 5.08141265,27.6417 C4.30674616,27.5613723 3.59962757,27.468115 2.96309762,27.3683149 C2.3232214,27.265624 1.78010301,27.1691717 1.33009068,27.0792606 C0.880078345,26.9891968 0.603498311,26.892743 0.497461146,26.7897495 C0.307750021,26.6482638 0.163222143,26.1952093 0.0571849769,25.4363633 C-0.0490049468,24.6744766 -0.00732072531,23.6845394 0.182390399,22.4694454 C0.288580323,21.7783002 0.574592447,21.2511551 1.04712075,20.8878589 C1.51964905,20.5213678 2.06276887,20.2321607 2.67997637,20.0199336 C3.31965083,19.8003612 3.96980507,19.6125999 4.62805405,19.4573414 C5.30961449,19.293494 5.90111107,19.0525138 6.40254523,18.7277069 C6.8012885,18.4835317 7.10966527,18.2521349 7.32828226,18.0271295 C7.54689781,17.8053176 7.70450956,17.5801594 7.80081056,17.3583474 C7.89406793,17.1365369 7.9422948,16.9019452 7.9422948,16.6576187 C7.9422948,16.4134436 7.93270996,16.1402098 7.91004267,15.8347254 C7.86835701,15.3879065 7.7171366,15.04378 7.45364044,14.7997562 C7.17257422,14.5377127 6.8842174,14.2835996 6.58891009,14.0377168 C6.42156217,13.9157049 6.28022924,13.7389263 6.16460723,13.5041832 C6.04832663,13.2679933 5.93789406,13.0289687 5.83341186,12.787327 C5.72737469,12.5238309 5.63411589,12.2280826 5.55059469,11.9032757 C5.50875771,11.8614387 5.44440476,11.7908486 5.36088356,11.6912013 C5.29653062,11.5882064 5.22578777,11.4532633 5.14226657,11.2796783 C5.05889669,11.1059405 4.96563932,10.858419 4.8594494,10.5339162 C4.75325947,10.2091107 4.68586434,9.91990366 4.65361221,9.66599235 C4.62151139,9.41192828 4.62790129,9.19361537 4.66958551,9.01014138 C4.69210148,8.78832945 4.74352331,8.59557613 4.82719727,8.43157592 C4.82719727,7.72126093 4.86888149,7.01079607 4.95255545,6.30048109 C5.03607665,5.71217945 5.17101968,5.07230324 5.3607308,4.38130927 C5.55044193,3.69031674 5.8524288,3.07310924 6.27034176,2.5234482 C6.64656906,2.01547282 7.05474442,1.59451767 7.49502059,1.26012735 C7.93544807,0.925888342 8.38880811,0.665434374 8.8611851,0.485459415 C9.32224645,0.305653067 9.80211867,0.178425761 10.2917011,0.106189924 C10.7738143,0.0352957633 11.2335642,0 11.6738404,0 C12.1559521,0.0418369795 12.5483069,0.0964523166 12.8502923,0.16719516 C13.1524305,0.237938004 13.3999534,0.324654154 13.5895117,0.424301421 C13.7793756,0.527296395 13.9398768,0.645962042 14.0749726,0.790792554 C14.2139363,0.935722504 14.3553917,1.07824291 14.499274,1.21829037 L15.0973132,1.21829037 C15.283204,1.21779895 15.4682214,1.24371882 15.6468215,1.29527035 C15.8236015,1.3468435 16.0037278,1.44329581 16.1803565,1.58462874 C16.3572878,1.72611299 16.5533888,1.92860391 16.7622682,2.19210007 C17.2443814,2.79972416 17.6012877,3.46500577 17.8296423,4.18520824 C18.0610376,4.90510808 18.2280814,5.59001478 18.3309237,6.23932309 C18.4369608,6.99147506 18.4981188,7.73084578 18.5206348,8.46048178 C18.562319,8.56347532 18.5945711,8.68229228 18.6138922,8.82697292 C18.6362568,8.96830441 18.6491879,9.14188946 18.6619677,9.34438039 C18.6717039,9.54702263 18.6555778,9.80093538 18.6138922,10.1062671 C18.5720566,10.5114002 18.507855,10.8327081 18.424181,11.0641035 C18.3408126,11.2986952 18.2474025,11.4756265 18.1413639,11.5977898 C18.0351754,11.7391227 17.9225956,11.8419664 17.7973887,11.9029716 C17.7138675,12.2277771 17.6206087,12.5235268 17.5145715,12.787023 C17.4100216,13.0286329 17.2995905,13.2676561 17.1833761,13.5038792 C17.0677541,13.7386208 16.9264212,13.9154008 16.759226,14.0374127 C16.4625626,14.2725996 16.1689198,14.5115709 15.8783696,14.7542689 C15.6469743,14.9473263 15.4927102,15.2783703 15.4059926,15.7445087 C15.3416411,16.0274787 15.3223201,16.3134908 15.3416411,16.596308 C15.3640043,16.8791251 15.4411356,17.1686363 15.5762314,17.464386 C15.7113258,17.7599816 15.9329864,18.0364088 16.2351246,18.3000578 C16.3570817,18.4050732 16.4875544,18.4997731 16.6251967,18.583179 C15.7862277,20.001434 15.3445911,21.6194159 15.3466605,23.267236 Z M13.0015142,20.9487128 C13.0657144,20.8265481 13.0689093,20.70119 13.0174875,20.5698987 C12.9660671,20.4379979 12.8857394,20.3126397 12.7828972,20.1904765 C12.6767073,20.0683118 12.5513491,19.9365637 12.4068212,19.7950795 L10.9633741,19.7950795 C10.8154999,19.9365637 10.7029201,20.0683118 10.6193989,20.1904765 C10.5362884,20.2923085 10.4671178,20.4047629 10.413713,20.5248668 C10.3622912,20.6467259 10.3654861,20.7594571 10.4298391,20.8591058 C10.5777132,21.1417702 10.7030714,21.3923353 10.8059151,21.6047151 C10.912105,21.8169422 11.0245321,21.9839846 11.1498902,22.1061493 C11.1082046,22.2893177 11.0437003,22.5465767 10.9603304,22.8840107 C10.8766565,23.2185538 10.7996779,23.5655711 10.7257401,23.9192825 C10.6518023,24.2758847 10.5906444,24.6102764 10.5358763,24.925193 C10.4846072,25.2402637 10.4588963,25.478049 10.4588963,25.6420492 C10.4588963,25.7450442 10.5069718,25.8638611 10.6002292,26.0085403 C10.702531,26.1612278 10.8130414,26.3082546 10.9312733,26.4489678 C11.0566314,26.6000369 11.1885323,26.7285915 11.3234753,26.8282387 C11.4584183,26.931081 11.5805816,26.9793078 11.6835765,26.9793078 C11.7897665,26.9793078 11.9149719,26.927886 12.0596525,26.8282387 C12.2104752,26.7233732 12.3523442,26.6061833 12.4838012,26.4778737 C12.618897,26.3459743 12.7348231,26.2046414 12.8279291,26.0502246 C12.9213392,25.8991555 12.9694134,25.7706023 12.9694134,25.6709551 C12.9694134,25.5487904 12.937314,25.339911 12.8763073,25.0472049 C12.811803,24.7514566 12.7442551,24.4236075 12.6704701,24.0571164 C12.5965338,23.6909293 12.519401,23.337218 12.4357271,22.9930901 C12.3522059,22.6492676 12.2782681,22.3728404 12.2169588,22.1705008 C12.3424697,22.0673545 12.4646329,21.9229794 12.57706,21.7299205 C12.7251085,21.4731385 12.8666389,21.2126528 13.0015142,20.9487128 Z M22.3403232,17.5795743 C25.4475955,17.5795743 27.8890256,20.0210043 28,23.1282766 C28,24.5709398 27.4451293,26.013603 26.335388,27.1233429 C25.2256481,28.1221098 23.7829849,28.7879534 22.3403232,28.7879534 C19.2330495,28.7879534 16.7916194,26.2355504 16.7916194,23.2392511 C16.6806464,20.1319773 19.2330495,17.5795743 22.3403232,17.5795743 Z M25.3366225,22.9063292 C25.4475955,22.7953548 25.4475955,22.5734074 25.4475955,22.462433 C25.4475955,22.3514586 25.2256481,22.2404841 25.1146737,22.1295112 L23.6720105,21.9075623 C23.5610375,21.9075623 23.4500631,21.7965893 23.3390887,21.6856149 L22.673245,20.3539262 C22.673245,20.2429517 22.4512962,20.1319773 22.3403232,20.1319773 C22.2293488,20.1319773 22.0073999,20.2429517 22.0073999,20.3539262 L21.3415563,21.6856149 C21.2305819,21.7965893 21.1196074,21.9075623 21.0086345,21.9075623 L19.5659713,22.1295112 C19.4549969,22.1295112 19.2330495,22.2404841 19.2330495,22.462433 C19.2330495,22.5734074 19.2330495,22.7953548 19.3440225,22.9063292 L20.4537638,23.9050961 C20.4537638,24.0160691 20.5647382,24.1270436 20.4537638,24.238018 L20.231815,25.6806811 C20.231815,25.7916541 20.231815,26.013603 20.3427894,26.1245774 C20.4537638,26.2355504 20.6757112,26.2355504 20.7866856,26.1245774 L22.1183744,25.4587323 C22.2293488,25.3477579 22.3403232,25.3477579 22.5622706,25.4587323 L23.8939594,26.1245774 C24.0049338,26.2355504 24.2268812,26.2355504 24.3378556,26.1245774 C24.44883,26.013603 24.559803,25.9026285 24.44883,25.6806811 L24.2268812,24.238018 C24.2268812,24.1270436 24.2268812,24.0160691 24.3378556,23.9050961 L25.3366225,22.9063292 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ExpertAppointment.displayName = 'ExpertAppointment';
export default ExpertAppointment;