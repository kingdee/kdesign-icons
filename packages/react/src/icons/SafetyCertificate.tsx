import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SafetyCertificate = ({
  size = '1em',
  color = 'currentColor',
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
          id="759.安全认证"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M22.8398575,3.78219305 C23.3713423,3.78499035 23.8035233,4.2213673 23.8091178,4.76543982 L23.8091178,16.8217516 C23.8021246,17.9504574 22.2356433,21.4960201 19.4817131,24.1086872 C16.9739443,26.4933753 13.1346664,28.2458763 11.9080555,27.9717421 C10.6814447,27.6976078 6.84216674,26.4933753 4.33439794,24.1086872 C1.5804678,21.4960201 0,17.849755 0,16.8217516 L0,4.76264255 C0.00150426636,4.22527381 0.434713474,3.78894798 0.972057631,3.78359169 L2.06020272,3.76680798 C2.12174306,3.76401068 4.36376948,3.70107171 6.64775523,2.77936525 C9.07160538,1.80031442 10.660465,0.667412725 10.6758501,0.657622222 L11.3192264,0.191873743 C11.6654542,-0.0629220061 12.1368496,-0.0640538009 12.4842969,0.189076473 L13.1416596,0.661818155 C14.4029468,1.50942198 15.7514896,2.2193294 17.1641599,2.77936525 C19.4537402,3.70107168 21.6957666,3.76680796 21.7587057,3.76680798 L22.8398575,3.78359169 L22.8398575,3.78219305 Z M17.0256941,10.0313347 L11.2395037,15.9210249 L10.990545,16.1755781 L8.38906707,13.228635 C8.15645824,12.9887145 7.80068758,12.9156542 7.49235225,13.0444877 C7.18401693,13.1733212 6.98598684,13.4777792 6.9932203,13.8118696 C6.9932203,14.0356526 7.07713894,14.2454493 7.2337871,14.4048947 L10.4157023,17.9392682 C10.5673374,18.0948563 10.7753854,18.1826049 10.992643,18.1826049 C11.2099006,18.1826049 11.4179486,18.0948563 11.5695837,17.9392682 L18.1823728,11.2103917 C18.5040549,10.8837405 18.5040549,10.3593845 18.1823728,10.0327334 C18.030254,9.87698297 17.821745,9.78917148 17.6040335,9.78917148 C17.3863219,9.78917148 17.177813,9.87698297 17.0256941,10.0327334 L17.0256941,10.0313347 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SafetyCertificate.displayName = 'SafetyCertificate';
export default SafetyCertificate;
