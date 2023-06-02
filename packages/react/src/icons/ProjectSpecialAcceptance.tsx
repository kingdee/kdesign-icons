import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ProjectSpecialAcceptance = ({
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
          id="455.项目专项验收"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M18.0117724,13 L23.6399608,14.104 L24,14.181 L24,21.315 C24,21.743 23.8999346,22.169 23.6998038,22.592 C23.499673,23.016 23.2387181,23.426 22.9139961,23.824 C22.5902551,24.221 22.2194245,24.598 21.8034663,24.953 C21.3875082,25.308 20.9656638,25.625 20.5379333,25.903 C20.1092217,26.181 19.6942446,26.412 19.2900589,26.596 C18.8858731,26.78 18.5317201,26.906 18.2275997,26.974 L18.0843689,27 L17.9519294,26.974 C17.5786948,26.8844243 17.2149589,26.7578206 16.8659254,26.596 C16.4227058,26.3954552 15.9936243,26.1639027 15.5817528,25.903 C15.1256314,25.6162908 14.688758,25.2989212 14.2740353,24.953 C13.8601735,24.6114785 13.4767328,24.2333407 13.1281883,23.823 C12.807459,23.4486794 12.5336138,23.0351767 12.3129496,22.592 C12.1110977,22.1975235 12.0038496,21.7598946 12,21.315 L12,14.181 L12.4924787,14.104 L18.0117724,13 Z M19.9374372,0 C21.0767193,0 22,0.933568416 22,2.08327827 L22,12.376 L17.9366753,11.5540459 L10.575595,12.8735349 L10.575595,21.8522757 C10.8627265,23.0569948 11.494044,24.1063478 12.4695474,25.0003348 L2.06256278,24.9993392 C0.9234408,24.9993392 0,24.0666237 0,22.9160609 L0,2.08327827 C0,0.932553696 0.92328064,0 2.06256278,0 L19.9374372,0 Z M21.2512809,17.128626 L21.177456,17.1860262 L17.2791765,20.8188982 L15.3224111,18.5596607 C15.155248,18.3667064 14.8782428,18.323978 14.663502,18.4456532 L14.5862289,18.4990155 L14.5703692,18.5121722 C14.5674823,18.5145671 14.564621,18.5169928 14.561786,18.5194489 C14.3665962,18.6885487 14.3261083,18.9698398 14.4531305,19.1844853 L14.5086408,19.261504 L16.846099,21.9596032 C17.013262,22.1525575 17.2902672,22.1952859 17.505008,22.0736107 L17.5822811,22.0202484 L17.5981408,22.0070917 L17.6067241,21.999815 L17.6601471,21.9464524 L17.6601471,21.9464524 L17.7043934,21.8875307 L21.9138426,17.9987092 C22.0968456,17.8297708 22.1342235,17.5599193 22.0150415,17.3502391 L21.9629881,17.2747442 L21.9304658,17.2353216 C21.9238162,17.2272611 21.9169242,17.2194037 21.9097995,17.21176 C21.7363551,17.0256824 21.4580168,16.9959038 21.2512809,17.128626 Z M3.91878944,6.93003002 L3.87732125,6.93003002 C3.38499885,6.93003002 2.9792344,7.30062861 2.92377987,7.77807379 L2.91732125,7.89002998 L2.91732125,7.9511983 C2.91732125,8.4435207 3.28791984,8.84928522 3.76536499,8.90473971 L3.87732125,8.9111983 L3.91878944,8.9111983 C4.41111184,8.9111983 4.81687629,8.54059971 4.87233082,8.06315459 L4.87878944,7.9511983 L4.87878944,7.89002998 C4.87878944,7.3598367 4.44898278,6.93003002 3.91878944,6.93003002 Z M18.0489749,7.42532211 L6.25943181,7.42532211 C6.0237903,7.42532211 5.82780778,7.5951223 5.78716528,7.8190415 L5.77943184,7.90532211 L5.77943184,7.93590621 C5.77943184,8.17154771 5.94923197,8.3675303 6.1731512,8.4081728 L6.25943181,8.41590621 L18.0489749,8.41590621 C18.2846164,8.41590621 18.480599,8.24610611 18.5212415,8.02218691 L18.5289749,7.93590621 L18.5289749,7.90532211 C18.5289749,7.64022541 18.3140716,7.42532211 18.0489749,7.42532211 Z M3.91878944,3.9582776 L3.87732125,3.9582776 C3.38499885,3.9582776 2.9792344,4.32887619 2.92377987,4.80632131 L2.91732125,4.9182776 L2.91732125,4.97944589 C2.91732125,5.47176829 3.28791984,5.87753277 3.76536499,5.93298726 L3.87732125,5.93944589 L3.91878944,5.93944589 C4.41111184,5.93944589 4.81687629,5.5688473 4.87233082,5.09140218 L4.87878944,4.97944589 L4.87878944,4.9182776 C4.87878944,4.38808426 4.44898278,3.9582776 3.91878944,3.9582776 Z M18.0489749,4.45356966 L6.25943181,4.45356966 C6.0237903,4.45356966 5.82780778,4.62336982 5.78716528,4.84728906 L5.77943184,4.93356966 L5.77943184,4.96415382 C5.77943184,5.1997953 5.94923197,5.39577786 6.1731512,5.43642038 L6.25943181,5.44415382 L18.0489749,5.44415382 C18.2846164,5.44415382 18.480599,5.27435366 18.5212415,5.05043443 L18.5289749,4.96415382 L18.5289749,4.93356966 C18.5289749,4.66847299 18.3140716,4.45356966 18.0489749,4.45356966 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ProjectSpecialAcceptance.displayName = 'ProjectSpecialAcceptance';
export default ProjectSpecialAcceptance;