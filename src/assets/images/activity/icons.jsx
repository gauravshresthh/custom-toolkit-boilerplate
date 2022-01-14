import React from 'react';

const ActivityIcons = {
  StartNewConversation: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="177"
      height="140"
      viewBox="0 0 177 140"
      fill="none"
    >
      <path
        d="M162.963 140H13.3373C5.97109 140 0 134.028 0 126.662V21.3451C0 13.9789 5.97109 8.00781 13.3373 8.00781H162.963C170.329 8.00781 176.301 13.9789 176.301 21.3451V126.662C176.301 134.028 170.329 140 162.963 140Z"
        fill="#376AF5"
      />
      <path
        d="M125.436 28.7656H13.7012V32.4069H125.436V28.7656Z"
        fill="white"
      />
      <path
        d="M125.436 57.7148H13.7012V61.3561H125.436V57.7148Z"
        fill="white"
      />
      <path
        d="M125.436 86.6641H13.7012V90.3053H125.436V86.6641Z"
        fill="white"
      />
      <path
        d="M125.436 115.613H13.7012V119.255H125.436V115.613Z"
        fill="white"
      />
      <path
        d="M149.151 39.1186H137.683C136.037 39.1186 134.697 37.7793 134.697 36.1331V24.6652C134.697 23.019 136.037 21.6797 137.683 21.6797H149.151C150.797 21.6797 152.136 23.019 152.136 24.6652V36.1331C152.136 37.7793 150.797 39.1186 149.151 39.1186Z"
        fill="white"
      />
      <path
        d="M149.151 67.8725H137.683C136.037 67.8725 134.697 66.5332 134.697 64.887V53.4191C134.697 51.7729 136.037 50.4336 137.683 50.4336H149.151C150.797 50.4336 152.136 51.7729 152.136 53.4191V64.887C152.136 66.5332 150.797 67.8725 149.151 67.8725Z"
        fill="white"
      />
      <path
        d="M149.151 96.6125H137.683C136.037 96.6125 134.697 95.2732 134.697 93.6269V82.173C134.697 80.5268 136.037 79.1875 137.683 79.1875H149.151C150.797 79.1875 152.136 80.5268 152.136 82.173V93.6409C152.136 95.2871 150.797 96.6125 149.151 96.6125Z"
        fill="white"
      />
      <path
        d="M149.151 125.365H137.683C136.037 125.365 134.697 124.025 134.697 122.379V110.911C134.697 109.265 136.037 107.926 137.683 107.926H149.151C150.797 107.926 152.136 109.265 152.136 110.911V122.379C152.136 124.025 150.797 125.365 149.151 125.365Z"
        fill="white"
      />
      <path
        d="M137.989 27.2727L136.559 28.7031L143.296 35.4408L144.727 34.0104L137.989 27.2727Z"
        fill="#FE958E"
      />
      <path
        d="M148.675 27.2857L141.938 34.0234L143.368 35.4538L150.106 28.7161L148.675 27.2857Z"
        fill="#FE958E"
      />
      <path
        d="M26.3391 16.3089C26.3391 17.8854 25.0556 19.1689 23.4791 19.1689C21.9026 19.1689 20.6191 17.8854 20.6191 16.3089V2.85998C20.6331 1.2835 21.9166 0 23.4931 0C25.0696 0 26.3531 1.2835 26.3531 2.85998V16.3089H26.3391Z"
        fill="#425AC2"
      />
      <path
        d="M159.281 16.3089C159.281 17.8854 157.997 19.1689 156.421 19.1689C154.844 19.1689 153.561 17.8854 153.561 16.3089V2.85998C153.561 1.2835 154.844 0 156.421 0C157.997 0 159.281 1.2835 159.281 2.85998V16.3089Z"
        fill="#425AC2"
      />
      <path
        d="M138.356 55.6905L136.941 57.1055L143.606 63.7703L145.021 62.3554L138.356 55.6905Z"
        fill="#FE958E"
      />
      <path
        d="M148.925 55.7063L142.26 62.3711L143.675 63.786L150.34 57.1212L148.925 55.7063Z"
        fill="#FE958E"
      />
    </svg>
  ),
  Filter: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
    >
      <path
        d="M10.3736 3.34484H10.8754C11.0594 3.34484 11.2099 3.1943 11.2099 3.01031C11.2099 2.82632 11.0594 2.67578 10.8754 2.67578H10.3736C10.1896 2.67578 10.0391 2.82632 10.0391 3.01031C10.0391 3.1943 10.1896 3.34484 10.3736 3.34484Z"
        fill="#666666"
      />
      <path
        d="M15.3249 0.367981C15.2078 0.133811 14.9736 0 14.7227 0H0.672557C0.421661 0 0.187492 0.150538 0.0704067 0.367981C-0.0466781 0.60215 -0.0132253 0.869773 0.137312 1.07049L6.04173 8.49701V13.3309C6.04173 13.5818 6.17554 13.7993 6.39299 13.9164C6.49335 13.9665 6.5937 14 6.71079 14C6.8446 14 6.97841 13.9665 7.0955 13.8829L8.95213 12.595C9.21975 12.3943 9.37029 12.0932 9.37029 11.7754V8.48029L15.258 1.07049C15.4085 0.869773 15.442 0.60215 15.3249 0.367981ZM8.76814 8.16248C8.73468 8.21266 8.70123 8.27957 8.70123 8.3632V11.7587C8.70123 11.8757 8.65105 11.9761 8.56742 12.043L6.71079 13.3309V8.3632C6.71079 8.24612 6.66061 8.14576 6.57698 8.09558L2.79681 3.34528H8.86849C9.05249 3.34528 9.20302 3.19474 9.20302 3.01075C9.20302 2.82676 9.05249 2.67622 8.86849 2.67622H2.3452C2.32847 2.67622 2.29502 2.67622 2.27829 2.67622L0.672557 0.669056H14.7227L8.76814 8.16248Z"
        fill="#666666"
      />
    </svg>
  ),
};

export default ActivityIcons;
