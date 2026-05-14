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
							I'm Md Waqar Tabish, a creative freelance developer / GTM engineer and technical writer who explores tomorrow's solutions.
						</p>
					</div>
				</section>
				<section className="about">
					<Text>About</Text>
					<div className="about__content">
						<Me />
						<p className="about__description">
							I am a young developer / tech writer who enjoys improving my skills by creating a multitude of projects that I upload to Github. Over the last two years, I trained on several frameworks and tried different things on my own.
						</p>
					</div>
				</section>
				<section className="experiences">
					<Text>Experiences</Text>
					<ul className="experiences__content">
						<li className="experiences__item">
							<Text>Java Developer cum DevOps Engineer</Text>
							<Text>@TATA CONSULTANCY SERVICES</Text>
							<Text>June 2024 - Present</Text>
						</li>
						<li className="experiences__item">
							<Text>GTM Engineer</Text>
							<Text>@AUTOLOGGIC · Remote</Text>
							<Text>May 2024 - Present</Text>
						</li>
						<li className="experiences__item">
							<Text>Technical Writer</Text>
							<Text>@INFRASITY · Freelance</Text>
							<Text>Feb 2024 - Present</Text>
						</li>
					</ul>
				</section>
				<section className="certificates">
					<Text>Degrees</Text>
					<ul className="certificates__content">
						<li className="certificates__item">
							<Text>Jamia Millia Islamia</Text>
							<Text>B.Tech in ECE (CGPA: 9.49)</Text>
							<Text>Dec 2020 - July 2024</Text>
						</li>
						<li className="certificates__item">
							<Text>Rahmani 30</Text>
							<Text>PCM (88.6%)</Text>
							<Text>Mar 2020</Text>
						</li>
						<li className="certificates__item">
							<Text>Holy Cross School</Text>
							<Text>High School (92.6%)</Text>
							<Text>May 2018</Text>
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
