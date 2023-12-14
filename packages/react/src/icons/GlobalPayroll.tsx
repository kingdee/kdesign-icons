import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const GlobalPayroll = ({
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
          id="927.全球薪资核算"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M25.3564904,7.65939061 C25.8851594,9.04486807 26.1768389,10.5551507 26.1768389,12.1355486 C26.1768389,18.8385671 20.9448384,24.2710971 14.4900279,24.2710972 C12.4919358,24.2721117 10.5293123,23.7432292 8.80227831,22.7383776 C8.69472005,22.7538224 8.58504903,22.7341505 8.48956427,22.6822854 C5.16890572,24.8362261 3.45809348,25.2414923 2.53677901,25.2414923 C2.2871687,25.2414923 2.03896068,25.2106416 1.7949596,25.1517448 C1.07656884,24.9961142 0.47486336,24.5083996 0.173894864,23.8377849 C-0.645051328,22.1115473 1.65472909,19.7725023 2.37831852,19.0993958 C2.54735762,18.9455019 2.77269886,18.8686901 3.00053923,18.8873001 C3.22837959,18.9059102 3.43826909,19.0182718 3.58009402,19.1975572 C3.88860116,19.573375 3.85915274,20.1441132 3.51418567,20.4806664 C2.55080204,21.3809463 1.66314291,22.6444232 1.71923513,23.0328617 C1.80337343,23.2025407 1.93378781,23.3035066 2.15535201,23.3553919 C2.67420491,23.4675763 3.97554407,23.3483804 6.93020098,21.5323952 C6.83200502,21.4448237 6.76095597,21.3309506 6.72546442,21.2042558 C4.31910883,18.9816022 2.8046193,15.7422774 2.8046193,12.1355486 C2.8046193,5.43253008 8.03661972,0 14.4900279,0 C18.7263917,0 22.4368911,2.34184955 24.4856589,5.84480778 C26.0253899,3.75397084 26.5049783,2.43720631 26.2343334,2.05858393 C25.8318718,1.50046648 24.2935431,2.19460752 23.5979997,2.67139126 C23.4091562,2.8033673 23.1732647,2.84922094 22.9487325,2.79759872 C22.7213207,2.74297668 22.5259138,2.59819333 22.4074427,2.39653946 C22.2831091,2.18893177 22.2410816,1.94227054 22.289649,1.70520304 C22.3351785,1.47113815 22.4699493,1.26395317 22.6654668,1.12745333 C23.0104339,0.889061462 26.0969075,-1.14007408 27.5973739,0.939544447 C28.6911719,2.45403398 27.427695,5.00622932 25.3564904,7.66079291 L25.3564904,7.65939061 Z M11.1483348,6.15331489 L9.50483319,7.69024133 L12.0990977,10.1148269 L9.7810873,10.1148269 L9.7810873,12.2785837 L13.2545971,12.2785837 L13.2545971,13.3611633 L9.78248961,13.3611633 L9.78248961,15.5263224 L13.2559994,15.5263224 L13.2559994,18.774061 L15.5698029,18.774061 L15.5698029,15.5263224 L19.0433127,15.5263224 L19.0433127,13.3611633 L15.5712052,13.3611633 L15.5712052,12.2785837 L19.0433127,12.2785837 L19.0433127,10.1148269 L16.7295092,10.1148269 L19.3209691,7.68883902 L17.6774675,6.15331489 L14.4129011,9.22716774 L11.1483348,6.15331489 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
GlobalPayroll.displayName = 'GlobalPayroll';
export default GlobalPayroll;
