import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const TalentRecommendation = ({
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
          d="M812.5 62.5C843.75 62.5 875 93.75 875 125L875 875C875 906.25 843.75 937.5 812.5 937.5L187.5 937.5C156.25 937.5 125 906.25 125 875L125 125C125 93.75 156.25 62.5 187.5 62.5L812.5 62.5zM531.25 781.25L312.5 781.25C295.241102 781.25 281.25 795.241103 281.25 812.5C281.25 829.758897 295.241102 843.75 312.5 843.75L531.25 843.75C548.508897 843.75 562.5 829.758897 562.5 812.5C562.5 795.241103 548.508897 781.25 531.25 781.25zM687.5 656.25L312.5 656.25C295.241102 656.25 281.25 670.241103 281.25 687.5C281.25 704.758897 295.241102 718.75 312.5 718.75L687.5 718.75C704.758897 718.75 718.75 704.758897 718.75 687.5C718.75 670.241103 704.758897 656.25 687.5 656.25zM520.852703 218.155892C515.342872 187.406505 482.028519 182.149128 466.403519 189.961628C450.778519 197.774128 453.471906 222.260759 437.753813 256.401549C429.137512 275.116748 418.909256 291.086192 407.069044 304.309879C401.993453 310.007074 399.183922 317.366794 399.165247 324.996947L399.165247 500C399.165247 517.258897 413.156347 531.25 430.415247 531.25L568.876169 531.25C594.768975 531.25 617.980678 515.284231 627.241713 491.104269L679.398175 354.927134C680.764738 351.359125 681.465403 347.570756 681.465403 343.75C681.465403 326.491103 667.4743 312.5 650.215403 312.5L514.693684 312.5C522.472916 270.103519 524.525922 238.655483 520.852703 218.155892zM336.665247 312.5C319.406347 312.5 305.415246 326.491103 305.415246 343.75L305.415246 500C305.415246 517.258897 319.406347 531.25 336.665247 531.25C353.924144 531.25 367.915247 517.258897 367.915247 500L367.915247 343.75C367.915247 326.491103 353.924144 312.5 336.665247 312.5z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
TalentRecommendation.displayName = 'TalentRecommendation';
export default TalentRecommendation;