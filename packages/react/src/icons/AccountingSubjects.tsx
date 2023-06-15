import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AccountingSubjects = ({
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
          id="864.会计科目"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M14,4.70804384 C14.0000741,4.08750447 14.408628,3.54105651 15.0037997,3.36544387 L26.2037995,0.0572439359 C26.6271559,-0.0676725221 27.0846303,0.0143827967 27.4381804,0.278649812 C27.7917306,0.542916828 28,0.958443013 28,1.39984391 L28,19.0930436 C28.000546,19.7141011 27.5918685,20.2612844 26.9961995,20.4370435 L15.7961997,23.7438435 C15.3728433,23.8687599 14.9153689,23.7867046 14.5618188,23.5224376 C14.2082686,23.2581706 14.0000527,22.8426444 14,22.4012435 C14.0003885,22.8428907 13.792357,23.2588272 13.4387416,23.5234186 C13.0851263,23.78801 12.6273925,23.8702299 12.2037998,23.7452435 L1.00379998,20.4356435 C0.408628305,20.2600309 0,19.7135829 0,19.0930436 L0,1.39984391 C0,0.958443013 0.208268901,0.542916828 0.561819038,0.278649812 C0.915369175,0.0143827967 1.37284357,-0.0676725221 1.79619996,0.0572439359 L12.9961997,3.36544387 C13.5918687,3.54120299 14.0005462,4.08838628 14,4.70944384 L14,4.70804384 Z M3.26479994,6.40904381 L2.78599995,7.72504379 L10.6791998,10.5978437 L11.1579998,9.28184376 L3.26479994,6.40904381 L3.26479994,6.40904381 Z M3.26479994,13.4090437 L2.78599995,14.7250436 L10.6791998,17.5978436 L11.1579998,16.2818436 L3.26479994,13.4090437 Z M24.6931995,6.8052438 L16.7999997,9.67804375 L17.2787997,10.9940437 L25.1719995,8.12124378 L24.6931995,6.8052438 L24.6931995,6.8052438 Z M24.6931995,13.8052437 L16.7999997,16.6780436 L17.2787997,17.9940436 L25.1719995,15.1212436 L24.6931995,13.8052437 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AccountingSubjects.displayName = 'AccountingSubjects';
export default AccountingSubjects;
