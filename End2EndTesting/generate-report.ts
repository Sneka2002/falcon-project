// import reporter from 'cucumber-html-reporter';
// //const{reporter}=require('cucumber-html-reporter');

// reporter.generate({
//   theme: 'bootstrap',
//   jsonFile: 'reports/cucumber-report.json',
//   output: 'reports/cucumber-report.html',
//   reportSuiteAsScenarios: true,
//   launchReport: true,
// });
import fs from 'fs';
import reporter from 'cucumber-html-reporter';

const jsonPath = 'reports/cucumber-report.json';

if (fs.existsSync(jsonPath)) {
  reporter.generate({
    theme: 'bootstrap',
    jsonFile: jsonPath,
    output: 'reports/cucumber-report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
  });
} else {
  console.error(`Report file not found at ${jsonPath}. Run tests first.`);
}