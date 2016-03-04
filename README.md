[![Stories in Ready](https://badge.waffle.io/mevans72/to-be-renamed-repo.png?label=ready&title=Ready)](https://waffle.io/mevans72/to-be-renamed-repo)
# Code-Fellows-201---Final-Project


---Topic:---
Security Compliance Toolkit

---Basic Structure:---
Home Page
		§ This is the homepage.
		§ Filename:   index.html
	- Homepage logic
		§ Visual stimulations
			□ Animations, etc.
			□ home-app.js

About Us Page
	- About the team. Our pictures, brief and witty intro.
	- Filename:   about-team.html

Services Page
	- About the product.
	- Filename:   about-services.html
Admin / Dashboard Page
	- This is a admin dashboard used to display statistics and data about in progress/complete compliance checks.
	- dashboard.html
	- Charting / graphs.
		□ chart.js

Questionnaire
		○ This is the page used to manually run the compliance check and takes in input as a form.
		○ <name-of-compliance-thing>.html
		○ sans-critical-controls.html

		○ Two graphs. One for Percentage Complete. One for Mandate Controls.
	- Questionnaire logic
		○ Charting / graphs.
			□ chart.js
		○ Compliance verification
			§ If true, provide pass. If false, provide recommendation.
			§ Weighted. Scale 1-10. Self assessment / auditor controlled.
			§ <name-of-compliance-thing>-app.js

Recommendation
		○ This is the page used to manually run the compliance check and provides recommendations based on the input.
		○ <name-of-compliance-thing>-recommendation.html
		○ sans-critical-controls-recommendations.html

		○ One graph and one chart. One graph for Security Posture. One chart for Security Posture.
	- Questionnaire logic
		○ Charting / graphs.
			□ chart.js
		○ Compliance verification
			§ If true, provide pass. If false, provide recommendation.
			§ Weighted. Scale 1-10. Self assessment / auditor controlled.
			§ <name-of-compliance-thing>-app.js


---Next Steps:---
More user stories:
	- As a developer…
	- As a auditor…
	- As a organization / client…


---Rules of engagement:---
Assets folder contains :
	- Images (/assets/)
	- Fonts (IntelClear)
	- Naming schemes:
			- HTML = kabob-case
			- JS = camelCase
