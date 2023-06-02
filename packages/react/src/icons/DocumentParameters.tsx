import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DocumentParameters = ({
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
          id="1431-单据参数"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M14.7265779,-5.58072691e-16 C14.9943398,-5.58072691e-16 15.2170362,0.192945425 15.2632188,0.447386892 L15.2720067,0.545428803 L15.2720067,1.09085761 L19.0900084,1.09085761 C19.3577703,1.09085761 19.5804667,1.28380306 19.6266493,1.5382445 L19.6354372,1.63628643 L19.6363044,12.8834452 C19.3024497,12.5629502 18.9372894,12.2748187 18.5458679,12.024096 L18.5445796,2.18171524 L15.2720067,2.18171524 L15.2720067,3.81800167 C15.2720067,4.08576358 15.0790613,4.30845999 14.8246198,4.35464254 L14.7265779,4.36343047 L4.9088593,4.36343047 C4.6410975,4.36343047 4.41840056,4.17048505 4.37221812,3.91604358 L4.3634305,3.81800167 L4.3634305,2.18171524 L1.09085763,2.18171524 L1.09085763,22.9080101 L9.61087226,22.9088773 C10.0096648,23.3242944 10.4585669,23.6912415 10.947858,24 L0.545428803,23.9988677 C0.277666995,23.9988677 0.054970061,23.8059223 0.00878761739,23.5514808 L0,23.4534389 L0,1.63628643 C0,1.36852452 0.19294566,1.14582811 0.447387337,1.09964556 L0.545428803,1.09085761 L4.3634305,1.09085761 L4.3634305,0.545428803 C4.3634305,0.277666891 4.55637616,0.0549704799 4.81081781,0.00878793156 L4.9088593,-5.58072691e-16 L14.7265779,-5.58072691e-16 Z M15.745848,12.2213317 C15.8790254,12.0403312 16.1135794,11.9566897 16.3359703,12.0207361 C17.2661021,12.2886038 18.1164671,12.786084 18.8189205,13.4656141 C18.9870096,13.6282174 19.0327296,13.8798837 18.9325736,14.0912199 C18.8571649,14.2503356 18.817294,14.4262888 18.817294,14.6094983 C18.817294,15.2531578 19.3106245,15.7663987 19.9041078,15.7664139 L19.9041078,15.7664139 L20.0162927,15.7728882 C20.2203791,15.8050739 20.3920604,15.9512936 20.4532641,16.1540131 C20.6335741,16.7512347 20.7262948,17.376558 20.7262948,18.0141566 C20.7262948,18.4368792 20.6855448,18.8544944 20.6053264,19.2624948 C20.5509689,19.5389639 20.2949774,19.7285256 20.014676,19.699872 C19.9795537,19.696282 19.9440408,19.6944722 19.9081516,19.6944722 C19.3106245,19.6944722 18.817294,20.2077131 18.817294,20.8513726 C18.817294,21.1328684 18.9117994,21.3968036 19.0805932,21.604937 C19.2514302,21.8155903 19.2415329,22.1197662 19.0573612,22.3188673 C18.3410168,23.0932792 17.442641,23.66601 16.4468451,23.9744478 C16.1586394,24.0637159 15.8527128,23.9020443 15.7640959,23.6136379 L15.7640959,23.6136379 L15.7177017,23.4880311 C15.5415816,23.0827098 15.1562307,22.8154083 14.7265779,22.8154083 C14.2539606,22.8154083 13.8349469,23.1388432 13.6890599,23.6136379 L13.6890599,23.6136379 L13.6517952,23.7049088 C13.5326779,23.9348736 13.2624932,24.0537978 13.0063107,23.9744478 C12.010517,23.666011 11.1121423,23.0932813 10.3957892,22.3188695 C10.2116131,22.1197673 10.2017158,21.8155838 10.3725604,21.6049294 C10.5413565,21.3968014 10.6358618,21.1328684 10.6358618,20.8513726 C10.6358618,20.207712 10.1425335,19.6944722 9.54500419,19.6944722 C9.50912198,19.6944722 9.47359262,19.696282 9.43847695,19.699872 C9.15817595,19.7285256 8.90218394,19.5389639 8.8478264,19.2624948 C8.76760943,18.854501 8.72686098,18.4368847 8.72686098,18.0141566 C8.72686098,17.3765405 8.81957875,16.7512151 8.99989032,16.1540076 C9.06983918,15.9223313 9.28408272,15.7644493 9.52608186,15.7662438 L9.52608186,15.7662438 L9.66300545,15.7596692 C10.2061185,15.6973867 10.6358618,15.2102478 10.6358618,14.6094983 C10.6358618,14.4262888 10.595991,14.2503356 10.5205822,14.0912199 C10.4204262,13.8798837 10.4661462,13.6282174 10.6342354,13.4656141 C11.3366888,12.786084 12.1870537,12.2886038 13.1171855,12.0207361 C13.3713466,11.9475407 13.6413938,12.0672427 13.7578462,12.304718 L13.7578462,12.304718 L13.8270022,12.4268929 C14.0285381,12.738059 14.362742,12.929186 14.7265779,12.929186 C15.1358939,12.929186 15.5077062,12.6872905 15.6953097,12.304718 L15.6953097,12.304718 L15.745848,12.2213317 Z M16.4119529,13.1971955 L16.3891813,13.2281562 C15.9833059,13.7200981 15.3818506,14.0200436 14.7265779,14.0200436 C14.0713052,14.0200436 13.4698499,13.7200981 13.0639745,13.2281562 L13.0639745,13.2281562 L13.040112,13.1971955 L12.8640552,13.2671489 C12.5030599,13.4219842 12.1612571,13.6214944 11.8456284,13.8609944 L11.8456284,13.8609944 L11.6492685,14.0175204 L11.6907233,14.2011456 C11.7026399,14.267965 11.7116394,14.3355153 11.7176588,14.4036295 L11.7176588,14.4036295 L11.7267195,14.6094983 C11.7267195,15.6775385 11.0018456,16.5773128 10.0222053,16.8028356 L10.0222053,16.8028356 L9.95298496,16.8155702 L9.89988637,17.0741941 C9.86358044,17.2791226 9.83916268,17.4870837 9.82691891,17.6972821 L9.82691891,17.6972821 L9.81771861,18.0141566 C9.81771861,18.190161 9.82618693,18.364947 9.8429796,18.5380759 L9.8429796,18.5380759 L9.85371691,18.625303 L10.0429294,18.6622929 C10.9595367,18.8823986 11.6501827,19.6969812 11.7207644,20.6842063 L11.7207644,20.6842063 L11.7267195,20.8513726 C11.7267195,21.1844452 11.6559119,21.5070991 11.5233018,21.8002802 L11.5233018,21.8002802 L11.4889125,21.866241 L11.6092145,21.9762475 C11.9698978,22.2864765 12.3710279,22.5417055 12.800635,22.733415 L12.800635,22.733415 L12.8852103,22.7672895 L12.9559698,22.6582811 C13.3223725,22.1347316 13.8990577,21.7864306 14.5479271,21.7320154 L14.5479271,21.7320154 L14.7265779,21.7245506 C15.4475083,21.7245506 16.0974739,22.0871364 16.497186,22.6582811 L16.497186,22.6582811 L16.5668547,22.7672895 L16.6525219,22.733415 C17.0821279,22.5417055 17.4832569,22.2864765 17.843937,21.9762486 L17.843937,21.9762486 L17.9631525,21.866241 L17.9298486,21.8002725 C17.8237638,21.5657283 17.7572313,21.3123232 17.7348611,21.0498116 L17.7348611,21.0498116 L17.7264364,20.8513726 C17.7264364,19.7271205 18.5296229,18.7893113 19.5846425,18.6280924 L19.5846425,18.6280924 L19.598348,18.625303 L19.6101751,18.5380704 L19.6291037,18.2771907 L19.6354372,18.0141566 C19.6354372,17.6958149 19.6077272,17.381601 19.5532673,17.0742049 L19.5532673,17.0742049 L19.49908,16.8155702 L19.4283466,16.8028454 C18.5027343,16.5891824 17.8034378,15.7703836 17.7323914,14.7766646 L17.7323914,14.7766646 L17.7264364,14.6094983 C17.7264364,14.4713478 17.7385983,14.3347833 17.7624325,14.2011456 L17.7624325,14.2011456 L17.8027964,14.0175204 L17.6075274,13.8609944 C17.2918987,13.6214944 16.9500959,13.4219842 16.5891006,13.2671489 L16.5891006,13.2671489 L16.4119529,13.1971955 Z M14.7265779,15.2720067 C16.2327403,15.2720067 17.453722,16.4929884 17.453722,17.9991508 C17.453722,19.5053132 16.2327403,20.7262948 14.7265779,20.7262948 C13.2204155,20.7262948 11.9994338,19.5053132 11.9994338,17.9991508 C11.9994338,16.4929884 13.2204155,15.2720067 14.7265779,15.2720067 Z M14.7265779,16.3628643 C13.8228798,16.3628643 13.0902915,17.0954527 13.0902915,17.9991508 C13.0902915,18.9028489 13.8228798,19.6354372 14.7265779,19.6354372 C15.630276,19.6354372 16.3628643,18.9028489 16.3628643,17.9991508 C16.3628643,17.0954527 15.630276,16.3628643 14.7265779,16.3628643 Z M14.1811491,1.09085761 L5.45428811,1.09085761 L5.45428811,3.27257287 L14.1811491,3.27257287 L14.1811491,1.09085761 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DocumentParameters.displayName = 'DocumentParameters';
export default DocumentParameters;