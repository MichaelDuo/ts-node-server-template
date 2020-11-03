class InfoService {
	public static whoami(): string {
		return 'ts-node-server-template';
	}

	public static date(): string {
		return new Date().toDateString();
	}
}

export default InfoService;
