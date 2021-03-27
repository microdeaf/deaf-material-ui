import AsyncComponent from './AsyncComponent';

const Icon = AsyncComponent(() => {
  return import('@material-ui/icons');
});

export default Icon;
