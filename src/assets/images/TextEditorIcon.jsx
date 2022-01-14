import React from 'react';

const TextEditorIcon = {
  Attachment: option => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={option.width || '8'}
      height={option.height || '14'}
      viewBox="0 0 8 14"
      fill="none"
    >
      <path
        d="M6.63048 3.67727H6.58048V3.72727V10C6.58048 11.1698 5.44381 12.1318 4.02085 12.1318C2.59789 12.1318 1.46123 11.1698 1.46123 10V3.18182C1.46123 2.46472 2.16078 1.86818 3.04224 1.86818C3.92371 1.86818 4.62326 2.46472 4.62326 3.18182V8.90909C4.62326 9.17347 4.36082 9.40455 4.02085 9.40455C3.68089 9.40455 3.41845 9.17347 3.41845 8.90909V3.72727V3.67727H3.36845H2.38984H2.33984V3.72727V8.90909C2.33984 9.69744 3.10168 10.3227 4.02085 10.3227C4.94003 10.3227 5.70187 9.69744 5.70187 8.90909V3.18182C5.70187 1.94074 4.50292 0.95 3.04224 0.95C1.58157 0.95 0.382617 1.94074 0.382617 3.18182V10C0.382617 11.6938 2.01868 13.05 4.02085 13.05C6.02302 13.05 7.65909 11.6938 7.65909 10V3.72727V3.67727H7.60909H6.63048Z"
        fill="#666666"
        stroke="#666666"
        strokeWidth="0"
      />
    </svg>
  ),
  ScreenShareIcon: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="11"
      viewBox="0 0 26 11"
      fill="none"
    >
      <path
        d="M9.23438 5.28085L6.42188 3.65707C6.11009 3.47704 5.71875 3.70229 5.71875 4.06301V7.3106C5.71875 7.67007 6.10884 7.89729 6.42188 7.71654L9.23438 6.09276C9.54575 5.91301 9.54731 5.46151 9.23438 5.28085ZM6.65625 6.49867V4.87492L8.0625 5.68679L6.65625 6.49867Z"
        fill="#666666"
      />
      <path
        d="M16.3009 1.94148L16.3228 1.98569L16.3009 1.94148L13.2688 3.44438V1.46875C13.2688 1.18226 13.0365 0.95 12.75 0.95H1.46875C1.18226 0.95 0.95 1.18226 0.95 1.46875V9.90625C0.95 10.1927 1.18226 10.425 1.46875 10.425H12.75C13.0365 10.425 13.2688 10.1927 13.2688 9.90625V7.95568L16.304 9.43507L16.3259 9.39013L16.304 9.43507C16.6481 9.60274 17.05 9.35202 17.05 8.96875V2.40625C17.05 2.02263 16.6462 1.77033 16.3009 1.94148ZM1.9875 9.3875V1.9875H12.2312V9.3875H1.9875ZM13.2688 4.6023L16.0125 3.24234V8.13882L13.2688 6.8015V4.6023Z"
        fill="#666666"
        stroke="#666666"
        strokeWidth="0.1"
      />
      <path d="M20 4L23 7L26 4H20Z" fill="#666666" />
    </svg>
  ),
  VideoIcon: color => (
    <svg
      width="20"
      height="12"
      viewBox="0 0 24 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4786 0H2.60708C1.17318 0 0 1.17318 0 2.60708V11.3929C0 12.8268 1.17318 14 2.60708 14H13.4786C14.9125 14 16.0857 12.8268 16.0857 11.3929V2.60708C16.0857 1.14711 14.9125 0 13.4786 0Z"
        fill={color || '#666'}
      />
      <path
        d="M21.8994 1.43262C21.743 1.45869 21.5866 1.5369 21.4562 1.61511L17.3892 3.96148V10.0099L21.4823 12.3563C22.2383 12.7995 23.1769 12.5388 23.6201 11.7827C23.7504 11.5481 23.8286 11.2874 23.8286 11.0006V2.94472C23.8286 1.9801 22.9162 1.19798 21.8994 1.43262Z"
        fill={color || '#666'}
      />
    </svg>
  ),
  AudioIcon: color => (
    <svg
      width="11"
      height="17"
      viewBox="0 0 12 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.52 9.29447C11.52 8.93447 11.2447 8.65918 10.8847 8.65918C10.5247 8.65918 10.2494 8.93447 10.2494 9.29447C10.2494 11.7721 8.23765 13.7839 5.76 13.7839C3.28235 13.7839 1.27059 11.7721 1.27059 9.29447C1.27059 8.93447 0.995294 8.65918 0.635294 8.65918C0.275294 8.65918 0 8.93447 0 9.29447C0 12.238 2.20235 14.7156 5.12471 15.0333V16.7274H2.81647C2.45647 16.7274 2.18118 17.0027 2.18118 17.3627C2.18118 17.7227 2.45647 17.998 2.81647 17.998H8.70353C9.06353 17.998 9.33882 17.7227 9.33882 17.3627C9.33882 17.0027 9.06353 16.7274 8.70353 16.7274H6.39529V15.0333C9.31765 14.7156 11.52 12.238 11.52 9.29447Z"
        fill={color || '#666'}
      />
      <path
        d="M5.7601 0C3.81187 0 2.22363 1.58824 2.22363 3.53647V9.27529C2.22363 11.2447 3.81187 12.8118 5.7601 12.8329C7.70834 12.8329 9.29657 11.2447 9.29657 9.29647V3.53647C9.29657 1.58824 7.70834 0 5.7601 0Z"
        fill={color || '#666'}
      />
    </svg>
  ),
  SendIcon: option => (
    <svg
      width="16"
      height={option.height || '16'}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.00857142 18L18 9L0.00857142 0L0 7L12.8571 9L0 11L0.00857142 18Z"
        fill={option.color || '#666'}
      />
    </svg>
  ),
  MoreIcon: option => (
    <svg
      width="8"
      height="4"
      viewBox="0 0 8 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0L4 4L8 0H0Z" fill={option.color || '#666'} />
    </svg>
  ),
  GalleryIcon: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="12"
      viewBox="0 0 15 12"
      fill="none"
    >
      <path
        d="M2.45592 11.1H12.5885C13.4463 11.1 14.144 10.4024 14.144 9.54455V2.45543C14.144 1.59759 13.4463 0.9 12.5885 0.9H2.45592C1.59807 0.9 0.900488 1.59782 0.900488 2.45543V9.54455C0.900488 10.4024 1.59831 11.1 2.45592 11.1ZM1.53527 2.45543C1.53527 1.94785 1.94853 1.53478 2.45592 1.53478H12.5885C13.0961 1.53478 13.5092 1.94783 13.5092 2.45543V9.54455C13.5092 10.0521 13.0961 10.4652 12.5885 10.4652H2.45592C1.94832 10.4652 1.53527 10.0521 1.53527 9.54455V2.45543Z"
        fill="#666666"
        stroke="#666666"
        strokeWidth="0.2"
      />
      <path
        d="M8.07383 4.47818C8.07383 5.25276 8.70386 5.88252 9.4782 5.88252C10.2525 5.88252 10.8825 5.25275 10.8825 4.47818C10.8825 3.7036 10.2527 3.07383 9.4782 3.07383C8.70386 3.07383 8.07383 3.70358 8.07383 4.47818ZM8.70864 4.47818C8.70864 4.05384 9.05387 3.70861 9.4782 3.70861C9.9023 3.70861 10.2478 4.05385 10.2478 4.47818C10.2478 4.90251 9.90253 5.24774 9.4782 5.24774C9.05387 5.24774 8.70864 4.90251 8.70864 4.47818Z"
        fill="#666666"
        stroke="#666666"
        strokeWidth="0.2"
      />
      <path
        d="M11.2372 6.76741L11.2373 6.76746L13.9592 9.82961L13.9593 9.8297C14.0415 9.92235 14.0624 10.0544 14.0126 10.168M11.2372 6.76741L7.38107 10.5718C7.29789 10.6653 7.27764 10.7988 7.32869 10.9126C7.37984 11.0267 7.49324 11.1 7.61818 11.1H12.588C13.2055 11.1 13.7647 10.7341 14.0126 10.168M11.2372 6.76741C11.1149 6.62999 10.885 6.6298 10.7628 6.76746C10.7628 6.76748 10.7628 6.7675 10.7628 6.76753L7.38113 10.5717L11.2372 6.76741ZM14.0126 10.168L13.921 10.1278M14.0126 10.168C14.0126 10.1679 14.0126 10.1679 14.0126 10.1679L13.921 10.1278M13.921 10.1278C13.9551 10.05 13.9408 9.95954 13.8845 9.89604L13.921 10.1278ZM12.588 10.4652H8.325L10.9999 7.45595L13.3346 10.0825C13.1638 10.3196 12.8874 10.4652 12.588 10.4652Z"
        fill="#666666"
        stroke="#666666"
        strokeWidth="0.2"
      />
      <path
        d="M0.980259 7.99011L0.980147 7.99024C0.92863 8.04839 0.9 8.12325 0.9 8.20111V9.54461C0.9 10.4025 1.59782 11.1 2.45543 11.1H7.61849C7.70897 11.1 7.79547 11.0615 7.85567 10.9933C7.85574 10.9933 7.8558 10.9932 7.85586 10.9931L9.49821 9.14562C9.60517 9.02534 9.60514 8.84412 9.49824 8.72381L9.49822 8.7238L5.15038 3.83253L5.15035 3.83249C5.02803 3.69504 4.79814 3.69488 4.6759 3.83253C4.67589 3.83255 4.67587 3.83256 4.67585 3.83258L0.980259 7.99011ZM1.535 9.54461V8.32176L4.91326 4.52122L8.83662 8.9348L7.47615 10.4652H2.45565C1.94805 10.4652 1.535 10.0522 1.535 9.54461Z"
        fill="#666666"
        stroke="#666666"
        strokeWidth="0.2"
      />
    </svg>
  ),
  CloseIcon: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.952 2.04803C9.22069 -0.682676 4.77886 -0.682676 2.04758 2.04803C-0.682526 4.77873 -0.682526 9.22171 2.04758 11.9524C3.41322 13.3175 5.20663 13.9997 7.00007 13.9997C8.79352 13.9997 10.5863 13.3175 11.952 11.9524C14.6827 9.22174 14.6827 4.77873 11.952 2.04803ZM9.88833 9.06357C10.1165 9.29175 10.1165 9.6606 9.88833 9.88878C9.77452 10.0026 9.62513 10.0598 9.47571 10.0598C9.32631 10.0598 9.17689 10.0026 9.06309 9.88878L7.00005 7.82513L4.93758 9.88818C4.8232 10.002 4.67378 10.0592 4.52496 10.0592C4.37557 10.0592 4.22615 10.002 4.11234 9.88818C3.88416 9.65999 3.88416 9.29057 4.11234 9.06297L6.17481 6.99992L4.11177 4.93688C3.88359 4.7087 3.88359 4.33928 4.11177 4.11167C4.33937 3.88349 4.7088 3.88349 4.93698 4.11167L7.00002 6.17471L9.06306 4.11167C9.29124 3.88349 9.66009 3.88349 9.88827 4.11167C10.1165 4.33928 10.1165 4.7087 9.88827 4.93688L7.82523 6.99992L9.88833 9.06357Z"
        fill="#666666"
      />
    </svg>
  ),
  Schedule: option => (
    <svg
      width={option.width || '21'}
      height={option.height || '20'}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.00857142 18L18 9L0.00857142 0L0 7L12.8571 9L0 11L0.00857142 18Z"
        fill={option.color || '#376AF5'}
      />
      <circle cx="15" cy="14" r="6" fill="white" />
      <path
        d="M17.1378 15.0609L15.4647 13.8061V11.2499C15.4647 10.9929 15.2569 10.7852 14.9999 10.7852C14.7429 10.7852 14.5352 10.9929 14.5352 11.2499V14.0385C14.5352 14.1849 14.6039 14.3229 14.7211 14.4103L16.5801 15.8046C16.6637 15.8673 16.7613 15.8975 16.8585 15.8975C17.0002 15.8975 17.1396 15.8338 17.2307 15.7111C17.3851 15.5061 17.3433 15.2147 17.1378 15.0609Z"
        fill={option.color || '#376AF5'}
      />
      <path
        d="M15 8C11.6914 8 9 10.6914 9 14C9 17.3086 11.6914 20 15 20C18.3086 20 21 17.3086 21 14C21 10.6914 18.3086 8 15 8ZM15 19.0705C12.2045 19.0705 9.92951 16.7955 9.92951 14C9.92951 11.2045 12.2045 8.92951 15 8.92951C17.796 8.92951 20.0705 11.2045 20.0705 14C20.0705 16.7955 17.7955 19.0705 15 19.0705Z"
        fill={option.color || '#376AF5'}
      />
    </svg>
  ),
  Calender: () => (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.1 7.65H3.4V9.35H5.1V7.65ZM8.5 7.65H6.8V9.35H8.5V7.65ZM11.9 7.65H10.2V9.35H11.9V7.65ZM13.6 1.7H12.75V0H11.05V1.7H4.25V0H2.55V1.7H1.7C0.7565 1.7 0.0085001 2.465 0.0085001 3.4L0 15.3C0 16.235 0.7565 17 1.7 17H13.6C14.535 17 15.3 16.235 15.3 15.3V3.4C15.3 2.465 14.535 1.7 13.6 1.7ZM13.6 15.3H1.7V5.95H13.6V15.3Z"
        fill="#666666"
      />
    </svg>
  ),
  Clock: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8506 9.41389L8.61975 7.74077V4.33258C8.61975 3.98989 8.34275 3.71289 8.00006 3.71289C7.65737 3.71289 7.38037 3.98989 7.38037 4.33258V8.05064C7.38037 8.24583 7.47209 8.42989 7.62825 8.54639L10.1069 10.4054C10.2185 10.4891 10.3486 10.5294 10.4781 10.5294C10.6671 10.5294 10.853 10.4445 10.9745 10.2809C11.1803 10.0075 11.1245 9.61902 10.8506 9.41389Z"
        fill="#666666"
      />
      <path
        d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4115 16 8C16 3.58853 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.7273 1.23934 8C1.23934 4.27266 4.27266 1.23934 8 1.23934C11.728 1.23934 14.7607 4.27266 14.7607 8C14.7607 11.7273 11.7273 14.7607 8 14.7607Z"
        fill="#666666"
      />
    </svg>
  ),
  Emoji: option => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
    >
      <path
        d="M4.87862 9.04819C4.87041 9.04206 4.86243 9.03566 4.85469 9.02896C4.67562 8.87419 4.65591 8.60354 4.8107 8.42447L4.77287 8.39178C4.77287 8.39177 4.77287 8.39177 4.77287 8.39177C4.94523 8.19235 5.2463 8.16992 5.44627 8.34126C6.0341 8.76955 6.83116 8.76955 7.41898 8.34126C7.42712 8.33429 7.43548 8.3276 7.44409 8.32117L4.87862 9.04819ZM4.87862 9.04819L4.84826 9.08792C4.84833 9.08797 4.8484 9.08802 4.84846 9.08807C4.84855 9.08814 4.84864 9.0882 4.84872 9.08826L4.87862 9.04819ZM6.43267 0.95H6.43262C3.0913 0.95 0.382617 3.65868 0.382617 7C0.382617 10.3413 3.0913 13.05 6.43262 13.05C9.77394 13.05 12.4826 10.3413 12.4826 7V6.99995C12.4791 3.66015 9.77249 0.95357 6.43267 0.95ZM6.43256 12.0929C3.61987 12.0928 1.33975 9.81269 1.33975 7C1.33975 4.18729 3.6199 1.90714 6.43262 1.90714C9.24531 1.90714 11.5255 4.18726 11.5255 6.99995C11.5224 9.81145 9.24406 12.0898 6.43256 12.0929ZM4.28976 7.04999C4.79076 7.04999 5.1969 6.64386 5.1969 6.14286C5.1969 5.64186 4.79076 5.23572 4.28976 5.23572C3.78876 5.23572 3.38262 5.64186 3.38262 6.14286C3.38262 6.64386 3.78876 7.04999 4.28976 7.04999ZM8.57548 7.04999C9.07648 7.04999 9.48262 6.64386 9.48262 6.14286C9.48262 5.64186 9.07648 5.23572 8.57548 5.23572C8.07449 5.23572 7.66835 5.64186 7.66835 6.14286C7.66835 6.64386 8.07449 7.04999 8.57548 7.04999ZM8.01676 9.08809C8.22841 8.92995 8.2719 8.63022 8.11386 8.41847L8.01676 9.08809Z"
        fill="#666666"
        stroke="#666666"
        strokeWidth="0.1"
      />
    </svg>
  ),
  Bold: ({ color = '#666666' }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="9"
      viewBox="0 0 8 9"
      fill="red"
    >
      <path
        d="M0.885489 9V0.288708H3.87102C4.85623 0.288708 5.6061 0.486148 6.12064 0.881028C6.63518 1.27591 6.89245 1.86424 6.89245 2.64602C6.89245 3.04489 6.78476 3.40387 6.56937 3.72297C6.35398 4.04206 6.03887 4.28936 5.62405 4.46486C6.09471 4.5925 6.45768 4.83382 6.71296 5.18881C6.97222 5.53981 7.10186 5.96261 7.10186 6.45721C7.10186 7.27489 6.8386 7.90311 6.3121 8.34187C5.78958 8.78062 5.03971 9 4.06248 9H0.885489ZM2.3992 5.06915V7.79143H4.08043C4.55508 7.79143 4.92603 7.67376 5.19327 7.43843C5.46051 7.2031 5.59413 6.87602 5.59413 6.45721C5.59413 5.55178 5.13145 5.08909 4.20607 5.06915H2.3992ZM2.3992 3.95631H3.88299C4.35365 3.95631 4.72061 3.85061 4.98386 3.6392C5.25111 3.42382 5.38473 3.12068 5.38473 2.72978C5.38473 2.29901 5.26108 1.98789 5.01378 1.79643C4.77047 1.60497 4.38955 1.50925 3.87102 1.50925H2.3992V3.95631Z"
        fill={color}
      />
    </svg>
  ),
  Italics: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4"
      height="9"
      viewBox="0 0 4 9"
      fill="none"
    >
      <path
        d="M1.78893 9H0.317101L1.83081 0.288708H3.30263L1.78893 9Z"
        fill="#666666"
      />
    </svg>
  ),
  UnderLine: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
    >
      <path
        d="M7.25742 2.28871V8.1102C7.25742 9.03557 6.96026 9.76949 6.36594 10.312C5.77562 10.8504 4.98785 11.1197 4.00265 11.1197C3.00548 11.1197 2.21372 10.8544 1.62738 10.3239C1.04105 9.78943 0.747879 9.04953 0.747879 8.10421V2.28871H2.2556V8.11618C2.2556 8.69853 2.40318 9.14327 2.69835 9.4504C2.99351 9.75752 3.42828 9.91109 4.00265 9.91109C5.16734 9.91109 5.74969 9.29683 5.74969 8.06832V2.28871H7.25742Z"
        fill="#666666"
      />
      <line
        x1="2.62268e-08"
        y1="12.7"
        x2="8"
        y2="12.7"
        stroke="#666666"
        strokeWidth="0.6"
      />
    </svg>
  ),
  StrikeThrough: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="11"
      viewBox="0 0 10 11"
      fill="none"
    >
      <path
        d="M7.0459 7.45767C7.0459 7.00015 6.87204 6.64633 6.52432 6.39621C6.1827 6.14 5.58182 5.92038 4.72167 5.73737C3.86762 5.55436 3.18743 5.33475 2.6811 5.07854C2.18087 4.82232 1.80875 4.51731 1.56474 4.16349C1.32682 3.80967 1.20787 3.38874 1.20787 2.90071C1.20787 2.08937 1.54949 1.40308 2.23273 0.841848C2.92207 0.280616 3.80052 0 4.86808 0C5.99054 0 6.89949 0.289766 7.59493 0.869299C8.29647 1.44883 8.64724 2.19002 8.64724 3.09287H6.94524C6.94524 2.62925 6.74698 2.22968 6.35046 1.89416C5.96004 1.55864 5.46591 1.39088 4.86808 1.39088C4.25194 1.39088 3.77001 1.52509 3.42229 1.7935C3.07457 2.06192 2.90071 2.41269 2.90071 2.84581C2.90071 3.25453 3.06237 3.5626 3.38569 3.77001C3.70901 3.97742 4.29159 4.17569 5.13344 4.3648C5.98139 4.55391 6.66768 4.77962 7.19231 5.04193C7.71694 5.30425 8.10431 5.62147 8.35442 5.99359C8.61064 6.35961 8.73874 6.80798 8.73874 7.33871C8.73874 8.22326 8.38492 8.93396 7.67728 9.47079C6.96964 10.0015 6.05154 10.2669 4.92298 10.2669C4.12993 10.2669 3.42839 10.1266 2.81836 9.84596C2.20832 9.56534 1.72945 9.17492 1.38173 8.67469C1.04011 8.16836 0.869299 7.62238 0.869299 7.03675H2.56214C2.59265 7.60408 2.81836 8.05551 3.23928 8.39102C3.66631 8.72044 4.22754 8.88515 4.92298 8.88515C5.56351 8.88515 6.07594 8.75704 6.46027 8.50083C6.85069 8.23852 7.0459 7.8908 7.0459 7.45767Z"
        fill="#666666"
      />
      <path d="M0 5.39881H9.66295V6.33216H0V5.39881Z" fill="#666666" />
    </svg>
  ),
  Code: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
    >
      <path
        d="M12.9502 6.39277L12.9502 6.39277L10.1752 3.45278C10.1752 3.45277 10.1752 3.45276 10.1751 3.45274C9.96666 3.23167 9.61868 3.22164 9.39765 3.43021L9.39762 3.43023C9.17691 3.63866 9.16661 3.98677 9.37525 4.20773C9.37526 4.20773 9.37526 4.20774 9.37527 4.20774L11.794 6.77011L9.37527 9.33277C9.16659 9.55374 9.17693 9.90171 9.39759 10.1103L9.39767 10.1103C9.50397 10.2106 9.63995 10.2603 9.77514 10.2603C9.92103 10.2603 10.0671 10.2024 10.1751 10.0881L10.1752 10.0881L12.9502 7.14789L12.9502 7.14785C13.1502 6.93581 13.1502 6.60471 12.9502 6.39277Z"
        fill="#666666"
        stroke="#666666"
        strokeWidth="0.2"
      />
      <path
        d="M4.62508 9.33257L4.62507 9.33256L2.20644 6.77002L4.62507 4.2075L4.62508 4.20749C4.83353 3.98658 4.82346 3.63842 4.60252 3.42998C4.38173 3.22151 4.03345 3.23162 3.82503 3.45252C3.82503 3.45252 3.82502 3.45253 3.82502 3.45253L1.05001 6.39254L1.05001 6.39254C0.849996 6.60447 0.850002 6.93573 1.05 7.14768L1.05001 7.14769L3.82517 10.0878L3.82518 10.0879C3.93337 10.2025 4.07932 10.2602 4.2252 10.2602C4.36041 10.2602 4.4964 10.2103 4.60249 10.1101C4.82367 9.9016 4.83349 9.55345 4.62508 9.33257Z"
        fill="#666666"
        stroke="#666666"
        strokeWidth="0.2"
      />
      <path
        d="M7.74556 0.907442L7.74543 0.90742C7.43112 0.852524 7.15938 1.10167 7.11623 1.42742C7.11623 1.42743 7.11623 1.42743 7.11623 1.42743L5.79622 11.3896L5.79622 11.3896C5.75331 11.7137 5.94509 12.0381 6.25497 12.0926L6.25536 12.0927C6.28404 12.0976 6.31249 12.1 6.34086 12.1C6.61928 12.1 6.84501 11.8687 6.88429 11.5726L6.8843 11.5726L8.20431 1.61041L8.20431 1.61039C8.24721 1.28626 8.05543 0.961975 7.74556 0.907442Z"
        fill="#666666"
        stroke="#666666"
        strokeWidth="0.2"
      />
    </svg>
  ),
  Mentions: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="14"
      viewBox="0 0 12 14"
      fill="none"
    >
      <path
        d="M7.41204 12.8888C7.85852 12.7858 8.21624 12.6476 8.48284 12.4728L8.51336 12.4528L8.5036 12.4176L8.26066 11.5418L8.24402 11.4818L8.18902 11.511C7.92129 11.6532 7.59342 11.767 7.20452 11.8515L7.20441 11.8515C6.81971 11.9361 6.45038 11.9782 6.09634 11.9782C5.22155 11.9782 4.48334 11.786 3.87918 11.4043C3.2795 11.0227 2.83194 10.4667 2.53706 9.73381C2.24624 8.99618 2.12523 8.11714 2.17612 7.09519L2.17614 7.0946C2.21428 6.09028 2.42184 5.19787 2.79776 4.41646L2.79781 4.41636C3.17374 3.63071 3.67946 3.03308 4.31422 2.6211C4.95329 2.20908 5.68532 2.00258 6.5119 2.00258C7.8651 2.00258 8.86968 2.41651 9.5354 3.23715L9.5355 3.23727C10.2067 4.05953 10.5107 5.24951 10.4385 6.81549L10.4385 6.81607C10.4131 7.55211 10.2609 8.14831 9.98527 8.60773L9.9852 8.60785C9.71463 9.06158 9.37314 9.28031 8.96048 9.28031C8.69143 9.28031 8.50739 9.18157 8.39646 8.9889C8.28277 8.79144 8.24128 8.48765 8.28143 8.06924L8.28145 8.06906L8.61389 4.4697L8.61645 4.44205L8.59433 4.42527C8.22144 4.14239 7.89241 3.95332 7.60782 3.86135C7.32898 3.76987 7.00817 3.72464 6.64615 3.72464C6.16556 3.72464 5.71211 3.88217 5.2868 4.19463C4.86559 4.50295 4.51772 4.94035 4.24214 5.50442L4.24201 5.5047C3.97066 6.06894 3.80094 6.70126 3.73225 7.40108L3.73221 7.40151C3.65492 8.26456 3.77658 8.96078 4.10402 9.48468L4.10418 9.48493C4.43757 10.0113 4.92688 10.2754 5.56571 10.2754C5.89005 10.2754 6.19893 10.192 6.49164 10.026C6.76625 9.87253 7.00797 9.64893 7.21722 9.3568C7.34953 9.65158 7.53779 9.87823 7.78287 10.0342C8.05061 10.2046 8.38233 10.2881 8.77508 10.2881C9.59958 10.2881 10.256 9.97471 10.739 9.34805L10.7391 9.34792C11.2203 8.71935 11.4843 7.86664 11.5357 6.79462L11.5357 6.79439C11.5871 5.61226 11.4224 4.57939 11.0394 3.69727C10.6563 2.81046 10.0764 2.13088 9.29979 1.66057C8.52767 1.18612 7.60619 0.95 6.53747 0.95C5.48037 0.95 4.53549 1.21011 3.7043 1.73121L3.7042 1.73127C2.87762 2.25219 2.226 2.98383 1.74917 3.92458C1.27246 4.86082 1.00884 5.91643 0.957415 7.09051H0.957414L0.957402 7.09083C0.910309 8.3495 1.08785 9.43367 1.49233 10.3416L1.49234 10.3416C1.88414 11.22 2.47269 11.8909 3.25782 12.3525C4.04267 12.8183 4.98101 13.05 6.07077 13.05C6.5222 13.05 6.96932 12.9963 7.41204 12.8888ZM7.41204 12.8888C7.41214 12.8888 7.41224 12.8888 7.41234 12.8888L7.40055 12.8402L7.41179 12.8889C7.41188 12.8889 7.41196 12.8889 7.41204 12.8888ZM8.21248 11.5551L8.22616 11.6045C8.22943 11.6027 8.23269 11.601 8.23594 11.5993L8.21248 11.5551ZM8.21248 11.5551L8.1643 11.5685L8.16712 11.5787C8.18242 11.5709 8.19754 11.5631 8.21248 11.5551ZM5.08484 7.41072L5.08486 7.4106C5.1655 6.54476 5.35394 5.89803 5.64554 5.46479L5.64567 5.4646C5.93622 5.02876 6.30736 4.81558 6.76123 4.81558C6.94368 4.81558 7.13255 4.85035 7.32809 4.92066L7.04447 8.02792C6.91872 8.37378 6.75668 8.64395 6.55982 8.84087C6.36224 9.03426 6.15689 9.12688 5.9429 9.12688C5.77763 9.12688 5.63761 9.09123 5.52089 9.02199C5.40426 8.95281 5.30798 8.84835 5.23277 8.70609C5.08175 8.41618 5.02979 7.98668 5.08484 7.41072Z"
        fill="#666666"
        stroke="#666666"
        strokeWidth="0.1"
      />
    </svg>
  ),
  Image: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="12"
      viewBox="0 0 15 12"
      fill="none"
    >
      <path
        d="M2.45592 11.1H12.5885C13.4463 11.1 14.144 10.4024 14.144 9.54455V2.45543C14.144 1.59759 13.4463 0.9 12.5885 0.9H2.45592C1.59807 0.9 0.900488 1.59782 0.900488 2.45543V9.54455C0.900488 10.4024 1.59831 11.1 2.45592 11.1ZM1.53527 2.45543C1.53527 1.94785 1.94853 1.53478 2.45592 1.53478H12.5885C13.0961 1.53478 13.5092 1.94783 13.5092 2.45543V9.54455C13.5092 10.0521 13.0961 10.4652 12.5885 10.4652H2.45592C1.94832 10.4652 1.53527 10.0521 1.53527 9.54455V2.45543Z"
        fill="#666666"
        stroke="#666666"
        strokeWidth="0.2"
      />
      <path
        d="M8.07383 4.47818C8.07383 5.25276 8.70386 5.88252 9.4782 5.88252C10.2525 5.88252 10.8825 5.25275 10.8825 4.47818C10.8825 3.7036 10.2527 3.07383 9.4782 3.07383C8.70386 3.07383 8.07383 3.70358 8.07383 4.47818ZM8.70864 4.47818C8.70864 4.05384 9.05387 3.70861 9.4782 3.70861C9.9023 3.70861 10.2478 4.05385 10.2478 4.47818C10.2478 4.90251 9.90253 5.24774 9.4782 5.24774C9.05387 5.24774 8.70864 4.90251 8.70864 4.47818Z"
        fill="#666666"
        stroke="#666666"
        strokeWidth="0.2"
      />
      <path
        d="M11.2373 6.76746L11.2372 6.76741L7.38107 10.5718C7.29789 10.6653 7.27764 10.7988 7.32869 10.9126C7.37984 11.0267 7.49324 11.1 7.61818 11.1H12.588C13.2056 11.1 13.7647 10.734 14.0126 10.1679C14.0624 10.0543 14.0415 9.92233 13.9593 9.8297L13.9592 9.82961L11.2373 6.76746ZM10.7628 6.76753L7.38113 10.5717L10.8376 6.8339L10.7628 6.76746L10.7628 6.76753ZM12.588 10.4652H8.325L10.9999 7.45595L13.3346 10.0825C13.1638 10.3196 12.8874 10.4652 12.588 10.4652Z"
        fill="#666666"
        stroke="#666666"
        strokeWidth="0.2"
      />
      <path
        d="M0.980259 7.99011L0.980147 7.99024C0.92863 8.04839 0.9 8.12325 0.9 8.20111V9.54461C0.9 10.4025 1.59782 11.1 2.45543 11.1H7.61849C7.70897 11.1 7.79547 11.0615 7.85567 10.9933C7.85574 10.9933 7.8558 10.9932 7.85586 10.9931L9.49821 9.14562C9.60517 9.02534 9.60514 8.84412 9.49824 8.72381L9.49822 8.7238L5.15038 3.83253L5.15034 3.83249C5.02803 3.69504 4.79814 3.69488 4.6759 3.83253C4.67589 3.83255 4.67587 3.83256 4.67585 3.83258L0.980259 7.99011ZM1.535 9.54461V8.32176L4.91326 4.52122L8.83662 8.9348L7.47615 10.4652H2.45565C1.94805 10.4652 1.535 10.0522 1.535 9.54461Z"
        fill="#666666"
        stroke="#666666"
        strokeWidth="0.2"
      />
    </svg>
  ),
  FormatText: () => (
    <svg
      width="25"
      height="12"
      viewBox="0 0 25 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="16" height="1" fill="#666666" />
      <rect y="7.10938" width="16" height="1" fill="#666666" />
      <rect y="3.55469" width="11.5556" height="1" fill="#666666" />
      <rect y="10.668" width="8.88889" height="1" fill="#666666" />
      <path d="M19 4L22 7L25 4H19Z" fill="#767676" />
    </svg>
  ),
  Numbering: () => (
    <svg
      width="18"
      height="9"
      viewBox="0 0 18 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" width="16" height="1" fill="#666666" />
      <rect x="2" y="7.10938" width="16" height="1" fill="#666666" />
      <rect x="2" y="3.55469" width="16" height="1" fill="#666666" />
      <circle cx="0.5" cy="0.5" r="0.5" fill="#666666" />
      <circle cx="0.5" cy="4.5" r="0.5" fill="#666666" />
      <circle cx="0.5" cy="7.5" r="0.5" fill="#666666" />
    </svg>
  ),
  Bulleting: () => (
    <svg
      width="19"
      height="11"
      viewBox="0 0 19 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="1" width="16" height="1" fill="#666666" />
      <rect x="3" y="8.10938" width="16" height="1" fill="#666666" />
      <rect x="3" y="4.55469" width="16" height="1" fill="#666666" />
      <path
        d="M0.826172 2H0.524414V1.17383L0.527344 1.03809L0.532227 0.889648C0.482096 0.939779 0.447266 0.972656 0.427734 0.988281L0.263672 1.12012L0.118164 0.938477L0.578125 0.572266H0.826172V2Z"
        fill="#666666"
      />
      <path
        d="M1.07812 6H0.0800781V5.79004L0.438477 5.42773C0.544596 5.31901 0.613932 5.24382 0.646484 5.20215C0.679036 5.15983 0.702474 5.12077 0.716797 5.08496C0.73112 5.04915 0.738281 5.01204 0.738281 4.97363C0.738281 4.91634 0.722331 4.8737 0.69043 4.8457C0.65918 4.81771 0.617188 4.80371 0.564453 4.80371C0.509115 4.80371 0.455404 4.81641 0.40332 4.8418C0.351237 4.86719 0.296875 4.90332 0.240234 4.9502L0.0761719 4.75586C0.146484 4.69596 0.204753 4.65365 0.250977 4.62891C0.297201 4.60417 0.347656 4.58529 0.402344 4.57227C0.457031 4.55859 0.518229 4.55176 0.585938 4.55176C0.67513 4.55176 0.753906 4.56803 0.822266 4.60059C0.890625 4.63314 0.943685 4.67871 0.981445 4.7373C1.01921 4.7959 1.03809 4.86296 1.03809 4.93848C1.03809 5.00423 1.02637 5.06608 1.00293 5.12402C0.980143 5.18132 0.944336 5.24023 0.895508 5.30078C0.847331 5.36133 0.762044 5.44759 0.639648 5.55957L0.456055 5.73242V5.74609H1.07812V6Z"
        fill="#666666"
      />
      <path
        d="M1.02246 8.8916C1.02246 8.98079 0.995443 9.05664 0.941406 9.11914C0.88737 9.18164 0.811523 9.22461 0.713867 9.24805V9.25391C0.829102 9.26823 0.916341 9.30339 0.975586 9.35938C1.03483 9.41471 1.06445 9.48958 1.06445 9.58398C1.06445 9.72135 1.01465 9.82845 0.915039 9.90527C0.81543 9.98145 0.673177 10.0195 0.488281 10.0195C0.333333 10.0195 0.195964 9.99382 0.0761719 9.94238V9.68555C0.13151 9.71354 0.192383 9.73633 0.258789 9.75391C0.325195 9.77148 0.390951 9.78027 0.456055 9.78027C0.555664 9.78027 0.629232 9.76335 0.676758 9.72949C0.724284 9.69564 0.748047 9.64128 0.748047 9.56641C0.748047 9.49935 0.720703 9.45182 0.666016 9.42383C0.611328 9.39583 0.524089 9.38184 0.404297 9.38184H0.295898V9.15039H0.40625C0.516927 9.15039 0.597656 9.13607 0.648438 9.10742C0.69987 9.07812 0.725586 9.02832 0.725586 8.95801C0.725586 8.84993 0.657878 8.7959 0.522461 8.7959C0.475586 8.7959 0.427734 8.80371 0.378906 8.81934C0.330729 8.83496 0.277018 8.86198 0.217773 8.90039L0.078125 8.69238C0.208333 8.59863 0.363607 8.55176 0.543945 8.55176C0.691732 8.55176 0.808268 8.58171 0.893555 8.6416C0.979492 8.7015 1.02246 8.78483 1.02246 8.8916Z"
        fill="#666666"
      />
    </svg>
  ),
};

export default TextEditorIcon;