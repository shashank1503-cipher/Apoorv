import styles from "../styles/Teams.module.css";

const Teams = (props) => {
	return (
		<div className={styles.team_container}>
			<div className={styles.team_gradient}>
				<div className={styles.team_header}>
					<h1 className={styles.team_maintext + " " + styles.team_title}>
						Our Team
					</h1>
					<div className={styles.team_line}></div>
				</div>
				<div className={styles.team_blur}>
					<div className={styles.team_subintro}>
						<p className={styles.team_subtext + " " + styles.team_introtext}>
							Our team consists of people full of brilliance, talent, and
							hard-work. If you want to see the best, it&#39;s here.
						</p>
						<p className={styles.team_subtext + " " + styles.team_introtext}>
							Check out each section for a comprehensive list of the team,
						</p>
					</div>
				</div>
			</div>
			<div className={styles.team_members}>
				<h2 className={styles.team_maintext + " " + styles.team_subtitle}>
					The Mentors
				</h2>
				<p className={styles.team_subtext + " " + styles.team_stitletext}>
					They are the basis, the foundation of this event. A big thank you to
					our mentors.
				</p>
				<div className={styles.team_mentor}></div>
				<h2 className={styles.team_maintext + " " + styles.team_subtitle}>
					The Developers
				</h2>
				<p className={styles.team_subtext + " " + styles.team_stitletext}>
					Everything you see here wa painstakingly written by hand, in React by
					our developers.
				</p>
				<div className={styles.team_mentor}></div>
				<h2 className={styles.team_maintext + " " + styles.team_subtitle}>
					The Event Managers
				</h2>
				<p className={styles.team_subtext + " " + styles.team_stitletext}>
					The life blood of the events are done by these great people. From the
					ideation to the implementation.
				</p>
				<div className={styles.team_mentor}></div>
			</div>
		</div>
	);
};

export default Teams;
