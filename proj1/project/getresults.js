const baseRequests = require('../framework/baserequests');
const unionReportingQueries = require('../project/unionreporting');
const testqueries = require('../datafiles/testqueries.json');
const printUtils = require('../utiles/printutils');

(async function getAllResults() {
    baseRequests.connection;
    await baseRequests.connectToDB();
    await printUtils.printTableForm(await unionReportingQueries.minWorkingTime());
    await printUtils.printTableForm(await unionReportingQueries.testsCount());
    await printUtils.printTableForm(await unionReportingQueries.testsDateLimit(testqueries.date));
    await printUtils.printTableForm(await unionReportingQueries.quantityofTestsinBrowsers());
    await baseRequests.closeConnection();
})();