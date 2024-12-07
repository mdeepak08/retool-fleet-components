const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/FleetManagement.jsx',
  output: {
    filename: 'fleet-management.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'FleetManagement'
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};