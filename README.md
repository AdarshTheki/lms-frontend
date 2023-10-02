## LMS Frontend

### Setup Instructions

1. Clone the Project

```
  git clone https://github.com/AdarshTheki/lms-frontend.git
```

2. Move to the directory

```
  cd lms-frontend/
```

3. Install dependencies

```
  npm install
```

4. Run the server

```
  npm run dev
```

### How to setup tailwind in your Project [Link](https://tailwindcss.com/docs/guides/vite)

1. install tailwind and other dependencies

```
  npm install -D tailwindcss postcss autoprefixer
```

2. create the `tailwind.config.js` file

```
  npx tailwindcss init -p
```

3. Add the files and extension to tailwind config in the content property

```
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

4. Add the Tailwind directives to your CSS

```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```

5. Run your build process with `npm run dev`.

### Adding plugin and dependencies

```
  npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

### Adding auto import sort for esline

1. Install the plugin

```
  npm install -D eslint-plugin-simple-import-sort
```

2. Add rule in `eslintrc.cjs`

```
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',
```

3. Add simple-import-sort in the plugin array of `.eslintrc.cjs` files.

```
  plugins: [..., 'simple-import-sort', 'import'],
```

4. open the `settings.json` in vsCode configuration settings

```
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
```

### Add daisyUI as a Tailwind CSS plugin

1. Add daisyUI to your `tailwind.config.js` files:

```
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "night"],
  },
```

2. Use in `index.html` file Add Attributes to data-theme in html tag:

```
  <html data-theme="dark"></html>
```
