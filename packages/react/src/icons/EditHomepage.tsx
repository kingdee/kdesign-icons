import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const EditHomepage = ({
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
          id="1069.编辑首页"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.27274176,1.27274176 L1.27274176,12.7274174 L10.1819339,12.7274174 L10.1819339,1.27274176 L1.27274176,1.27274176 Z M1.27274176,-3.36445136e-16 L10.1819339,-3.36445136e-16 C10.519486,-3.36445136e-16 10.8432128,0.134092039 11.0818982,0.37277742 C11.3205836,0.611462801 11.4546756,0.935189652 11.4546756,1.27274176 L11.4546756,12.7274174 C11.4546756,13.0649695 11.3205836,13.3886963 11.0818982,13.6273817 C10.8432128,13.8660671 10.519486,14.0001591 10.1819339,14.0001591 L1.27274176,14.0001591 C0.935189658,14.0001591 0.611462812,13.8660671 0.372777431,13.6273817 C0.134092051,13.3886963 8.8817842e-16,13.0649695 8.8817842e-16,12.7274174 L8.8817842e-16,1.27274176 C8.8817842e-16,0.935189652 0.134092039,0.611462801 0.37277742,0.37277742 C0.611462801,0.134092039 0.935189652,-3.36445136e-16 1.27274176,-3.36445136e-16 Z M1.27274176,15.2729008 L10.1819339,15.2729008 C10.519486,15.2729008 10.8432128,15.4069929 11.0818982,15.6456783 C11.3205836,15.8843636 11.4546756,16.2080905 11.4546756,16.5456426 L11.4546756,24.182093 C11.4546756,24.5196451 11.3205836,24.8433719 11.0818982,25.0820573 C10.8432128,25.3207427 10.519486,25.4548347 10.1819339,25.4548347 L1.27274176,25.4548347 C0.935189652,25.4548347 0.611462801,25.3207427 0.37277742,25.0820573 C0.134092039,24.8433719 0,24.5196451 0,24.182093 L0,16.5456426 C0,16.2080905 0.134092051,15.8843636 0.372777431,15.6456783 C0.611462812,15.4069929 0.935189658,15.2729008 1.27274176,15.2729008 Z M1.27274176,16.5456426 L1.27274176,24.182093 L10.1819339,24.182093 L10.1819339,16.5456426 L1.27274176,16.5456426 Z M14.0001591,-1.22462356e-15 L22.9093512,-1.22462356e-15 C23.2469033,-1.22462356e-15 23.5706302,0.134092051 23.8093156,0.372777431 C24.0480009,0.611462812 24.182093,0.935189658 24.182093,1.27274176 L24.182093,8.90919216 C24.182093,9.612108 23.6122671,10.1819339 22.9093512,10.1819339 L14.0001591,10.1819339 C13.2972432,10.1819339 12.7274174,9.612108 12.7274174,8.90919216 L12.7274174,1.27274176 C12.7274174,0.935189658 12.8615094,0.611462812 13.1001948,0.372777431 C13.3388801,0.134092051 13.662607,-1.22462356e-15 14.0001591,-1.22462356e-15 L14.0001591,-1.22462356e-15 Z M14.0001591,1.27274176 L14.0001591,8.90919216 L22.9093512,8.90919216 L22.9093512,1.27274176 L14.0001591,1.27274176 Z M14.0001591,12.7274174 C14.0090683,16.9694656 14.0167047,19.091126 14.0230684,19.091126 L14.0230684,20.3638678 C13.2976056,20.3638678 12.7274174,19.9209536 12.7274174,19.3736747 L12.7274174,12.4448687 C12.7274174,11.8975897 13.2976057,11.4546756 14.0001591,11.4546756 L21.6557006,11.4546756 L20.564961,12.7274174 L14.0001591,12.7274174 L14.0001591,12.7274174 Z M13.2619689,26.6626666 C12.9170559,26.6626666 12.5721428,26.3113899 12.8025091,26.1942977 L13.3765157,23.0404436 C13.3765157,22.9233514 13.3765157,22.8062592 13.4910624,22.6904397 L24.4913692,11.5717679 C24.605916,11.4546756 24.837555,11.4546756 24.9521017,11.4546756 C25.1811953,11.4546756 25.2970148,11.4546756 25.4115615,11.5717679 L27.8272253,14.0243412 C28.0575916,14.2585257 28.0575916,14.6098024 27.8272253,14.8427141 L16.8281912,25.9613859 C16.7136445,25.9613859 16.597825,26.0784782 16.4832782,26.0784782 L13.2619689,26.6626666 L13.2619689,26.6626666 Z M16.1409107,24.8464642 L26.4424823,14.4328913 L24.950829,12.9170559 L14.6110751,23.368811 L14.2801623,25.1837407 L16.1409107,24.8464642 L16.1409107,24.8464642 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
EditHomepage.displayName = 'EditHomepage';
export default EditHomepage;
