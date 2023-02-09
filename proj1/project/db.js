const baseRequests = require('../framework/baserequests');
const sqlQueries = require('../datafiles/sqlqueries');
const logger = require('../logger/logger');

class UnionReportingQueries {

    async minWorkingTime() {
        const resultMinworkingTime = await baseRequests.connectionQuery(sqlQueries.minWorkingTime);
        logger.info('Getting min working time');
        return resultMinworkingTime;
    }

    async testsCount() {
        logger.info('Getting quantity of unique tests on projects');
        const resultTestsCount = await baseRequests.connectionQuery(sqlQueries.uniqueTestsCountByProject);
        return resultTestsCount;
    }

    async testsDateLimit(date) {
        logger.info('Getting test have been done before date');
        const resultTestsDateLimit = await baseRequests.connectionQuery(sqlQueries.testsDateLimit(date));
        return resultTestsDateLimit;
    }

    async quantityofTestsinBrowsers() {
        logger.info('Getting quantity of tests in different browsers');
        const resultQuantityofTestsinBrowsers = await baseRequests.connectionQuery(sqlQueries.quantityofTestsinBrowsers);
        return resultQuantityofTestsinBrowsers;
    }
}

module.exports = new UnionReportingQueries();