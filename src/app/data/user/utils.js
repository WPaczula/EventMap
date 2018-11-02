const defaultRequestTime = 3600

export const didTokenExpire = expiry => expiry + defaultRequestTime < Date.now()
