class SqlQueries {

    get minWorkingTime() {
        return "select union_reporting.project.name as p_name, union_reporting.test.name as t_name, timestampdiff(SECOND, union_reporting.test.start_time, union_reporting.test.end_time) as working_time from union_reporting.project join union_reporting.test on union_reporting.project.id = union_reporting.test.project_id group by t_name order by p_name";
    }

    get uniqueTestsCountByProject() {
        return  "select union_reporting.project.name as p_name, count(distinct union_reporting.test.name) as tests_count from union_reporting.project join union_reporting.test on union_reporting.project.id = union_reporting.test.project_id GROUP by p_name";
    }

    get quantityofTestsinBrowsers() {
        return "(select count(id) as tests_count, browser from union_reporting.test where browser = 'chrome') union (select count(id) as tests_count, browser from union_reporting.test where browser = 'firefox')";
    }

    testsDateLimit(date) {
        return `select union_reporting.project.name as p_name, union_reporting.test.name as t_name, date_format(union_reporting.test.start_time,'%d/%m/%y') as start_time from union_reporting.project join union_reporting.test on union_reporting.project.id = union_reporting.test.project_id where start_time > ${date} order by p_name, t_name`;
    }

}

module.exports = new SqlQueries();