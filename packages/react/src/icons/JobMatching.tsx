import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const JobMatching = ({
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
          id="1904人岗匹配"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="rcgyy_rgpp_48_48"
            transform="translate(2.019173, 1.086723)"
            fill="#999999"
            fillRule="nonzero"
          >
            <g id="外币-资金池划转">
              <path
                d="M27.0949873,16.1132766 C27.599864,16.1132766 28.0091475,16.52256 28.0091475,17.0274367 L28.0091475,23.1991164 C28.0091475,23.7039931 27.599864,24.1132766 27.0949873,24.1132766 C26.5901106,24.1132766 26.1808272,23.7039931 26.1808272,23.1991164 L26.1804883,21.9044767 C23.7590826,25.9948903 19.4709052,28.6515676 14.6944252,28.8950331 C9.24253083,29.1729256 4.11422659,26.257957 1.4923775,21.3908849 C1.28765434,21.0105988 1.42496012,20.53361 1.79905856,20.3255007 C2.173157,20.1173914 2.64238463,20.2569682 2.84710781,20.6372543 C5.07336832,24.773676 9.34176176,27.3464456 13.9800754,27.3476385 C17.3457813,27.3569185 20.5753561,25.9975188 22.9493857,23.5722567 C24.3867348,22.1201018 25.4521777,20.3424622 26.0647024,18.3951336 L26.18,18.0060221 L26.1808272,17.0274367 C26.1808272,16.52256 26.5901106,16.1132766 27.0949873,16.1132766 Z M14,3 C20.0775,3 25,7.90377584 25,13.9866017 C25,20.0694275 20.0775,25 14,25 C7.92250001,25 3,20.0426309 3,13.9866017 C3,7.93057245 7.92250001,3 14,3 Z M13.4049356,8.94477369 C12.485205,9.05297556 11.4107184,9.70603345 11.327924,10.6960457 L11.327924,11.920736 L11.2549115,11.9269157 C11.0943202,11.9564464 10.9301096,12.1087815 10.9955891,12.7327058 C11.0709602,13.4530492 11.5544218,13.6521799 11.917233,14.0043049 C12.2712647,14.347909 12.204134,14.8909022 12.727155,15.1838299 L12.7308272,15.8306252 L10.7543874,16.4342774 L10.3640804,16.5514872 C9.60582717,16.7773002 8.98082717,17.8956108 8.98082717,19.0799432 L18.9808272,19.0799432 C18.9808272,17.8956108 18.3558272,16.7773002 17.6308298,16.5514872 L17.2846209,16.456409 C16.5194764,16.2374765 15.2308272,15.8306041 15.2308272,15.8306041 L15.2308272,15.1353389 C15.3109726,15.0973713 15.3191772,15.0642725 15.2728035,15.0375661 C15.590408,14.7334149 15.5952196,14.2968439 15.8836072,14.0043049 C15.9370504,13.9501334 15.9940801,13.8995678 16.0526024,13.8501593 L16.2305524,13.7029562 C16.4979114,13.4800123 16.7530883,13.230912 16.8052612,12.7325109 C16.8808347,12.0121674 16.4502321,11.920736 16.4502321,11.920736 L16.4502321,10.5414479 C16.2909834,9.410847 14.4911662,8.81582566 13.5259032,8.92634322 L13.4049356,8.94477369 Z M13.9800754,2.21352241e-05 C19.1818443,0.00183063252 23.9687048,2.88694732 26.4659954,7.52552867 C26.598428,7.77153065 26.5916958,8.07066645 26.4483346,8.3102545 C26.3049735,8.54984255 26.0467633,8.69348373 25.7709695,8.68706979 C25.4951756,8.68065585 25.2436977,8.52516123 25.111265,8.27915924 C22.8853105,4.14330551 18.6177517,1.57062824 13.9800754,1.56877502 C10.6141126,1.55997325 7.38450138,2.92003904 5.01076504,5.3459641 C3.39607777,6.97727909 2.25064742,9.01930408 1.6893165,11.2512431 L1.68917445,12.1663675 C1.68917445,12.6267822 1.31593455,13.0000221 0.855519806,13.0000221 C0.430521579,13.0000221 0.0798025132,12.6819952 0.0283605162,12.2709394 L0.0193725389,12.1096502 C-0.00528655794,12.0877251 -0.00750648275,12.0643709 0.019097559,12.0399844 L0.0218651631,5.83367678 C0.0218651631,5.37326203 0.39510506,5.00002214 0.855519806,5.00002214 C1.31593455,5.00002214 1.68917445,5.37326203 1.68917445,5.83367678 L1.68826078,7.42125165 C2.25107323,6.25880406 2.97921347,5.18509266 3.91738032,4.23449457 C6.58321109,1.51737388 10.2050179,-0.00669887575 13.9800754,2.21352241e-05 Z"
                id="形状"
                fill={fill}
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
JobMatching.displayName = 'JobMatching';
export default JobMatching;
