import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ProjectDeliveryAcceptance = ({
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
          id="450.项目交工验收"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M16.8633576,10.8314766 C20.8048163,10.8314766 24,13.9859888 24,17.8772767 C24,21.7685647 20.8048163,24.9230769 16.8633576,24.9230769 C12.9218988,24.9230769 9.72671523,21.7685647 9.72671523,17.8772767 C9.72671523,13.9859888 12.9218988,10.8314766 16.8633576,10.8314766 Z M19.3441984,0 C20.4495811,0 21.3453895,0.885368033 21.3453895,1.97571807 L21.3453895,11.3615817 C17.8812762,8.91295239 13.080638,9.57318243 10.425316,12.8635496 C7.76999394,16.1539169 8.19067202,20.9211555 11.3823232,23.7086166 L2.00119119,23.7086166 C0.895963804,23.7086166 0,22.8240575 0,21.7328986 L0,1.97571807 C0,0.8844057 0.895808432,0 2.00119119,0 L19.3441984,0 Z M16.6762683,13.341563 C16.421976,13.341563 16.1898264,13.4843692 16.077763,13.7097318 L15.1078725,15.650805 L12.9390218,15.9616462 C12.6875869,15.9973152 12.4785256,16.1709374 12.3998767,16.4093979 C12.3212277,16.6478585 12.386657,16.9097228 12.5686114,17.0847162 L14.1389567,18.5956161 L13.7685462,20.7291607 C13.7255217,20.9762564 13.8284129,21.2260265 14.0339099,21.373335 C14.239407,21.5206434 14.5118219,21.5399082 14.7364873,21.4230197 L16.6762684,20.4163948 L18.6170241,21.4239822 C18.8417895,21.5404965 19.1140721,21.5208843 19.3193282,21.3733959 C19.5245842,21.2259075 19.6271935,20.9761381 19.5839903,20.7291607 L19.2135798,18.5956161 L20.7849,17.0847162 C20.9668543,16.9097228 21.0322837,16.6478585 20.9536348,16.4093979 C20.8749859,16.1709374 20.6659245,15.9973152 20.4144895,15.9616462 L18.2446641,15.650805 L17.2747737,13.7097318 C17.1627103,13.4843692 16.9305607,13.341563 16.6762683,13.341563 Z M3.70860822,6.92307686 L3.68983869,6.92307686 C3.22819176,6.92307686 2.84770955,7.2705843 2.79571028,7.71828095 L2.78965407,7.82326147 L2.78965407,7.8501158 C2.78965407,8.31176273 3.13716152,8.69224499 3.58485817,8.7442442 L3.68983869,8.75030042 L3.70860822,8.75030042 C4.17025515,8.75030042 4.55073735,8.40279297 4.60273662,7.95509632 L4.60879284,7.8501158 L4.60879284,7.82326147 C4.60879284,7.32610323 4.20576646,6.92307686 3.70860822,6.92307686 Z M17.0959751,7.38951696 L5.98015916,7.38951696 C5.75919994,7.38951696 5.57542862,7.5487373 5.53731845,7.7587046 L5.53006685,7.83960927 L5.53006685,7.85236037 C5.53006685,8.07331958 5.68928716,8.2570909 5.89925449,8.29520107 L5.98015916,8.30245268 L17.0959751,8.30245268 C17.3169343,8.30245268 17.5007057,8.14323233 17.5388158,7.933265 L17.5460674,7.85236037 L17.5460674,7.83960927 C17.5460674,7.59103017 17.3445543,7.38951696 17.0959751,7.38951696 Z M3.70860822,4.15384609 L3.68983869,4.15384609 C3.22819176,4.15384609 2.84770955,4.50135354 2.79571028,4.94905016 L2.78965407,5.0540307 L2.78965407,5.09682931 C2.78965407,5.55847623 3.13716152,5.93895844 3.58485817,5.99095771 L3.68983869,5.99701392 L3.70860822,5.99701392 C4.17025515,5.99701392 4.55073735,5.64950647 4.60273662,5.20180982 L4.60879284,5.09682931 L4.60879284,5.0540307 C4.60879284,4.55687246 4.20576646,4.15384609 3.70860822,4.15384609 Z M17.0959751,4.60822939 L5.98015916,4.60822939 C5.75919994,4.60822939 5.57542862,4.7674497 5.53731845,4.97741703 L5.53006685,5.0583217 L5.53006685,5.08476343 C5.53006685,5.30572265 5.68928716,5.48949397 5.89925449,5.52760417 L5.98015916,5.53485574 L17.0959751,5.53485574 C17.3169343,5.53485574 17.5007057,5.37563546 17.5388158,5.1656681 L17.5460674,5.08476343 L17.5460674,5.0583217 C17.5460674,4.80974258 17.3445543,4.60822939 17.0959751,4.60822939 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ProjectDeliveryAcceptance.displayName = 'ProjectDeliveryAcceptance';
export default ProjectDeliveryAcceptance;
