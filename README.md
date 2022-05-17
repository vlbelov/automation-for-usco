## Prerequisites:
1. [Node.js](https://nodejs.org/)
2. [Git](https://git-scm.com/)
3. [Python](https://www.python.org/downloads/)
4. [Java Development Kit](https://www.java.com/en/download/)
5. Install/Update [Chrome browser](https://www.google.com/chrome/) to the latest version

---
## 1. Clone the repo:
HTTPS:
```
git clone https://github.com/vlbelov/automation-for-usco.git
```
---
## 2. Install the modules:
```
npm i
npm i -g allure-commandline
```

---
## 3. Run the tests:
select Mac or Windows script based on your OS
```
npm run win
npm run mac
```
---
## 4. Generate test report (after a test run):
```
npm run report-generate
```
Open the interactive HTML report in a browser:
```
npm run report-open
```
Send an email report:
```
TO_EMAILS=jdavydova@uskoinc.com npm run report-send
```