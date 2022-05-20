## Prerequisites:
1. [Node.js](https://nodejs.org/)
2. [Git](https://git-scm.com/)
3. [Python](https://www.python.org/downloads/)
4. [Java Development Kit](https://www.java.com/en/download/)
5. Install/Update [Chrome browser](https://www.google.com/chrome/) to the latest version
6. [VS Code](https://code.visualstudio.com/download)

---
## 1. Clone the repo:
 Select any empty folder in Visual Studio code by ```File``` => ```Open Folder```
</br> Type in terminal (better use ```Git Bash```)
```
git clone https://github.com/vlbelov/automation-for-usko.git
```
---
## 2. Install the modules:
```
npm i
npm i -g allure-commandline
```

---
## 3. Run the tests:
(Select Mac or Windows script based on your OS)
</br>```To run regression tests:```
```
npm run win
npm run mac
```
```To run smoke tests:```
```
npm run smoke-win
npm run smoke-mac
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