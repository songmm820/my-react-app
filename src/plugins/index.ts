import type { MyPlugin } from '~/types/plugin'

const BaiduSeacrchEngine: MyPlugin = {
    name: '百度',
    version: '1.0.0',
    description: '百度搜索',
    icon: 'https://files.codelife.cc/icons/baidu.svg'
}

const plugins = [BaiduSeacrchEngine]

export default plugins
