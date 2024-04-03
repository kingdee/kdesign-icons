import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const StemAndLeafMap = ({
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
          id="茎叶图"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="视觉修正模版" transform="translate(-2.000000, -0.500000)"></g>
          <g
            id="编组"
            transform="translate(2.000000, 3.000000)"
            fill="#333333"
            fillRule="nonzero"
          >
            <path
              d="M11.0415922,25.875 C11.0415922,26.4972656 10.5947172,27 10.0415922,27 L10.0415922,27 C9.48846724,27 9.04159224,26.4972656 9.04159224,25.875 L9.04159224,1.12499999 C9.04159224,0.502734367 9.48846724,0 10.0415922,0 L10.0415922,0 C10.5947172,0 11.0415922,0.502734367 11.0415922,1.12499999 L11.0415922,25.875 Z M0.125031906,3.22031248 C0.125031906,2.06015626 0.335799951,1.24804689 0.760908391,0.783984372 C1.18601683,0.319921885 1.83261037,0.0878906419 2.70068895,0.0878906419 C3.11865272,0.0878906419 3.46159734,0.13710937 3.72952284,0.23906251 C3.99744834,0.341015616 4.21536106,0.471093754 4.38683337,0.63632812 C4.55473336,0.798046871 4.69048225,0.970312504 4.78693545,1.14960937 C4.88338861,1.32890623 4.96198008,1.53632813 5.02270989,1.77539061 C5.13702474,2.23242186 5.19775452,2.70703127 5.19775452,3.19921875 C5.19775452,4.30664062 5.00842051,5.11874999 4.62618016,5.63203124 C4.24393977,6.14531249 3.5902016,6.40195312 2.65782086,6.40195312 C2.13625926,6.40195312 1.71472314,6.32109374 1.39321256,6.15585938 C1.07170198,5.99062501 0.80734883,5.7515625 0.600153103,5.43515623 C0.450114836,5.21015625 0.335799951,4.90429687 0.250063778,4.51406249 C0.167899993,4.12382811 0.125031906,3.69492189 0.125031906,3.22031248 Z M1.83618269,3.22734375 C1.83618269,4.00429685 1.90762949,4.53515625 2.04695073,4.81992187 C2.18627201,5.1046875 2.38989539,5.24531248 2.65424854,5.24531248 C2.82929317,5.24531248 2.97933147,5.18554687 3.10793569,5.0625 C3.23653992,4.94296874 3.32942076,4.74960938 3.39015054,4.48945314 C3.45088032,4.22929687 3.47945903,3.82148437 3.47945903,3.26953124 C3.47945903,2.45742187 3.40801226,1.91250001 3.26869098,1.63476562 C3.12936974,1.35703127 2.91860169,1.21640625 2.63995917,1.21640625 C2.35417197,1.21640625 2.1505486,1.35703127 2.02194437,1.64179689 C1.90048482,1.93007813 1.83618269,2.45742187 1.83618269,3.22734375 Z M4.03317173,9.05273436 L4.03317173,15.2648438 L2.28986988,15.2648438 L2.28986988,11.19375 C2.007655,11.4046875 1.73615718,11.5769531 1.47180403,11.7070312 C1.20745088,11.8371093 0.878795628,11.9636718 0.478693548,12.0832032 L0.478693548,10.6910156 C1.06455728,10.5046875 1.52181678,10.2796875 1.84689971,10.0195312 C2.17198264,9.759375 2.42561877,9.4359375 2.6078081,9.05273436 L4.03317173,9.05273436 Z M5.17274816,24.75 L0,24.75 C0.0607297772,24.2472656 0.239346757,23.7761718 0.539423326,23.3332031 C0.83949986,22.8902343 1.40392958,22.3664062 2.22914007,21.7652344 C2.73284001,21.3960937 3.05792294,21.1148437 3.19724418,20.925 C3.33656546,20.7316406 3.40801226,20.5523437 3.40801226,20.3800781 C3.40801226,20.19375 3.33656546,20.0355469 3.19724418,19.901953 C3.05792294,19.7683594 2.88287828,19.7050781 2.66853792,19.7050781 C2.44705281,19.7050781 2.26843584,19.7718749 2.12911459,19.9089844 C1.98979331,20.0460937 1.89691247,20.2851562 1.84689971,20.6296875 L0.121459554,20.4925782 C0.189334001,20.0144531 0.314365908,19.6417969 0.492982887,19.3746093 C0.675172254,19.1074219 0.928808384,18.8999999 1.25746363,18.759375 C1.58611891,18.6152343 2.03980607,18.5449218 2.62209748,18.5449218 C3.22939525,18.5449218 3.70094413,18.6117187 4.03674408,18.7488282 C4.37254403,18.8859374 4.6404695,19.0933593 4.83337585,19.3746093 C5.02628221,19.6558594 5.1227354,19.9722656 5.1227354,20.3238281 C5.1227354,20.6964843 5.01199287,21.0515624 4.79050777,21.3890624 C4.5690227,21.7265625 4.1653483,22.0992186 3.58305689,22.5070312 C3.23653992,22.7425781 3.00433783,22.9078125 2.88645063,23.0027343 C2.76856343,23.0976562 2.6328145,23.2207031 2.47205921,23.3718749 L5.16560345,23.3718749 L5.16560345,24.75 L5.17274816,24.75 Z M19.5335545,6.29999998 L14.3608064,6.29999998 C14.4215361,5.79726561 14.6001531,5.32617186 14.9002296,4.88320313 C15.2003062,4.44023438 15.7647359,3.91640625 16.5899465,3.31523436 C17.0936464,2.94609374 17.4187293,2.66484377 17.5580506,2.47499999 C17.6973718,2.28164062 17.7688186,2.10234376 17.7688186,1.93007813 C17.7688186,1.74374999 17.6973718,1.58554686 17.5580506,1.45195314 C17.4187293,1.31835939 17.2436846,1.25507813 17.0293442,1.25507813 C16.8078592,1.25507813 16.6292421,1.321875 16.4899209,1.45898437 C16.3505997,1.59609374 16.2577188,1.83515625 16.2077061,2.17968748 L14.4822659,2.04257811 C14.5501403,1.56445313 14.6751722,1.19179687 14.8537892,0.924609358 C15.0359786,0.657421885 15.2896146,0.449999988 15.61827,0.309375003 C15.9469253,0.165234367 16.4006123,0.0949218739 16.9829039,0.0949218739 C17.5902016,0.0949218739 18.0617504,0.161718751 18.3975503,0.29882812 C18.7333503,0.43593749 19.0012758,0.643359387 19.1941822,0.924609358 C19.3870886,1.20585936 19.4835417,1.52226563 19.4835417,1.87382813 C19.4835417,2.24648436 19.3727992,2.60156251 19.1513141,2.93906251 C18.929829,3.27656251 18.5261545,3.64921874 17.9438632,4.05703127 C17.5973463,4.29257813 17.3651442,4.45781249 17.2472569,4.55273437 C17.1293697,4.64765624 16.9936209,4.77070311 16.8328654,4.92187501 L19.5264099,4.92187501 L19.5264099,6.29999998 L19.5335545,6.29999998 Z M14.4858382,12.1851563 C14.4858382,11.025 14.6966063,10.2128906 15.1217148,9.74882812 C15.5468232,9.28476563 16.1934167,9.05273436 17.0614952,9.05273436 C17.479459,9.05273436 17.8224036,9.10195312 18.0903292,9.20390626 C18.3582547,9.30585936 18.5761674,9.4359375 18.7476397,9.60117187 C18.9155397,9.76289062 19.0512886,9.93515625 19.1477417,10.1144531 C19.244195,10.29375 19.3227864,10.5011719 19.3835162,10.7402344 C19.4978311,11.1972656 19.5585609,11.671875 19.5585609,12.1640625 C19.5585609,13.2714844 19.3692269,14.0835938 18.9869864,14.5968749 C18.6047462,15.1101562 17.9510078,15.3667969 17.0186271,15.3667969 C16.4970655,15.3667969 16.0755295,15.2859375 15.7540189,15.1207031 C15.4325083,14.9554688 15.1681551,14.7164063 14.9609593,14.4 C14.8109211,14.175 14.6966063,13.8691406 14.6108701,13.4789062 C14.5287062,13.0886719 14.4858382,12.6597656 14.4858382,12.1851563 Z M16.196989,12.1921874 C16.196989,12.9691406 16.2684358,13.5 16.407757,13.7847657 C16.5470784,14.0695312 16.7507017,14.2101563 17.0150549,14.2101563 C17.1900994,14.2101563 17.3401378,14.1503906 17.4687421,14.0273437 C17.5973463,13.9078125 17.690227,13.7144531 17.7509569,13.4542969 C17.8116867,13.1941405 17.8402655,12.786328 17.8402655,12.2343749 C17.8402655,11.4222657 17.7688186,10.8773438 17.6294973,10.5996094 C17.4901761,10.321875 17.279408,10.18125 17.0007655,10.18125 C16.7149783,10.18125 16.5113549,10.321875 16.3827507,10.6066406 C16.2612912,10.8949218 16.196989,11.4222657 16.196989,12.1921874 Z M14.4858382,21.6703124 C14.4858382,20.5101562 14.6966063,19.6980469 15.1217148,19.2339844 C15.5468232,18.7699218 16.1934167,18.5378906 17.0614952,18.5378906 C17.479459,18.5378906 17.8224036,18.5871093 18.0903292,18.6890625 C18.3582547,18.7910157 18.5761674,18.9210937 18.7476397,19.0863282 C18.9155397,19.2480468 19.0512886,19.4203125 19.1477417,19.5996094 C19.244195,19.7789063 19.3227864,19.986328 19.3835162,20.2253906 C19.4978311,20.6824218 19.5585609,21.1570312 19.5585609,21.6492187 C19.5585609,22.7566406 19.3692269,23.5687499 18.9869864,24.0820313 C18.6047462,24.5953125 17.9510078,24.8519531 17.0186271,24.8519531 C16.4970655,24.8519531 16.0755295,24.7710937 15.7540189,24.6058594 C15.4325083,24.440625 15.1681551,24.2015624 14.9609593,23.8851562 C14.8109211,23.6601563 14.6966063,23.3542968 14.6108701,22.9640626 C14.5287062,22.5738281 14.4858382,22.1449219 14.4858382,21.6703124 Z M16.196989,21.673828 C16.196989,22.4507812 16.2684358,22.9816406 16.407757,23.2664062 C16.5470784,23.5511719 16.7507017,23.6917968 17.0150549,23.6917968 C17.1900994,23.6917968 17.3401378,23.6320312 17.4687421,23.5089844 C17.5973463,23.3894532 17.690227,23.1960938 17.7509569,22.9359375 C17.8116867,22.6757812 17.8402655,22.2679687 17.8402655,21.7160155 C17.8402655,20.9039062 17.7688186,20.3589844 17.6294973,20.08125 C17.4901761,19.8035156 17.279408,19.6628906 17.0007655,19.6628906 C16.7149783,19.6628906 16.5113549,19.8035156 16.3827507,20.0882812 C16.2612912,20.3800781 16.196989,20.9074218 16.196989,21.673828 Z M24.5919878,10.9230469 L22.9630008,10.6347656 C23.0987497,10.125 23.3595305,9.73125001 23.7453431,9.46054688 C24.1311559,9.18984372 24.6741516,9.05273436 25.3814749,9.05273436 C26.192396,9.05273436 26.7782598,9.20039061 27.1390661,9.49921873 C27.4998724,9.79804685 27.6820617,10.1707031 27.6820617,10.6207031 C27.6820617,10.884375 27.6070426,11.1234375 27.4605768,11.3378907 C27.3141107,11.5523437 27.0926257,11.7386719 26.7961215,11.9003906 C27.0354683,11.9601562 27.2176576,12.0269531 27.3462618,12.1042969 C27.5534575,12.2308594 27.7142128,12.3925782 27.8285277,12.5964843 C27.9428425,12.8003906 28,13.0429687 28,13.3277344 C28,13.6828124 27.9071193,14.0238281 27.7177851,14.3507812 C27.5284512,14.6777344 27.2569532,14.9273438 26.8997193,15.103125 C26.5424854,15.2789062 26.0780811,15.3667969 25.4993621,15.3667969 C24.9349324,15.3667969 24.4883899,15.2999999 24.1633069,15.1699219 C23.8382241,15.0398438 23.5702985,14.85 23.3595305,14.5968749 C23.1487624,14.3472656 22.9880072,14.0308593 22.8736924,13.6476562 L24.59556,13.4226562 C24.6634346,13.763672 24.7670323,14.0027343 24.909926,14.1328125 C25.0528196,14.2664062 25.2350089,14.3296876 25.4529216,14.3296876 C25.6851238,14.3296876 25.87803,14.2453125 26.0316407,14.0800782 C26.1852514,13.9148437 26.2638428,13.6898437 26.2638428,13.4121094 C26.2638428,13.1273438 26.1888237,12.909375 26.0423577,12.7546875 C25.8958919,12.5999999 25.6922685,12.5226563 25.4386324,12.5226563 C25.3028833,12.5226563 25.1171217,12.5542968 24.8813473,12.6210937 L24.9706558,11.4082031 C25.067109,11.4222657 25.1421281,11.4292969 25.1957132,11.4292969 C25.4207706,11.4292969 25.6101047,11.3589844 25.7601429,11.2183594 C25.9101812,11.0777343 25.9852003,10.9089843 25.9852003,10.715625 C25.9852003,10.5292969 25.9280429,10.3816406 25.8173003,10.2691406 C25.7029854,10.1566406 25.5493748,10.1039062 25.3528962,10.1039062 C25.1492728,10.1039062 24.9849451,10.1636719 24.8563408,10.2867188 C24.720592,10.4097656 24.6348559,10.6207031 24.5919878,10.9230469 Z M22.9487115,18.6433593 L27.9821384,18.6433593 L27.9821384,19.7894531 C27.5463128,20.1796875 27.1783619,20.5980468 26.8854301,21.0515624 C26.528196,21.6 26.2495534,22.2152344 26.0423577,22.8902343 C25.87803,23.4140624 25.7672877,24.036328 25.7137024,24.7535155 L23.9954071,24.7535155 C24.1311559,23.755078 24.3454963,22.9218751 24.6348559,22.246875 C24.9242154,21.571875 25.3850472,20.8511719 26.0137791,20.08125 L22.9487115,20.08125 L22.9487115,18.6433593 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
StemAndLeafMap.displayName = 'StemAndLeafMap';
export default StemAndLeafMap;
