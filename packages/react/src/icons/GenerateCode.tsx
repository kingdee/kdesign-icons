import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const GenerateCode = ({
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
          d="M612.054296 126.011397C628.008931 130.221586 637.529694 146.568407 633.319506 162.523045C633.300081 162.596636 633.280381 162.670154 633.2604 162.743594L454.067932 821.355244C449.692967 837.435175 433.166835 846.975987 417.053938 842.724031C401.0993 838.513844 391.578542 822.167025 395.78873 806.212387C395.80815 806.138794 395.827851 806.065275 395.847833 805.991837L575.040302 147.380189C579.415267 131.300256 595.941398 121.759447 612.054296 126.011397zM327.047331 270.462077C337.975881 281.224862 338.756491 298.197131 329.389163 309.846984L327.047331 312.435682L135.257012 501.316906L327.047331 690.198131C337.975881 700.960912 338.756491 717.933181 329.389163 729.583037L327.047331 732.171731C316.118781 742.934519 298.88511 743.703287 287.055829 734.478044L284.42726 732.171731L71.326906 522.303709C60.398356 511.540924 59.617745 494.568655 68.985074 482.918801L71.326906 480.330103L284.42726 270.462077C296.196468 258.871387 315.278123 258.871387 327.047331 270.462077zM704.202669 270.462077C693.274119 281.224862 692.493506 298.197131 701.860837 309.846984L704.202669 312.435682L895.992988 501.316906L704.202669 690.198131C693.274119 700.960912 692.493506 717.933181 701.860837 729.583037L704.202669 732.171731C715.131219 742.934519 732.364887 743.703287 744.194169 734.478044L746.822737 732.171731L959.923094 522.303709C970.851644 511.540924 971.632256 494.568655 962.264925 482.918801L959.923094 480.330103L746.822737 270.462077C735.053531 258.871387 715.971875 258.871387 704.202669 270.462077z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
GenerateCode.displayName = 'GenerateCode';
export default GenerateCode;
