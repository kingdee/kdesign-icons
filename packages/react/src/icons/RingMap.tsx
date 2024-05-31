import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const RingMap = ({
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
          id="环图"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="视觉修正模版" transform="translate(-2.000000, -0.500000)"></g>
          <g
            id="编组"
            transform="translate(1.000000, 1.000000)"
            fill="#333333"
            fillRule="nonzero"
          >
            <path
              d="M13.1245899,0.00774951595 C5.64263618,0.95086315 0,7.39703538 0,15.0000687 C0,22.603102 5.64263618,29.0492742 13.1245899,29.9923878 C13.3916343,30.0266502 13.6604952,29.9442083 13.8624342,29.7661396 C14.0643731,29.5880709 14.1798147,29.331637 14.1792465,29.062399 L14.1792465,22.7746624 C14.1792465,22.3377927 13.8773788,21.9590472 13.4517671,21.8606109 C10.256867,21.1284323 8.02662417,18.3065913 8.02662417,15.0000687 C8.02662417,11.6935461 10.256867,8.87170508 13.4508296,8.13952642 C13.8767175,8.04163833 14.1784865,7.6624755 14.1783069,7.22547494 L14.1783069,0.937738294 C14.1794586,0.668482053 14.0643225,0.411835494 13.8624469,0.233664351 C13.6605714,0.055493207 13.3916103,-0.0268564744 13.1245899,0.00774951595 L13.1245899,0.00774951595 Z M12.304303,6.51110855 C8.64535482,7.67921946 6.15168276,11.0691786 6.15168276,15.0000687 C6.15168276,18.9309588 8.64535485,22.3209179 12.304303,23.4890288 L12.304303,27.9561624 C6.28855348,26.6896152 1.87494141,21.2990552 1.87494141,15.0000687 C1.87494141,8.70108214 6.28855348,3.31052218 12.304303,2.04491243 L12.304303,6.51110855 Z M16.5472954,8.13952642 C17.9155217,8.45517752 19.1557537,9.17860558 20.1040593,10.2141889 C20.4023678,10.5369053 20.8846806,10.6093705 21.264648,10.3885618 L26.6663542,7.24328724 C26.8988444,7.10904587 27.0623871,6.88131386 27.1153128,6.61811567 C27.1682385,6.35491747 27.1054364,6.08166876 26.942908,5.86799132 C24.5082966,2.64303024 20.8380988,0.506493485 16.8744727,0.00774951595 C16.6077613,-0.0249427956 16.3397569,0.0575741201 16.1376207,0.234621761 C15.9352758,0.412215866 15.8194336,0.668508732 15.8198172,0.937738294 L15.8198172,7.22547494 C15.8198172,7.66234466 16.1216837,8.04109011 16.5472954,8.13952642 L16.5472954,8.13952642 Z M17.6947595,2.04678743 C20.4324173,2.63756856 22.911211,4.08383292 24.7726633,6.17642511 L20.9449705,8.4057732 C20.0106662,7.54771548 18.9019524,6.90172619 17.6947595,6.51204605 L17.6947595,2.04678743 L17.6947595,2.04678743 Z M28.816912,9.14263933 C28.7123425,8.89405391 28.5059783,8.70240318 28.2503538,8.61647582 C27.9947293,8.53054845 27.7145044,8.55863382 27.4810162,8.69358222 L22.081185,11.8379193 C21.7049323,12.0569952 21.5290251,12.5062855 21.6565107,12.9225937 C21.8665042,13.606023 21.9724384,14.3053895 21.9724383,14.9991312 C21.9724383,18.3056538 19.7421955,21.1274948 16.5482329,21.8596734 C16.122345,21.9575615 15.8205761,22.3367243 15.820748,22.7737249 L15.820748,29.062399 C15.8197538,29.3113423 15.918201,29.5503787 16.0942285,29.7264095 C16.270256,29.9024404 16.5092878,30.0008895 16.7582263,29.9998953 C16.7976001,29.9998953 16.8360364,29.9970753 16.8754101,29.9923878 C24.3573638,29.0492742 30,22.603102 30,15.0000687 C29.9994334,12.9883065 29.5972086,10.996905 28.816912,9.14263933 L28.816912,9.14263933 Z M17.6947595,27.9552249 L17.6947595,23.4880913 C21.3527702,22.3209179 23.8473798,18.9309588 23.8473798,14.9991312 C23.8473798,14.3644513 23.7780069,13.728834 23.6392613,13.0997791 L27.4632043,10.8732435 C27.902878,12.2101023 28.1241211,13.5928982 28.1241211,14.9991312 C28.1241211,21.2990552 23.710509,26.6896152 17.6947595,27.9552249 L17.6947595,27.9552249 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
RingMap.displayName = 'RingMap';
export default RingMap;