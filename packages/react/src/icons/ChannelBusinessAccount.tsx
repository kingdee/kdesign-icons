import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ChannelBusinessAccount = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="1862.渠道业务账"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M24.6048774,2 C25.8199038,2 26.8048774,2.98497355 26.8048774,4.2 L26.8048774,22.8627451 C26.6970725,25.8972787 26.8285756,27.7805585 27.1993866,28.5125847 C27.5701976,29.2446108 27.9949111,29.7404159 28.4735269,30 L9.5,30 C6.46243388,30 4,27.5375661 4,24.5 L4,4.2 C4,2.98497355 4.98497355,2 6.2,2 L24.6048774,2 Z M31.9974371,21.7647059 L31.9974371,26.1568627 C32.0494721,28.7189542 31.3091415,30 29.7764455,30 C28.2437494,30 27.4761099,28.7189542 27.4735269,26.1568627 L27.4735269,21.7647059 L31.9974371,21.7647059 Z M16.6817757,12.1800905 L15.1828761,14.762086 C15.1357478,14.8424862 15.1086332,14.9318227 15.0973475,15.023418 C15.0920916,14.9343682 15.0672453,14.8444235 15.0199418,14.762086 L13.5439771,12.1800905 C13.3815207,11.8959368 13.020294,11.7979373 12.7374286,11.9626123 C12.4545633,12.1272872 12.358045,12.491541 12.5214571,12.7765897 L13.8062965,15.023418 L12.4316282,15.023418 C12.0717561,15.0361543 11.7870313,15.3130747 11.7870313,15.6503462 C11.7870313,15.9876177 12.0717561,16.2645381 12.4316282,16.2772744 L14.4413101,16.2772744 L14.4413101,17.5315782 L12.4316282,17.5315782 C12.0717561,17.5443145 11.7870313,17.8212349 11.7870313,18.1585064 C11.7870313,18.4957779 12.0717561,18.7726983 12.4316282,18.7854346 L14.4413101,18.7854346 L14.4413101,20.1023865 C14.4413101,20.413837 14.740899,20.6666667 15.1116819,20.6666667 C15.4815093,20.6666667 15.7815759,20.4133895 15.7815759,20.1023865 L15.7815759,18.7854346 L17.7912578,18.7854346 C18.1511299,18.7726983 18.4358547,18.4957779 18.4358547,18.1585064 C18.4358547,17.8212349 18.1511299,17.5443145 17.7912578,17.5315782 L15.7815759,17.5315782 L15.7815759,16.2772744 L17.7912578,16.2772744 C18.1615629,16.2772744 18.4616295,15.9958055 18.4616295,15.6503462 C18.4616295,15.3044393 18.1615629,15.023418 17.7912578,15.023418 L16.4165895,15.023418 L17.7205414,12.7765897 C17.8863426,12.4919885 17.7879131,12.1272872 17.501703,11.9626123 C17.2140595,11.7974898 16.8480547,11.8954893 16.6817757,12.1800905 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
ChannelBusinessAccount.displayName = 'ChannelBusinessAccount';
export default ChannelBusinessAccount;
