import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            reporters: ['html'], // 设置测试报告格式为html
            setupFiles: ['./src/test/setup.ts'] // 设置测试初始化文件
        }
    })
)
