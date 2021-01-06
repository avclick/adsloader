drop schema if exists ads;
create schema ads;
grant all privileges on ads.* to 'ads'@'localhost' identified by 'ads';
grant all privileges on ads.* to 'ads'@'%' identified by 'ads';

