import './globals.css'
import ClientLayout from './Web3Provider'
import { FC, PropsWithChildren } from 'react'

const RootLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	)
}

export default RootLayout
