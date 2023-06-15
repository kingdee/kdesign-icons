import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DataGovernanceBackup = ({
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
          id="426.数据治理备份"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M22.7368421,4.3081328e-16 C23.4344649,4.3081328e-16 24,0.565535051 24,1.26315791 L24,24 C24,24.6976228 23.4344649,25.2631579 22.7368421,25.2631579 L20.2105263,25.2631579 C19.5129035,25.2631579 18.9473684,24.6976228 18.9473684,24 L18.9473684,22.8707369 L20.6040541,20.0034143 C20.8921675,19.5043874 20.8037274,18.8807716 20.4061171,18.481338 L20.2900632,18.3782218 L18.9473684,17.3242106 L18.9473684,16.7810527 L20.2900632,15.7270414 C20.7433293,15.3712506 20.893551,14.7595712 20.6733451,14.2407741 L20.6040541,14.1018489 L18.9473684,11.2332632 L18.9473684,1.26315791 C18.9473684,0.565535051 19.5129035,4.3081328e-16 20.2105263,4.3081328e-16 L22.7368421,4.3081328e-16 Z M7.75126275,23.3153685 L8.02989474,25.2631579 L7.57894737,25.2631579 C6.88132452,25.2631579 6.31578947,24.6976228 6.31578947,24 L6.31578947,23.8913685 L7.75126275,23.3153685 Z M3.78947369,8.84210528 C4.42535998,8.84210528 4.95150242,9.31197461 5.03964507,9.92345731 C4.74318775,9.98321452 4.47185546,10.1480471 4.28264789,10.3978443 L4.1951517,10.5297301 L2.132788,14.1018489 C1.84467462,14.6008759 1.93311475,15.2244916 2.33072504,15.6239253 L2.44677894,15.7270414 L4.13357854,17.0513685 L2.44677894,18.3782218 C1.99351281,18.7340126 1.84329104,19.345692 2.06349705,19.8644892 L2.132788,20.0034143 L4.1951517,23.5755331 C4.3821093,23.8993531 4.6937782,24.1120891 5.03842304,24.1820376 C4.95150242,24.7932886 4.42535998,25.2631579 3.78947369,25.2631579 L1.26315788,25.2631579 C0.565535051,25.2631579 -4.3081328e-16,24.6976228 -4.3081328e-16,24 L-4.3081328e-16,10.1052632 C-4.3081328e-16,9.40764033 0.565535051,8.84210528 1.26315788,8.84210528 L3.78947369,8.84210528 Z M14.9841048,23.3153685 L16.977237,24.1162051 C17.2039638,24.2072105 17.4432889,24.2280394 17.6696243,24.1875355 C17.5808917,24.7952417 17.055616,25.2631579 16.4210526,25.2631579 L14.7056842,25.2631579 L14.9841048,23.3153685 Z M12.1931026,8.84210528 C12.8105837,8.84210528 13.3375607,9.28852174 13.4390739,9.8976013 L13.7739321,11.901015 C14.0731944,12.0409934 14.3582511,12.2062806 14.6263479,12.3941221 L16.5295326,11.6818785 C17.1077677,11.4652517 17.7578641,11.6984189 18.0666047,12.2331733 L18.8912862,13.6615636 C19.2000268,14.196318 19.0769072,14.8759016 18.6001854,15.2683544 L17.0316429,16.5607247 C17.0455397,16.722846 17.0526316,16.8869106 17.0526316,17.0526316 C17.0526316,17.2183526 17.0455397,17.3824172 17.0316429,17.5445385 L18.6001854,18.8369088 C19.0769072,19.2293616 19.2000268,19.9089452 18.8912862,20.4436996 L18.0666047,21.8720899 C17.7578641,22.4068443 17.1077677,22.6400115 16.5295326,22.4233847 L14.6263479,21.7111411 C14.3582511,21.8989825 14.0731944,22.0642698 13.7739321,22.2042482 L13.4390739,24.2076619 C13.3375607,24.8167415 12.8105837,25.2631579 12.1931026,25.2631579 L10.5437395,25.2631579 C9.92625839,25.2631579 9.39928148,24.8167415 9.29776821,24.2076619 L8.96238954,22.2040046 C8.66355671,22.0641902 8.37889187,21.8991383 8.11113803,21.7115921 L6.20730948,22.4233847 C5.62907448,22.6400115 4.97897799,22.4068443 4.67023747,21.8720899 L3.8455559,20.4436996 C3.53681538,19.9089452 3.65993489,19.2293616 4.13665663,18.8369088 L5.70519921,17.5445385 C5.69130239,17.3824172 5.68421053,17.2183526 5.68421053,17.0526316 C5.68421053,16.8869106 5.69130239,16.722846 5.70519921,16.5607247 L4.13665663,15.2683544 C3.65993489,14.8759016 3.53681538,14.196318 3.8455559,13.6615636 L4.67023747,12.2331733 C4.97897799,11.6984189 5.62907448,11.4652517 6.20730948,11.6818785 L8.11113803,12.3936711 C8.37889187,12.2061249 8.66355671,12.041073 8.96238954,11.9012586 L9.29776821,9.8976013 C9.39928148,9.28852174 9.92625839,8.84210528 10.5437395,8.84210528 L12.1931026,8.84210528 Z M11.3684211,14.5263158 C9.97317535,14.5263158 8.84210525,15.6573859 8.84210525,17.0526316 C8.84210525,18.4478773 9.97317535,19.5789474 11.3684211,19.5789474 C12.7636667,19.5789474 13.8947368,18.4478773 13.8947368,17.0526316 C13.8947368,15.6573859 12.7636667,14.5263158 11.3684211,14.5263158 Z M11.3684211,15.7894737 C12.0660438,15.7894737 12.6315789,16.3550088 12.6315789,17.0526316 C12.6315789,17.7502544 12.0660438,18.3157895 11.3684211,18.3157895 C10.6707983,18.3157895 10.1052632,17.7502544 10.1052632,17.0526316 C10.1052632,16.3550088 10.6707983,15.7894737 11.3684211,15.7894737 Z M16.4210526,2.52631581 C17.1186754,2.52631581 17.6842105,3.09185086 17.6842105,3.78947369 L17.684666,9.92051346 C17.500063,9.88517007 17.3063939,9.89070934 17.1176515,9.941967 L16.977237,9.98905801 L14.9841048,10.7886316 L14.6812473,8.66346776 C14.5991866,8.08904333 14.1387609,7.6510064 13.5739921,7.58701507 L13.4307848,7.57894737 L12.6315789,7.57894737 L12.6315789,3.78947369 C12.6315789,3.09185086 13.1971141,2.52631581 13.8947368,2.52631581 L16.4210526,2.52631581 Z M10.1052632,5.05263159 C10.8028859,5.05263159 11.3684211,5.61816664 11.3684211,6.3157895 L11.3684211,7.57894737 L9.30605733,7.57894737 C8.72580103,7.57894737 8.22705257,7.9727978 8.08383402,8.52284061 L8.05559483,8.66346776 L7.75126275,10.7886316 L6.31578947,10.2126316 L6.31578947,6.3157895 C6.31578947,5.61816664 6.88132452,5.05263159 7.57894737,5.05263159 L10.1052632,5.05263159 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DataGovernanceBackup.displayName = 'DataGovernanceBackup';
export default DataGovernanceBackup;
