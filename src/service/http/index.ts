import { createRequest } from './request'

const onlineMockURL = 'https://mock.mengxuegu.com/mock/61e4df7c17249f68847fc191/api'

export const request = createRequest({ baseURL: onlineMockURL })
