import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DocumentTypeParameters = ({
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
          id="1432-单据类型参数"
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
              d="M16.3628643,2.18171524 C16.6306263,2.18171524 16.8533227,2.37466069 16.8995052,2.62910213 L16.9082932,2.72714404 L16.9082932,3.27257287 L20.180866,3.27257287 C20.448628,3.27257287 20.6713243,3.46551829 20.7175069,3.71995976 L20.7262948,3.81800167 L20.7260679,12.8823947 C20.3921979,12.5620218 20.0270388,12.2740082 19.6356314,12.0233956 L19.6354372,4.36343047 L16.9082932,4.36343047 L16.9082932,5.45428811 C16.9082932,5.72205002 16.7153477,5.94474643 16.4609063,5.99092898 L16.3628643,5.99971691 L7.63600337,5.99971691 C7.36824146,5.99971691 7.14554505,5.80677148 7.0993625,5.55233002 L7.09057457,5.45428811 L7.09057457,4.36343047 L4.3634305,4.36343047 L4.3634305,22.9080101 L10.70173,22.9088773 C11.1005225,23.3242944 11.5494245,23.6912415 12.0387156,24 L3.8180017,23.9988677 C3.55023979,23.9988677 3.32754338,23.8059223 3.28136083,23.5514808 L3.27257287,23.4534389 L3.27257287,3.81800167 C3.27257287,3.55023976 3.46551832,3.32754335 3.71995976,3.2813608 L3.8180017,3.27257287 L7.09057457,3.27257287 L7.09057457,2.72714404 C7.09057457,2.45938213 7.28351999,2.23668574 7.53796146,2.1905032 L7.63600337,2.18171524 L16.3628643,2.18171524 Z M16.8367056,12.2213317 C16.969883,12.0403312 17.204437,11.9566897 17.426828,12.0207361 C18.3569597,12.2886038 19.2073247,12.786084 19.9097781,13.4656141 C20.0778673,13.6282174 20.1235873,13.8798837 20.0234313,14.0912199 C19.9480225,14.2503356 19.9081516,14.4262888 19.9081516,14.6094983 C19.9081516,15.2531578 20.4014822,15.7663987 20.9949654,15.7664139 L20.9949654,15.7664139 L21.1071503,15.7728882 C21.3112367,15.8050739 21.4829181,15.9512936 21.5441217,16.1540131 C21.7244317,16.7512347 21.8171525,17.376558 21.8171525,18.0141566 C21.8171525,18.4368792 21.7764024,18.8544944 21.696184,19.2624948 C21.6418266,19.5389639 21.385835,19.7285256 21.1055337,19.699872 C21.0704113,19.696282 21.0348985,19.6944722 20.9990093,19.6944722 C20.4014822,19.6944722 19.9081516,20.2077131 19.9081516,20.8513726 C19.9081516,21.1328684 20.002657,21.3968036 20.1714509,21.604937 C20.3422879,21.8155903 20.3323905,22.1197662 20.1482189,22.3188673 C19.4318745,23.0932792 18.5334987,23.66601 17.5377027,23.9744478 C17.2494971,24.0637159 16.9435704,23.9020443 16.8549535,23.6136379 L16.8549535,23.6136379 L16.8085593,23.4880311 C16.6324393,23.0827098 16.2470884,22.8154083 15.8174355,22.8154083 C15.3448182,22.8154083 14.9258045,23.1388432 14.7799176,23.6136379 L14.7799176,23.6136379 L14.7426528,23.7049088 C14.6235355,23.9348736 14.3533508,24.0537978 14.0971683,23.9744478 C13.1013746,23.666011 12.2029999,23.0932813 11.4866468,22.3188695 C11.3024708,22.1197673 11.2925734,21.8155838 11.4634181,21.6049294 C11.6322141,21.3968014 11.7267195,21.1328684 11.7267195,20.8513726 C11.7267195,20.207712 11.2333911,19.6944722 10.6358618,19.6944722 C10.5999792,19.6944722 10.5644499,19.696282 10.5293341,19.699872 C10.2490339,19.7285256 9.99304125,19.5389639 9.93868382,19.2624948 C9.85846761,18.854501 9.81771861,18.4368847 9.81771861,18.0141566 C9.81771861,17.3765405 9.91043607,16.7512151 10.0907483,16.1540076 C10.1606963,15.9223313 10.3749407,15.7644493 10.6169398,15.7662438 L10.6169398,15.7662438 L10.7538632,15.7596692 C11.2969761,15.6973867 11.7267195,15.2102478 11.7267195,14.6094983 C11.7267195,14.4262888 11.6868486,14.2503356 11.6114398,14.0912199 C11.5112838,13.8798837 11.5570038,13.6282174 11.725093,13.4656141 C12.4275464,12.786084 13.2779114,12.2886038 14.2080431,12.0207361 C14.4622042,11.9475407 14.7322515,12.0672427 14.8487038,12.304718 L14.8487038,12.304718 L14.9178598,12.4268929 C15.1193958,12.738059 15.4535996,12.929186 15.8174355,12.929186 C16.2267515,12.929186 16.5985638,12.6872905 16.7861673,12.304718 L16.7861673,12.304718 L16.8367056,12.2213317 Z M17.5028106,13.1971955 L17.4800389,13.2281562 C17.0741635,13.7200981 16.4727083,14.0200436 15.8174355,14.0200436 C15.1621628,14.0200436 14.5607076,13.7200981 14.1548322,13.2281562 L14.1548322,13.2281562 L14.1309696,13.1971955 L13.9549129,13.2671489 C13.5939175,13.4219842 13.2521148,13.6214944 12.936486,13.8609944 L12.936486,13.8609944 L12.7401262,14.0175204 L12.781581,14.2011456 C12.7934975,14.267965 12.8024971,14.3355153 12.8085164,14.4036295 L12.8085164,14.4036295 L12.8175771,14.6094983 C12.8175771,15.6775385 12.0927033,16.5773128 11.113063,16.8028356 L11.113063,16.8028356 L11.0438426,16.8155702 L10.990744,17.0741941 C10.9544381,17.2791226 10.9300203,17.4870837 10.9177765,17.6972821 L10.9177765,17.6972821 L10.9085762,18.0141566 C10.9085762,18.190161 10.9170446,18.364947 10.9338372,18.5380759 L10.9338372,18.5380759 L10.9445745,18.625303 L11.1337871,18.6622929 C12.0503944,18.8823986 12.7410403,19.6969812 12.8116221,20.6842063 L12.8116221,20.6842063 L12.8175771,20.8513726 C12.8175771,21.1844452 12.7467695,21.5070991 12.6141594,21.8002802 L12.6141594,21.8002802 L12.5797701,21.866241 L12.7000721,21.9762475 C13.0607554,22.2864765 13.4618856,22.5417055 13.8914926,22.733415 L13.8914926,22.733415 L13.9760679,22.7672895 L14.0468275,22.6582811 C14.4132302,22.1347316 14.9899153,21.7864306 15.6387847,21.7320154 L15.6387847,21.7320154 L15.8174355,21.7245506 C16.5383659,21.7245506 17.1883316,22.0871364 17.5880436,22.6582811 L17.5880436,22.6582811 L17.6577124,22.7672895 L17.7433796,22.733415 C18.1729855,22.5417055 18.5741146,22.2864765 18.9347947,21.9762486 L18.9347947,21.9762486 L19.0540101,21.866241 L19.0207062,21.8002725 C18.9146214,21.5657283 18.8480889,21.3123232 18.8257187,21.0498116 L18.8257187,21.0498116 L18.817294,20.8513726 C18.817294,19.7271205 19.6204805,18.7893113 20.6755001,18.6280924 L20.6755001,18.6280924 L20.6892057,18.625303 L20.7010328,18.5380704 L20.7199613,18.2771907 L20.7262948,18.0141566 C20.7262948,17.6958149 20.6985849,17.381601 20.6441249,17.0742049 L20.6441249,17.0742049 L20.5899377,16.8155702 L20.5192043,16.8028454 C19.5935919,16.5891824 18.8942955,15.7703836 18.823249,14.7766646 L18.823249,14.7766646 L18.817294,14.6094983 C18.817294,14.4713478 18.829456,14.3347833 18.8532901,14.2011456 L18.8532901,14.2011456 L18.893654,14.0175204 L18.6983851,13.8609944 C18.3827563,13.6214944 18.0409536,13.4219842 17.6799582,13.2671489 L17.6799582,13.2671489 L17.5028106,13.1971955 Z M16.9082932,0 C17.1760551,0 17.3987515,0.192945425 17.444934,0.447386892 L17.453722,0.545428803 L17.453722,2.18171524 L16.3628643,2.18171524 L16.3628643,1.09085761 L1.09085763,1.09085761 L1.09085763,19.6354372 L2.18171526,19.6354372 L2.18171526,20.7262948 L0.545428829,20.7262948 C0.277666917,20.7262948 0.0549705061,20.5333494 0.00878795774,20.2789079 L0,20.180866 L0,0.545428803 C0,0.277666891 0.192945451,0.0549704799 0.447386892,0.00878793156 L0.545428829,0 L16.9082932,0 Z M15.8174355,15.2720067 C17.3235979,15.2720067 18.5445796,16.4929884 18.5445796,17.9991508 C18.5445796,19.5053132 17.3235979,20.7262948 15.8174355,20.7262948 C14.3112732,20.7262948 13.0902915,19.5053132 13.0902915,17.9991508 C13.0902915,16.4929884 14.3112732,15.2720067 15.8174355,15.2720067 Z M15.8174355,16.3628643 C14.9137375,16.3628643 14.1811491,17.0954527 14.1811491,17.9991508 C14.1811491,18.9028489 14.9137375,19.6354372 15.8174355,19.6354372 C16.7211336,19.6354372 17.453722,18.9028489 17.453722,17.9991508 C17.453722,17.0954527 16.7211336,16.3628643 15.8174355,16.3628643 Z M15.8174355,3.27257287 L8.18143217,3.27257287 L8.18143217,4.9088593 L15.8174355,4.9088593 L15.8174355,3.27257287 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DocumentTypeParameters.displayName = 'DocumentTypeParameters';
export default DocumentTypeParameters;
