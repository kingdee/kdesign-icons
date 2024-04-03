import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PutItAllAway = ({
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
          d="M854.492188 793.457031L854.492188 854.492188L122.070313 854.492188L122.070313 793.457031L854.492188 793.457031zM122.070313 305.175781L366.210938 488.28125L122.070313 671.386719L122.070313 305.175781zM854.492188 457.763672L854.492188 518.798828L427.246094 518.798828L427.246094 457.763672L854.492188 457.763672zM854.492188 122.070313L854.492188 183.105469L122.070313 183.105469L122.070313 122.070313L854.492188 122.070313z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
PutItAllAway.displayName = 'PutItAllAway';
export default PutItAllAway;
