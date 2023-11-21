export default {
	getData: async () => {
		const data = await FindQuery.run();
		return data;
	}
}