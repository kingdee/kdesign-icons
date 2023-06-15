import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const OnboardingReport = ({
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
          id="647.入职报表"
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
              d="M21.1401797,2.33643152 C21.6983087,2.85563852 21.9849154,3.50464726 22,4.28345776 L22,22.1992653 C21.9849154,22.9780757 21.6983087,23.6302504 21.1401797,24.1573721 C20.5820508,24.6844938 19.891513,24.955178 19.0668902,24.9694245 L2.93310986,24.9694245 C2.10848697,24.955178 1.41627304,24.6844938 0.859820199,24.1573721 C0.301691288,23.6302504 0.0150845631,22.9780757 0,22.1992653 L0,4.28504073 C0.0150845631,3.50623021 0.301691288,2.85722147 0.859820199,2.33801446 C1.41794911,1.81880746 2.10848697,1.54495743 2.93310986,1.5148814 L6.30199603,1.5148814 L6.30199603,3.05192407 C6.31708062,3.4698224 6.45451776,3.80224154 6.7143075,4.04759849 C6.97409721,4.29295546 7.32439433,4.42275722 7.76855097,4.43700373 L14.229773,4.43700373 C14.6722535,4.42275722 15.0242267,4.29295546 15.2840164,4.04759849 C15.5438061,3.80224154 15.6812433,3.47140537 15.6963279,3.05192407 L15.6963279,1.5148814 L19.065214,1.5148814 C19.891513,1.54337448 20.5820508,1.81722451 21.1401797,2.33643152 Z M15.5488344,19.0856061 C15.7097364,18.8829887 15.7583422,18.6677079 15.6980039,18.4365975 C15.4683833,17.8018351 15.1214383,17.3000406 14.6554929,16.9327966 C14.1895475,16.5655527 13.6582355,16.374016 13.0632332,16.3597694 L12.7648941,16.3597694 C12.1698918,16.6336195 11.5815938,16.7713359 11,16.7713359 C10.4200823,16.7713359 9.83178425,16.6336195 9.23510589,16.3597694 L8.93676672,16.3597694 C8.34176444,16.374016 7.79536798,16.5655527 7.29757732,16.9327966 C6.80146276,17.3000406 6.46792625,17.8018351 6.30031998,18.4365975 C6.23830566,18.724694 6.28858754,18.9589703 6.44948957,19.1394264 C6.6103916,19.3198825 6.80481487,19.4101106 7.03443546,19.4101106 L14.9622124,19.4101106 C15.193509,19.395864 15.3879323,19.2882235 15.5488344,19.0856061 L15.5488344,19.0856061 Z M14.231449,1.38507967 L14.231449,2.89996106 L7.929453,2.89996106 L7.929453,1.38507967 C7.929453,0.967181337 8.05850984,0.631596332 8.31829955,0.378324626 C8.57808929,0.126635866 8.93676672,0 9.39600792,0 L12.6039921,0 C13.0615572,0 13.4219107,0.126635866 13.6817004,0.378324626 C13.9414902,0.631596332 14.070547,0.965598391 14.070547,1.38507967 L14.231449,1.38507967 Z M8.79932958,10.6025869 C8.23449643,11.1645335 7.94286149,11.8357035 7.92777693,12.6145141 C7.94286149,13.4075711 8.24790492,14.0866558 8.84458327,14.6486025 C9.44126161,15.2105491 10.1586165,15.5065604 10.9983239,15.5366363 C11.8380313,15.5223898 12.5570623,15.2437909 13.1520646,14.7040056 C13.7470669,14.1642203 14.0537864,13.4677231 14.0688709,12.6160969 C14.0537864,11.8372865 13.7638275,11.1661164 13.1973183,10.6041698 C12.6324851,10.0422232 11.8983697,9.74621194 10.9983239,9.71613591 C10.0982782,9.74462899 9.36416272,10.0390573 8.79932958,10.6025869 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
OnboardingReport.displayName = 'OnboardingReport';
export default OnboardingReport;
