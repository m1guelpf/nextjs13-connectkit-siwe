import { APP_NAME } from "@/lib/consts";
import ConnectWallet from "./ConnectWallet";

const LoginPage = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center space-y-6">
			<h1 className="text-6xl font-bold">Login to {APP_NAME}</h1>
			<ConnectWallet />
		</div>
	);
};

export default LoginPage;
