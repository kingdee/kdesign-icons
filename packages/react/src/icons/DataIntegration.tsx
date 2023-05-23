import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DataIntegration = ({
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
          id="427.数据集成"
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
              d="M24,7.46060386 L24,19.8624648 C24,20.3125028 23.7599076,20.7283549 23.3701634,20.9533739 L12.6298367,27.1543045 L12.5500484,27.1951608 C12.6008685,27.1043186 12.6298367,26.9995944 12.6298367,26.8881042 L12.6298367,26.8881042 L12.6306139,21.5462461 C12.7384504,21.5080604 12.8436322,21.4597757 12.944755,21.4013925 L18.2305362,18.3496452 C18.8151526,18.0121167 19.1752912,17.3883384 19.1752912,16.7132815 L19.1752912,10.6097871 C19.1752912,10.4931 19.1645307,10.377945 19.1437102,10.2655356 L23.7694638,7.59370399 C23.8665321,7.53766161 23.9430392,7.45968292 23.9963388,7.36964502 C23.9988965,7.3997389 24,7.43009281 24,7.46060386 Z M0.00366129592,7.36964502 C0.056960805,7.45968292 0.133467971,7.53766161 0.23053621,7.59370399 L0.23053621,7.59370399 L4.8565216,10.2642868 C4.83554922,10.377092 4.82470882,10.4926678 4.82470882,10.6097871 L4.82470882,16.7132815 C4.82470882,17.3883384 5.18484736,18.0121167 5.76946381,18.3496452 L11.055245,21.4013925 C11.1566581,21.4599432 11.2621534,21.5083374 11.3703147,21.5465746 L11.3701634,26.8881042 C11.3701634,26.9990988 11.3988746,27.1033875 11.4492754,27.1939487 C11.4221433,27.1831011 11.3959553,27.1691955 11.3701634,27.1543045 L0.629836649,20.9533739 C0.240092384,20.7283549 0,20.3125028 0,19.8624648 L0,7.46060386 L0.00366129592,7.36964502 Z M6.08422213,10.9730143 L11.3698114,14.0252027 L11.3698114,20.1283199 L6.39930045,17.2587361 C6.20442831,17.1462266 6.08438214,16.9383005 6.08438214,16.7132815 L6.08422213,10.9730143 Z M17.915074,10.9730143 L17.9156179,16.7132815 C17.9156179,16.9383005 17.7955718,17.1462266 17.6006996,17.2587361 L12.6294847,20.1283199 L12.6294847,14.0252027 L17.915074,10.9730143 Z M12.3149184,7.01258538 L17.2852373,9.88213717 L11.9996481,12.9343256 L6.71405877,9.88213717 L11.6850817,7.01258538 C11.8799538,6.90007588 12.1200463,6.90007588 12.3149184,7.01258538 Z M12.6298367,0.168764221 L23.3701634,6.36969476 L23.446602,6.41835061 C23.3421413,6.41957229 23.2365397,6.44684242 23.1396271,6.50279489 L23.1396271,6.50279489 L18.5130472,9.17304522 C18.4260608,9.09875123 18.3316565,9.03180532 18.2305362,8.97342348 L12.944755,5.92167628 C12.3601386,5.58414782 11.6398615,5.58414782 11.055245,5.92167628 L5.76946381,8.97342348 C5.66834349,9.03180532 5.57393916,9.09875123 5.48695283,9.17304522 L0.860372889,6.50279489 C0.763460315,6.44684242 0.657858838,6.41957229 0.55339808,6.41835061 L0.629836649,6.36969476 L0.629836649,6.36969476 L11.3701634,0.168764221 C11.7599077,-0.0562547404 12.2400924,-0.0562547404 12.6298367,0.168764221 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DataIntegration.displayName = 'DataIntegration';
export default DataIntegration;
