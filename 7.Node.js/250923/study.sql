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

INSERT INTO board (user_id, title, content) VALUES
('작성자1', '첫 번째 게시글', '첫 번째 게시글의 내용입니다.'),
('작성자2', '두 번째 게시글', '두 번째 게시글의 내용입니다.'),
('작성자3', '세 번째 게시글', '세 번째 게시글의 내용입니다.'),
('작성자4', '네 번째 게시글', '네 번째 게시글의 내용입니다.'),
('작성자5', '다섯 번째 게시글', '다섯 번째 게시글의 내용입니다.');

Query OK, 5 rows affected (0.01 sec)
Records: 5  Duplicates: 0  Warnings: 0

mysql> SELECT * FROM board;
+----+------------+-------------------------+---------------------------------------------+---------------------+------+
| id | user_id    | title                   | content                                     | created_at          | hit  |    
+----+------------+-------------------------+---------------------------------------------+---------------------+------+    
|  1 | 작성자1    | 첫 번째 게시글          | 첫 번째 게시글의 내용입니다.                | 2025-09-23 17:27:46 |    0 |    
|  2 | 작성자2    | 두 번째 게시글          | 두 번째 게시글의 내용입니다.                | 2025-09-23 17:27:46 |    0 |    
|  3 | 작성자3    | 세 번째 게시글          | 세 번째 게시글의 내용입니다.                | 2025-09-23 17:27:46 |    0 |    
|  4 | 작성자4    | 네 번째 게시글          | 네 번째 게시글의 내용입니다.                | 2025-09-23 17:27:46 |    0 |    
|  5 | 작성자5    | 다섯 번째 게시글        | 다섯 번째 게시글의 내용입니다.              | 2025-09-23 17:27:46 |    0 |    
+----+------------+-------------------------+---------------------------------------------+---------------------+------+    
5 rows in set (0.00 sec)


SELECT id, title, content, user_id FROM board;

