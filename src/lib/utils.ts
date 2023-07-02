export const tap = async <T>(value: T, cb: (value: T) => Promise<unknown>): Promise<T> => {
	await cb(value)
	return value
}
