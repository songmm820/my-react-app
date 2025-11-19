// @vitest-environment jsdom

import { beforeEach, expect, test, vi } from 'vitest'
import { getCssVarColorValue } from '~/lib/color'

beforeEach(() => {
    vi.clearAllMocks()
})

test('获取CSS变量-主题色', () => {
    expect(getCssVarColorValue('--primary')).toBe('#EF4444')
})
