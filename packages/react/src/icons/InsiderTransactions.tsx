import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const InsiderTransactions = ({
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
          id="873.内部交易"
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
              d="M0.00147570359,13.253294 C0.399915674,5.86739749 6.51375567,0 14,0 C21.4950986,0 27.6163171,5.88215453 28,13.2813323 L23.031306,13.2813323 C22.8055233,13.3108464 22.1016127,13.5351534 21.5644566,14.144619 L16.55887,18.7679983 L10.4465057,13.5351534 C10.0593539,13.2231819 9.50816912,13.2195114 9.11689681,13.5262991 C8.94224067,13.6586209 8.83865646,13.8643254 8.83634702,14.0834338 C8.83403757,14.3025422 8.93326293,14.5103844 9.10509118,14.6463582 L15.8741436,20.4399705 C16.2600213,20.7561108 16.8149978,20.7573441 17.2022768,20.4429219 L23.031306,14.7614631 L27.9970486,14.8013071 C27.5912301,22.179825 21.4818172,28.0383683 14,28.0383683 C6.51080426,28.0383683 0.39401286,22.165068 0.00147570359,14.7747444 L4.96426689,14.7747444 C5.19004954,14.7437546 5.89396016,14.5194477 6.43259197,13.9114578 L11.4381786,9.28807842 L17.5505428,14.5194477 C17.9150416,14.8322968 18.5097502,14.8367239 18.8801518,14.5297776 C19.0553695,14.3974957 19.1593452,14.1914435 19.1616561,13.9719113 C19.1639669,13.7523791 19.0643517,13.5441838 18.8919574,13.4082429 L12.122905,7.61758195 C11.7370273,7.30144164 11.1820508,7.30020835 10.7947718,7.61463055 L4.9657426,13.2960894 L0,13.2518183 L0.00147570359,13.253294 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
InsiderTransactions.displayName = 'InsiderTransactions';
export default InsiderTransactions;
