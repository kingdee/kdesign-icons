import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BusinessDataProcess = ({
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
          id="294.业务数据处理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="业务数据处理"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M21.3654164,13.5426298 C22.6827082,14.8498011 23.5609026,17.4641437 22.6827082,20.0784861 L24,21.3856574 L21.3654164,24 L20.0481246,22.6928287 C17.4135409,23.5642763 14.7789573,22.6928287 13.4616654,21.3856574 C12.1443736,20.0784861 12.1443736,17.4641437 13.4616654,16.1569724 L16.0962491,18.7713148 C16.8237693,19.4932457 18.0033125,19.4932457 18.7308327,18.7713148 C19.4583529,18.0493841 19.4583529,16.8789031 18.7308327,16.1569724 L16.0962491,13.5426298 C17.7924598,11.7617179 20.0481246,12.2354585 21.3654164,13.5426298 Z M0,17.2699325 C1.62016309,18.1209106 2.7541355,18.8030996 4.53588966,19.3136865 C6.18298459,19.7469117 8.17877604,20.0577649 10.1292086,20.143566 C10.4462731,21.5411286 11.1176113,22.8352421 12.0796412,23.903342 C11.8301672,23.9089683 11.5835282,23.9117814 11.3397241,23.9117814 C8.58558865,23.9117814 5.83145314,23.4011946 3.56350831,22.7190055 C1.29556348,22.038223 0,21.0170493 0,19.8256799 L0,17.2699325 Z M0,11.9558907 C1.62016309,12.8082754 2.7541355,13.4890579 4.53588966,14.0010513 C6.44379825,14.4638146 8.4849486,14.7859204 10.6593407,14.84359 C10.1343995,16.009206 9.88378952,17.2781228 9.92651103,18.5541358 C7.76825354,18.4142958 5.63329138,18.0291889 3.56350831,17.4063703 C1.29556348,16.7241812 0,15.7044141 0,14.5116382 L0,11.9558907 Z M22.6794483,6.64184893 L22.6794483,8.92050105 C22.6794483,9.40998928 22.3335867,9.95011422 21.6872224,10.4888326 C20.6538779,10.0632297 19.5458693,9.84476462 18.4270517,9.84602764 C15.6176351,9.84602764 13.1257307,11.1977466 11.5764409,13.2822913 L11.3397241,13.2836979 C8.58558865,13.2836979 5.83145314,12.7154414 3.56350831,11.9558907 C1.29556348,11.0064523 0,9.86993943 0,8.72920679 L0,6.64184893 C1.62016309,7.40139964 2.7541355,8.34943144 4.53588966,8.72920679 C6.64224342,9.29886982 8.91018825,9.67864517 11.3397241,9.67864517 C13.76926,9.67864517 16.0372049,9.29886982 18.1435586,8.72920679 C19.9253128,8.34943144 21.0592852,7.40139964 22.6794483,6.64184893 Z M11.3397241,0 C13.9691227,0 16.9273732,0.509180287 19.0649112,1.18855619 C21.3626228,2.03531457 22.6794483,3.05226857 22.6794483,4.07062914 C22.6794483,5.08898972 21.5284663,6.10453714 19.0649112,6.78391305 C16.9273732,7.632078 13.9691227,7.97106267 11.3397241,7.97106267 C8.54589961,7.97106267 5.75207508,7.632078 3.61453707,6.78391305 C1.15239947,6.10453714 0,5.08898972 0,4.06922257 C0,3.05367514 1.315408,2.03531457 3.61453707,1.18855619 C5.75349254,0.340391241 8.54731708,0 11.3397241,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BusinessDataProcess.displayName = 'BusinessDataProcess';
export default BusinessDataProcess;
