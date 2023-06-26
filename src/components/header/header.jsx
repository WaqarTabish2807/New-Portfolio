import Text from "../text/text"
import Link from "../link/link"

export default function Header() {
	return (
		<>
			<header className="header">
				<Link to="/">
					<Text tag="p">Md Waqar Tabish</Text>
				</Link>
				<Text tag="p">Creative developer / Copywriter</Text>
				<nav className="header__nav">
					<Link to="/works">
						<Text tag="p" size="s">
							Works
						</Text>
					</Link>
				</nav>
			</header>
		</>
	)
}
