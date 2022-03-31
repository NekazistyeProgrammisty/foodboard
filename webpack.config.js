module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "./dist/bundle.js",
    },
 
    // Включить карты кода для отладки вывода webpack
    devtool: "source-map",
 
    resolve: {
        // Добавить разрешения '.ts' и '.tsx' к обрабатываемым
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", '.png']
    },
 
    module: {
        loaders: [
            // Все файлы с разрешениями '.ts' или '.tsx' будет обрабатывать 'ts-loader'
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.(jpe?g|gif|png|svg)$/, loader: "file-loader?name=./images/[name].[ext]" }
        ],
 
        preLoaders: [
            // Все карты кода для выходных '.js'-файлов будет дополнительно обрабатывать `source-map-loader`
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
 
    // При импортировании модуля, чей путь совпадает с одним из указанных ниже,
    // предположить, что соответствующая глобальная переменная существует, и использовать
    // ее взамен. Это важно, так как позволяет избежать добавления в сборку всех зависимостей,
    // что дает браузерам возможность кэшировать файлы библиотек между различными сборками.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};