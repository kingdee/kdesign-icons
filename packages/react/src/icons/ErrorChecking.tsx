import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ErrorChecking = ({
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
          id="1166-错误检查"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M22.6717906,10.8457008 C22.9524912,10.5322087 23.4341795,10.505626 23.7476715,10.7863265 C24.0231701,11.0330077 24.0805631,11.4404227 23.8827419,11.7615733 L23.8827419,11.7615733 L23.8070376,11.8622166 L14.3897692,22.3743182 C13.6481422,23.110278 12.4713452,23.1619237 11.6651983,22.4990419 L11.6651983,22.4990419 L11.5164088,22.3632976 L6.16443557,16.9701118 C5.86803061,16.6714244 5.86988088,16.1890067 6.16856833,15.8926016 C6.43105644,15.6321193 6.84114564,15.5988357 7.15008005,15.8152393 L7.15008005,15.8152393 L7.24607848,15.8967344 L12.5980517,21.2899202 C12.7716799,21.4648854 13.0450099,21.4891813 13.2351597,21.3593749 L13.2351597,21.3593749 L13.3243283,21.2847215 L22.6717906,10.8457008 Z M12.841288,0.52808867 L12.9206768,0.653396527 L19.6778626,12.81677 L18.5413314,14.0739385 L11.8104974,1.70252921 L1.93054388,19.7599285 L7.53412226,19.7591341 L9.32209532,21.512892 L1.27009856,21.512892 C1.05429193,21.512892 0.842045463,21.4578934 0.653396528,21.3530885 C0.0841160912,21.0368216 -0.147004214,20.3476301 0.0955826113,19.7599285 L0.1600349,19.6263228 L10.7005494,0.653396527 C10.8157123,0.446103325 10.9866178,0.275197787 11.1939111,0.160034874 C11.7631915,-0.156232009 12.4704553,0.011634914 12.841288,0.52808867 Z M21.3832943,15.8873089 L23.4611913,19.6263228 C23.5659963,19.8149717 23.6209949,20.0272182 23.6209949,20.2430248 C23.6209949,20.8942581 23.1307751,21.4309947 22.4992211,21.5043487 L22.3511276,21.512892 L16.4231929,21.5128207 L17.9698912,19.7591341 L21.6348777,19.7599285 L20.2366042,17.1889228 L21.3832943,15.8873089 Z M13.4085281,19.7591341 L13.1514395,20.0460257 L13.0804804,20.1028929 C12.9817215,20.1686377 12.8485688,20.0277675 12.7400811,19.9184444 L12.5754952,19.7591341 L13.4085281,19.7591341 Z M11.8106131,15.1635558 C12.5119414,15.1635558 13.0804804,15.7320948 13.0804804,16.4334231 C13.0804804,17.1347513 12.5119414,17.7032903 11.8106131,17.7032903 C11.1092848,17.7032903 10.5407459,17.1347513 10.5407459,16.4334231 C10.5407459,15.7320948 11.1092848,15.1635558 11.8106131,15.1635558 Z M11.8972809,5.63955165 C12.4360761,5.63955165 12.8728558,6.0763314 12.8728558,6.61512654 L12.8728558,13.4787961 C12.8728558,14.0175912 12.4360761,14.4543709 11.8972809,14.4543709 C11.3584858,14.4543709 10.9217061,14.0175912 10.9217061,13.4787961 L10.9217061,6.61512654 C10.9217061,6.0763314 11.3584858,5.63955165 11.8972809,5.63955165 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ErrorChecking.displayName = 'ErrorChecking';
export default ErrorChecking;
