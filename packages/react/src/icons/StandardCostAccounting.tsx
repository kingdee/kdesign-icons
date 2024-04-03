import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const StandardCostAccounting = ({
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
          id="1813.标准成本核算"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M27,1.99994463 C27.5522847,1.99994463 28,2.44765988 28,2.99994463 L28.0005823,16.6405063 C27.5145245,16.5482669 27.0128989,16.5 26.5,16.5 C22.081722,16.5 18.5,20.081722 18.5,24.5 C18.5,26.6309547 19.3331711,28.5673118 20.6915266,30.0010845 L5,30 C4.44771525,30 4,29.5522847 4,29 L4,2.99994463 C4,2.44765988 4.44771525,1.99994463 5,1.99994463 L27,1.99994463 Z M26,18 C29.3137085,18 32,20.6862915 32,24 C32,27.3137085 29.3137085,30 26,30 C22.6862915,30 20,27.3137085 20,24 C20,20.6862915 22.6862915,18 26,18 Z M17.5,25 L14.5,25 C14.2238576,25 14,25.2238576 14,25.5 L14,27.5 C14,27.7761424 14.2238576,28 14.5,28 L17.5,28 C17.7761424,28 18,27.7761424 18,27.5 L18,25.5 C18,25.2238576 17.7761424,25 17.5,25 Z M10.5,25 L7.5,25 C7.22385763,25 7,25.2238576 7,25.5 L7,27.5 C7,27.7761424 7.22385763,28 7.5,28 L10.5,28 C10.7761424,28 11,27.7761424 11,27.5 L11,25.5 C11,25.2238576 10.7761424,25 10.5,25 Z M27.4000351,20.2711539 L26.0526285,22.6226141 C26.0102634,22.6958357 25.9858893,22.7771957 25.981328,22.8606128 C25.9710195,22.7795139 25.9486844,22.6975999 25.9061619,22.6226141 L24.5793722,20.2711539 C24.4333351,20.012371 24.1086175,19.9231215 23.8543412,20.0730933 C23.6000649,20.2230651 23.5133017,20.5547962 23.6601978,20.8143942 L24.8151791,22.8606128 L23.5794479,22.8606128 C23.2559478,22.8722119 23,23.1244073 23,23.4315653 C23,23.7387233 23.2559478,23.9909186 23.5794479,24.0025177 L25.3860122,24.0025177 L25.3860122,25.1448302 L23.5794479,25.1448302 C23.2559478,25.1564293 23,25.4086246 23,25.7157826 C23,26.0229406 23.2559478,26.275136 23.5794479,26.2867351 L25.3860122,26.2867351 L25.3860122,27.486102 C25.3860122,27.7697444 25.6553218,28 25.9886299,28 C26.321079,28 26.590818,27.7693368 26.590818,27.486102 L26.590818,26.2867351 L28.3973824,26.2867351 C28.7208824,26.275136 28.9768302,26.0229406 28.9768302,25.7157826 C28.9768302,25.4086246 28.7208824,25.1564293 28.3973824,25.1448302 L26.590818,25.1448302 L26.590818,24.0025177 L28.3973824,24.0025177 C28.730261,24.0025177 29,23.74618 29,23.4315653 C29,23.116543 28.730261,22.8606128 28.3973824,22.8606128 L27.1616511,22.8606128 L28.3338133,20.8143942 C28.482857,20.5552038 28.3943757,20.2230651 28.1370928,20.0730933 C27.8785213,19.9227139 27.5495084,20.0119635 27.4000351,20.2711539 Z M10.5,19 L7.5,19 C7.22385763,19 7,19.2238576 7,19.5 L7,21.5 C7,21.7761424 7.22385763,22 7.5,22 L10.5,22 C10.7761424,22 11,21.7761424 11,21.5 L11,19.5 C11,19.2238576 10.7761424,19 10.5,19 Z M17.5,19 L14.5,19 C14.2238576,19 14,19.2238576 14,19.5 L14,21.5 C14,21.7761424 14.2238576,22 14.5,22 L17.5,22 C17.7761424,22 18,21.7761424 18,21.5 L18,19.5 C18,19.2238576 17.7761424,19 17.5,19 Z M10.5,13 L7.5,13 C7.22385763,13 7,13.2238576 7,13.5 L7,15.5 C7,15.7761424 7.22385763,16 7.5,16 L10.5,16 C10.7761424,16 11,15.7761424 11,15.5 L11,13.5 C11,13.2238576 10.7761424,13 10.5,13 Z M17.5,13 L14.5,13 C14.2238576,13 14,13.2238576 14,13.5 L14,15.5 C14,15.7761424 14.2238576,16 14.5,16 L17.5,16 C17.7761424,16 18,15.7761424 18,15.5 L18,13.5 C18,13.2238576 17.7761424,13 17.5,13 Z M24.5,13 L21.5,13 C21.2238576,13 21,13.2238576 21,13.5 L21,15.5 C21,15.7761424 21.2238576,16 21.5,16 L24.5,16 C24.7761424,16 25,15.7761424 25,15.5 L25,13.5 C25,13.2238576 24.7761424,13 24.5,13 Z M24.5,6 L7.5,6 C7.22385763,6 7,6.22385763 7,6.5 L7,9.5 C7,9.77614237 7.22385763,10 7.5,10 L24.5,10 C24.7761424,10 25,9.77614237 25,9.5 L25,6.5 C25,6.22385763 24.7761424,6 24.5,6 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
StandardCostAccounting.displayName = 'StandardCostAccounting';
export default StandardCostAccounting;
