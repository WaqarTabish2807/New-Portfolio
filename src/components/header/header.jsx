import Text from "../text/text"
import Link from "../link/link"

export default function Header() {
	return (
		<>
			<header className="header">
				<Link to="/">
					<Text tag="p">Md Waqar Tabish</Text>
				</Link>
				<Text tag="p">Creative Developer / GTM Engineer / Technical Writer</Text>
				<nav className="header__nav">
					<Link to="/works">
						<Text tag="p" size="s">
							Works
						</Text>
					</Link>
					<div className="link">
						<a href="https://www.technicalmap.blog/" target="_blank" rel="noopener noreferrer">
							<Text tag="p" size="s">
								Blog
							</Text>
						</a>
					</div>
					<div className="link">
						<a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
							<Text tag="p" size="s">
								Resume
							</Text>
						</a>
					</div>
				</nav>
			</header>
		</>
	)
}
