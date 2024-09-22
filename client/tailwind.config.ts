import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-right": {
          "0%": {
            left: "-300px",
          },

          "100%": {
            left: "0px",
          },
        },

        "slide-left": {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            visibility: "hidden",
            transform: "translate3d(-100%, 0, 0)",
          },
        },

        "content-left": {
          "0%": {
            width: "screen",
          },
          "100%": {
            width: "calc(screen-300px)"
          },
        },
        "content-right": {
          "0%": {
            width: "calc(screen-300px)"

          },
          "100%": {
            width: "screen",
          },
        },

      },
      animation: {
        slideRight: 'slide-right .5s ease-in-out',
        slideLeft: 'slide-left .5s ease-in-out',
        contentLeft: 'content-left .5s ease-in-out',
        contentRight: 'content-right .5s ease-in-out',
      },
      colors: {
        primary: "#CD313A",
        red: "#CD3A42",
        "light+gray": "rgba(198, 198,198,.58)",
        gray: "#A4A4A4",
        beige: ""
      },

      fontFamily: {
        noto: ['var(--font-noto)'],
        roboto: ['var(--font-roboto)'],
      },

      list: {
        defaultProps: {
          ripple: true,
          className: "",
        },
        styles: {
          base: {
            list: {
              display: "flex",
              flexDirection: "flex-col",
              gap: "gap-1",
              minWidth: "min-w-[240px]",
              p: "p-2",
              fontFamily: "font-sans",
              fontSize: "text-base",
              fontWeight: "font-normal",
              color: "text-blue-gray-700",
            },
            item: {
              initial: {
                display: "flex",
                alignItems: "items-center",
                width: "w-full",
                padding: "p-3",
                borderRadius: "rounded-lg",
                textAlign: "text-start",
                lightHeight: "leading-tight",
                transition: "transition-all",
                bg: "hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80",
                color: "hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900",
                outline: "outline-none",
              },
              selected: {
                bg: "bg-blue-gray-50/50",
                color: "text-blue-gray-700",
              },
              disabled: {
                opacity: "opacity-50",
                cursor: "cursor-not-allowed",
                pointerEvents: "pointer-events-none",
                userSelect: "select-none",
                bg: "hover:bg-transparent focus:bg-transparent active:bg-transparent",
                color: "hover:text-blue-gray-500 focus:text-blue-gray-500 active:text-blue-gray-500",
              },
            },
            itemPrefix: {
              display: "grid",
              placeItems: "place-items-center",
              marginRight: "mr-4",
            },
            itemSuffix: {
              display: "grid",
              placeItems: "place-items-center",
              marginRight: "ml-auto justify-self-end",
            },
          },
        },
      },
    },

  },
  plugins: [],
});

