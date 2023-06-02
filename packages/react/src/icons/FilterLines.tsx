import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const FilterLines = ({
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
          id="1207-过滤_线"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M21.7957811,2.721 L14.875212,10.6845 L14.875212,22.422 C14.875212,23.2935 13.7267363,24 12.8620366,24 C12.4133437,24 12.0107086,23.808 11.7254469,23.505 L9.99901884,21.798 L11.0241783,20.775 L12.4608873,22.425 C12.6046907,22.5957892 12.8386402,22.6580789 13.0471647,22.581098 C13.2556891,22.504117 13.3946564,22.3041578 13.3954167,22.08 L13.3954167,10.1445 L20.388787,2.14349999 C20.5834186,1.716 20.5834186,1.50299997 20.388787,1.503 L2.00277526,1.503 C1.71157053,1.503 1.76208565,1.977 2.00426098,2.37750001 L8.96048777,10.1445 L8.96048777,19.6665 L7.4836639,18.3465 L7.4836639,10.581 L0.482864969,2.727 C0.17608512,2.42467817 0.00215714743,2.01080837 0,1.578 C0,0.705 0.698297006,0 1.56002523,0 L20.7260496,0 C21.365315,0 21.9397833,0.394080631 22.1756183,0.993957586 C22.4114535,1.59383454 22.2609229,2.27826638 21.7957811,2.721 L21.7957811,2.721 Z"
              id="路径"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
FilterLines.displayName = 'FilterLines';
export default FilterLines;