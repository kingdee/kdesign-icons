import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CloudProductParameters = ({
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
          id="1466-云产品参数"
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
              d="M18.2107143,8.23247542 C18.35024,8.04284687 18.5959749,7.95521829 18.8289669,8.02231771 C19.8034366,8.30295429 20.6943371,8.82414857 21.4302754,9.53607086 C21.6063771,9.70642513 21.6542766,9.97008801 21.5493463,10.1914983 C21.4703428,10.3581989 21.4285714,10.5425394 21.4285714,10.7344823 C21.4285714,11.408824 21.9454183,11.9465303 22.567192,11.9465463 L22.567192,11.9465463 L22.6847246,11.9533291 C22.8985394,11.9870491 23.0784046,12.1402389 23.1425257,12.3526217 C23.3314308,12.978312 23.4285714,13.6334434 23.4285714,14.3014354 C23.4285714,14.7443086 23.3858788,15.1818309 23.3018366,15.60928 C23.244888,15.898928 22.9766937,16.0975257 22.6830309,16.0675063 C22.6462343,16.0637451 22.6090286,16.0618491 22.5714286,16.0618491 C21.9454183,16.0618491 21.4285714,16.5995554 21.4285714,17.2738971 C21.4285714,17.5688114 21.5275817,17.845328 21.7044217,18.0633828 C21.8834023,18.2840777 21.8730331,18.6027531 21.6800823,18.8113452 C20.9295909,19.622672 19.9883908,20.222704 18.9451269,20.5458446 C18.6431829,20.639368 18.3226731,20.4699897 18.229832,20.1678354 L18.229832,20.1678354 L18.1812263,20.0362411 C17.9967108,19.6115988 17.5929909,19.3315554 17.1428571,19.3315554 C16.6477108,19.3315554 16.2087234,19.670408 16.0558823,20.1678354 L16.0558823,20.1678354 L16.0168411,20.2634571 C15.8920457,20.504384 15.6089817,20.6289771 15.3405874,20.5458446 C14.2973257,20.2227051 13.3561269,19.6226743 12.6056263,18.8113474 C12.4126708,18.6027543 12.4023017,18.2840709 12.5812903,18.0633749 C12.7581326,17.8453257 12.8571428,17.5688114 12.8571428,17.2738971 C12.8571428,16.5995543 12.3402983,16.0618491 11.7142857,16.0618491 C11.6766926,16.0618491 11.6394697,16.0637451 11.60268,16.0675063 C11.3090183,16.0975257 11.0408229,15.898928 10.9838743,15.60928 C10.8998343,15.1818377 10.8571428,14.7443143 10.8571428,14.3014354 C10.8571428,13.6334251 10.95428,12.9782914 11.1431874,12.352616 C11.2164697,12.109896 11.4409269,11.944488 11.6944617,11.946368 L11.6944617,11.946368 L11.837912,11.93948 C12.4069143,11.8742286 12.8571428,11.3638686 12.8571428,10.7344823 C12.8571428,10.5425394 12.8153714,10.3581989 12.736368,10.1914983 C12.6314377,9.97008801 12.6793371,9.70642513 12.8554389,9.53607086 C13.5913771,8.82414857 14.4822777,8.30295429 15.4567474,8.02231771 C15.723024,7.94563315 16.005944,8.07104113 16.1279474,8.31983657 L16.1279474,8.31983657 L16.2004,8.44783543 C16.4115429,8.77383429 16.7616777,8.97407199 17.1428571,8.97407199 C17.5716846,8.97407199 17.9612206,8.72064571 18.1577668,8.31983657 L18.1577668,8.31983657 L18.2107143,8.23247542 Z M18.9085714,9.25485715 L18.8847143,9.28729371 C18.4594914,9.80268571 17.8293657,10.1169291 17.1428571,10.1169291 C16.4563486,10.1169291 15.8262228,9.80268571 15.401,9.28729371 L15.401,9.28729371 L15.376,9.25485715 L15.1915509,9.32814514 C14.8133474,9.49036114 14.4552514,9.69938172 14.1245771,9.95029829 L14.1245771,9.95029829 L13.9188571,10.1142857 L13.962288,10.306664 C13.9747726,10.3766686 13.9842011,10.4474388 13.9905074,10.5188 L13.9905074,10.5188 L14,10.7344823 C14,11.8534343 13.2405726,12.7960994 12.2142343,13.0323726 L12.2142343,13.0323726 L12.1417143,13.0457143 L12.0860846,13.3166663 C12.048048,13.5313634 12.0224663,13.7492377 12.0096388,13.969456 L12.0096388,13.969456 L12,14.3014354 C12,14.4858297 12.008872,14.6689474 12.0264651,14.8503291 L12.0264651,14.8503291 L12.0377143,14.9417143 L12.2359463,14.9804674 C13.1962468,15.2110651 13.9198149,16.0644777 13.9937611,17.0987623 L13.9937611,17.0987623 L14,17.2738971 C14,17.6228469 13.9258171,17.9608812 13.7868857,18.2680377 L13.7868857,18.2680377 L13.7508571,18.3371429 L13.8768937,18.4523931 C14.2547703,18.7774103 14.6750217,19.0448057 15.1251074,19.2456537 L15.1251074,19.2456537 L15.2137143,19.2811428 L15.2878468,19.1669383 C15.6717154,18.618432 16.2758903,18.253528 16.9556903,18.1965189 L16.9556903,18.1965189 L17.1428571,18.1886983 C17.8981531,18.1886983 18.5791017,18.568568 18.9978674,19.1669383 L18.9978674,19.1669383 L19.0708571,19.2811428 L19.160608,19.2456537 C19.6106926,19.0448057 20.0309428,18.7774103 20.408816,18.4523943 L20.408816,18.4523943 L20.5337143,18.3371429 L20.4988228,18.2680297 C20.3876811,18.0223051 20.3179771,17.7568206 20.2945406,17.4817954 L20.2945406,17.4817954 L20.2857143,17.2738971 C20.2857143,16.0960537 21.1271874,15.1135406 22.2324983,14.9446366 L22.2324983,14.9446366 L22.2468571,14.9417143 L22.259248,14.8503234 L22.2790788,14.577008 L22.2857143,14.3014354 C22.2857143,13.9679189 22.2566834,13.6387269 22.1996274,13.3166777 L22.1996274,13.3166777 L22.1428571,13.0457143 L22.068752,13.0323828 C21.0990171,12.8085348 20.3663863,11.9507052 20.2919531,10.9096171 L20.2919531,10.9096171 L20.2857143,10.7344823 C20.2857143,10.5897463 20.298456,10.446672 20.3234263,10.306664 L20.3234263,10.306664 L20.3657143,10.1142857 L20.1611371,9.95029829 C19.8304629,9.69938172 19.4723668,9.49036114 19.0941634,9.32814514 L19.0941634,9.32814514 L18.9085714,9.25485715 Z M17.1428571,11.4285714 C18.720816,11.4285714 20,12.7077554 20,14.2857143 C20,15.8636731 18.720816,17.1428571 17.1428571,17.1428571 C15.5648983,17.1428571 14.2857143,15.8636731 14.2857143,14.2857143 C14.2857143,12.7077554 15.5648983,11.4285714 17.1428571,11.4285714 Z M17.1428571,12.5714286 C16.1960811,12.5714286 15.4285714,13.3389383 15.4285714,14.2857143 C15.4285714,15.2324903 16.1960811,16 17.1428571,16 C18.0896331,16 18.8571429,15.2324903 18.8571429,14.2857143 C18.8571429,13.3389383 18.0896331,12.5714286 17.1428571,12.5714286 Z M12,0 C15.3881966,0 17.5971977,1.55871201 18.5758434,3.949368 L18.6726914,4.19961485 L18.7234286,4.34857144 L18.8748137,4.381368 L19.2374754,4.47044229 C19.886112,4.64461371 20.5351337,4.90061601 21.1450697,5.25641258 C22.918072,6.290664 24,7.94360914 24,10.2857143 C24,10.6317303 23.9780503,10.9607063 23.9354,11.272512 C23.643712,10.617368 23.2610057,10.0127143 22.8028274,9.474264 C22.5922,8.00314513 21.7961794,6.95931656 20.569216,6.24358744 C20.054152,5.94313371 19.4978171,5.72369028 18.941096,5.57420001 L18.8598343,5.55284001 L18.8598343,5.55284001 L18.781984,5.53326056 L18.5075623,5.47180572 L18.4489166,5.46042399 L18.4489166,5.46042399 L18.3945417,5.45054285 L18.2226103,5.42507657 C17.9921291,5.39946742 17.7999794,5.23710399 17.736272,5.01412685 C17.0686297,2.67737944 15.2005154,1.14285715 12,1.14285715 C8.57655999,1.14285715 7.16480229,2.71751087 6.26372799,5.87126971 C6.19363771,6.11658399 5.96941714,6.28571429 5.71428571,6.28571429 C3.53279657,6.28571429 1.14285712,7.77942629 1.14285712,10.5714286 C1.14285712,13.0306788 2.68188228,14.2061726 4.90994512,14.2818057 L5.14285714,14.2857143 L9.7142857,14.2857143 C9.7142857,14.6747143 9.74418742,15.0567314 9.80181712,15.4295931 L5.14285714,15.4285714 C2.22601714,15.4285714 -5.84675165e-16,13.8469269 -5.84675165e-16,10.5714286 C-5.84675165e-16,7.29535315 2.51760455,5.45622287 5.04636798,5.17952229 L5.26945942,5.15916571 L5.28342857,5.15771429 L5.34282742,4.97432456 C6.33144112,1.94570057 7.97247771,0.211693714 11.3467486,0.0181725806 L11.6681977,0.00455086629 L12,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CloudProductParameters.displayName = 'CloudProductParameters';
export default CloudProductParameters;
