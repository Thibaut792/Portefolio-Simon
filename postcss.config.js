const path = require('path');

export default {
    plugins: {
        'postcss-import': {},
        tailwindcss: {
            config: path.resolve(__dirname, 'tailwind.config.js')
        },
    }
}