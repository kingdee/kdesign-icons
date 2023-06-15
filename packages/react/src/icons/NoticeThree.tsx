import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const NoticeThree = ({
  size = '1em',
  fill = 'currentColor',
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
          id="641.通知"
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
              d="M10.7173213,23.2935288 C9.90202358,22.5534879 9.03901686,21.7811372 8.12783558,20.9766144 C7.21681866,20.1722294 6.36966928,19.4320507 5.58636013,18.7563265 C4.67534317,17.9840033 3.76429882,17.2197852 2.85311754,16.4635894 C2.67728995,16.4796341 2.50146237,16.4877667 2.32574435,16.4877667 C2.18185056,16.5037839 2.0300144,16.5118062 1.87007155,16.5118062 L1.46257331,16.5118062 C1.03091933,16.5118062 0.679373696,16.3791204 0.40766256,16.1136111 C0.135924032,15.8481017 0,15.5304058 0,15.1603578 L0,9.07853677 L0.024018816,9.07853677 L0,9.05435942 C0,8.60383987 0.1398952,8.23381945 0.419576096,7.94416038 C0.699257024,7.65461155 1.04696838,7.50979577 1.46257331,7.50979577 L2.82912614,7.50979577 C4.29966922,6.25475337 5.6343704,5.12853721 6.83317494,4.13100937 C7.344636,3.69661721 7.84815472,3.27427235 8.34359418,2.86397481 C8.83917053,2.45362211 9.28670922,2.07960432 9.68626509,1.74172845 C10.0859579,1.40388013 10.4215914,1.12224336 10.6933025,0.897038718 C10.9650137,0.67175139 11.1327893,0.535013086 11.1968213,0.48671363 C11.6763485,0.132682782 12.0639361,-0.0281501462 12.3595291,0.00402198176 C12.6552864,0.0361940458 12.8870666,0.181009822 13.0549519,0.438496862 C13.2227002,0.695846014 13.3385766,1.00957216 13.4025263,1.37970285 C13.4664487,1.74975081 13.4984098,2.08759913 13.4984098,2.39327536 L13.4984098,21.9419425 C13.4984098,22.2476463 13.4425668,22.5734749 13.3306615,22.9194283 C13.2187289,23.265299 13.0468725,23.5388307 12.8152019,23.7399958 C12.5833943,23.941161 12.2916629,24.0254921 11.939953,23.9933476 C11.5884347,23.9612306 11.1807996,23.7280036 10.7173213,23.2935288 Z M18.4615132,8.95787075 C18.7971467,9.42437984 19.0648866,9.89505177 19.264733,10.3697211 C19.4644425,10.8442801 19.5644342,11.4196009 19.5644342,12.0953251 C19.5644342,12.7388496 19.4604713,13.3180576 19.2526552,13.833004 C19.0448664,14.3478677 18.7812345,14.8144044 18.4615132,15.2327519 C18.3336684,15.4097398 18.1977444,15.5665753 18.0538506,15.7033962 C17.9101212,15.8400794 17.7261869,15.9084485 17.5024586,15.9084485 C17.2146984,15.9084485 16.9709773,15.8039099 16.7712404,15.5947775 C16.571394,15.38559 16.4715119,15.1362356 16.4715119,14.8465765 C16.4715119,14.7178882 16.4953938,14.5892274 16.543404,14.4604012 L16.5193852,14.4604012 C16.5993566,14.2834133 16.6952128,14.1145305 16.8071454,13.95367 C16.9190506,13.7926993 17.0268751,13.6278415 17.130838,13.4588484 C17.2346639,13.2899656 17.3225777,13.0968227 17.3944424,12.879668 C17.4664715,12.6624581 17.5024038,12.4009738 17.5024038,12.0952975 C17.5024038,11.8056384 17.4664715,11.5522867 17.3944424,11.3350768 C17.3225777,11.1178945 17.2346365,10.9207543 17.130838,10.7437664 C17.0268751,10.5667786 16.9190506,10.3978957 16.8071454,10.236925 C16.6952128,10.0760646 16.607299,9.90707149 16.5433766,9.73019392 C16.4953664,9.61755024 16.4715119,9.48886189 16.4715119,9.34401856 C16.4715119,9.05438701 16.5713666,8.80500505 16.771213,8.59587267 C16.9709225,8.38668518 17.2146436,8.28214653 17.5024312,8.28214653 C17.7261595,8.28214653 17.9100938,8.35051565 18.0538232,8.48719881 C18.1977444,8.62399222 18.3336684,8.78085533 18.4615132,8.95787075 Z M19.8041841,19.7940763 C19.6122801,19.9389197 19.3885792,20.0112586 19.1327802,20.0112586 C18.8131683,20.0112586 18.537486,19.89459 18.3057058,19.661363 C18.0738983,19.4280533 17.9579945,19.1505242 17.9579945,18.8286931 C17.9579945,18.4746898 18.0939185,18.1771186 18.365657,17.9357866 C18.3815691,17.9196592 18.3975908,17.9076394 18.4135303,17.8995068 C18.4296068,17.8914845 18.4455189,17.8794647 18.4615405,17.8633373 L18.4855594,17.83916 C18.9330981,17.5334838 19.3487304,17.1714582 19.7322098,16.7531107 C20.1158536,16.3347632 20.4514871,15.8802463 20.7392472,15.3895598 C21.0270075,14.8988458 21.2507083,14.3759873 21.4105143,13.8208464 C21.5704297,13.2657882 21.6502642,12.6906053 21.6502642,12.0952975 C21.6502642,10.8885822 21.3466193,9.78637789 20.7392472,8.78885005 C20.1318752,7.79132221 19.3725575,6.97075472 18.4615405,6.32723017 C18.125907,6.08589814 17.9579945,5.76406694 17.9579945,5.36187443 C17.9579945,5.04004323 18.0739256,4.76254173 18.3057332,4.52920448 C18.5375134,4.2958672 18.8132231,4.17930886 19.1328076,4.17930886 C19.4045461,4.17930886 19.644296,4.26769251 19.8520848,4.44468035 C20.4435447,4.86302784 20.9950463,5.34971686 21.5065348,5.90485773 C22.0179958,6.45991593 22.4574827,7.06327357 22.8252143,7.71493075 C23.1928089,8.36650521 23.4804596,9.06235417 23.688221,9.80253283 C23.8960371,10.5425737 24,11.3069021 24,12.0952699 C24,12.8997928 23.8960372,13.6719781 23.688221,14.4121568 C23.4804322,15.1522252 23.1888104,15.8520991 22.8131364,16.5117786 C22.437572,17.1714581 21.9940044,17.7788132 21.4825433,18.3339816 C20.9710001,18.8890398 20.4115288,19.3757564 19.8041841,19.7940763 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
NoticeThree.displayName = 'NoticeThree';
export default NoticeThree;
