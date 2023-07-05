/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange": "#FF6F00",
        "white": "#FFFFFF",
        "purple": "#460482",
        "ash": "#C4C4C4",
        "text-black": "#333333",
        "grey": "#6B6666",
        "gray-6":"#F2F2F2",
        "text-purple": "#10217D"
      },
      screens: {
        md: "883px"
      },
      backgroundImage: {
       aboutHero:  'url("./assets/aboutpage/herobg.png")',
       aboutHeroMobile:  'url("./assets/aboutpage/aboutHerobgmobile.png")',
       frontendHero: 'url("./assets/frontendpage/frontendbg.png")',
       frontendherobgmobile: 'url("./assets/frontendpage/frontendherobgmobile.png")',
       faqherobgmobile: 'url("./assets/Faq/faqmobile.png")',
       faqherobgdesktop: 'url("./assets/Faq/faqdesktop.png")',
      
      }
    },
    
    fontFamily: {
      "DmSansBold": ["DmSansBold"],
      "DmSansRegular": ["DmSansRegular"],
      "MulishBold": ["MulishBold"],
      "MulishRegular": ["MulishRegular"],
      "Poppins": ["Poppins"],
      "jakarta": ["jakarta"]
    },
    container: {
      screens: {
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1140px"
      }
    },
    
  },
  plugins: [],
}

