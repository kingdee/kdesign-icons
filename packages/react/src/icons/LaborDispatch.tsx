import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const LaborDispatch = ({
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
          id="699.劳务派遣"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M10.6961042,0.172517815 C11.2136577,0.34503563 11.5586933,0.34503563 11.9037289,0.690071235 L12.9388357,1.20762468 C13.1113536,1.38014249 13.2838715,1.7251781 13.6289071,1.89769591 C13.9739427,2.41524936 14.3189783,2.93280278 14.491496,3.62287401 C14.6640139,4.31294527 14.8365318,4.83049869 15.0090495,5.34805214 C15.1815674,6.03812337 15.1815674,6.55567679 15.1815674,7.24574805 L15.1815674,7.41826586 C15.1815674,7.59078365 15.3540851,7.59078365 15.3540851,7.93581928 L15.3540851,8.62589052 C15.3540851,8.97092615 15.1815674,9.31596178 15.1815674,9.48847957 L14.8365318,9.8335152 C14.6640139,10.006033 14.491496,10.006033 14.3189783,10.006033 L14.1464604,10.8686221 C14.1464604,11.0411399 13.9739427,11.2136577 13.8014248,11.5586933 C13.2263654,12.1337527 12.8813298,12.4787883 12.766318,12.5938001 C12.5938001,12.5938001 12.5938001,12.766318 12.4212824,12.9388357 C12.4212824,13.1113536 12.2487646,13.2838713 12.2487646,13.4563892 L12.2487646,14.1464604 C12.2487646,14.3189783 12.2487646,14.6640139 12.4212824,14.8365318 C12.5938001,15.1815674 12.766318,15.3540851 13.1113536,15.526603 C13.2838715,15.6991207 13.8014248,16.0441563 14.1464604,16.2166742 C14.491496,16.389192 15.0090495,16.5617098 15.526603,16.7342276 C16.0441564,16.9067454 16.389192,16.9067454 16.9067454,17.251781 C17.4242989,17.4242989 17.7693345,17.5968167 18.1143701,17.9418523 C18.2868879,17.9418523 18.4594057,18.2868879 18.6319235,18.6319235 C18.6319235,18.8044413 18.8044414,19.149477 18.8044414,19.4945126 L18.8044414,21.5647264 C18.8044414,21.909762 18.6319235,22.0822797 18.6319235,22.2547976 C18.6319235,22.4273153 18.2868879,22.4273153 17.9418523,22.5998332 C17.5968167,22.7723509 17.0792632,22.7723509 16.5617098,22.9448688 C16.0441564,23.1173866 15.3540851,23.1173866 14.6640139,23.2899044 C13.9739427,23.4624222 13.2838715,23.4624222 12.5938001,23.63494 C11.9037289,23.63494 11.2136577,23.8074579 10.6961042,23.8074579 L9.14344396,23.8074579 C8.4533727,23.8074579 7.59078368,23.8074579 6.72819463,23.63494 C5.69308774,23.4624222 4.83049872,23.4624222 3.96790964,23.2899044 C3.10532059,23.1173866 2.24273154,22.9448688 1.55266031,22.7723509 C0.862589049,22.5998332 0.517553445,22.4273153 0.34503563,22.4273153 C0.172517815,22.2547976 -5.75258986e-16,21.909762 -5.75258986e-16,21.2196906 C-5.75258986e-16,20.5296194 -5.75258986e-16,19.6670303 0.172517815,18.6319235 C0.34503563,18.1143701 0.517553445,17.5968167 0.862589049,17.251781 C0.862589049,17.4242989 1.38014249,17.251781 1.89769594,17.0792632 L3.45035622,16.5617098 C3.96790964,16.389192 4.48546309,16.2166742 4.83049872,15.8716386 C5.17553432,15.6991207 5.34805214,15.526603 5.69308774,15.1815674 C5.86560558,15.0090495 6.03812337,14.8365318 6.03812337,14.6640139 C6.03812337,14.491496 6.21064119,14.3189783 6.21064119,13.9739427 L6.21064119,13.2838713 C6.21064119,12.9388357 6.03812337,12.5938001 5.86560558,12.4212824 C5.69308774,12.2487646 5.34805214,12.0762467 5.17553432,11.9037289 C5.00301651,11.7312111 4.83049872,11.5586933 4.83049872,11.3861755 C4.6579809,11.2136577 4.6579809,11.0411399 4.48546309,10.8686221 C4.48546309,10.6961042 4.31294527,10.3510686 4.31294527,10.1785508 C4.14042746,10.1785508 4.14042746,10.1785508 3.96790964,10.006033 C3.79539185,10.006033 3.79539185,9.8335152 3.62287404,9.66099738 C3.62287404,9.31596178 3.45035622,9.14344396 3.45035622,8.97092615 C3.45035622,8.62589052 3.27783841,8.4533727 3.45035622,8.28085491 C3.45035622,8.1083371 3.45035622,7.93581928 3.62287404,7.76330147 C3.62287404,7.59078365 3.79539185,7.41826586 3.96790964,7.24574805 C3.96790964,6.55567679 3.96790964,6.03812337 4.14042746,5.52056995 C4.14042746,5.00301651 4.31294527,4.48546306 4.48546309,3.96790964 C4.6579809,3.45035622 4.83049872,2.93280278 5.17553432,2.41524936 C5.17553432,1.7251781 5.52056995,1.38014249 5.86560558,1.03510686 C6.21064119,0.690071235 6.55567682,0.51755342 7.07323023,0.34503563 C7.41826586,0.34503563 7.76330149,0.172517815 8.28085491,0.172517815 C8.56838461,0.0287529567 8.85591427,0.00479216772 9.14344396,0.000798690488 L9.31596178,0 C9.8335152,0 10.1785508,0 10.6961042,0.172517815 Z M10.1785508,16.2166742 L8.79840833,16.2166742 C8.62589054,16.389192 7.93581928,17.251781 7.93581928,17.4242989 C7.93581928,17.5968167 8.28085491,18.1143701 8.62589054,18.2868879 C8.62589054,18.4018998 8.4533727,19.3795007 8.1083371,21.2196906 C8.1083371,21.2196906 8.1083371,21.3922085 8.28085491,21.5647264 C8.4533727,21.7372441 9.31596178,22.5998332 9.48847959,22.5998332 C9.48847959,22.5998332 9.66099738,22.5998332 9.8335152,22.4273153 C10.006033,22.4273153 11.0411399,21.3922085 11.0411399,21.2196906 C10.6961042,19.3795007 10.5235865,18.4018998 10.5235865,18.2868879 C10.6961042,18.1143701 11.0411399,17.4242989 11.0411399,17.251781 C11.0411399,17.1367692 10.7536102,16.7917336 10.1785508,16.2166742 Z M19.514537,10.3510686 C19.6870548,10.3510686 24,13.6289071 24,13.8014248 C24,13.9739427 19.8595726,17.251781 19.6870548,17.0792632 C19.514537,17.0792632 19.514537,16.9067454 19.514537,16.5617098 L19.514537,15.3540851 C19.514537,15.1815674 19.514537,15.0090495 19.3420191,15.0090495 L14.856556,15.0090495 C14.6840383,15.0090495 14.6840383,15.0090495 14.5115204,14.8365318 L14.5115204,12.6762082 L14.5115204,12.6762082 C14.5115204,12.4401376 14.7028935,12.2487646 14.9389641,12.2487646 L19.1695014,12.2487646 C19.3173738,12.2487646 19.3384984,12.1220168 19.3415162,11.9771622 L19.3420191,10.8686221 C19.3420191,10.6961042 19.3420191,10.5235864 19.514537,10.3510686 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
LaborDispatch.displayName = 'LaborDispatch';
export default LaborDispatch;
