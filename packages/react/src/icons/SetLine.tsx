import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SetLine = ({
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
          id="1250-设置（线）"
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
              d="M9.14933334,-1.83227507e-16 L14.8506667,-1.83227507e-16 C14.8506667,2.25333333 16.7266666,4.07866667 19.04,4.07866667 C19.7973333,4.07866667 20.5066667,3.88266666 21.12,3.54 L24,8.44399999 C22.74,9.14666666 21.8906667,10.4693333 21.8906667,11.984 C21.8906667,13.4986667 22.74,14.8213333 24,15.524 L21.12,20.428 C20.4841472,20.0735064 19.7679923,19.8880406 19.04,19.8893333 C16.7266667,19.8893333 14.852,21.716 14.852,23.968 L9.14666666,23.968 C9.14666666,21.7146667 7.272,19.8893333 4.96,19.8893333 C4.20133334,19.8893333 3.492,20.0853333 2.87999999,20.428 L0,15.524 C1.26,14.8213333 2.108,13.4986667 2.108,11.984 C2.108,10.4693333 1.26,9.14666666 0,8.44399999 L2.87999999,3.54 C3.49333333,3.88266666 4.20266666,4.07866667 4.96,4.07866667 C7.27333333,4.07866667 9.14933334,2.25200001 9.14933334,-1.83227507e-16 L9.14933334,-1.83227507e-16 Z M20.552,5.20666666 C20.0596518,5.34340097 19.5509822,5.41247955 19.04,5.41200001 C16.4666667,5.41200001 14.2933333,3.68133335 13.6866667,1.33333334 L10.3133333,1.33333334 C9.70666667,3.68133332 7.53466666,5.41200001 4.96,5.41200001 C4.44266666,5.41200001 3.93466667,5.34133335 3.44800001,5.20666666 L1.75466668,8.08933333 C2.82912184,9.09985429 3.43890226,10.5090067 3.43999999,11.984 C3.43855629,13.4591936 2.82828038,14.8683761 1.75333332,15.8786667 L3.44666668,18.7613333 C3.93901491,18.624599 4.44768446,18.5555204 4.95866667,18.556 C7.53333333,18.556 9.70533334,20.2866667 10.312,22.6346667 L13.6853333,22.6346667 C14.292,20.2866667 16.464,18.556 19.0386667,18.556 C19.556,18.556 20.064,18.6266667 20.5506667,18.7626667 L22.244,15.8786667 C21.1684284,14.8686999 20.5576308,13.4594269 20.556,11.984 C20.556,10.4813334 21.1866667,9.08933335 22.244,8.08933333 L20.5506667,5.20666666 L20.552,5.20666666 Z M8.02800001,12.0453333 C8.02800001,9.83199999 9.82933333,8.03333334 12.0426667,8.03333334 C14.256,8.03333334 16.0573333,9.83333334 16.0573333,12.0453333 C16.0573333,14.2573333 14.2573333,16.0573333 12.044,16.0573333 C9.83066666,16.0573333 8.02800001,14.2573333 8.02800001,12.044 L8.02800001,12.0453333 Z M9.36133333,12.0453333 C9.36133333,13.5213333 10.5653333,14.724 12.0426667,14.724 C13.52,14.724 14.724,13.5213333 14.724,12.044 C14.7203301,10.5658318 13.5221711,9.36886505 12.044,9.36666666 C10.5653333,9.36666666 9.36133333,10.5693333 9.36133333,12.0453333 L9.36133333,12.0453333 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SetLine.displayName = 'SetLine';
export default SetLine;