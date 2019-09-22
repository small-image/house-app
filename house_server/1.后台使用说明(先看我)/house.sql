/*
Navicat MySQL Data Transfer

Source Server         : p2p
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : house

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-02-22 17:13:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for house
-- ----------------------------
DROP TABLE IF EXISTS `house`;
CREATE TABLE `house` (
  `name` varchar(20) DEFAULT NULL,
  `area` varchar(20) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `point` int(10) DEFAULT NULL,
  `price` int(20) DEFAULT NULL,
  `range` varchar(20) DEFAULT NULL,
  `imgs` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of house
-- ----------------------------
INSERT INTO `house` VALUES ('美的云溪郡', '仁寿县', '4室2厅', '117', '9000', '仁寿大道', '/imgs/1.jpg', '1');
INSERT INTO `house` VALUES ('恒大未来城', '温江区', '3室1厅', '115', '12000', '光华新城', '/imgs/2.jpg', '2');
INSERT INTO `house` VALUES ('蓝光雍锦丽府', '高新区', '5室2厅', '176', '19800', '桐梓林', '/imgs/3.jpg', '3');
INSERT INTO `house` VALUES ('炎华置信上林开府', '温江区', '3室1厅', '96', '10500', '云溪路', '/imgs/4.jpg', '4');
INSERT INTO `house` VALUES ('中国铁建西派国樾', '天府新区', '4室2厅', '168', '19400', '华府大道', '/imgs/5.jpg', '5');
INSERT INTO `house` VALUES ('保利天空之城', '天府新区', '4室1厅', '140', '15000', '南延线', '/imgs/6.jpg', '6');
INSERT INTO `house` VALUES ('保利天玺', '金牛区', '3室1厅', '119', '13833', '欢乐谷', '/imgs/7.jpg', '7');
INSERT INTO `house` VALUES ('武侯金茂府', '武侯区', '3室1厅', '195', '28600', '武侯新城', '/imgs/8.jpg', '8');
INSERT INTO `house` VALUES ('蓝润城', '双流区', '4室1厅', '188', '11800', '体育中心', '/imgs/9.jpg', '9');
INSERT INTO `house` VALUES ('左岸名都', '龙泉驿区', '2室1厅', '78', '8000', '西江大道', '/imgs/10.jpg', '10');
