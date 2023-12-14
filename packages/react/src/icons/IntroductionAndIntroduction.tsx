import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const IntroductionAndIntroduction = ({
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
          id="887.引入引出"
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
              d="M11.8277895,8.82589474 L11.8277895,15.4736842 C11.8277895,15.8806309 12.1576849,16.2105263 12.5646316,16.2105263 C12.9715782,16.2105263 13.3014737,15.8806309 13.3014737,15.4736842 L13.3014737,3.68421053 C13.3013457,3.43572799 13.1759884,3.20404572 12.9680579,3.06799978 C12.7601274,2.93195383 12.4976328,2.9098701 12.2698947,3.00926316 C12.1170251,2.7983523 11.8641569,2.68382684 11.6047993,2.70803759 C11.3454417,2.73224833 11.1181394,2.89159717 11.0069474,3.12715789 L8.80821053,7.79284211 C8.70134606,8.02110412 8.71856515,8.28815143 8.85385928,8.50079917 C8.98915342,8.7134469 9.22375068,8.84219041 9.47578947,8.84210526 L11.6715789,8.84210526 C11.7240768,8.84225969 11.776442,8.83682557 11.8277895,8.82589474 L11.8277895,8.82589474 Z M17.64,17.8463158 C17.8644676,19.2821747 17.2238668,20.7158273 16.0044994,21.5065357 C14.785132,22.297244 13.214868,22.297244 11.9955006,21.5065357 C10.7761332,20.7158273 10.1355324,19.2821747 10.36,17.8463158 L2.94736842,17.8463158 L2.94736842,1.09074543e-15 L25.0437895,1.09074543e-15 L25.0437895,17.8463158 L17.64,17.8463158 Z M8.84210526,19.1578947 C8.84210526,21.5995747 10.8214779,23.5789474 13.2631579,23.5789474 L14.7368421,23.5789474 C17.1785221,23.5789474 19.1578947,21.5995747 19.1578947,19.1578947 L26.5263158,19.1578947 C27.3402091,19.1578947 28,19.8176856 28,20.6315789 L28,26.5263158 C28,27.3402091 27.3402091,28 26.5263158,28 L1.47368421,28 C0.659790895,28 0,27.3402091 0,26.5263158 L0,20.6315789 C0,19.8176856 0.659790895,19.1578947 1.47368421,19.1578947 L8.84210526,19.1578947 L8.84210526,19.1578947 Z M16.2105263,10.332 L16.2105263,3.68421053 C16.2105263,3.27726387 15.8806309,2.94736842 15.4736842,2.94736842 C15.0667376,2.94736842 14.7368421,3.27726387 14.7368421,3.68421053 L14.7368421,15.4736842 C14.7386848,15.7369325 14.8808289,15.9792009 15.10973,16.1092292 C15.3386311,16.2392576 15.6195138,16.2372914 15.8465721,16.1040714 C16.0736305,15.9708513 16.2123691,15.7266168 16.2105263,15.4633684 C16.5252114,15.5310701 16.8474232,15.3866715 17.0063158,15.1067368 L19.0989474,11.4166316 C19.2283198,11.188934 19.2271145,10.9096786 19.0957814,10.6831062 C18.9644483,10.4565338 18.7227249,10.3166952 18.4608421,10.3157895 L16.3682105,10.3157895 C16.3157127,10.315635 16.2633475,10.3210692 16.212,10.332 L16.2105263,10.332 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
IntroductionAndIntroduction.displayName = 'IntroductionAndIntroduction';
export default IntroductionAndIntroduction;
