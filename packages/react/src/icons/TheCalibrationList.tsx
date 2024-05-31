import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const TheCalibrationList = ({
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
          d="M301.470588 168.402778L301.470588 255.208333L698.529413 255.208333L698.529413 168.402778L830.882353 168.402778C855.235294 168.402778 875 188.151042 875 211.805556L875 862.847222C875 886.805556 854.926472 906.25 830.882353 906.25L169.117647 906.25C144.764706 906.25 125 886.501738 125 862.847222L125 211.805556C125 187.847222 145.073529 168.402778 169.117647 168.402778L301.470588 168.402778zM500 338.068182C371.79104 338.068182 267.857143 441.411547 267.857143 568.892047C267.857143 696.372544 371.79104 799.715909 500 799.715909C628.208959 799.715909 732.142856 696.372544 732.142856 568.892047C732.142856 551.097894 730.117859 533.774016 726.284506 517.135822L723.769222 507.236909L671.906944 507.222278C678.997991 526.553041 682.866134 547.421266 682.866134 569.186391C682.866134 669.190866 601.204334 750.260509 500.469403 750.260509C399.734471 750.260509 318.072673 669.190866 318.072673 569.186391C318.072673 469.181916 399.734471 388.112273 500.469403 388.112273C518.571722 388.112273 536.058113 390.730254 552.565366 395.60564L560.735716 398.22978L560.762459 346.05569C541.395241 340.847105 521.024 338.068182 500 338.068182zM500.028897 435.257177C426.297378 435.257177 366.526174 494.829663 366.526174 568.316047C366.526174 641.802434 426.297378 701.374919 500.028897 701.374919C573.760413 701.374919 633.531619 641.802434 633.531619 568.316047C633.531619 553.444091 631.0836 539.141997 626.567275 525.788216L623.612322 517.892775L584.991156 556.912691C585.546984 560.826534 585.834434 564.825966 585.834434 568.892047C585.834434 615.858547 547.482463 653.932416 500.172906 653.932416C452.863353 653.932416 414.51138 615.858547 414.51138 568.892047C414.51138 521.925547 452.863353 483.851675 500.172906 483.851675L505.776906 484.030744L505.776906 484.030744L511.284666 484.560597L550.760834 445.200959C535.119859 438.791725 517.988522 435.257177 500.028897 435.257177zM640.733444 338.068182L595.545675 383.033627L595.545675 450.741344L505.089719 541.432125L505.089719 564.043244L527.300134 564.043244L617.955209 473.269347L685.959291 473.269347L731.102953 428.264807L731.084219 405.433726L663.536897 405.433726L663.536897 338.207198L640.733444 338.068182zM654.411766 125L654.411766 211.805556L345.588235 211.805556L345.588235 125L654.411766 125z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
TheCalibrationList.displayName = 'TheCalibrationList';
export default TheCalibrationList;