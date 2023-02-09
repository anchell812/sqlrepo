Структура проекта:

datafiles - config.json - данные для подключения к серверу необходимо внести перед запуском теста; testqueries.json - sql-запросы framework - запросы к базе данных с использованием модуля mysql; logger - конфиг.файл логировщика (winston); project - unionreporting.js - класс с методами по реализации запросов к БД; getresults.js - тест.

Перед запуском теста - выполнить npm install;

запуск теста - node путь/до/файла/getresults.js