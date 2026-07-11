import postcssImport from "postcss-import";
import tailwind from "@tailwindcss/postcss";

const config = {
  plugins: [postcssImport(), tailwind()],
};

export default config;
