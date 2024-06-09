import sass from '@csstools/postcss-sass';

export default function (context) {
  const { isDevelopment } = context;

  return {
    parser: 'postcss-scss',
    plugins: {
      'postcss-import': {
        plugins: [sass()],
      },
      'postcss-url': [
        {
          filter: '**/*.svg',
          url: 'inline',
        },
        {
          filter: '!**/*.svg',
          url: 'rebase',
        },
      ],
      'postcss-custom-media': {},
      'postcss-lightningcss': {
        lightningcssOptions: {
          minify: !isDevelopment,
        },
      },
    },
  };
}
