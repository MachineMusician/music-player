const path = require("path");
const withSass = require("@zeit/next-sass");
module.exports = withSass();

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
            publicPath: "./",
            outputPath: "static/",
            name: "[name].[ext]",
          },
        },
      },
      {
        test: [
          /\.eot$/,
          /\.ttf$/,
          /\.svg$/,
          /\.woff$/,
          /\.woff2$/,
          /\.mp3$/,
          /\.wav$/,
          /\.mid$/,
        ],
        loader: require.resolve("file-loader"),
        options: {
          name: "/static/media/[name].[hash:8].[ext]",
        },
      }
    );
    return config;
  },
};
