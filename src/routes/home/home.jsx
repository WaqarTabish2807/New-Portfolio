import React, { useEffect, useState } from "react"
import Text from "../../components/text/text"
import Footer from "../../components/footer/footer"
import Me from "../../components/me/me"
import Title from "../../components/title/title"
import Cta from "../../components/cta/cta"
import works from "../../data/works.json"

export default function Home() {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		document.title = "Md Waqar Tabish"

		setProjects(works)
	}, [])

	return (
		<>
			<section className="hero">
				<div className="hero__intro">
					<Title />
					<div className="hero__blur"></div>
					<div className="hero__background">
						{Object.keys(projects).map((el, index) => {
							if (index > 5) return
							return (
								<figure
									key={projects[el].name}
									className="hero__project"
								>
									<img
										src={projects[el].poster}
										alt={projects[el].name}
									/>
								</figure>
							)
						})}
					</div>
				</div>
			</section>
			<main className="main">
				<section className="title">
					<Cta />
					<div className="title__content">
						<p className="title__pitch">
							I'm Md Waqar Tabish, a creative freelance developer and copywriter who explores tomorrow's
							solutions.
						</p>
					</div>
				</section>
				<section className="about">
					<Text>About</Text>
					<div className="about__content">
						<Me />
						<p className="about__description">
							I am a young developer / copywriter who enjoys improving my
							skills by creating a multitude of projects that I
							upload to Github. Over the last two years, I trained
							on several frameworks and tried different things on my own.
						</p>
					</div>
				</section>
				<section className="experiences">
					<Text>Experiences</Text>
					<ul className="experiences__content">
						<li className="experiences__item">
							<Text>Technical Writer</Text>
							<Text>@Tutorialspoint · Freelance</Text>
							<Text>2022 - Present</Text>
						</li>
						<li className="experiences__item">
							<Text>Technical Writer</Text>
							<Text>@Board Infinity · Freelance</Text>
							<Text>Feb 2022 - Jul 2022</Text>
						</li>
						<li className="experiences__item">
							<Text>Open Source Developer</Text>
							<Text>@GSSoC</Text>
							<Text>June 2023 - Aug 2023</Text>
						</li>
						<li className="experiences__item">
							<Text>Open Source Developer</Text>
							<Text>@SSoC</Text>
							<Text>June 2023 - Aug 2023</Text>
						</li>
						<li className="experiences__item">
							<Text>Script Writer</Text>
							<Text>@Kuku Fm · Freelance</Text>
							<Text>Jan 2023 - Feb 2023</Text>
						</li>
					</ul>
				</section>
				<section className="certificates">
					<Text>Degrees</Text>
					<ul className="certificates__content">
						<li className="certificates__item">
							<Text>Rahmani 30</Text>
							<Text>High School</Text>
							<Text>2018-2020</Text>
						</li>
						<li className="certificates__item">
							<Text>Jamia Millia Islamia</Text>
							<Text>BTech</Text>
							<Text>2020 — 2024</Text>
						</li>
					</ul>
				</section>
				<section className="tools">
					<Text>Tools</Text>
					<div className="tools__display">
						<figure>
							<img src="/logo.png" alt="Md Waqar Tabish logo" />
						</figure>
					</div>
				</section>
				<Footer />
			</main>
		</>
	)
}
