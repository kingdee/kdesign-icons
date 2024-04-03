import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const InitializeTheMigrationTool = ({
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
          d="M812.397431 684.788456C856.264241 728.655266 867.230944 783.488778 845.297541 849.288991L878.197647 882.189097L812.397431 947.989313L779.497325 915.089206C713.697109 937.022609 658.8636 926.055906 614.996791 882.189097C571.129978 838.322288 571.129978 794.455478 614.996791 750.588669L680.797003 816.388884C698.967231 834.559113 728.426991 834.559113 746.597219 816.388884C764.767444 798.218656 764.767444 768.758897 746.597219 750.588669L680.797003 684.788456C724.663813 640.921647 768.530622 640.921647 812.397431 684.788456zM531.130934 686.097297C514.997797 713.982259 504.4866 745.526681 501.147275 779.180631L220.833333 779.166666L313.888888 686.111113L531.130934 686.097297zM872.222222 81.25C897.918803 81.25 918.75 102.081196 918.75 127.777778L918.75 593.055556C918.75 611.088578 908.491109 626.725506 893.491178 634.448484C851.722503 594.368666 795.050828 569.791666 732.638887 569.791666C667.563731 569.791666 608.729181 596.510897 566.507438 639.577166L286.633548 639.583334C274.293614 639.583334 262.459092 644.485353 253.733441 653.211003L160.677885 746.266559C142.507658 764.436788 113.047898 764.436788 94.877671 746.266559C86.15202 737.540909 81.25 725.706388 81.25 713.366453L81.25 127.777778C81.25 102.081196 102.081196 81.25 127.777778 81.25L872.222222 81.25zM594.466747 248.4164C581.974716 260.908431 580.933713 280.51522 591.343741 294.193044L594.466747 297.766561L622.1875 325.5L316.796875 325.520834C292.706329 325.520834 273.177083 341.144231 273.177083 360.416666C273.177083 378.083066 289.587075 392.683259 310.877928 394.993941L316.796875 395.3125L619.96875 395.28125L597.374734 417.90625L594.251725 421.479769C583.8417 435.157591 584.882703 454.764381 597.374734 467.256413C611.002403 480.884081 633.097222 480.884081 646.724894 467.256413L728.975163 385.006144L732.098169 381.432628C741.233181 369.430056 741.550416 352.861931 733.049875 340.542259C731.988509 338.364966 730.71165 336.23925 729.190184 334.240184L726.067175 330.666669L643.816909 248.4164C630.189238 234.788729 608.094419 234.788729 594.466747 248.4164z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
InitializeTheMigrationTool.displayName = 'InitializeTheMigrationTool';
export default InitializeTheMigrationTool;
