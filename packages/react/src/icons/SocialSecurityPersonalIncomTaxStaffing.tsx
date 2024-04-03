import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SocialSecurityPersonalIncomTaxStaffing = ({
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
          d="M750 62.5C772.283272 97.530428 793.116606 123.572095 812.5 140.625C841.575091 166.204358 875 174.477387 906.25 187.5L906.290063 584.681375C860.480053 532.753772 793.440053 500 718.75 500C580.678812 500 468.75 611.928812 468.75 750C468.75 821.617588 498.864466 886.201566 547.121347 931.779884C530.764719 935.496597 514.953059 937.5 500 937.5C343.75 937.5 93.75 687.5 93.75 604.867984L93.75 187.5C125 174.567577 145.726058 176.631644 187.5 140.625C215.349295 116.620571 236.182628 90.578904 250 62.5L750 62.5zM771.901844 564.293253L853.091725 611.138031C858.819522 614.442847 861.277872 621.433484 858.879384 627.595991L848.275547 654.840725C855.282878 664.363841 861.22555 674.634572 865.982003 685.473084L894.89235 689.917963C901.426388 690.92255 906.25 696.544434 906.25 703.155222L906.25 796.844778C906.25 803.455566 901.426388 809.07745 894.89235 810.082038L865.982003 814.526916C861.22555 825.365425 855.282884 835.63615 848.275569 845.159247L858.879388 872.404022C861.277872 878.566525 858.819519 885.557156 853.091725 888.861969L771.901844 935.706747C766.178809 939.008809 758.902759 937.643734 754.765809 932.491819L736.499056 909.743472C730.633556 910.388478 724.711013 910.713588 718.75 910.713588C712.788988 910.713588 706.866444 910.388478 701.000944 909.743472L682.734191 932.491819C678.597241 937.643734 671.321191 939.008809 665.598156 935.706747L584.408275 888.861969C578.680478 885.557153 576.222128 878.566516 578.620616 872.404009L589.224453 845.159275C582.217122 835.636159 576.27445 825.365428 571.517997 814.526916L542.60765 810.082038C536.073612 809.07745 531.25 803.455566 531.25 796.844778L531.25 703.155222C531.25 696.544434 536.073612 690.92255 542.60765 689.917963L571.517997 685.473084C576.27445 674.634575 582.217116 664.36385 589.224431 654.840753L578.620613 627.595978C576.222128 621.433475 578.680481 614.442844 584.408275 611.138031L665.598156 564.293253C671.321191 560.991191 678.597241 562.356266 682.734191 567.508181L701.000944 590.256528C706.866444 589.611522 712.788988 589.286413 718.75 589.286413C724.711013 589.286413 730.633556 589.611522 736.499056 590.256528L754.765809 567.508181C758.902759 562.356266 766.178809 560.991191 771.901844 564.293253zM718.75 696.428803C689.163316 696.428803 665.178572 720.413447 665.178572 750C665.178572 779.586553 689.163316 803.571197 718.75 803.571197C748.336684 803.571197 772.321428 779.586553 772.321428 750C772.321428 720.413447 748.336684 696.428803 718.75 696.428803zM411.611653 262.683983C401.848544 272.44709 401.848544 288.276215 411.611653 298.039322L439.625 326.049153L400 326.072331C386.192881 326.072331 375 337.265213 375 351.072331C375 364.87945 386.192881 376.072331 400 376.072331L474.65625 376.049153L474.3125 426.049153L400 426.072331C386.192881 426.072331 375 437.265213 375 451.072331C375 464.87945 386.192881 476.072331 400 476.072331L473.96875 476.049153L473.607781 529.857781C473.607781 543.570856 484.724425 554.6875 498.4375 554.6875C512.272172 554.6875 523.513809 543.522431 523.608363 529.688084L523.96875 476.049153L600 476.072331C613.807119 476.072331 625 464.87945 625 451.072331C625 437.265213 613.807119 426.072331 600 426.072331L524.3125 426.049153L524.65625 376.049153L600 376.072331C613.807119 376.072331 625 364.87945 625 351.072331C625 337.265213 613.807119 326.072331 600 326.072331L560.34375 326.049153L588.388347 298.039322C598.151456 288.276215 598.151456 272.44709 588.388347 262.683983C578.625241 252.920876 562.796116 252.920876 553.033009 262.683983L500 315.716991L446.966991 262.683983C437.203884 252.920876 421.374759 252.920876 411.611653 262.683983z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
SocialSecurityPersonalIncomTaxStaffing.displayName =
  'SocialSecurityPersonalIncomTaxStaffing';
export default SocialSecurityPersonalIncomTaxStaffing;
