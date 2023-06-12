import vue from './vue';
import compress from './compress';
import Unocss from 'unocss/vite';
import visualizer from './visualizer';
import unplugin from './unplugin';

/**
 * @description: 设置vite插件配置
 * @param {*} env - 环境变量配置
 * @return {*}
 */
export function setVitePlugins(env: ImportMetaEnv) {
  const plugins = [...vue, Unocss(), ...unplugin];
  // 是否压缩
  if (env.VITE_COMPRESS_OPEN === 'Y') {
    plugins.push(compress(env));
  }
  // 是否依赖分析
  if (env.VITE_VISUALIZER === 'Y') {
    plugins.push(visualizer);
  }
  return plugins;
}