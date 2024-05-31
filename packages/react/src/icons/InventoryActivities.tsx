import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const InventoryActivities = ({
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
          id="1974.盘点活动"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M27,7 C27.5522847,7 28,7.44771525 28,8 L28,27 C28,27.5522847 27.5522847,28 27,28 L8,28 C7.44771525,28 7,27.5522847 7,27 L7,8 C7,7.44771525 7.44771525,7 8,7 L27,7 Z M14.2706025,22.4601168 C13.9724332,22.1725964 13.4976379,22.1812291 13.2101176,22.4793983 L11.8210008,23.92 L11.7450732,23.8403353 C11.6262512,23.7171125 11.4778539,23.563219 11.289884,23.3682872 C11.0023636,23.0701179 10.5275684,23.0614853 10.2293991,23.3490057 C9.93122983,23.636526 9.92259719,24.1113213 10.2101176,24.4094906 C10.8680123,25.0917518 11.0411425,25.2712942 11.158142,25.3926271 L11.2060978,25.442359 C11.2296071,25.466739 11.2533506,25.4913619 11.2815461,25.5206017 C11.5764868,25.8264661 12.0663719,25.8264661 12.3613126,25.5206017 L14.289884,23.5206017 C14.5774044,23.2224324 14.5687717,22.7476371 14.2706025,22.4601168 Z M24.125,23.625 L16.875,23.625 C16.3917508,23.625 16,24.0167508 16,24.5 C16,24.9832492 16.3917508,25.375 16.875,25.375 L24.125,25.375 C24.6082492,25.375 25,24.9832492 25,24.5 C25,24.0167508 24.6082492,23.625 24.125,23.625 Z M24,4 C24.5522847,4 25,4.44771525 25,5 L25,5.74012591 L6.82917061,5.74012591 C6.27688586,5.74012591 5.82917061,6.18784116 5.82917061,6.74012591 L5.82917061,25 L5,25 C4.44771525,25 4,24.5522847 4,24 L4,5 C4,4.44771525 4.44771525,4 5,4 L24,4 Z M14.2706025,18.4601168 C13.9724332,18.1725964 13.4976379,18.1812291 13.2101176,18.4793983 L11.8210008,19.92 L11.7450732,19.8403353 C11.6262512,19.7171125 11.4778539,19.563219 11.289884,19.3682872 C11.0023636,19.0701179 10.5275684,19.0614853 10.2293991,19.3490057 C9.93122983,19.636526 9.92259719,20.1113213 10.2101176,20.4094906 C10.8680123,21.0917518 11.0411425,21.2712942 11.158142,21.3926271 L11.2060978,21.442359 C11.2296071,21.466739 11.2533506,21.4913619 11.2815461,21.5206017 C11.5764868,21.8264661 12.0663719,21.8264661 12.3613126,21.5206017 L14.289884,19.5206017 C14.5774044,19.2224324 14.5687717,18.7476371 14.2706025,18.4601168 Z M24.125,19.25 L16.875,19.25 C16.3917508,19.25 16,19.6417508 16,20.125 C16,20.6082492 16.3917508,21 16.875,21 L24.125,21 C24.6082492,21 25,20.6082492 25,20.125 C25,19.6417508 24.6082492,19.25 24.125,19.25 Z M24,10 L19,10 C18.4477153,10 18,10.4477153 18,11 L18,16 C18,16.5522847 18.4477153,17 19,17 L24,17 C24.5522847,17 25,16.5522847 25,16 L25,11 C25,10.4477153 24.5522847,10 24,10 Z M14.4353576,10.282185 C14.3044967,9.35312596 12.7669026,8.88330868 12.0371865,9.02480399 C11.3128986,9.11001297 10.4667403,9.6242961 10.4015398,10.4039308 L10.4015398,11.3683744 C10.2616475,11.3683744 10.0803278,11.4408694 10.139826,12.0078007 C10.1991807,12.5750712 10.5799068,12.7318866 10.8656207,13.0091851 C11.0704721,13.2080029 11.0962659,13.4915912 11.2609613,13.7181227 C11.2538085,13.7335258 11.2647497,13.7503597 11.2971464,13.7686244 L11.2971464,14.3161624 C11.2971464,14.3161624 10.232776,14.7060136 9.73102559,14.8838413 C9.56704206,14.9419594 9.4101223,15.1310977 9.26026634,15.451256 C9.02614808,15.951463 9.24194137,16.5467202 9.74218211,16.7807665 C9.87475461,16.8427928 10.0193268,16.8749612 10.1656918,16.8750005 L14.69151,16.8750005 C15.2437946,16.8745772 15.6911668,16.4265191 15.6907437,15.8742345 C15.690636,15.7336269 15.6608774,15.5946225 15.6025896,15.4666622 C15.4542418,15.1371593 15.3004229,14.9428856 15.1411327,14.8838413 C15.0136681,14.845023 14.8107784,14.7750271 14.5920519,14.6971304 L14.3257922,14.6013519 C13.9264412,14.4564646 13.5530059,14.3161458 13.5530059,14.3161458 L13.5535564,13.7753167 C13.5582849,13.7699068 13.5629138,13.7644553 13.5674479,13.7589643 C13.5845907,13.7461115 13.5899802,13.7378326 13.5898464,13.7305301 C13.762528,13.5008047 13.7898645,13.2113297 13.9891405,13.0091851 C14.2627029,12.7318947 14.6555963,12.5745785 14.7149431,12.0076472 C14.7744572,11.4403767 14.4353576,11.3683744 14.4353576,11.3683744 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
InventoryActivities.displayName = 'InventoryActivities';
export default InventoryActivities;