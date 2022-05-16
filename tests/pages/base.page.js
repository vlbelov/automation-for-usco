import fs from 'fs';

class Base {

//     constructor() {
//         this.baseExp = {
//             timerZeroValue: '00:01',
//             errorMessageGuest: 'Log in to access this area!',
//             errorMessageOnlyAdminModeratorAccess: 'Only admin or moderator can access this area!',
//             errorMessageOnlyAdminAccess: 'Only admin can access this area!'
//         }
//     }

//     get nextBtn() { return $('#next-btn') }
//     get backBtn() { return $('#back-btn') }
//     get endGameBtn() { return $('#end-btn') }
//     get playBtn() { return $('#play-btn') }
//     get stopBtn() { return $('#stop-btn') }
//     get timerValue() { return $('#time-left') }
//     get errMessageAccess() { return $('#error-login') }
//     get errMessage404() { return $('#page-missing-error-number') }
//     get errMessage404text() { return $('#page-missing-error-text') }

//     checkPlaceholder(field, expected) {
//         expect($(field)).toHaveAttribute('placeholder', expected)
//     }

//     errorMessageDisappears(field, error) {
//         $(field).setValue('a')
//         $(error).waitForDisplayed({ reverse: true })
//     }

//     nextBtnClick() {
//         this.nextBtn.click()
//     }

//     backBtnClick() {
//         this.backBtn.click()
//     }

//     endGameBtnClick() {
//         this.endGameBtn.click()
//     }

//     saveGameID(id) {
//         try {
//             fs.writeFileSync('./temp/gameId.txt', id)
//             console.log('Game ID was successfully saved');
//         } catch (err) {
//             console.log('Game ID was NOT successfully saved. Check Base.page.js')
//         }
//     }

//     readGameID() {
//         try {
//             return fs.readFileSync('./temp/gameId.txt', 'utf8');
//         } catch (err) {
//             console.log('Game ID was NOT successfully read. Check Base.page.js')
//         }
//     }

//     checkPlayBtnDisplayed() {
//         this.playBtn.waitForDisplayed();
//     }

//     checkStopBtnDisplayed() {
//         this.stopBtn.waitForDisplayed();
//     }

//     playBtnClick() {
//         this.playBtn.click()
//     }

//     stopBtnClick() {
//         this.stopBtn.click()
//     }

//     checkTimerStarted() {
//         const start = this.timerValue.getText()
//         browser.pause(1100)
//         const end = this.timerValue.getText()
//         expect(start).not.toEqual(end)
//     }

//     checkTimerStoped() {
//         const start = this.timerValue.getText()
//         browser.pause(1100)
//         const end = this.timerValue.getText()
//         expect(start).toEqual(end)
//     }

//     waitTillZeroTimer() {
//         browser.waitUntil(
//             () => this.timerValue.getText() === this.baseExp.timerZeroValue,
//             {
//                 timeout: 62000,
//                 interval: 100,
//                 timeoutMsg: 'Expected timer value is not displayed'
//             }
//         );
//     }

//     checkErrorMessageNotLogined() {
//         expect(this.errMessageAccess).toHaveText(this.baseExp.errorMessageGuest);
//     }

//     checkErrorMessageOnlyAdminHaveAccess() {
//         expect(this.errMessageAccess).toHaveText(this.baseExp.errorMessageOnlyAdminAccess);
//     }

//     checkErrorMessageOnlyAdminModeratorHaveAccess() {
//         expect(this.errMessageAccess).toHaveText(this.baseExp.errorMessageOnlyAdminModeratorAccess);
//     }

//     pressEnter() {
//         browser.keys("\uE007");
//     }

}

export default Base;