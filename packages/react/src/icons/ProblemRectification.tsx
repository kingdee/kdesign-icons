import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ProblemRectification = ({
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
          d="M687.5 562.5C791.053391 562.5 875 646.446609 875 750C875 853.553391 791.053391 937.5 687.5 937.5C583.946609 937.5 500 853.553391 500 750C500 646.446609 583.946609 562.5 687.5 562.5zM687.5 816.964284C676.404994 816.964284 667.410716 825.958566 667.410716 837.053572C667.410716 848.148578 676.404994 857.142856 687.5 857.142856C698.595006 857.142856 707.589284 848.148578 707.589284 837.053572C707.589284 825.958566 698.595006 816.964284 687.5 816.964284zM687.5 642.857144C657.913316 642.857144 633.928572 666.841888 633.928572 696.428572C633.928572 703.825241 639.924759 709.821428 647.321428 709.821428C654.7181 709.821428 660.714284 703.825241 660.714284 696.428572C660.714284 681.635231 672.706659 669.642856 687.5 669.642856C702.293341 669.642856 714.285716 681.635231 714.285716 696.428572C714.285716 704.808425 711.289719 712.879381 705.890906 719.209387L704.003122 721.252947L700.923784 724.332281C693.981534 731.274534 687.741994 738.88555 682.296044 747.054475C677.549753 754.173909 674.771069 762.400556 674.212181 770.901494L674.107144 774.100578L674.107144 776.785716C674.107144 784.182384 680.103328 790.178572 687.5 790.178572C694.368338 790.178572 700.029113 785.008391 700.802753 778.382625L700.892856 776.829453C700.892856 770.7122 702.703572 764.731816 706.096813 759.641953C708.692444 755.748506 711.571753 752.054491 714.710378 748.589628L717.934538 745.20225L726.1861 736.950691C734.983869 728.152922 740.222959 716.461706 740.976916 704.113713L741.071428 701.014325L741.071428 696.428572C741.071428 666.841888 717.086684 642.857144 687.5 642.857144zM803.226847 62.5C824.837991 62.5 842.357281 79.911149 842.357281 101.388889L842.407969 555.020316C799.767416 520.648744 745.082259 499.998194 685.454125 499.998194C549.260809 499.998194 438.854313 607.729231 438.854313 740.6222C438.854313 821.987563 480.241863 893.920594 543.595409 937.470366L164.130435 937.496391C142.519293 937.496391 125 920.085238 125 898.6075L125 101.388889C125 79.911149 142.519293 62.5 164.130435 62.5L803.226847 62.5zM660.620209 156.25C653.461175 156.25 646.703044 159.469149 641.624903 165.268027C641.624903 165.268027 515.0893 311.495484 451.8215 384.609213C449.092541 387.762859 443.634628 394.07015 443.634628 394.07015L358.298831 284.305262C353.182507 278.462286 346.424378 275.243137 339.284434 275.243137C332.144489 275.243137 325.443632 278.462286 320.384581 284.305262C315.306438 290.082092 312.519188 297.821279 312.500097 306.067592C312.481006 314.380053 315.287348 322.229485 320.403672 328.138608L424.772955 459.754022C429.812916 465.5529 436.551955 468.75 443.710991 468.75C450.870025 468.75 457.609063 465.5529 462.649025 459.754022L679.615516 209.14547C684.693659 203.236347 687.5 195.475111 687.5 187.206749C687.5 178.938386 684.71275 171.155101 679.615516 165.312125C674.537375 159.469149 667.779244 156.25 660.620209 156.25z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
ProblemRectification.displayName = 'ProblemRectification';
export default ProblemRectification;
