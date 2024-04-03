import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const FundMonitoring = ({
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
          id="1797.资金监控"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M28.9983108,5 C29.5505956,5 29.9983108,5.44771525 29.9983108,6 L29.9983108,22 C29.9983108,22.5522847 29.5505956,23 28.9983108,23 L20,23 L20,26 L21.881966,26 C22.2607381,26 22.6070012,26.2140024 22.7763932,26.5527864 L23.5,28 L8.5,28 L9.2236068,26.5527864 C9.39299881,26.2140024 9.73926193,26 10.118034,26 L11.9932432,26 L11.9932432,23 L3,23 C2.44771525,23 2,22.5522847 2,22 L2,6 C2,5.44771525 2.44771525,5 3,5 L28.9983108,5 Z M16.3161383,8.0007779 C15.4935341,7.99218144 14.945807,8.0547638 14.4078845,8.19199949 C10.9568706,9.07174876 8.85753568,12.5383232 9.67724284,16.003755 C10.4964048,19.4670434 13.9859093,21.6337478 17.456054,20.8339217 C21.1320955,19.9864613 23.3155483,16.2067807 22.2137838,12.5976979 C22.0731235,12.1372399 21.8828862,11.698157 21.6436549,11.2804667 C21.5561732,11.127816 21.3937519,11.0465964 21.2347554,11.0710893 C21.0583507,11.0981547 20.9264423,11.2222203 20.8888507,11.3948713 C20.8574533,11.5390155 20.9239513,11.655665 20.9885527,11.7754583 C21.664717,13.0293009 21.8590315,14.3563379 21.5476532,15.7446725 C20.8754357,18.7424391 17.9530703,20.654832 14.9384964,20.0836063 C12.4607922,19.6140821 10.5752013,17.5528697 10.3396703,15.0494481 C10.2415894,14.0069058 10.4130236,13.0088075 10.8599062,12.0596428 C11.964411,9.71432434 14.5659183,8.4037029 17.1008261,8.91596866 C17.6963409,9.0363073 18.2595594,9.24400832 18.7882224,9.54392099 C18.8782619,9.59510231 18.9724192,9.62780593 19.0773294,9.6111815 C19.2587103,9.58240197 19.388293,9.45537529 19.4209895,9.27679023 C19.4527262,9.10373602 19.3743966,8.94151436 19.2077936,8.84743492 C18.2436359,8.30254677 17.2079142,8.0190758 16.3161383,8.0007779 Z M18.182024,11.0141011 C18.0174488,10.9728288 17.8785059,11.0240378 17.7585046,11.1430727 C17.1976935,11.6997054 16.6347523,12.2542191 16.0730903,12.8100376 C16.0509357,12.8320301 16.0345258,12.8597066 16.0154086,12.8847761 C16.0032975,12.8882911 15.9912816,12.8918708 15.9791467,12.8953712 C15.9629213,12.8679328 15.951783,12.8356215 15.9297772,12.8138818 C15.3747493,12.2636708 14.8185613,11.714512 14.2624268,11.1653796 C14.2339326,11.1372799 14.2054086,11.1086189 14.173505,11.0846133 C13.9758006,10.93578 13.6937171,10.9893577 13.5649099,11.1991604 C13.461387,11.3677731 13.4908154,11.5665868 13.6457576,11.7199727 C14.2093801,12.2778426 14.7738951,12.8348721 15.3378478,13.3923218 C15.3582145,13.4124451 15.3769865,13.4339497 15.4089704,13.4680478 L15.2916882,13.4680478 C14.8423818,13.4681271 14.3929922,13.4670603 13.9436828,13.4686268 C13.7054266,13.4694438 13.525679,13.6198142 13.5041789,13.8307631 C13.4772168,14.0950252 13.6628934,14.2917317 13.9449888,14.2925487 C14.4547912,14.2940887 14.9645935,14.2930219 15.4744078,14.2930219 L15.5779961,14.2930219 L15.5779961,15.117849 L15.4771388,15.1179225 C14.9644715,15.1179225 14.4517002,15.1188189 13.9390061,15.1172789 C13.8277572,15.1168851 13.7286849,15.1445615 13.6440678,15.2166931 C13.5139428,15.3275812 13.4664772,15.5076706 13.5243194,15.6671607 C13.5831465,15.8294164 13.7351197,15.9383588 13.9149327,15.9389231 C14.4390684,15.9405425 14.9633887,15.9395667 15.4875125,15.9395667 L15.5818814,15.9395667 L15.5818814,16.0461521 C15.5818814,16.5497889 15.5824556,17.0534258 15.5814828,17.5570626 C15.581227,17.6926294 15.6228438,17.810086 15.7289906,17.8980235 C15.8598624,18.0062929 16.0101816,18.0294286 16.1655255,17.962258 C16.3279022,17.8919927 16.4137597,17.7622305 16.4143309,17.5855532 C16.4158868,17.073455 16.4149824,16.5611981 16.4149824,16.0489941 L16.4149824,15.9395638 L17.2856395,15.939882 L18.0546656,15.9376829 C18.1246458,15.937289 18.1995406,15.923852 18.2632555,15.8962549 C18.4384751,15.8203849 18.5309252,15.6263617 18.4900551,15.4442472 C18.4468794,15.2516847 18.2891258,15.119489 18.0903682,15.118672 C17.5690289,15.1165412 17.0476926,15.1178579 16.5263534,15.1178579 L16.4207003,15.1178579 L16.4207003,14.2929367 L18.0231994,14.2925428 C18.069118,14.2925428 18.1156762,14.2910822 18.1608244,14.2838317 C18.3848394,14.2475205 18.5388505,14.0219267 18.4913849,13.8025018 C18.4464629,13.5951473 18.2835567,13.4691881 18.0526397,13.4684651 C17.6004416,13.4671514 17.1481484,13.4680449 16.6960544,13.4680449 L16.6077871,13.4680449 L16.5930402,13.4387373 C16.6186726,13.4205773 16.6473542,13.4055855 16.6692678,13.3839369 L17.8550989,12.2133436 C18.0262011,12.0443371 18.199261,11.8771733 18.3677929,11.7058126 C18.5980435,11.4717427 18.496612,11.0929042 18.182024,11.0141011 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
FundMonitoring.displayName = 'FundMonitoring';
export default FundMonitoring;
