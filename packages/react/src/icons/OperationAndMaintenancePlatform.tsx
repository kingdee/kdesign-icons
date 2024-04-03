import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const OperationAndMaintenancePlatform = ({
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
          id="1884.运维平台"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M29,4 C29.5522847,4 30,4.44771525 30,5 L30,23 C30,23.5522847 29.5522847,24 29,24 L3,24 C2.44771525,24 2,23.5522847 2,23 L2,5 C2,4.44771525 2.44771525,4 3,4 L29,4 Z M9.3445946,6 L8,7.34487857 L9.79054053,10.4806758 L10.6722973,9.59873282 L15.5810811,14.5051742 L14.6689189,15.417529 L16.722973,15.6574446 L17.5337838,16.4684266 L17.0067567,16.9955649 C16.9121622,17.0901795 16.8614865,17.2152059 16.8614865,17.3503696 C16.8614865,17.4855332 16.9155405,17.6105597 17.0067567,17.7051742 L21.1587838,21.854699 C21.2533784,21.9493136 21.3783784,22 21.5135135,22 C21.6452703,22 21.7736487,21.9459345 21.8682433,21.854699 L23.8547297,19.867793 C23.9493243,19.7731785 24,19.6481521 24,19.5129884 C24,19.3812038 23.9493243,19.2527983 23.8547297,19.1581837 L19.7027027,15.0086589 C19.6081081,14.9140443 19.4831081,14.863358 19.347973,14.863358 C19.2162162,14.863358 19.0878378,14.9174234 18.9932432,15.0086589 L18.4662162,15.5357972 L17.5844595,14.6538543 L17.3581081,12.7176346 L16.5033784,13.5725449 L11.6013513,8.67286167 L12.4831081,7.79091868 L9.3445946,6 Z M14.2094595,13.8462513 L11.4459459,16.6103485 C10.5472973,16.3535375 9.54391893,16.5799367 8.83783783,17.2861669 C7.80067567,18.323548 7.80067567,20.0063358 8.83783783,21.043717 C9.87499998,22.0810982 11.5574324,22.0810982 12.5945946,21.043717 C13.3006757,20.3374868 13.527027,19.3305174 13.2702703,18.4350581 L15.054054,16.6508976 C15.0101351,16.6272439 14.9695946,16.5968321 14.9324324,16.5630412 L14.1452703,15.7757128 C14.0506757,15.6810982 14,15.5560718 14,15.4209081 C14,15.2891236 14.054054,15.1607181 14.1452703,15.0661035 L14.7702703,14.4409715 L14.3006757,13.9712777 C14.2635135,13.9341077 14.2331081,13.8935586 14.2094595,13.8462513 Z M18.1655405,17.2726505 L21.5878378,20.6922914 C21.6486486,20.7564942 21.6722973,20.8443506 21.652027,20.9288279 C21.6283784,21.0133052 21.5641892,21.0775079 21.4797297,21.1011616 C21.3952703,21.1248152 21.3074324,21.1011616 21.2432433,21.0369588 L17.8209459,17.6173179 C17.7601351,17.5564942 17.7364865,17.4652587 17.7567568,17.3807814 C17.7804054,17.2963041 17.8445946,17.2321014 17.9290541,17.2084477 C18.0135135,17.1847941 18.1013513,17.2084477 18.1655405,17.2726505 Z M11.9222973,17.9586061 C12.5439189,18.580359 12.5439189,19.5873284 11.9222973,20.2090813 C11.3006757,20.8308342 10.2939189,20.8308342 9.6722973,20.2090813 C9.05067568,19.5873284 9.05067568,18.580359 9.6722973,17.9586061 C10.2939189,17.3368532 11.3006757,17.3368532 11.9222973,17.9586061 Z M18.8918919,16.5495248 L22.3141892,19.9691658 C22.375,20.0299894 22.3986486,20.1212249 22.3783784,20.2057022 C22.3547297,20.2901795 22.2905405,20.3543823 22.2060811,20.3780359 C22.1216216,20.4016896 22.0337838,20.3780359 21.9695946,20.3138331 L18.5472973,16.8941922 C18.4864865,16.8333685 18.4628378,16.742133 18.4831081,16.6576558 C18.5067568,16.5731785 18.5709459,16.5089757 18.6554054,16.4853221 C18.7398649,16.4616684 18.8277027,16.4853221 18.8918919,16.5495248 Z M19.6182433,15.8230201 L23.0405405,19.242661 C23.1013514,19.3034847 23.125,19.3947202 23.1047297,19.4791975 C23.0810811,19.5636748 23.0168919,19.6278775 22.9324324,19.6515311 C22.847973,19.6751848 22.7567568,19.6515311 22.6959459,19.5873284 L19.2736486,16.1676874 C19.2128378,16.1068638 19.1891892,16.0156283 19.2094595,15.931151 C19.2331081,15.8466737 19.2972973,15.782471 19.3817568,15.7588173 C19.4662162,15.7351637 19.5574324,15.7588173 19.6182433,15.8230201 Z M17.902027,7.48342133 C16.9864865,8.39915523 16.7466216,9.73389652 17.1824324,10.8692714 L15.8513513,12.2073918 C15.8952703,12.2276663 15.9391892,12.2580781 15.9763514,12.2952481 L16.4459459,12.7649419 L17.0709459,12.1398099 C17.1655405,12.0451953 17.2905405,11.994509 17.4256757,11.994509 C17.5574324,11.994509 17.6858108,12.0485744 17.7804054,12.1398099 L18.5675676,12.9271383 C18.6047297,12.9643083 18.6351352,13.0048574 18.6554054,13.0487856 L19.0067567,12.6973601 C20.1418919,13.1332629 21.4797297,12.8933474 22.3952703,11.9776135 C23.2195946,11.1564942 23.4966216,9.99408661 23.2263513,8.94318901 L21.0337838,11.1362196 C20.9391892,11.2308342 20.8141892,11.2815206 20.679054,11.2815206 C20.5472973,11.2815206 20.4189189,11.2274551 20.3243243,11.1362196 L18.7466216,9.55480463 C18.652027,9.46019006 18.6013514,9.33516367 18.6013514,9.2 C18.6013514,9.06821542 18.6554054,8.93980991 18.7466216,8.84519534 L20.9391892,6.65216472 C19.8885135,6.38183738 18.7263513,6.65892291 17.902027,7.48342133 Z M24.8892308,27 C25.6297436,27 26,27.3341024 26,28.0004615 C26,28.6668205 25.6297436,29 24.8892308,29 L7.11076923,29 C6.37025642,29 6,28.6677434 6,28.0004615 C6,27.3341025 6.37025642,27.0009229 7.11076923,27.0009229 C18.4694017,27.0003076 24.3955556,27 24.8892308,27 Z"
            id="形状结合"
            fill={fill}
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
OperationAndMaintenancePlatform.displayName = 'OperationAndMaintenancePlatform';
export default OperationAndMaintenancePlatform;
