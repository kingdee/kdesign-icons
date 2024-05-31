import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const NumberOfTeamsPerMinuteOne = ({
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
          d="M696.875 125C751.641328 125 797.749522 162.075555 811.469066 212.496143L937.5 212.5C954.758897 212.5 968.75 226.491102 968.75 243.75C968.75 261.008898 954.758897 275 937.5 275L811.460503 275.035303C797.73035 325.439859 751.629941 362.5 696.875 362.5C642.120059 362.5 596.01965 325.439859 582.289497 275.035303L395.835503 275.035303C382.10535 325.439859 336.004941 362.5 281.25 362.5C226.495059 362.5 180.39465 325.439859 166.664497 275.035303L62.5 275C45.241102 275 31.25 261.008898 31.25 243.75C31.25 226.491102 45.241102 212.5 62.5 212.5L166.655935 212.496143C180.375478 162.075555 226.483673 125 281.25 125C336.016328 125 382.124522 162.075555 395.844066 212.496143L582.280934 212.496143C596.000478 162.075555 642.108672 125 696.875 125zM281.25 187.5C250.184836 187.5 225 212.684836 225 243.75C225 274.815164 250.184836 300 281.25 300C312.2095 300 337.328606 274.986198 337.499128 244.066787C337.500531 243.962424 337.5 243.856274 337.5 243.75L337.5 243.4375L337.313528 239.136741C334.966816 210.229314 310.761906 187.5 281.25 187.5zM696.875 187.5C665.809834 187.5 640.625 212.684836 640.625 243.75C640.625 274.815164 665.809834 300 696.875 300C727.8345 300 752.953606 274.986198 753.124128 244.066787C753.125531 243.962424 753.125 243.856274 753.125 243.75L753.125 243.4375L752.938528 239.136741C750.591816 210.229314 726.386906 187.5 696.875 187.5zM215.847087 571.652913C228.050971 583.856797 228.050971 603.643203 215.847087 615.847087L137.96875 693.75L937.5 693.75C954.758897 693.75 968.75 707.741103 968.75 725C968.75 742.258897 954.758897 756.25 937.5 756.25L137.96875 756.25L215.847087 834.152913C227.112211 845.418038 227.978759 863.144006 218.446731 875.403106L215.847087 878.347088C203.643203 890.550972 183.856797 890.550972 171.652913 878.347088L40.402913 747.097088L38.115274 744.545281C38.042878 744.455075 37.970973 744.364463 37.899561 744.273441L40.402913 747.097088C39.296849 745.991022 38.29103 744.822675 37.385456 743.603331C36.827815 742.847834 36.303709 742.071094 35.814607 741.270631C35.581466 740.894159 35.359338 740.512325 35.145974 740.126941C34.80606 739.509184 34.48052 738.871606 34.176681 738.221847C33.92747 737.690578 33.693638 737.149863 33.475797 736.60425C33.228617 735.98685 33.003828 735.368678 32.798334 734.741763C32.647772 734.276603 32.503054 733.795728 32.370161 733.312281C32.182301 732.638641 32.019994 731.960816 31.880161 731.274816C31.771943 730.730478 31.675878 730.185906 31.594306 729.639591C31.503156 729.044388 31.429624 728.427966 31.374296 727.806306C31.309218 727.062341 31.26984 726.333781 31.255817 725.604828C31.251915 725.403394 31.25 725.201922 31.25 725L31.255236 724.426184C31.268729 723.686881 31.3083 722.947966 31.37395 722.210934L31.25 725C31.25 723.418116 31.367537 721.863684 31.594354 720.344963C31.675878 719.814094 31.771943 719.269522 31.882502 718.727319C32.019994 718.039184 32.182301 717.361359 32.36628 716.692513C32.503054 716.204272 32.647772 715.723397 32.804315 715.245547C33.003828 714.631322 33.228617 714.01315 33.471999 713.404422C33.693638 712.850138 33.92747 712.309422 34.177293 711.774328C34.48052 711.128394 34.80606 710.490816 35.152368 709.866344C35.359338 709.487675 35.581466 709.105841 35.812358 708.72785C36.303709 707.928906 36.827815 707.152166 37.384797 706.401272C37.554795 706.168656 37.72764 705.942425 37.90399 705.718053C38.677151 704.735441 39.513341 703.792484 40.402913 702.902913L171.652913 571.652913C183.856797 559.449028 203.643203 559.449028 215.847087 571.652913z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
NumberOfTeamsPerMinuteOne.displayName = 'NumberOfTeamsPerMinuteOne';
export default NumberOfTeamsPerMinuteOne;