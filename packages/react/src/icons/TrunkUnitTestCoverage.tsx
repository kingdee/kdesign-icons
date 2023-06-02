import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const TrunkUnitTestCoverage = ({
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
          id="670.主干单元测试覆盖率"
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
              d="M17.3353848,22.6328981 C17.7391384,22.6470737 18.0591244,22.9784914 18.0591244,23.3824939 C18.0591244,23.7864963 17.7391384,24.1179142 17.3353848,24.1320898 L6.66646094,24.1320898 C6.26270729,24.1179142 5.94272131,23.7864963 5.94272131,23.3824939 C5.94272131,22.9784914 6.26270729,22.6470737 6.66646094,22.6328981 L17.3353848,22.6328981 Z M20.9997676,0 C22.656538,0.000509855402 23.9994885,1.34346028 24,3.00023073 L24,3.00023073 L24,16.853205 C24.0004885,17.6490756 23.6847367,18.4125306 23.122231,18.9755561 C22.5597253,19.5385816 21.7965621,19.8550382 21.0006913,19.8552831 L21.0006913,19.8552831 L3.00023073,19.8552831 C1.34360972,19.8552831 0.000510054925,18.512597 0,16.855976 L0,16.855976 L0,3.00023073 C0,1.34324906 1.34324906,0 3.00023073,0 L3.00023073,0 L20.9997676,0 Z M11.7699731,4.66371398 C11.5633317,4.66371398 11.3958157,4.83122992 11.3958157,5.0378713 L11.3958157,5.0378713 L11.394677,7.91686978 L8.49376377,5.04420029 C8.34777072,4.89957871 8.11321047,4.89736375 7.96451237,5.03920252 C7.96206138,5.04154043 7.95964364,5.04391293 7.95725984,5.04631932 C7.81781954,5.18708198 7.8188915,5.41423138 7.95965416,5.55367171 L7.95965416,5.55367171 L11.394677,8.9550115 L11.394677,11.2775808 L6.85958563,6.78401086 L6.77998611,6.72355238 C6.63770483,6.64260994 6.45408433,6.66083774 6.33019311,6.77916153 C6.18673754,6.91617055 6.18151156,7.14353204 6.32198544,7.2905655 C6.32314864,7.2917501 6.32432003,7.29292663 6.32549959,7.29409501 L6.32549959,7.29409501 L11.394677,12.3157225 L11.3958157,15.2009561 C11.3958157,15.4075975 11.5633317,15.5751134 11.7699731,15.5751134 C11.9766145,15.5751134 12.1441304,15.4075975 12.1441304,15.2009561 L12.1441304,15.2009561 L12.1428873,12.4061313 L17.0208483,7.75187416 L17.080946,7.67674061 C17.161768,7.54155236 17.1454517,7.36296639 17.0254805,7.23744031 L17.0254805,7.23744031 L16.9458607,7.17703839 C16.8035626,7.09617739 16.6200003,7.11442145 16.4960974,7.23267842 L16.4960974,7.23267842 L12.1428873,11.3866948 L12.1428873,8.90668959 L15.7782332,5.43875071 C15.7806785,5.43641729 15.7830906,5.43404943 15.785469,5.43164782 C15.9248199,5.29093192 15.9237135,5.06389286 15.7829976,4.92454189 C15.6370618,4.78002167 15.4026274,4.77784956 15.2540388,4.91964089 L15.2540388,4.91964089 L12.1428873,7.88569435 L12.1441304,5.0378713 C12.1441304,4.83122992 11.9766145,4.66371398 11.7699731,4.66371398 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
TrunkUnitTestCoverage.displayName = 'TrunkUnitTestCoverage';
export default TrunkUnitTestCoverage;