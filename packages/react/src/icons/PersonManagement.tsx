import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PersonManagement = ({
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
          id="251.面试官资质管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="面试官资质管理"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M9.0819672,0 C10.1530054,0 11.0929497,0.408537738 11.9016393,1.22561316 C12.7103289,2.04268856 13.2568306,3.07604866 13.5409835,4.32569343 C13.6502731,4.92648419 13.7050251,5.46719586 13.7050251,5.94782847 C13.7050251,6.90909365 13.5300546,7.83431141 13.1804349,8.72348171 C12.7432764,9.80490506 12.1093967,10.6219805 11.2787956,11.174708 L13.147648,12.147989 L17.5081967,14.4550255 C17.945355,14.6953419 18.1639343,15.1039973 18.1639343,15.6807564 L18.1639343,22.6662446 C18.1639343,23.0267191 18.0655737,23.3391304 17.8688523,23.6034781 C17.672131,23.8678262 17.4207649,24 17.1147541,24 L1.01639349,24 C0.732240445,24 0.491803307,23.8678262 0.295081995,23.6034781 C0.0983607102,23.3391304 0,23.0267191 0,22.6662446 L0,15.6807564 C0,15.1039973 0.218579266,14.6954006 0.655737715,14.4550254 L5.18032786,12.1479889 L6.95081964,11.2468028 C6.12021857,10.6940754 5.48633878,9.90103155 5.04918033,8.86767144 C4.63387978,7.95446948 4.42622949,6.98118853 4.42622949,5.94782842 C4.42622949,5.63541725 4.44808742,5.33502188 4.49180324,5.04664231 C4.5355191,4.75826272 4.59016387,4.48189902 4.65573768,4.21755106 C4.9617486,2.99193793 5.5136612,1.98260948 6.31147542,1.18956569 C7.10928962,0.396521907 8.03278686,0 9.0819672,0 Z M16.6558448,2.1628467 C17.1804349,2.1628467 17.6722382,2.28901281 18.1311474,2.5413449 C18.5901639,2.79367703 18.9891781,3.13612771 19.3279758,3.56869711 C19.6666666,4.00126646 19.9344261,4.51193858 20.1311474,5.10071351 C20.3279759,5.68948842 20.4263366,6.30830291 20.4263366,6.95715689 C20.4263366,7.87035885 20.2404369,8.70545795 19.8689595,9.46245433 C19.4972676,10.2194507 19.0274295,10.8022177 18.4591235,11.2107554 L23.4754098,13.8422189 C23.8250295,14.034472 24,14.3709148 24,14.8515472 L24,20.75573 C24,21.0681413 23.92339,21.3263635 23.7704918,21.5307502 C23.6174864,21.735019 23.4207649,21.8370356 23.1802206,21.8370356 L19.7048644,21.8370356 L19.7048644,15.6806385 C19.7048644,15.0798478 19.5681988,14.5331283 19.295082,14.040362 C19.0218043,13.5478313 18.6556841,13.1812312 18.1967214,12.940915 L14.9508195,11.2468029 C14.6448086,11.0545498 14.3496196,10.7781861 14.0655738,10.4177116 C14.4372656,9.79288926 14.7267758,9.10197983 14.9344262,8.34498351 C15.1420765,7.58798719 15.2459015,6.7889355 15.2459015,5.94782847 C15.2459015,5.39510098 15.2021857,4.86640509 15.1147541,4.36174087 C15.0273224,3.85707665 14.8961748,3.36442823 14.7213114,2.88379567 C15.0054644,2.66751098 15.3114753,2.49328166 15.6393442,2.36110766 C15.967213,2.22893365 16.3060108,2.1628467 16.6558448,2.1628467 Z M11.4464802,12.3403834 L10.3003687,12.564582 L8.01014238,12.564582 L6.86403086,12.3403834 L8.32861763,14.0763216 L7.15954396,20.091252 L9.15525556,21.5956708 L11.0241761,20.091252 L10.1416303,14.0763216 L11.4464802,12.3403834 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PersonManagement.displayName = 'PersonManagement';
export default PersonManagement;
