import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const HideControls = ({
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
          id="1421-隐藏控件"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 7.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M20.6850197,0.245212945 C20.9868203,0.547013503 21.0100352,1.02190455 20.7546655,1.35033439 L20.6850197,1.4292057 L3.94083367,18.1733917 C3.61388252,18.5003423 3.0837917,18.5003423 2.75684054,18.1733917 C2.45503999,17.8715912 2.43182502,17.3967001 2.68719478,17.0682703 L2.75684054,16.989399 L5.2729919,14.4737242 C4.69881785,14.0913669 4.13167635,13.6662569 3.57243645,13.2027071 C2.65505181,12.4422941 1.82390977,11.6293092 1.0920214,10.8157413 C0.899381197,10.601603 0.723774041,10.3985522 0.565935815,10.209327 L0.414049304,10.0248118 L0.288606041,9.86836808 L0.166216918,9.70999101 C-0.0332431747,9.44268599 -0.0531896796,9.08598886 0.106379064,8.8008055 L0.166216918,8.70861367 L0.288606041,8.5502366 L0.565935815,8.20927769 C0.723774041,8.02005247 0.899381197,7.81700168 1.0920214,7.60286336 C1.82390977,6.78929543 2.65505181,5.97631063 3.57243645,5.21589761 C6.23385953,3.00986434 9.07422435,1.67441862 12,1.67441862 C13.6563479,1.67441862 15.2853228,2.10242236 16.8699532,2.87408621 L19.5010266,0.245212945 C19.8279777,-0.0817376483 20.3580686,-0.0817376483 20.6850197,0.245212945 Z M19.765218,4.68790973 C19.9871823,4.85780543 20.207982,5.03388839 20.4275628,5.21589761 C21.3449474,5.97631063 22.1760895,6.78929543 22.9079787,7.60286336 C23.1006189,7.81700168 23.276226,8.02005247 23.4340634,8.20927769 L23.5859508,8.39379291 L23.8337823,8.70861367 C24.0332432,8.97591869 24.0531898,9.33261582 23.893621,9.61779918 L23.8337823,9.70999101 L23.5859508,10.0248118 C23.3914051,10.264417 23.164832,10.5302236 22.9079787,10.8157413 C22.1760895,11.6293092 21.3449474,12.4422941 20.4275628,13.2027071 C17.7661405,15.4087403 14.9257749,16.7441861 11.9999996,16.7441861 C10.7751699,16.7441861 9.56530789,16.5101429 8.37727692,16.0761619 L9.70860045,14.7444505 C10.4726829,14.9576769 11.2379139,15.0697675 11.9999996,15.0697675 C14.468636,15.0697675 16.9702634,13.8935853 19.3590091,11.913572 C20.2091834,11.2088688 20.9828678,10.4520861 21.6631481,9.69588662 L21.8357145,9.5017264 L21.9971787,9.31550894 L22.0864185,9.20930234 L21.9971787,9.10309574 L21.6631481,8.72271806 C20.9828678,7.96651855 20.2091834,7.20973592 19.3590091,6.50503265 C19.0972204,6.28803864 18.8340772,6.08069897 18.5697694,5.88350379 L19.765218,4.68790973 Z M11.9999996,3.34883723 C9.53136325,3.34883723 7.02973663,4.52501942 4.64099098,6.50503265 C3.79081664,7.20973592 3.01713143,7.96651855 2.33685116,8.72271806 L2.16428558,8.91687829 L2.0028214,9.10309574 L1.91302316,9.20846513 L2.0028214,9.31550894 L2.33685116,9.69588662 C3.01713143,10.4520861 3.79081664,11.2088688 4.64099098,11.913572 C5.24841143,12.4170579 5.86312986,12.8685677 6.48274929,13.2619792 L8.80873942,10.9363163 C8.53025097,10.4227992 8.37209292,9.83451921 8.37209292,9.20930234 C8.37209292,7.20567788 9.99637525,5.58139538 11.9999996,5.58139538 C12.6252166,5.58139538 13.2134968,5.73955303 13.7270142,6.01804223 L15.6054842,4.13934389 C14.4070249,3.62658199 13.1996176,3.34883723 11.9999996,3.34883723 Z M15.6097297,8.84385938 C15.6217511,8.96404237 15.6279072,9.08595344 15.6279072,9.20930234 C15.6279072,11.2129268 14.003624,12.8372093 11.9999996,12.8372093 C11.8763907,12.8372093 11.7542243,12.8310272 11.6337951,12.8189555 L15.6097297,8.84385938 Z M11.9999996,7.25581399 C10.9211315,7.25581399 10.0465115,8.13043374 10.0465115,9.20930234 C10.0465115,9.3606327 10.0637195,9.50794444 10.0962861,9.64938761 L12.4400904,7.3055896 C12.2986456,7.27302259 12.1513319,7.25581399 11.9999996,7.25581399 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
HideControls.displayName = 'HideControls';
export default HideControls;
