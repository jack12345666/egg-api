/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : library

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2020-08-12 18:52:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(32) NOT NULL,
  `Password` varchar(32) NOT NULL,
  `IsDeleted` tinyint(4) NOT NULL DEFAULT '0',
  `CreatedDate` datetime NOT NULL,
  `UpdatedDate` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('1', 'testererere2244', '111111', '0', '2019-10-28 14:41:59', '2019-10-30 19:59:34');
INSERT INTO `admin` VALUES ('2', '1111', '222222', '1', '2019-10-30 06:46:17', null);
INSERT INTO `admin` VALUES ('3', 'jack', '123456', '0', '2020-08-12 17:38:57', null);

-- ----------------------------
-- Table structure for book
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Price` decimal(18,2) NOT NULL,
  `Author` varchar(32) NOT NULL,
  `MakeSource` varchar(255) NOT NULL,
  `BookCategoryId` varchar(128) NOT NULL,
  `Inventory` int(11) NOT NULL,
  `IsDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `IsSoldOut` tinyint(1) NOT NULL DEFAULT '0',
  `CreatedDate` datetime NOT NULL,
  `UpdatedDate` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of book
-- ----------------------------
INSERT INTO `book` VALUES ('1', 'ES 6标准入门', '69.00', '阮一峰', '人民报社出版社', '1', '5', '0', '0', '2018-10-05 00:00:00', null);
INSERT INTO `book` VALUES ('3', 'ES 6标准入门', '69.00', '阮一峰', '人民报社出版社', '1', '5', '0', '0', '2018-10-05 00:00:00', null);
INSERT INTO `book` VALUES ('4', '测试图书', '12.34', 'TEST', 'TEST', '2', '22', '0', '1', '2019-10-29 10:00:00', '2019-10-30 20:19:52');
INSERT INTO `book` VALUES ('5', 'string', '48.00', 'string', 'string', '1', '512', '1', '1', '2019-10-29 10:00:00', '2019-10-30 20:14:07');
INSERT INTO `book` VALUES ('6', 'javascript', '80.00', 'Zero', 'Zero', '1', '60', '0', '1', '2019-10-30 20:23:22', '2019-10-30 20:23:30');

-- ----------------------------
-- Table structure for bookcategory
-- ----------------------------
DROP TABLE IF EXISTS `bookcategory`;
CREATE TABLE `bookcategory` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(32) NOT NULL,
  `IsDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `CreatedDate` datetime NOT NULL,
  `UpdatedDate` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bookcategory
-- ----------------------------
INSERT INTO `bookcategory` VALUES ('1', '前端开发', '0', '0000-00-00 00:00:00', null);
INSERT INTO `bookcategory` VALUES ('2', '后端开发', '0', '0000-00-00 00:00:00', null);

-- ----------------------------
-- Table structure for borrowlog
-- ----------------------------
DROP TABLE IF EXISTS `borrowlog`;
CREATE TABLE `borrowlog` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `bookId` int(11) NOT NULL,
  `adminId` int(11) NOT NULL,
  `CreatedDate` datetime NOT NULL,
  `UpdatedDate` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of borrowlog
-- ----------------------------

-- ----------------------------
-- Table structure for member
-- ----------------------------
DROP TABLE IF EXISTS `member`;
CREATE TABLE `member` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(32) NOT NULL,
  `Age` int(11) NOT NULL,
  `Sex` varchar(8) NOT NULL,
  `CreatedDate` datetime NOT NULL,
  `UpdatedDate` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of member
-- ----------------------------
INSERT INTO `member` VALUES ('1', '哇哈哈', '18', '男', '2019-10-29 11:00:00', null);

-- ----------------------------
-- Table structure for setting
-- ----------------------------
DROP TABLE IF EXISTS `setting`;
CREATE TABLE `setting` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `BorrowTime` datetime NOT NULL,
  `ReturnTime` datetime NOT NULL,
  `CreatedDate` datetime NOT NULL,
  `UpdatedDate` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of setting
-- ----------------------------
