import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ContractCenter = ({
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
          id="621.合同中心"
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
              d="M18.1391492,2.63253294 C18.8419954,2.63253294 19.4117647,3.20230224 19.4117647,3.9051483 L19.4117647,22.4196923 C19.4117647,23.1225383 18.8419954,23.6923077 18.1391492,23.6923077 L1.27261538,23.6923077 C0.569769322,23.6923077 0,23.1225383 0,22.4196923 L0,3.9051483 C0,3.20230224 0.569769322,2.63253294 1.27261538,2.63253294 L18.1391492,2.63253294 Z M19.4117647,0 C20.8412076,0 22,1.17859377 22,2.63246287 L22,2.63246287 L22,21.0597029 L20.7058823,21.0597029 L20.7058823,2.63260475 C20.7058823,1.90567022 20.1264861,1.31637332 19.4117647,1.31637332 L19.4117647,1.31637332 L2.58823529,1.31637332 L2.58823529,0 L19.4117647,0 Z M8.86180308,18.8200543 L3.60779692,18.8200543 C3.18668744,18.8200543 2.83645158,19.1235002 2.76382028,19.5236612 L2.75,19.6778513 L2.75,19.7283098 C2.75,20.1494194 3.05344593,20.4996552 3.45360684,20.5722865 L3.60779692,20.5861067 L8.86180308,20.5861067 C9.28291256,20.5861067 9.63314842,20.2826609 9.70577975,19.8825 L9.7196,19.7283098 L9.7196,19.6778513 C9.7196,19.2041031 9.33555124,18.8200543 8.86180308,18.8200543 Z M14.4794498,14.4049231 C13.1916999,14.4049231 12.3332,15.4926153 12.3332,16.5803074 C12.3332,17.2329227 12.547825,17.6679996 12.9770749,18.1030765 L12.9770749,20.2784609 C12.9770749,20.4959994 13.1916999,20.7135378 13.4063249,20.4959994 L14.4794498,19.1907687 L15.5525747,20.4959994 C15.7671996,20.7135378 15.9818247,20.4959994 15.9818247,20.2784609 L15.9818247,18.1030765 C16.1964496,17.8855382 16.6256996,17.2329227 16.6256996,16.5803074 C16.6256996,15.2750769 15.5525747,14.4049231 14.4794498,14.4049231 Z M8.86180308,14.4049231 L3.60779692,14.4049231 C3.18668744,14.4049231 2.83645158,14.708369 2.76382028,15.1085299 L2.75,15.26272 L2.75,15.3131787 C2.75,15.7342881 3.05344593,16.0845241 3.45360684,16.1571554 L3.60779692,16.1709756 L8.86180308,16.1709756 C9.28291256,16.1709756 9.63314842,15.8675296 9.70577975,15.4673687 L9.7196,15.3131787 L9.7196,15.26272 C9.7196,14.7889718 9.33555124,14.4049231 8.86180308,14.4049231 Z M15.8314031,9.98979184 L3.60779692,9.98979184 C3.18668744,9.98979184 2.83645158,10.2932378 2.76382028,10.6933987 L2.75,10.8475888 L2.75,10.8980474 C2.75,11.3191569 3.05344593,11.6693928 3.45360684,11.7420241 L3.60779692,11.7558443 L15.8314031,11.7558443 C16.2525125,11.7558443 16.6027485,11.4523984 16.6753798,11.0522375 L16.6892,10.8980474 L16.6892,10.8475888 C16.6892,10.3738406 16.3051512,9.98979184 15.8314031,9.98979184 Z M15.8314031,5.57466064 L3.60779692,5.57466064 C3.18668744,5.57466064 2.83645158,5.87810657 2.76382028,6.27826748 L2.75,6.43245756 L2.75,6.48291622 C2.75,6.90402568 3.05344593,7.25426156 3.45360684,7.32689286 L3.60779692,7.34071314 L15.8314031,7.34071314 C16.2525125,7.34071314 16.6027485,7.03726718 16.6753798,6.6371063 L16.6892,6.48291622 L16.6892,6.43245756 C16.6892,5.9587094 16.3051512,5.57466064 15.8314031,5.57466064 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ContractCenter.displayName = 'ContractCenter';
export default ContractCenter;
