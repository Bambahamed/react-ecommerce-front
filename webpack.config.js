import Dotenv from "dotenv-webpack";

const App = {
  // Autres configurations de Webpack...
  mode: "development",
  plugins: [new Dotenv()],
  entry: "./src/main.jsx",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },
};

export default App;
