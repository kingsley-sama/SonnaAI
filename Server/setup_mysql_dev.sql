CREATE DATABASE IF NOT EXISTS sonna_ai_dev_db;
CREATE USER IF NOT EXISTS 'kingsley'@'localhost' IDENTIFIED BY 'sonna_ai_dev_pwd';
GRANT ALL PRIVILEGES ON `sonna_ai_dev_db`.* TO 'kingsley'@'localhost';
GRANT SELECT ON `performance_schema`.* TO 'kingsley'@'localhost';
FLUSH PRIVILEGES;
