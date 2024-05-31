import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const NumberOfTeamsPerMinute = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        version="1.1"
        width={size}
        height={size}
      >
        <path
          d="M696.875 650C751.641328 650 797.749522 687.075556 811.469066 737.496144L937.5 737.5C954.758897 737.5 968.75 751.491103 968.75 768.75C968.75 786.008897 954.758897 800 937.5 800L811.460503 800.035303C797.73035 850.439859 751.629941 887.5 696.875 887.5C642.120059 887.5 596.01965 850.439859 582.289497 800.035303L395.835503 800.035303C382.10535 850.439859 336.004941 887.5 281.25 887.5C226.495059 887.5 180.39465 850.439859 166.664497 800.035303L62.5 800C45.241102 800 31.25 786.008897 31.25 768.75C31.25 751.491103 45.241102 737.5 62.5 737.5L166.655935 737.496144C180.375478 687.075556 226.483673 650 281.25 650C336.016328 650 382.124522 687.075556 395.844066 737.496144L582.280934 737.496144C596.000478 687.075556 642.108672 650 696.875 650zM281.25 712.5C250.279933 712.5 225.154248 737.530878 225.000708 768.464875C224.999478 768.539391 225 768.644634 225 768.75L224.96875 769.0625L225.186473 773.363259C227.533184 802.270684 251.738094 825 281.25 825C312.315164 825 337.5 799.815166 337.5 768.75C337.5 737.684834 312.315164 712.5 281.25 712.5zM696.875 712.5C665.809834 712.5 640.625 737.684834 640.625 768.75C640.625 799.815166 665.809834 825 696.875 825C727.824719 825 752.937734 800.002 753.123956 769.096091C753.125531 768.962425 753.125 768.856275 753.125 768.75L753.125 768.4375L752.938528 764.136741C750.591816 735.229316 726.386906 712.5 696.875 712.5zM828.347087 134.152913L959.597087 265.402913C960.486659 266.292485 961.32285 267.23544 962.100438 268.22656L959.597087 265.402913C960.70315 266.508977 961.708969 267.677326 962.614544 268.896668C963.172184 269.652166 963.696291 270.428908 964.185394 271.229369C964.418534 271.60584 964.640663 271.987674 964.854025 272.373059C965.193941 272.990814 965.519481 273.628394 965.823319 274.278152C966.072531 274.809422 966.306363 275.350136 966.524203 275.895749C966.771384 276.51315 966.996172 277.131323 967.201666 277.758237C967.352228 278.223396 967.496947 278.704273 967.629841 279.18772C967.8177 279.86136 967.980006 280.539185 968.119838 281.225184C968.228056 281.769523 968.324122 282.314093 968.405694 282.86041C968.501025 283.483604 968.577081 284.128561 968.633197 284.779218C968.682613 285.366703 968.715791 285.929176 968.733841 286.492043C968.744322 286.805913 968.75 287.152293 968.75 287.5L968.732831 288.538962C968.714913 289.080968 968.682969 289.622597 968.637 290.163257L968.75 287.5C968.75 289.081884 968.632463 290.636315 968.405647 292.155038C968.324122 292.685907 968.228056 293.230477 968.117497 293.77268C967.980006 294.460815 967.8177 295.13864 967.633719 295.807488C967.496947 296.295728 967.352228 296.776604 967.195684 297.254454C966.996172 297.868678 966.771384 298.48685 966.528 299.095579C966.306363 299.649864 966.072531 300.190578 965.822706 300.725673C965.519481 301.371606 965.193941 302.009186 964.847631 302.633655C964.640663 303.012326 964.418534 303.39416 964.187641 303.772148C963.696291 304.571092 963.172184 305.347834 962.615203 306.098728C962.445206 306.331345 962.272359 306.557575 962.096009 306.781948C962.029028 306.864461 961.957122 306.955076 961.884725 307.045281L959.597087 309.597087L828.347087 440.847088C816.143203 453.050972 796.356797 453.050972 784.152913 440.847088C771.949028 428.643203 771.949028 408.856797 784.152913 396.652913L862.03125 318.75L62.5 318.75C45.241102 318.75 31.25 304.758898 31.25 287.5C31.25 270.241102 45.241102 256.25 62.5 256.25L862.03125 256.25L784.152913 178.347087C772.887791 167.081963 772.021241 149.355993 781.553269 137.096893L784.152913 134.152913C796.356797 121.949029 816.143203 121.949029 828.347087 134.152913z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
NumberOfTeamsPerMinute.displayName = 'NumberOfTeamsPerMinute';
export default NumberOfTeamsPerMinute;