const path = require("path");
const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");
module.exports = withSass();
module.exports = withCss();

// module.exports = withSass({
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 2,
//   },
//   sassOptions: {
//     includePaths: [path.join(__dirname, "styles")],
//   },
//   webpack: (config) => {
//     config.module.rules.forEach((rule) => {
//       if (rule.test.toString().includes(".scss")) {
//         rule.rules = rule.use.map((useRule) => {
//           if (typeof useRule === "string") {
//             return { loader: useRule };
//           }
//           if (useRule.loader === "css-loader") {
//             return {
//               oneOf: [
//                 {
//                   test: new RegExp(".global.scss$"),
//                   loader: useRule.loader,
//                   options: {},
//                 },
//                 {
//                   loader: useRule.loader,
//                   options: { modules: true },
//                 },
//               ],
//             };
//           }
//           return useRule;
//         });
//         delete rule.use;
//       }
//     });
//     return config;
//   },
// });

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    webpack: (config, {dev}) => {
        config.module.rules.push(
            // {
            //   test: /\.css$/,
            //   loader: "style-loader!css-loader",
            // },
            // {
            //   test: /\.s[a|c]ss$/,
            //   loader: "sass-loader!style-loader!css-loader",
            // },
            {
                test: /\.(png|svg|eot|otf|ttf|woff|woff2|mid)$/,
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
