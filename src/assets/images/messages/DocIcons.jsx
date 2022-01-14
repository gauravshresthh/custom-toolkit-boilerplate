import React from 'react';

const DocIcons = {
  DocumentIcon: ({ width, height, color }) => (
    <svg
      width={width || '20'}
      height={height || '26'}
      viewBox="0 0 20 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9725 5.61983C19.9449 5.61983 19.9449 5.59229 19.9174 5.56474C19.8898 5.53719 19.8898 5.50964 19.8623 5.48209L15.124 0.165289C15.0964 0.137741 15.0413 0.110193 15.0138 0.0826446C14.9862 0.0826446 14.9862 0.0550964 14.9587 0.0550964C14.9036 0.0275482 14.8209 0 14.7383 0H3.11295C1.40496 0 0 1.40496 0 3.11295V22.2039C0 23.9118 1.40496 25.3168 3.11295 25.3168H16.8871C18.595 25.3168 20 23.9118 20 22.2039V5.81267C20 5.75758 19.9725 5.67493 19.9725 5.61983ZM15.2617 1.87328L18.3196 5.3168H15.2617V1.87328ZM18.9532 22.1763C18.9532 23.3333 18.0441 24.27 16.8871 24.27H3.11295C1.95592 24.27 1.04683 23.3333 1.04683 22.2039V3.0854C1.04683 1.92837 1.98347 1.01928 3.11295 1.01928H14.2149V5.81267C14.2149 6.08815 14.4353 6.33609 14.7383 6.33609H18.9532V22.1763Z"
        fill={color || 'white'}
      />
      <path
        d="M3.71897 6.33589H8.31952C8.59501 6.33589 8.84294 6.11551 8.84294 5.81248C8.84294 5.50945 8.62255 5.28906 8.31952 5.28906H3.71897C3.44349 5.28906 3.19556 5.50945 3.19556 5.81248C3.19556 6.11551 3.44349 6.33589 3.71897 6.33589Z"
        fill={color || 'white'}
      />
      <path
        d="M8.31952 18.9805H3.71897C3.44349 18.9805 3.19556 19.2009 3.19556 19.5039C3.19556 19.7794 3.41594 20.0273 3.71897 20.0273H8.31952C8.59501 20.0273 8.84294 19.8069 8.84294 19.5039C8.84294 19.2284 8.59501 18.9805 8.31952 18.9805Z"
        fill={color || 'white'}
      />
      <path
        d="M3.19556 9.28318C3.19556 9.55866 3.41594 9.8066 3.71897 9.8066H16.0055C16.281 9.8066 16.5289 9.58621 16.5289 9.28318C16.5289 9.0077 16.3085 8.75977 16.0055 8.75977H3.71897C3.44349 8.75977 3.19556 8.98015 3.19556 9.28318Z"
        fill={color || 'white'}
      />
      <path
        d="M16.0055 11.3496H3.71897C3.44349 11.3496 3.19556 11.57 3.19556 11.873C3.19556 12.1485 3.41594 12.3964 3.71897 12.3964H16.0055C16.281 12.3964 16.5289 12.1761 16.5289 11.873C16.5289 11.57 16.3085 11.3496 16.0055 11.3496Z"
        fill={color || 'white'}
      />
      <path
        d="M16.0055 13.9121H3.71897C3.44349 13.9121 3.19556 14.1325 3.19556 14.4355C3.19556 14.711 3.41594 14.9589 3.71897 14.9589H16.0055C16.281 14.9589 16.5289 14.7386 16.5289 14.4355C16.5289 14.1325 16.3085 13.9121 16.0055 13.9121Z"
        fill={color || 'white'}
      />
      <path
        d="M16.0055 16.4746H3.71897C3.44349 16.4746 3.19556 16.695 3.19556 16.998C3.19556 17.2735 3.41594 17.5214 3.71897 17.5214H16.0055C16.281 17.5214 16.5289 17.3011 16.5289 16.998C16.5289 16.7225 16.3085 16.4746 16.0055 16.4746Z"
        fill={color || 'white'}
      />
    </svg>
  ),
  ZipIcons: ({ width, height, color }) => (
    <svg
      width={width || '20'}
      height={height || '28'}
      viewBox="0 0 20 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.278 0H1.65904C0.744775 0 0 0.745123 0 1.65939V25.3989C0 26.3146 0.744775 27.0587 1.65904 27.0587H18.3406C19.2559 27.0587 20 26.3146 20 25.3989V5.13094L15.278 0ZM15.6695 2.48316L17.7392 4.73245H15.6695V2.48316ZM18.6065 25.3989C18.6065 25.5451 18.4868 25.6652 18.3399 25.6652H1.65904C1.51252 25.6652 1.3935 25.5451 1.3935 25.3989V1.65939C1.3935 1.51287 1.51252 1.39419 1.65904 1.39419H10.1554V1.99175H8.35262V2.99824H10.1554V4.97364H8.35262V5.97978H10.1554V7.87374H8.35262V8.87988H10.1554V8.9554V9.01317V10.5031H8.35262V11.5096H10.1554V13.485H8.35262V14.4914H10.1554V16.3851H8.35262V17.3912H9.31665C8.94809 17.4096 8.65471 17.7114 8.65471 18.0838V18.4809H8.66027V21.4909C8.66027 22.2726 9.29646 22.9088 10.0781 22.9088C10.8598 22.9088 11.4956 22.2726 11.4956 21.4909V18.4809H11.4963V18.0838C11.4963 17.6995 11.1845 17.3877 10.8003 17.3877H10.7804V15.8432H12.4357V14.8367H10.7804V12.9431H12.4357V11.9366H10.7804V9.96085H12.4357V8.9547H10.7804V7.33151H12.4357V6.32537H10.7804V4.43141H12.4357V3.42527H10.7804V1.44953H12.4357V1.39384H14.275V5.4292C14.275 5.81342 14.5878 6.12491 14.9724 6.12491H18.6062V25.3989H18.6065ZM10.9833 19.7157V21.3973C10.9833 21.9023 10.5737 22.3109 10.0698 22.3109C9.56549 22.3109 9.15621 21.9023 9.15621 21.3973V19.7157H10.9833Z"
        fill={color || 'white'}
      />
    </svg>
  ),
  PdfIcons: ({ width, height, color }) => (
    <svg
      width={width || '20'}
      height={height || '27'}
      viewBox="0 0 20 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.8372 5.71833L14.2817 0.16276C14.1775 0.0585938 14.0365 0 13.8889 0H2.22219C0.996615 0 0 0.996615 0 2.22224V24.4445C0 25.6701 0.996615 26.6667 2.22224 26.6667H17.7778C19.0034 26.6667 20 25.6701 20 24.4444V6.11109C20 5.96354 19.9414 5.8225 19.8372 5.71833ZM14.4444 1.89672L18.1033 5.55557H15.5555C14.943 5.55557 14.4444 5.05698 14.4444 4.44448V1.89672ZM18.8889 24.4444C18.8889 25.0569 18.3903 25.5555 17.7778 25.5555H2.22224C1.60974 25.5555 1.11115 25.0569 1.11115 24.4444V2.22224C1.11115 1.60974 1.60974 1.11115 2.22224 1.11115H13.3333V4.44448C13.3333 5.67005 14.3299 6.66667 15.5556 6.66667H18.8889V24.4444Z"
        fill={color || 'white'}
      />
      <path
        d="M12.8325 16.3089C12.3181 15.9042 11.8293 15.4881 11.5038 15.1626C11.0806 14.7394 10.7036 14.3292 10.3759 13.9386C10.887 12.3593 11.1111 11.545 11.1111 11.1109C11.1111 9.26685 10.4448 8.88867 9.4444 8.88867C8.68429 8.88867 7.77773 9.28362 7.77773 11.1641C7.77773 11.9931 8.23185 12.9995 9.1319 14.1692C8.91164 14.8414 8.65283 15.6167 8.36205 16.4907C8.22205 16.9101 8.07018 17.2985 7.90955 17.6577C7.77883 17.7158 7.65185 17.7749 7.52924 17.8362C7.08763 18.057 6.66825 18.2555 6.27924 18.44C4.50513 19.2799 3.33325 19.8354 3.33325 20.9324C3.33325 21.7289 4.19862 22.222 4.99992 22.222C6.03289 22.222 7.59268 20.8423 8.732 18.5181C9.91471 18.0515 11.385 17.7059 12.5455 17.4895C13.4754 18.2045 14.5024 18.8887 14.9999 18.8887C16.3774 18.8887 16.6666 18.0922 16.6666 17.4243C16.6666 16.1109 15.1659 16.1109 14.4443 16.1109C14.2203 16.1109 13.6192 16.1771 12.8325 16.3089ZM4.99992 21.1109C4.68252 21.1109 4.46768 20.9612 4.44435 20.9324C4.44435 20.5385 5.61893 19.9819 6.75502 19.4437C6.82716 19.4096 6.90044 19.3753 6.97476 19.3401C6.14034 20.55 5.31513 21.1109 4.99992 21.1109ZM8.88882 11.1641C8.88882 9.99982 9.25018 9.99982 9.4444 9.99982C9.83721 9.99982 9.99997 9.99982 9.99997 11.1109C9.99997 11.3453 9.84372 11.9312 9.55778 12.846C9.12153 12.1743 8.88882 11.5987 8.88882 11.1641ZM9.31471 17.1352C9.34945 17.0387 9.3831 16.941 9.41565 16.8423C9.62179 16.2238 9.80737 15.6682 9.97284 15.168C10.2034 15.4219 10.4519 15.6818 10.7183 15.9482C10.8225 16.0523 11.0807 16.2867 11.4247 16.5802C10.7399 16.7294 10.0113 16.9144 9.31471 17.1352ZM15.5555 17.4244C15.5555 17.674 15.5555 17.7776 15.0401 17.7809C14.8887 17.7483 14.5388 17.5422 14.1069 17.2481C14.2637 17.2308 14.3792 17.2221 14.4443 17.2221C15.2652 17.2221 15.498 17.3023 15.5555 17.4244Z"
        fill={color || 'white'}
      />
    </svg>
  ),
  NoImageLinkFound: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <circle cx="15" cy="15" r="15" fill="#999999" />
      <path
        d="M17.2066 12.7935C19.0737 14.6625 19.0481 17.659 17.2179 19.4994C17.2144 19.5031 17.2104 19.5072 17.2066 19.511L15.1066 21.611C13.2544 23.4631 10.241 23.4629 8.38914 21.611C6.53695 19.7591 6.53695 16.7453 8.38914 14.8935L9.5487 13.7339C9.8562 13.4264 10.3858 13.6308 10.4016 14.0653C10.4219 14.6192 10.5212 15.1756 10.7044 15.7129C10.7665 15.8948 10.7222 16.0961 10.5862 16.232L10.1773 16.641C9.30145 17.5168 9.27398 18.9428 10.1412 19.8272C11.0169 20.7203 12.4563 20.7256 13.3388 19.8431L15.4388 17.7435C16.3198 16.8625 16.3161 15.4386 15.4388 14.5613C15.3232 14.4458 15.2067 14.3562 15.1157 14.2935C15.0513 14.2493 14.9981 14.1907 14.9604 14.1223C14.9227 14.0539 14.9016 13.9776 14.8986 13.8996C14.8862 13.5693 15.0032 13.2291 15.2641 12.9681L15.9221 12.3102C16.0946 12.1376 16.3652 12.1164 16.5653 12.2561C16.7944 12.4161 17.009 12.5959 17.2066 12.7935V12.7935ZM21.6108 8.38904C19.7589 6.53711 16.7455 6.53686 14.8933 8.38904L12.7933 10.489C12.7896 10.4928 12.7855 10.4969 12.7821 10.5006C10.9519 12.341 10.9263 15.3375 12.7933 17.2065C12.9909 17.4041 13.2055 17.5839 13.4346 17.7439C13.6347 17.8835 13.9054 17.8623 14.0779 17.6898L14.7358 17.0318C14.9968 16.7709 15.1137 16.4306 15.1014 16.1004C15.0984 16.0224 15.0772 15.9461 15.0395 15.8777C15.0018 15.8093 14.9487 15.7507 14.8843 15.7065C14.7933 15.6438 14.6768 15.5541 14.5611 15.4387C13.6838 14.5614 13.6802 13.1375 14.5611 12.2565L16.6611 10.1568C17.5436 9.27435 18.983 9.27967 19.8588 10.1728C20.726 11.0571 20.6985 12.4832 19.8227 13.359L19.4137 13.768C19.2778 13.9039 19.2334 14.1052 19.2955 14.2871C19.4787 14.8244 19.5781 15.3808 19.5983 15.9346C19.6142 16.3692 20.1437 16.5736 20.4512 16.2661L21.6108 15.1065C23.463 13.2547 23.463 10.2409 21.6108 8.38904V8.38904Z"
        fill="white"
      />
    </svg>
  ),
  MP3: ({ width, height, color = '#999999' }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="20"
      viewBox="0 0 15 20"
      fill="none"
    >
      <path
        d="M14.5833 0H5.41668C5.30586 0 5.2 0.0441797 5.12168 0.12168L0.12168 5.12168C0.0441796 5.2 0 5.30582 0 5.41668V19.5834C0 19.8133 0.18668 20 0.41668 20H14.5834C14.8134 20 15 19.8133 15 19.5833V0.41668C15 0.18668 14.8133 0 14.5833 0ZM14.1667 19.1667H0.83332V5.58918L5.58918 0.83332H14.1667V19.1667Z"
        fill={color}
      />
      <path
        d="M5.41668 0C5.18668 0 5 0.18668 5 0.41668V5H0.41668C0.18668 5 0 5.18668 0 5.41668C0 5.64668 0.18668 5.83336 0.41668 5.83336H5.41668C5.64668 5.83336 5.83336 5.64668 5.83336 5.41668V0.41668C5.83332 0.18668 5.64668 0 5.41668 0Z"
        fill={color}
      />
      <path
        d="M10.6483 10.9036L5.64832 7.57026C5.51832 7.48443 5.35582 7.47693 5.22 7.54943C5.085 7.62193 5 7.76276 5 7.91693V14.5836C5 14.7378 5.085 14.8786 5.22 14.9511C5.28168 14.9836 5.34918 15.0003 5.41668 15.0003C5.4975 15.0003 5.5775 14.977 5.6475 14.9303L10.6475 11.597C10.7633 11.5195 10.8333 11.3895 10.8333 11.2503C10.8333 11.1111 10.7633 10.9811 10.6483 10.9036ZM5.83332 13.8053V8.69525L9.66582 11.2503L5.83332 13.8053Z"
        fill={color}
      />
    </svg>
  ),
};

export default DocIcons;