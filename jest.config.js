export default {
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "<rootDir>"],
  bail: 1,
  verbose: true,
  presets: ["@babel/preset-env", "@babel/preset-react"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.mjs$": "babel-jest",
  },
};


