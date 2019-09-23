import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

global.__PATH_PREFIX__ = ''
// window.___push was renamed to window.___navigate, has to do this renaming too or storybook would error on clicking links
window.___navigate = pathname => {
  action('NavigateTo:')(pathname)
}