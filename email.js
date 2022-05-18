import summary from './temp/allure-report/widgets/summary.json';
import sgMail from '@sendgrid/mail';

const sendGridKey = '';

const total = summary.statistic.total;
const passed = summary.statistic.passed;
const failed = summary.statistic.failed + summary.statistic.broken + summary.statistic.skipped + summary.statistic.unknown;
const percentPassed = passed / total * 100;
const percentFailed = 100 - percentPassed;
const runTimeMin = parseInt(summary.time.duration / 60000);
const runTimeSec = parseInt((summary.time.duration % 60000) / 1000);

sgMail.setApiKey(sendGridKey);

const msg = {
    to: process.env.TO_EMAILS !== undefined ? process.env.TO_EMAILS : 'any@email.com',
    from: 'vlbelov96@gmail.com',
    subject: `${process.env.TEST_TYPE !== undefined ? process.env.TEST_TYPE : ''} Test Report`,
    html: `<div>Total: ${total}</div>
    <div>Passed: ${passed} - ${percentPassed}%</div>
    ${failed > 0 ? `<div>Failed: ${failed} - ${percentFailed}%</div>` : ''}
    <div>Duration: ${runTimeMin} min ${runTimeSec} sec</div>
    <div>Environment: ${process.env.URL !== undefined ? process.env.URL : 'https://www.facebook.com/'}</div>`,
}

sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })