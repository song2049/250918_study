-- MySQL 접속 명령어
-- 루트 계정으로 접속
mysql -u root -p

mysql> CREATE DATABASE study;
Query OK, 1 row affected (0.00 sec)

mysql> DROP DATABASE study
mysql> SHOW DATABASES;

mysql> CREATE DATABASE boards2;
Query OK, 1 row affected (0.01 sec)

mysql> use boards2;
Database changed

CREATE TABLE board (
    id INT(11) NOT NULL AUTO_INCREMENT,
    user_id VARCHAR(50) NOT NULL,
    title VARCHAR(150) NOT NULL,
    content TEXT,
    created_at DATETIME NOT NULL DEFAULT NOW(),
    hit INT(11) DEFAULT 0,
    PRIMARY KEY (id)
);

