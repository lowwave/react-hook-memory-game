import { path } from 'ramda';

export function getFromTheme (themePath = '') {
  return function getFromThemeProps (props = {}) {
    return path(themePath.split('.'), props.theme);
  }
}

