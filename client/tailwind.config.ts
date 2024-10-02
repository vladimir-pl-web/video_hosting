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
    },

  },
  plugins: [],
});

