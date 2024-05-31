import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const FferManagement = ({
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
          id="1911offer管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="rcgyy_offer_48_48"
            transform="translate(2.000000, 2.000000)"
            fill="#999999"
          >
            <path
              d="M6.03602629,15 L7.5032276,17.8794011 C7.8446707,18.5494874 8.53315906,18.9713841 9.28522232,18.9713841 L18.816861,18.9713841 C19.5712005,18.9713841 20.2613685,18.5469558 20.601718,17.8737617 L22.0546178,15 L27,15 C27.5522847,15 28,15.4477153 28,16 L28,26 C28,27.1045695 27.1045695,28 26,28 L2,28 C0.8954305,28 0,27.1045695 0,26 L0,16 C0,15.4477153 0.44771525,15 1,15 L6.03602629,15 Z M23,1.77635684e-15 C23.5522847,1.77635684e-15 24,0.44771525 24,1 L24,14 L21.439654,14 L19.7092895,17.4225729 C19.5391147,17.7591699 19.1940307,17.9713841 18.816861,17.9713841 L9.28522232,17.9713841 C8.90919069,17.9713841 8.56494651,17.7604358 8.39422496,17.4253926 L6.6488132,14 L4,14 L4,1 C4,0.44771525 4.44771525,1.77635684e-15 5,1.77635684e-15 L23,1.77635684e-15 Z M8.49023438,5.01660156 C7.74739583,5.01660156 7.15950521,5.25130208 6.7265625,5.72070312 C6.29361979,6.19010417 6.07714844,6.81901042 6.07714844,7.60742188 C6.07714844,8.34114583 6.28963216,8.93701172 6.71459961,9.39501953 C7.13956706,9.85302734 7.70524089,10.0820312 8.41162109,10.0820312 C9.13167318,10.0820312 9.70703125,9.84960938 10.1376953,9.38476562 C10.5683594,8.91992188 10.7836914,8.28759766 10.7836914,7.48779297 C10.7836914,6.75179036 10.5734863,6.15592448 10.1530762,5.70019531 C9.73266602,5.24446615 9.17838542,5.01660156 8.49023438,5.01660156 Z M17.8793945,6.41796875 C17.4008789,6.41796875 17.0004069,6.58943685 16.6779785,6.93237305 C16.3555501,7.27530924 16.1943359,7.71907552 16.1943359,8.26367188 C16.1943359,8.84016927 16.3407389,9.28735352 16.6335449,9.60522461 C16.9263509,9.9230957 17.3302409,10.0820312 17.8452148,10.0820312 C18.3693034,10.0820312 18.7908529,9.98177083 19.1098633,9.78125 L19.1098633,9.14208984 C18.7976888,9.36539714 18.4547526,9.47705078 18.0810547,9.47705078 C17.7483724,9.47705078 17.4868978,9.38932292 17.2966309,9.21386719 C17.1063639,9.03841146 17.0066732,8.78889974 16.9975586,8.46533203 L19.3833008,8.46533203 L19.3833008,8.16113281 C19.3833008,7.61425781 19.2522786,7.18701172 18.9902344,6.87939453 C18.7281901,6.57177734 18.3579102,6.41796875 17.8793945,6.41796875 Z M13.1079102,4.73974609 C12.7456055,4.73974609 12.4436849,4.84627279 12.2021484,5.05932617 C11.960612,5.27237956 11.8398438,5.56347656 11.8398438,5.93261719 L11.8398438,6.5 L11.2416992,6.5 L11.2416992,7.12207031 L11.8398438,7.12207031 L11.8398438,10 L12.6328125,10 L12.6328125,7.12207031 L13.4428711,7.12207031 L13.4428711,6.5 L12.6293945,6.5 L12.6293945,6.02490234 C12.6293945,5.58968099 12.8219401,5.37207031 13.2070312,5.37207031 C13.34375,5.37207031 13.4656576,5.40283203 13.5727539,5.46435547 L13.5727539,4.8046875 C13.4588216,4.76139323 13.3038737,4.73974609 13.1079102,4.73974609 Z M15.5209961,4.73974609 C15.1586914,4.73974609 14.8567708,4.84627279 14.6152344,5.05932617 C14.3736979,5.27237956 14.2529297,5.56347656 14.2529297,5.93261719 L14.2529297,6.5 L13.6547852,6.5 L13.6547852,7.12207031 L14.2529297,7.12207031 L14.2529297,10 L15.0458984,10 L15.0458984,7.12207031 L15.855957,7.12207031 L15.855957,6.5 L15.0424805,6.5 L15.0424805,6.02490234 C15.0424805,5.58968099 15.235026,5.37207031 15.6201172,5.37207031 C15.7568359,5.37207031 15.8787435,5.40283203 15.9858398,5.46435547 L15.9858398,4.8046875 C15.8719076,4.76139323 15.7169596,4.73974609 15.5209961,4.73974609 Z M21.8408203,6.43847656 C21.6425781,6.43847656 21.4631348,6.5074056 21.3024902,6.64526367 C21.1418457,6.78312174 21.0227865,6.97509766 20.9453125,7.22119141 L20.9316406,7.22119141 L20.9316406,6.5 L20.1386719,6.5 L20.1386719,10 L20.9316406,10 L20.9316406,8.32519531 C20.9316406,7.96061198 21.0102539,7.67236328 21.1674805,7.46044922 C21.324707,7.24853516 21.5206706,7.14257812 21.7553711,7.14257812 C21.9353841,7.14257812 22.0732422,7.18017578 22.1689453,7.25537109 L22.1689453,6.50341797 C22.09375,6.4601237 21.984375,6.43847656 21.8408203,6.43847656 Z M8.44921875,5.73095703 C8.91178385,5.73095703 9.2746582,5.89046224 9.5378418,6.20947266 C9.80102539,6.52848307 9.93261719,6.98079427 9.93261719,7.56640625 C9.93261719,8.13606771 9.79703776,8.57926432 9.52587891,8.89599609 C9.25472005,9.21272786 8.8844401,9.37109375 8.41503906,9.37109375 C7.97298177,9.37109375 7.61523438,9.2047526 7.34179688,8.87207031 C7.06835938,8.53938802 6.93164062,8.1007487 6.93164062,7.55615234 C6.93164062,7.00927734 7.07234701,6.56835938 7.35375977,6.23339844 C7.63517253,5.8984375 8.00032552,5.73095703 8.44921875,5.73095703 Z M17.8691406,7.00244141 C18.1015625,7.00244141 18.2838542,7.08162435 18.4160156,7.23999023 C18.5481771,7.39835612 18.6153971,7.61995443 18.6176758,7.90478516 L16.9975586,7.90478516 C17.0340169,7.63590495 17.131429,7.41829427 17.2897949,7.25195312 C17.4481608,7.08561198 17.641276,7.00244141 17.8691406,7.00244141 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
FferManagement.displayName = 'FferManagement';
export default FferManagement;