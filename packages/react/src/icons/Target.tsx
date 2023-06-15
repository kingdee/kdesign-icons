import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Target = ({
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
          id="260.-销售目标"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="销售目标"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M21.3333333,0 C21.8242531,0 22.2222222,0.397969124 22.2222222,0.888888889 L22.2233516,12.7009064 C21.3413541,11.9516898 20.26347,11.424916 19.0733507,11.2042426 L19.0733507,11.2042426 L19.0733507,11.0946461 C19.0733507,10.4097134 18.5162745,9.8617672 17.8404717,9.8617672 C17.155539,9.8617672 16.6075929,10.4188435 16.6075749,11.0946461 L16.6075749,11.0946461 L16.6075749,11.1951005 C13.8495839,11.7065206 11.6943193,13.8617672 11.1829471,16.6197404 L11.1829471,16.6197404 L11.0733507,16.6197404 C10.388418,16.6197404 9.84047172,17.1768165 9.84047172,17.8526193 C9.84047172,18.53757 10.397566,19.0855161 11.0733328,19.0855161 L11.0733328,19.0855161 L11.1829292,19.0855161 C11.4031019,20.2689214 11.9279349,21.3423048 12.6743619,22.2233314 L0.888888889,22.2222222 C0.397969124,22.2222222 0,21.8242531 0,21.3333333 L0,0.888888889 C0,0.397969124 0.397969124,0 0.888888889,0 L21.3333333,0 Z M16.3440894,2.85307076 L16.2603495,2.92701619 L12.4444444,6.74222222 L9.51742828,3.81590508 L9.43368835,3.74195965 C9.11404373,3.49342086 8.66373404,3.49342086 8.34408943,3.74195965 L8.26034953,3.81590508 L3.81590508,8.26034953 L3.74195965,8.34408943 C3.49342086,8.66373404 3.49342086,9.11404373 3.74195965,9.43368835 L3.81590508,9.51742828 L3.89964496,9.59137368 C4.21928963,9.83991245 4.66959926,9.83991245 4.98924396,9.59137368 L5.07298381,9.51742828 L8.88888889,5.70222222 L11.8159051,8.62853939 L11.899645,8.70248479 C12.2192896,8.95102356 12.6695993,8.95102356 12.9892439,8.70248479 L13.0729838,8.62853939 L17.5174283,4.18409492 L17.5913737,4.10035504 C17.8625069,3.75165178 17.8378584,3.24744639 17.5174283,2.92701619 C17.196998,2.606586 16.6927927,2.58193752 16.3440894,2.85307076 Z M12.5995844,18.7295825 L12.5143427,18.7295825 C11.9887463,18.7295825 11.5555556,18.3034021 11.5555556,17.7706627 C11.5555556,17.2450384 11.9816312,16.8117569 12.5143566,16.8117569 L12.5995983,16.8117569 C12.9973323,14.6666667 14.6736492,12.9903637 16.8187533,12.5925879 L16.8187533,12.5144614 C16.8187672,11.9888371 17.2449476,11.5555556 17.7776731,11.5555556 C18.3032973,11.5555556 18.7365788,11.9817359 18.7365788,12.5144614 L18.7365788,12.599703 C20.881683,12.9974509 22.557986,14.6737678 22.9557617,16.8188719 L23.0410034,16.8188719 C23.5665998,16.8188719 24,17.2450524 24,17.7777778 C24,18.3034021 23.5737149,18.7366836 23.0409894,18.7366836 L22.9557477,18.7366836 C22.5579999,20.8817877 20.881683,22.5580907 18.7365788,22.9558665 L18.7365788,23.0411081 C18.7365788,23.5667045 18.3103985,24 17.7776731,24 C17.2520487,24 16.8187672,23.5738196 16.8187672,23.0410941 L16.8187672,22.9558525 C14.6736631,22.5438744 12.9973601,20.8675854 12.5995844,18.7295825 Z M20.6321942,17.7617479 C20.6321942,16.1772436 19.3461334,14.8911828 17.7616431,14.8911828 C16.1771389,14.8911828 14.8910781,16.1772436 14.8910781,17.7617479 C14.8910781,19.3462381 16.1771389,20.6322989 17.7616431,20.6322989 C19.3461334,20.6322989 20.6321942,19.3462381 20.6321942,17.7617479 Z M17.7616431,19.6701006 C16.7045908,19.6701006 15.8532625,18.8116851 15.8532625,17.7617479 C15.8532625,16.7046956 16.711678,15.8533672 17.7616431,15.8533672 C18.8186815,15.8533672 19.6699959,16.7117828 19.6699959,17.7617479 C19.6699959,18.8187862 18.8186955,19.6701006 17.7616431,19.6701006 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Target.displayName = 'Target';
export default Target;
