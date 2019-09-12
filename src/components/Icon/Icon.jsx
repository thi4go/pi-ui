import React from "react";
import PropTypes from "prop-types";

const sizes = {
  sm: "7",
  md: "16",
  lg: "20",
  xlg: "30"
};

const icons = (type, backgroundColor, iconColor) => {
  return {
    alert: (
      <>
        <path
          d="M225.24,24.86c-110.46,0-200,89.55-200,200s89.54,200,200,200,200-89.55,200-200S335.69,24.86,225.24,24.86Z"
          fill={backgroundColor}
        />
        <rect fill="none" />
        <path
          d="M188.2,313c0-21.92,15.7-36.84,36.8-36.84s36.8,14.92,36.8,36.84-15.7,37.47-36.8,37.47S188.2,335,188.2,313Zm11.56-164.61L198,99.49H252l-1.8,48.94-7.5,103.67H207.26Z"
          fill={iconColor}
        />
      </>
    ),
    chain: (
      <>
        <path
          fill={iconColor}
          d="M145.56,325.78a20,20,0,0,1-28.28,0L74.81,283.32a20,20,0,0,1,0-28.29l95.46-95.46a20,20,0,0,1,28.28,0L241,202a20,20,0,0,1,0,28.28l-3.52,3.52,35.36,35.35,3.52-3.51a70,70,0,0,0,0-99l-3.58-3.57,0,0-35.36-35.36v0l-3.54-3.53a70,70,0,0,0-99,0L39.46,219.68a70,70,0,0,0,0,99l42.46,42.47a70,70,0,0,0,99,0l21.19-21.2-35.36-35.35Z"
        />
        <path
          fill={iconColor}
          d="M375.33,88.86a70,70,0,0,0-99,0L255.1,110.09l35.36,35.36,21.23-21.23a20,20,0,0,1,28.29,0l35.21,35.21a20,20,0,0,1,0,28.29l-95.46,95.45a20,20,0,0,1-28.28,0L216.23,248a20,20,0,0,1,0-28.28l3.52-3.52-35.36-35.35-3.51,3.51a70,70,0,0,0,0,99l35.21,35.21c.26.26.53.5.79.75l3,3,.13-.14a70,70,0,0,0,95.13-3.56l95.45-95.46a70,70,0,0,0,0-99Z"
        />
      </>
    ),
    checkmark: (
      <>
        <circle fill={backgroundColor} cx="225" cy="225" r="200" />
        <path
          fill={iconColor}
          d="M307.51,126Q250.23,183.4,192.8,240.68l-54.49-45.5L101,240l75.09,62.57,20.46,17.08,18.9-18.9c44.45-44.55,89-88.85,133.49-133.48Z"
        />
      </>
    ),
    discuss: (
      <>
        <g>
          <path
            fill={backgroundColor}
            d="M206.52,336.2a175.27,175.27,0,0,1-104-192.8A150,150,0,0,0,69.05,381.49L24.64,425h150a149.6,149.6,0,0,0,129.93-75H274.64A174,174,0,0,1,206.52,336.2Z"
          />
        </g>
        <path
          fill={iconColor}
          d="M274.64,24.92a150,150,0,0,0,0,300.08h150l-44.4-43.51A150,150,0,0,0,274.64,24.92Zm-75,175a25,25,0,1,1,25-25A25,25,0,0,1,199.64,199.92Zm75,0a25,25,0,1,1,25-25A25,25,0,0,1,274.64,199.92Zm75,0a25,25,0,1,1,25-25A25,25,0,0,1,349.64,199.92Z"
        />
        <g>
          <circle
            fill={backgroundColor}
            cx="274.64"
            cy="174.92"
            r="25"
            transform="translate(-32.84 67.78) rotate(-13.28)"
          />
        </g>
        <g>
          <circle
            fill={backgroundColor}
            cx="199.64"
            cy="174.92"
            r="25"
            transform="translate(-34.85 50.55) rotate(-13.28)"
          />
        </g>
        <g>
          <circle
            fill={backgroundColor}
            cx="349.64"
            cy="174.92"
            r="25"
            transform="translate(-30.83 85.01) rotate(-13.28)"
          />
        </g>
      </>
    ),
    down: (
      <>
        <path
          fill={backgroundColor}
          d="M39,299l.48,1.17c.43,1.07.86,2.14,1.3,3.2a200.81,200.81,0,0,0,56.49,76l.57.48c.65.54,1.31,1.06,2,1.59l1.86,1.5c.22.17.44.06.65.23A198.76,198.76,0,0,0,225,425h.1A199.74,199.74,0,0,0,425,225.17C425,114.58,335.46,25,225,25A199.78,199.78,0,0,0,58.35,114.54c-.15.23-.29.48-.44.71A200.73,200.73,0,0,0,39,299Z"
        />
        <polygon
          fill={iconColor}
          points="140.92 189.26 203.18 251.39 203.18 101.03 247.63 101.03 247.63 251.39 309.49 189.26 340.82 220.73 225.05 336.57 109.39 220.73 140.92 189.26"
        />
      </>
    ),
    info: (
      <>
        <path
          id="Path_763"
          data-name="Path 763"
          d="M930.782,3.4C808.266,3.4,705.8,105.868,705.8,228.383S808.266,453.367,930.782,453.367,1155.766,350.9,1155.766,228.383C1157.991,108.1,1053.3,3.4,930.782,3.4Zm24.5,372H908.5V174.922h46.778Zm-24.5-236.121c-17.819,0-28.959-11.138-28.959-26.731S915.188,85.82,930.782,85.82c17.821,0,28.959,11.138,28.959,26.731C961.967,128.143,948.6,139.281,930.782,139.281Z"
          transform="translate(-705.799 -3.4)"
          fill={iconColor}
        />
      </>
    ),
    right: (
      <>
        <path
          fill={backgroundColor}
          d="M299,411l1.17-.48,3.2-1.3a200.81,200.81,0,0,0,76-56.49l.48-.57c.54-.65,1.06-1.31,1.59-2l1.5-1.86c.17-.22.06-.44.23-.65A198.76,198.76,0,0,0,425,225v-.1A199.74,199.74,0,0,0,225.17,25C114.58,25,25,114.54,25,225a199.78,199.78,0,0,0,89.54,166.65l.71.44A200.73,200.73,0,0,0,299,411Z"
        />
        <polygon
          fill={iconColor}
          points="189.26 309.08 251.39 246.82 101.03 246.82 101.03 202.37 251.39 202.37 189.26 140.51 220.73 109.18 336.57 224.95 220.73 340.61 189.26 309.08"
        />
      </>
    ),
    proposal: (
      <>
        <g>
          <polygon
            fill={backgroundColor}
            points="49.74 25.01 24.74 75 25 75 74.73 75 49.74 25.01"
          />
        </g>
        <rect fill={iconColor} x="125" y="225" width="275" height="25" />
        <rect fill={iconColor} x="125" y="275" width="137" height="25" />
        <polygon
          fill={iconColor}
          points="25 425 75 425 75 75 74.73 75 25 75 25 75.01 25 425"
        />
        <g>
          <path
            fill={backgroundColor}
            d="M100,338.43V425l67.83,0H425V25H100ZM125,125H400v25H125Zm0,50H400v25H125Zm0,50H400v25H125Zm0,50H262v25H125Z"
          />
        </g>
        <rect fill={iconColor} x="125" y="175" width="275" height="25" />
        <rect fill={iconColor} x="125" y="125" width="275" height="25" />
      </>
    ),
    questionmark: (
      <>
        <path
          fill={backgroundColor}
          d="M275,200v0a49.71,49.71,0,0,0-8.94-28.48,50.24,50.24,0,0,0-41.32-21.58,50.06,50.06,0,1,1,0,100.12A50.16,50.16,0,0,0,275,200Z"
        />
        <path
          fill={backgroundColor}
          d="M224.74,25c-110.46,0-200,89.55-200,200s89.54,200,200,200h200l-59.21-58a199.39,199.39,0,0,0,59.21-142C424.74,114.53,335.19,25,224.74,25ZM237,350H212V325h25Zm0-75.59V300H212V250h12.74a50.06,50.06,0,1,0,0-100.12c-27.7,0-50.23,23.12-50.23,50.12h-25c0-41,33.74-75.12,75.23-75.12A75.28,75.28,0,0,1,237,274.41Z"
        />
        <g>
          <path
            fill={iconColor}
            d="M224.74,124.88c-41.49,0-75.23,34.12-75.23,75.12h25c0-27,22.53-50.12,50.23-50.12a50.24,50.24,0,0,1,41.32,21.58A49.71,49.71,0,0,1,275,199.94v0a50.16,50.16,0,0,1-50.26,50H212v50h25V274.41a75.28,75.28,0,0,0-12.26-149.53Z"
          />
        </g>
        <g>
          <rect fill={iconColor} x="212" y="325" width="25" height="25" />
        </g>
      </>
    ),
    left: (
      <>
        <path
          fill={backgroundColor}
          d="M151,39l-1.17.48-3.2,1.3a200.81,200.81,0,0,0-76,56.49l-.48.57c-.54.65-1.06,1.31-1.59,2s-1,1.23-1.5,1.86c-.17.22-.06.44-.23.65A198.76,198.76,0,0,0,25,225v.1A199.74,199.74,0,0,0,224.83,425C335.42,425,425,335.46,425,225A199.78,199.78,0,0,0,335.46,58.35l-.71-.44A200.73,200.73,0,0,0,151,39Z"
        />
        <polygon
          fill={iconColor}
          points="260.74 140.92 198.61 203.18 348.97 203.18 348.97 247.63 198.61 247.63 260.74 309.49 229.27 340.82 113.42 225.05 229.27 109.39 260.74 140.92"
        />
      </>
    ),
    star: (
      <>
        <polygon
          fill={iconColor}
          points="170.4 242.02 165.62 256.74 170.4 242.02 170.4 242.02"
        />
        <polygon
          fill={iconColor}
          points="136.82 345.5 224.74 281.6 136.84 345.43 136.82 345.5"
        />
        <polygon
          fill={iconColor}
          points="312.65 345.44 283.85 256.74 312.63 345.43 312.65 345.44"
        />
        <polygon
          fill={iconColor}
          points="279.07 242.02 366.99 178 279.07 242.01 279.07 242.02"
        />
        <path
          fill={backgroundColor}
          d="M224.74,25c-110.46,0-200,89.54-200,200s89.54,200,200,200,200-89.55,200-200S335.19,25,224.74,25Zm54.33,217,4.78,14.72,28.8,88.7h0l0,.07-87.91-63.9-87.92,63.9,0-.07h0l28.8-88.7L170.4,242,82.49,178H191.16L224.74,74.65,258.32,178H367Z"
        />
        <g>
          <polygon
            fill={iconColor}
            points="224.74 74.65 191.16 178 82.49 178 170.4 242.02 170.4 242.02 165.62 256.74 136.82 345.44 136.84 345.43 224.74 281.6 312.65 345.5 312.63 345.43 283.85 256.74 279.07 242.02 279.07 242.01 366.99 178 258.32 178 224.74 74.65"
          />
        </g>
      </>
    ),
    timer: (
      <>
        <path
          fill={backgroundColor}
          d="M56.29,255A168.71,168.71,0,1,0,239.06,86.85V58.09h28.13v-30H182.81v30h28.13V86.85A168.71,168.71,0,0,0,56.29,255Zm69.3,99.4A140.58,140.58,0,1,1,225,395.55,139.65,139.65,0,0,1,125.59,354.37Z"
        />
        <path
          fill={iconColor}
          d="M337.5,255H225V142.47A112.5,112.5,0,1,0,337.5,255Z"
        />
      </>
    ),
    transaction: (
      <>
        <g>
          <g>
            <rect
              fill={backgroundColor}
              x="25"
              y="200.02"
              width="325"
              height="174.95"
            />
          </g>
          <rect
            fill={iconColor}
            x="100"
            y="75.02"
            width="325"
            height="174.95"
          />
        </g>
      </>
    ),
    trash: (
      <>
        <polygon
          fill={backgroundColor}
          points="80.59 150 100.24 425 150.88 425 179.56 425 350.24 425 369.89 150 159.91 150 131.22 150 80.59 150"
        />
        <g>
          <polygon
            fill={backgroundColor}
            points="275 108.69 275 49.68 275 42.18 275 25 175 25 175 42.18 175 49.68 175 108.69 200 108.69 200 50 250 50 250 108.69 275 108.69"
          />
        </g>
        <g>
          <rect fill={backgroundColor} x="50" y="100" width="350" height="25" />
        </g>
      </>
    ),
    up: (
      <>
        <path
          fill={backgroundColor}
          d="M411,151c-.16-.4-.32-.78-.48-1.17-.43-1.07-.86-2.14-1.3-3.2a200.81,200.81,0,0,0-56.49-76l-.57-.48c-.65-.54-1.31-1.06-2-1.59l-1.86-1.5c-.22-.17-.44-.06-.65-.23A198.76,198.76,0,0,0,225,25h-.1A199.74,199.74,0,0,0,25,224.83C25,335.42,114.54,425,225,425a199.78,199.78,0,0,0,166.65-89.54c.15-.23.29-.48.44-.71A200.73,200.73,0,0,0,411,151Z"
        />
        <polygon
          fill={iconColor}
          points="309.08 260.74 246.82 198.61 246.82 348.97 202.37 348.97 202.37 198.61 140.51 260.74 109.18 229.27 224.95 113.42 340.61 229.27 309.08 260.74"
        />
      </>
    ),
    user: (
      <>
        <g>
          <path
            fill={iconColor}
            d="M278.22,232a87.51,87.51,0,1,0-106,0A200.08,200.08,0,0,0,67.85,301.52a175.2,175.2,0,0,0,314.78,0A200.1,200.1,0,0,0,278.22,232Z"
          />
        </g>
        <path
          fill={backgroundColor}
          d="M225.24,24.86c-110.45,0-200,89.54-200,200s89.54,200,200,200,200-89.54,200-200S335.69,24.86,225.24,24.86ZM349,348.59A175.2,175.2,0,0,1,67.85,301.52,200.08,200.08,0,0,1,172.27,232a87.5,87.5,0,1,1,106,0,200.1,200.1,0,0,1,104.41,69.51A175.33,175.33,0,0,1,349,348.59Z"
        />
      </>
    ),
    wallet: (
      <>
        <g>
          <path
            fill={backgroundColor}
            d="M37.86,92.57c0-.39.11-.77.18-1.16C38,91.8,37.91,92.18,37.86,92.57Z"
          />
          <g>
            <path
              fill={iconColor}
              d="M69.71,118.16H358.83V96.77A32.23,32.23,0,0,0,326.7,64.64h-257A32.24,32.24,0,0,0,38,91.4,32.24,32.24,0,0,0,69.71,118.16Z"
            />
          </g>
          <path
            fill={backgroundColor}
            d="M37.72,93.89c0-.34.06-.68.1-1C37.78,93.21,37.75,93.55,37.72,93.89Z"
          />
          <path
            fill={backgroundColor}
            d="M37.62,95.29c0-.26,0-.51.05-.77C37.65,94.78,37.63,95,37.62,95.29Z"
          />
          <g>
            <path
              fill={iconColor}
              d="M345.48,251.79a66.93,66.93,0,0,0,66.94,66.93V184.85A66.94,66.94,0,0,0,345.48,251.79Z"
            />
          </g>
        </g>
        <path
          fill={backgroundColor}
          d="M380.29,118.16H69.71A32.24,32.24,0,0,1,38,91.4h0c-.07.39-.13.77-.18,1.16,0,.1,0,.21,0,.31,0,.33-.07.67-.1,1s0,.42,0,.63,0,.51-.05.77c0,.49,0,1,0,1.48V353.23a32.23,32.23,0,0,0,32.13,32.13H380.29a32.23,32.23,0,0,0,32.13-32.13V318.72a66.94,66.94,0,1,1,0-133.87V150.29A32.23,32.23,0,0,0,380.29,118.16Z"
        />
      </>
    ),
    like: (
      <>
        <g
          id="Group_3169"
          data-name="Group 3169"
          transform="translate(-1432.57 13987) rotate(180)">
          <path
            fill={iconColor}
            id="Path_912"
            data-name="Path 912"
            d="M73.457,0H14.692C6.613,0,0,6.859,0,15.315V291c0,8.452,6.584,15.313,14.692,15.313H73.457c8.108,0,14.692-6.862,14.692-15.313V15.315C88.149,6.859,81.535,0,73.457,0Z"
            transform="translate(-1432.57 13843.311) rotate(180)"
          />
          <path
            fill={backgroundColor}
            id="Path_913"
            data-name="Path 913"
            d="M295.788,143.689c-2.366-.418-113.15,0-113.15,0L198.112,99.68c10.676-30.4,3.764-76.807-25.861-93.307C162.6,1,149.127-1.7,138.262,1.153a24.638,24.638,0,0,0-14.972,11.7c-3.753,6.627-3.366,14.363-4.7,21.712C115.2,53.2,106.749,70.922,93.667,84.223,70.856,107.415,0,174.319,0,174.319V419.371H244.857c33.04.02,54.693-38.444,38.4-68.489,19.425-12.97,26.068-40.288,14.692-61.263,19.425-12.97,26.068-40.288,14.692-61.262C346.154,205.98,334.949,150.594,295.788,143.689Z"
            transform="translate(-1550.103 13987) rotate(180)"
          />
        </g>
      </>
    ),
    dislike: (
      <>
        <g
          id="Group_3169"
          data-name="Group 3169"
          transform="translate(1882.57 -13537)">
          <path
            fill={iconColor}
            id="Path_912"
            data-name="Path 912"
            d="M73.457,0H14.692C6.613,0,0,6.859,0,15.315V291c0,8.452,6.584,15.313,14.692,15.313H73.457c8.108,0,14.692-6.862,14.692-15.313V15.315C88.149,6.859,81.535,0,73.457,0Z"
            transform="translate(-1432.57 13843.311) rotate(180)"
          />
          <path
            fill={backgroundColor}
            id="Path_913"
            data-name="Path 913"
            d="M295.788,143.689c-2.366-.418-113.15,0-113.15,0L198.112,99.68c10.676-30.4,3.764-76.807-25.861-93.307C162.6,1,149.127-1.7,138.262,1.153a24.638,24.638,0,0,0-14.972,11.7c-3.753,6.627-3.366,14.363-4.7,21.712C115.2,53.2,106.749,70.922,93.667,84.223,70.856,107.415,0,174.319,0,174.319V419.371H244.857c33.04.02,54.693-38.444,38.4-68.489,19.425-12.97,26.068-40.288,14.692-61.263,19.425-12.97,26.068-40.288,14.692-61.262C346.154,205.98,334.949,150.594,295.788,143.689Z"
            transform="translate(-1550.103 13987) rotate(180)"
          />
        </g>
      </>
    ),
    link: (
      <>
        <g
          id="Group_3171"
          data-name="Group 3171"
          transform="translate(2018 -14468)">
          <path
            fill={iconColor}
            id="Path_48"
            data-name="Path 48"
            d="M223.282,91.443a8.226,8.226,0,0,0-11.645,0l-21.861,21.876-32.968,32.99a8.257,8.257,0,0,0,.005,11.645l2.143,2.141,16.26-16.277,16.443,16.455L175.4,176.554l2.144,2.145a8.421,8.421,0,0,0,11.636,0L244,123.834a8.253,8.253,0,0,0,0-11.646Z"
            transform="translate(-1939.174 14511.719)"
          />
          <path
            fill={iconColor}
            id="Path_46"
            data-name="Path 46"
            d="M224.995,0C100.736,0,0,100.742,0,225S100.736,450,224.995,450,450,349.256,450,225,349.254,0,224.995,0ZM338.046,184.953l-55.029,55.029a31.6,31.6,0,0,1-44.685,0l-2.156-2.156-5.859,5.859,2.151,2.151a31.636,31.636,0,0,1,0,44.689l-55.022,55.029a31.606,31.606,0,0,1-44.7,0l-20.8-20.8a31.634,31.634,0,0,1,0-44.685l55.034-55.026a31.607,31.607,0,0,1,44.694,0l2.148,2.148,5.859-5.859-2.148-2.148a31.637,31.637,0,0,1-.008-44.685l55.034-55.029a31.6,31.6,0,0,1,44.694,0l20.8,20.81A31.636,31.636,0,0,1,338.046,184.953Z"
            transform="translate(-2018.001 14468)"
          />
          <path
            fill={iconColor}
            id="Path_954"
            data-name="Path 954"
            d="M223.282,91.443a8.226,8.226,0,0,0-11.645,0l-21.861,21.876-32.968,32.99a8.257,8.257,0,0,0,.005,11.645l2.143,2.141,16.26-16.277,16.443,16.455L175.4,176.554l2.144,2.145a8.421,8.421,0,0,0,11.636,0L244,123.834a8.253,8.253,0,0,0,0-11.646Z"
            transform="matrix(-1, -0.017, 0.017, -1, -1650.743, 14892.256)"
          />
        </g>
      </>
    ),
    sign: (
      <>
        <g>
          <rect
            fill="none"
            id="canvas_background"
            height="452"
            width="452"
            y="-1"
            x="-1"
          />
        </g>
        <g>
          <g stroke="null" id="Group_2911">
            <g stroke="null" id="Group_2899">
              <rect
                stroke="null"
                x="25.219912"
                y="91.174419"
                fill="none"
                height="333.813057"
                width="364.384087"
                id="Rectangle_1696"
              />
              <circle
                stroke="null"
                fill={iconColor}
                r="187.582779"
                cy="230.849941"
                cx="224.027423"
                id="Ellipse_17"
              />
              <g stroke="null" id="svg_1">
                <g stroke="null" id="Group_2895">
                  <path
                    stroke="null"
                    fill={backgroundColor}
                    d="m201.732025,96.875826l-108.940847,0a186.827338,187.974092 0 0 0 -22.634195,26.888021l131.575043,0l0,-26.888021z"
                    id="Path_880"
                  />
                  <path
                    stroke="null"
                    fill={backgroundColor}
                    d="m277.172816,96.875826l0,26.888021l100.099678,0a187.468874,188.619566 0 0 0 -22.634195,-26.888021l-77.465483,0z"
                    id="Path_881"
                  />
                  <path
                    stroke="null"
                    fill={backgroundColor}
                    d="m343.632533,285.091971l59.42228,0a187.128058,188.276658 0 0 0 5.854017,-26.888021l-65.296345,0l0.020048,26.888021z"
                    id="Path_882"
                  />
                  <path
                    stroke="null"
                    fill={backgroundColor}
                    d="m204.138647,285.091971l73.034874,0l0,-26.847679l-238.571234,0a186.446426,187.590842 0 0 0 5.854017,26.888021l159.782582,0l-0.10024,-0.040342z"
                    id="Path_883"
                  />
                  <path
                    stroke="null"
                    fill={backgroundColor}
                    d="m143.512938,177.560059l0,26.888021l265.415509,0a186.586762,187.732039 0 0 0 -5.854017,-26.888021l-259.561493,0z"
                    id="Path_884"
                  />
                  <path
                    stroke="null"
                    fill={backgroundColor}
                    d="m330.639704,338.928525l-176.422425,0l0,26.888021l200.480028,0a187.468874,188.619566 0 0 0 22.634195,-26.888021l-46.631655,0l-0.060144,0z"
                    id="Path_885"
                  />
                  <path
                    stroke="null"
                    fill="#fff"
                    d="m383.386822,244.790354l-79.470283,0l0,53.796212l79.470283,0l0,-53.796212z"
                    id="Path_886"
                  />
                  <path
                    stroke="null"
                    fill="#fff"
                    d="m116.807393,164.085192l-67.902586,0a186.446426,187.590842 0 0 0 -11.828322,53.796212l79.710859,0l0.020048,-53.796212z"
                    id="Path_887"
                  />
                  <path
                    stroke="null"
                    fill="#fff"
                    d="m170.256661,137.157587l80.192011,0l0,-53.735699l-80.192011,0l0,53.796212l0,-0.060513z"
                    id="Path_888"
                  />
                  <path
                    stroke="null"
                    fill="#fff"
                    d="m127.454958,376.930957l0,-51.45637l-65.837641,0a188.030218,189.184355 0 0 0 46.330935,53.796212l19.526755,0l-0.020048,-2.339843z"
                    id="Path_889"
                  />
                </g>
                <g stroke="null" id="Group_2898">
                  <rect
                    stroke="null"
                    x="169.948549"
                    y="125.733454"
                    fill={backgroundColor}
                    transform="matrix(14.176078744661579,14.263092071914887,-14.176078744661579,14.263092071914887,-259.08860316419475,-4189.664672000048) "
                    height="15.71"
                    width="4"
                    id="Rectangle_1697"
                  />
                  <g stroke="null" id="Group_2897">
                    <g stroke="null" id="Group_2896">
                      <path
                        stroke="null"
                        fill="#fff"
                        d="m116.649316,337.340928l85.063676,-28.521876l-56.7158,-57.043753l-28.347876,85.565629z"
                        id="Path_890"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </>
    ),
    world: (
      <>
        <g>
          <rect
            fill="none"
            id="canvas_background"
            height="452"
            width="452"
            y="-1"
            x="-1"
          />
        </g>
        <g>
          <g stroke="null" id="world">
            <g stroke="null" id="Group_83">
              <path
                stroke="null"
                fill={iconColor}
                d="m397.50306,112.058943l-6.215287,1.924111l-33.083854,2.867302l-9.342232,14.562878l-6.717142,-2.075021l-26.328108,-23.202512l-3.860426,-12.072852l-5.095763,-12.865133l-16.561229,-14.487422l-19.533758,-3.772766l-0.424647,8.790545l19.302132,18.222461l9.342232,10.752384l-10.50036,5.357328l-8.570147,-2.452298l-12.816616,-5.244145l0.424647,-10.111013l-16.831459,-6.753252l-5.597618,23.768427l-16.947272,3.772766l1.659983,13.280137l22.120243,4.150043l3.860426,-21.202946l18.259817,2.640936l8.492938,4.866868l13.279867,0l9.303628,18.222461l24.706729,24.485253l-1.8144,9.507371l-19.9198,-2.490026l-34.396399,16.977448l-24.783938,29.0503l-3.242758,12.865133l-8.878981,0l-16.561229,-7.545532l-16.097978,7.545532l3.860426,16.600171l6.987372,-7.885081l12.31476,-0.377277l-0.849294,14.902427l10.191526,2.90503l10.191526,11.318299l16.638438,-4.565047l18.993298,2.942758l22.081639,5.81006l11.002215,1.282741l18.684464,20.712486l36.056383,20.712486l-23.162559,43.537722l-24.629521,11.318299l-9.342232,24.900257l-35.631736,23.24024l-3.860426,13.39332a207.266295,202.559817 0 0 0 123.533646,-309.819561l0.308834,-0.264094z"
                id="Path_60"
              />
              <path
                stroke="null"
                fill={iconColor}
                d="m248.91523,330.917115l-15.132872,-27.390283l13.858931,-28.258019l-13.858931,-4.03686l-15.441706,-15.279703l-34.512212,-7.545532l-11.581279,-23.428878l0,13.88378l-5.134367,0l-29.725283,-39.425407l0,-32.257151l-21.811409,-34.633994l-34.743838,6.036426l-23.162559,0l-11.581279,-7.545532l14.978455,-11.582392l-14.93985,3.357762a207.266295,202.559817 0 0 0 179.046578,305.065875a217.264799,212.331282 0 0 0 26.057878,-1.7732l-2.316256,-24.673891s9.535253,-36.482649 9.535253,-37.727662s-9.535253,-32.785338 -9.535253,-32.785338z"
                id="Path_61"
              />
              <path
                stroke="null"
                fill={iconColor}
                d="m94.536773,87.49824l36.867072,-5.055507l16.985876,-9.092367l19.302132,5.395056l30.535973,-1.660017l10.461756,-16.071984l15.441706,2.452298l37.060094,-3.39549l9.882692,-11.016477l14.399391,-9.394188l20.383052,2.980485l7.412019,-1.094102a206.880252,202.182541 0 0 0 -248.225419,54.290106l0,0l29.493658,-8.337813zm109.481693,-36.935381l21.193741,-11.318299l13.627305,7.545532l9.9599,6.413703l-18.800277,1.810928l-8.492938,-5.357328l-17.487732,0.905464zm-50.571586,-5.734605l9.342232,3.772766l29.648075,-4.67823l6.678538,11.318299l-28.258321,7.243711l-13.511492,-7.771898s13.279867,-8.375541 13.588701,-10.790111l-17.487732,0.905464z"
                id="Path_62"
              />
            </g>
          </g>
        </g>
      </>
    ),
    blocked: (
      <>
        <g
          id="Group_3170"
          data-name="Group 3170"
          transform="translate(-231 -2136)">
          <g
            id="Path_954"
            data-name="Path 954"
            transform="translate(231 2136)"
            fill="none">
            <circle
              cx="225"
              cy="225"
              r="220"
              stroke={iconColor}
              strokeWidth="10"
              fill={backgroundColor}
            />
          </g>
          <g
            id="Group_3169"
            data-name="Group 3169"
            transform="translate(380 2285)">
            <line
              id="Line_33"
              data-name="Line 33"
              x2="152.55"
              y2="152.55"
              fill="none"
              stroke={iconColor}
              strokeWidth="10"
            />
            <line
              id="Line_34"
              data-name="Line 34"
              x2="152.55"
              y2="152.55"
              transform="translate(152.55) rotate(90)"
              fill="none"
              stroke={iconColor}
              strokeWidth="10"
            />
          </g>
        </g>
      </>
    ),
    edit: (
      <>
        <rect fill="none" width="450" height="450" />
        <polygon
          fill={iconColor}
          points="343.9 381.15 68.85 381.15 68.85 106.17 237.77 106.17 262.77 81.17 43.85 81.17 43.85 406.15 368.9 406.15 368.9 187.16 343.9 212.16 343.9 381.15"
        />
        <polygon
          fill="#c4cbd2"
          points="353.12 61.53 335.44 43.85 149.03 230.26 131.35 318.65 140.65 272.14 177.86 309.35 131.35 318.65 219.74 300.97 166.71 247.94 353.12 61.53"
        />
        <rect
          fill={backgroundColor}
          x="154.62"
          y="143.75"
          width="263.62"
          height="75"
          transform="translate(-44.27 255.62) rotate(-45)"
        />
        <polygon
          fill={backgroundColor}
          points="140.65 272.14 131.35 318.65 177.86 309.35 140.65 272.14"
        />
      </>
    ),
    expand: (
      <>
        <defs>
          <style>{`.cls-1{fill:${iconColor};}.cls-2{fill:${backgroundColor};}.cls-3{fill:none;}`}</style>
        </defs>
        <title>expand</title>
        <g id="_Rectangle_" data-name="&lt;Rectangle&gt;">
          <rect className="cls-1" x="87.5" y="75" width="300" height="300" />
        </g>
        <rect
          id="_Rectangle_2"
          data-name="&lt;Rectangle&gt;"
          className="cls-2"
          x="12.56"
          y="102.7"
          width="230.35"
          height="25"
          transform="translate(118.87 -56.58) rotate(45)"
        />
        <rect
          id="_Rectangle_3"
          data-name="&lt;Rectangle&gt;"
          className="cls-2"
          x="32.39"
          y="19.87"
          width="100"
          height="25"
        />
        <rect
          id="_Rectangle_4"
          data-name="&lt;Rectangle&gt;"
          className="cls-2"
          x="-5.1"
          y="57.36"
          width="100"
          height="25"
          transform="translate(114.76 24.97) rotate(90)"
        />
        <rect
          id="_Rectangle_5"
          data-name="&lt;Rectangle&gt;"
          className="cls-2"
          x="12.55"
          y="322.31"
          width="230.35"
          height="25"
          transform="translate(-199.33 188.38) rotate(-45)"
        />
        <rect
          id="_Rectangle_6"
          data-name="&lt;Rectangle&gt;"
          className="cls-2"
          x="-5.1"
          y="367.65"
          width="100"
          height="25"
          transform="translate(-335.25 425.05) rotate(-90)"
        />
        <rect
          id="_Rectangle_7"
          data-name="&lt;Rectangle&gt;"
          className="cls-2"
          x="32.4"
          y="405.14"
          width="100"
          height="25"
        />
        <rect
          id="_Rectangle_8"
          data-name="&lt;Rectangle&gt;"
          className="cls-2"
          x="232.16"
          y="322.31"
          width="230.35"
          height="25"
          transform="translate(356.2 817.17) rotate(-135)"
        />
        <rect
          id="_Rectangle_9"
          data-name="&lt;Rectangle&gt;"
          className="cls-2"
          x="342.68"
          y="405.14"
          width="100"
          height="25"
          transform="translate(785.36 835.28) rotate(-180)"
        />
        <rect
          id="_Rectangle_10"
          data-name="&lt;Rectangle&gt;"
          className="cls-2"
          x="380.18"
          y="367.64"
          width="100"
          height="25"
          transform="translate(50.03 810.32) rotate(-90)"
        />
        <rect className="cls-3" width="450" height="450" />
        <rect
          id="_Rectangle_11"
          data-name="&lt;Rectangle&gt;"
          className="cls-2"
          x="232.17"
          y="102.7"
          width="230.35"
          height="25"
          transform="translate(674.41 -48.95) rotate(135)"
        />
        <rect
          id="_Rectangle_12"
          data-name="&lt;Rectangle&gt;"
          className="cls-2"
          x="380.17"
          y="57.36"
          width="100"
          height="25"
          transform="translate(500.03 -360.31) rotate(90)"
        />
        <rect
          id="_Rectangle_13"
          data-name="&lt;Rectangle&gt;"
          className="cls-2"
          x="342.68"
          y="19.86"
          width="100"
          height="25"
          transform="translate(785.35 64.73) rotate(180)"
        />
      </>
    ),
    mail: (
      <>
        <g id="Group_2917" data-name="Group 2917" transform="translate(3750)">
          <rect
            id="Rectangle_1759"
            data-name="Rectangle 1759"
            width="400"
            height="58.515"
            transform="translate(-3724.999 74.999)"
            fill={backgroundColor}
          />
          <rect
            id="Rectangle_1760"
            data-name="Rectangle 1760"
            width="400"
            height="275.002"
            transform="translate(-3724.999 99.999)"
            fill={iconColor}
          />
          <path
            id="Path_893"
            data-name="Path 893"
            d="M-3325,100.369-3525,275l-200-174.631v33.144l119.449,104.172L-3725,341.856V375l138.367-120.819L-3525,307.927l61.629-53.745L-3325,375V341.856l-119.449-104.171L-3325,133.514Z"
            transform="translate(0 0)"
            fill={backgroundColor}
          />
          <rect
            id="Rectangle_1761"
            data-name="Rectangle 1761"
            width="450"
            height="450"
            transform="translate(-3750 0)"
            fill="none"
          />
        </g>
      </>
    ),
    mailCheck: (
      <>
        <g id="Group_2913" data-name="Group 2913" transform="translate(0 0)">
          <rect
            id="Rectangle_1753"
            data-name="Rectangle 1753"
            width="399.998"
            height="58.514"
            transform="translate(25 74.999)"
            fill={backgroundColor}
          />
          <rect
            id="Rectangle_1754"
            data-name="Rectangle 1754"
            width="399.998"
            height="275.001"
            transform="translate(25 99.999)"
            fill={iconColor}
          />
          <path
            id="Path_891"
            data-name="Path 891"
            d="M-2575,100.369-2775,275l-200-174.63v33.144l119.457,104.171L-2975,341.856V375l138.371-120.819L-2775,307.926l61.629-53.745L-2575,375V341.856l-119.453-104.171L-2575,133.514Z"
            transform="translate(3000.001 0)"
            fill={backgroundColor}
          />
          <rect
            id="Rectangle_1755"
            data-name="Rectangle 1755"
            width="449.998"
            height="449.999"
            fill="none"
          />
        </g>
        <g
          id="Group_2914"
          data-name="Group 2914"
          transform="translate(0 250.26)">
          <ellipse
            id="Ellipse_18"
            data-name="Ellipse 18"
            cx="99.87"
            cy="99.87"
            rx="99.87"
            ry="99.87"
            fill={backgroundColor}
          />
          <path
            id="Path_892"
            data-name="Path 892"
            d="M-2855.937,312l-53.027,53.033-35.355-35.355L-2962,347.355l53.039,53.033,70.711-70.71Z"
            transform="translate(2999.998 -250.261)"
            fill={iconColor}
          />
        </g>
      </>
    ),
    github: (
      <path
        id="Path_8"
        data-name="Path 8"
        d="M419.818,120.235A226.911,226.911,0,0,0,337.936,36.3Q286.222,5.362,225,5.365T112.06,36.3a226.885,226.885,0,0,0-81.884,83.937Q0,173.24,0,236q0,75.386,42.919,135.59T153.8,454.923q7.911,1.505,11.717-2.1a11.882,11.882,0,0,0,3.808-9.006q0-.9-.148-16.216t-.148-26.723l-6.738,1.195a83.888,83.888,0,0,1-16.26,1.052,120.959,120.959,0,0,1-20.36-2.1,44.965,44.965,0,0,1-19.63-9,38.088,38.088,0,0,1-12.888-18.466l-2.93-6.911A75.4,75.4,0,0,0,81,351.328q-6.3-8.411-12.743-11.41l-2.051-1.505a21.719,21.719,0,0,1-3.808-3.607,16.534,16.534,0,0,1-2.635-4.2q-.88-2.106,1.464-3.46c1.565-.9,4.393-1.342,8.5-1.342l5.857.9q5.86,1.2,14.5,7.206a48.013,48.013,0,0,1,14.208,15.612q6.742,12.316,16.26,18.772t19.187,6.454a81.328,81.328,0,0,0,16.7-1.5,57.284,57.284,0,0,0,13.183-4.507q2.637-20.129,14.353-30.935a196.144,196.144,0,0,1-30.028-5.407,117.949,117.949,0,0,1-27.536-11.718,79.363,79.363,0,0,1-23.585-20.118q-9.374-12.013-15.378-31.533t-6-45.046q0-36.344,23.146-61.867-10.842-27.324,2.049-61.26,8.5-2.706,25.2,4.053t24.463,11.564q7.767,4.8,12.452,8.108a206.593,206.593,0,0,1,112.5,0l11.132-7.2a156.022,156.022,0,0,1,26.948-13.216q15.527-6,23.738-3.3,13.178,33.936,2.339,61.26,23.143,25.528,23.148,61.866,0,25.525-6.006,45.194t-15.52,31.533a82.374,82.374,0,0,1-23.735,19.97,118.174,118.174,0,0,1-27.541,11.713,195.961,195.961,0,0,1-30.027,5.413q15.229,13.509,15.23,42.641v63.36a12.112,12.112,0,0,0,3.665,9.006q3.662,3.6,11.571,2.1,67.975-23.119,110.891-83.334T450,235.99Q449.985,173.241,419.818,120.235Z"
        transform="translate(0 -5.365)"
        fill={iconColor}
      />
    )
  }[type];
};
const Icon = ({ type, size, backgroundColor, iconColor, className }) => {
  return (
    <svg
      viewBox="0 0 450 450"
      width={typeof size === "string" ? sizes[size] : size}
      className={className}
      height={sizes[size]}>
      {icons(type, backgroundColor, iconColor)}
    </svg>
  );
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(["sm", "md", "lg", "xlg"]),
    PropTypes.number
  ]),
  backgroundColor: PropTypes.string,
  iconColor: PropTypes.string
};

Icon.defaultProps = {
  size: "md",
  backgroundColor: "#091440",
  iconColor: "#c4cbd2"
};

export default React.memo(Icon);
