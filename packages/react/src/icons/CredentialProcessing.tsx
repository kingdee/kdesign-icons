import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CredentialProcessing = ({
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
          id="810.凭证处理"
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
              d="M1.55555556,6.22222222 L26.4444444,6.22222222 C27.3035541,6.22222222 28,6.91866817 28,7.77777778 L28,26.4444444 C28,27.3035541 27.3035541,28 26.4444444,28 L1.55555556,28 C0.696445945,28 0,27.3035541 0,26.4444444 L0,7.77777778 C0,6.91866817 0.696445945,6.22222222 1.55555556,6.22222222 Z M18.6666667,12.7135556 L12.2328889,19.264 L11.956,19.5471111 L9.33022222,16.8715556 C9.0713237,16.6044884 8.67524112,16.523314 8.33215961,16.6670095 C7.9890781,16.8107049 7.76907087,17.149921 7.77777778,17.5217778 C7.77777778,17.7706667 7.87111111,18.004 8.04533333,18.1813333 L11.3151111,21.5102222 C11.4838121,21.6837527 11.7155373,21.7816575 11.9575556,21.7816575 C12.1995738,21.7816575 12.431299,21.6837527 12.6,21.5102222 L19.9546667,14.0248889 C20.3124378,13.6615913 20.3124378,13.0784087 19.9546667,12.7151111 C19.785427,12.5414011 19.5531893,12.4434271 19.3106667,12.4434271 C19.068144,12.4434271 18.8359064,12.5414011 18.6666667,12.7151111 L18.6666667,12.7135556 Z M3.11111111,3.11111111 L24.8888889,3.11111111 L24.8888889,4.66666667 L3.11111111,4.66666667 L3.11111111,3.11111111 Z M6.22222222,0 L21.7777778,0 L21.7777778,1.55555556 L6.22222222,1.55555556 L6.22222222,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CredentialProcessing.displayName = 'CredentialProcessing';
export default CredentialProcessing;