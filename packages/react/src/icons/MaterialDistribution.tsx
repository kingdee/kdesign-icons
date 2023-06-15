import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const MaterialDistribution = ({
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
          id="690.材料分配"
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
              d="M19.8989834,13.2413793 C19.8989834,14.2525429 20.7395555,15.0720861 21.7765186,15.0720861 C22.0480229,15.0720861 22.3060804,15.0159116 22.5390372,14.9147793 L22.7088663,14.8306757 L24,17.0313932 C23.4351928,17.3470618 23.0548126,17.9405585 23.0548126,18.6206896 C23.0548126,19.2328077 23.3629205,19.7747519 23.8362866,20.1071419 L24,20.2099861 L22.7088663,22.4107036 C22.4342688,22.2570659 22.115899,22.1692932 21.7765186,22.1692932 C20.8005532,22.1692932 19.9984247,22.8953814 19.9074337,23.8236986 L19.8988376,24 L17.3425417,24 C17.3425417,22.9889788 16.5018238,22.1692932 15.4648607,22.1692932 C15.1933564,22.1692932 14.9353923,22.2254677 14.7023235,22.3266 L14.532367,22.4107036 L13.2413793,20.2099861 C13.8061865,19.8943175 14.1867127,19.3008208 14.1867127,18.6206896 C14.1867127,18.0085716 13.8784865,17.4666274 13.4050968,17.1342374 L13.2413793,17.0313932 L14.532367,14.8306757 C14.8072564,14.9843134 15.1254803,15.0720861 15.4648607,15.0720861 C16.4408261,15.0720861 17.2428254,14.3461239 17.3338012,13.417703 L17.3423959,13.2413793 L19.8989834,13.2413793 Z M8.27586206,0 C8.73292531,0 9.10344828,0.370522974 9.10344828,0.827586198 L9.10344828,4.13793104 L14.0689655,4.13793104 L14.0689655,0.827586198 C14.0689655,0.370522974 14.4394885,0 14.8965517,0 L22.3448276,0 C22.8018908,0 23.1724138,0.370522974 23.1724138,0.827586198 L23.1724138,8.27586206 C23.1724138,8.73292531 22.8018908,9.10344828 22.3448276,9.10344828 L14.8965517,9.10344828 C14.4394885,9.10344828 14.0689655,8.73292531 14.0689655,8.27586206 L14.0689655,4.96551724 L9.10344828,4.96551724 L9.10344828,8.27586206 C9.10344828,8.73292531 8.73292531,9.10344828 8.27586206,9.10344828 L4.96551724,9.10344828 L4.96551724,14.0689655 L8.27586206,14.0689655 C8.73292531,14.0689655 9.10344828,14.4394885 9.10344828,14.8965517 L9.10344828,22.3448276 C9.10344828,22.8018908 8.73292531,23.1724138 8.27586206,23.1724138 L0.827586198,23.1724138 C0.370522974,23.1724138 0,22.8018908 0,22.3448276 L0,14.8965517 C0,14.4394885 0.370522974,14.0689655 0.827586198,14.0689655 L4.13793104,14.0689655 L4.13793104,9.10344828 L0.827586198,9.10344828 C0.370522974,9.10344828 0,8.73292531 0,8.27586206 L0,0.827586198 C0,0.370522974 0.370522974,0 0.827586198,0 L8.27586206,0 Z M18.6206896,17.0837439 C17.7718579,17.0837439 17.0837439,17.7718579 17.0837439,18.6206896 C17.0837439,19.4695214 17.7718579,20.1576354 18.6206896,20.1576354 C19.4695214,20.1576354 20.1576354,19.4695214 20.1576354,18.6206896 C20.1576354,17.7718579 19.4695214,17.0837439 18.6206896,17.0837439 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
MaterialDistribution.displayName = 'MaterialDistribution';
export default MaterialDistribution;
