-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 18, 2017 at 06:40 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `cat_description` mediumtext
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `cat_description`) VALUES
(2, 'default_category', 'cat desc'),
(3, 'category2', 'category 2 description'),
(4, 'category 3', 'category 3 description'),
(6, 'category 5', 'category 5 description'),
(7, 'Kaan ka', 'kaan me pehanne ka'),
(8, 'Earings', 'Earings description'),
(9, 'category 6', 'category 6 description');

-- --------------------------------------------------------

--
-- Table structure for table `prd_img`
--

CREATE TABLE `prd_img` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `path` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prd_img`
--

INSERT INTO `prd_img` (`id`, `product_id`, `name`, `path`) VALUES
(3, 73, 'prd_imgs-1485612786458.jpg', 'APP_DATA\\prd_imgs-1485612786458.jpg'),
(4, 73, 'prd_imgs-1485612786461.jpg', 'APP_DATA\\prd_imgs-1485612786461.jpg'),
(5, 74, 'prd_imgs-1485687015900.jpg', 'APP_DATA\\prd_imgs-1485687015900.jpg'),
(6, 74, 'prd_imgs-1485687016980.jpg', 'APP_DATA\\prd_imgs-1485687016980.jpg'),
(7, 74, 'prd_imgs-1485687017924.jpg', 'APP_DATA\\prd_imgs-1485687017924.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `Discount` decimal(10,0) DEFAULT NULL,
  `Description` longtext
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `cat_id`, `price`, `Discount`, `Description`) VALUES
(3, 'product 1', 2, '200', '10', 'product 1 description'),
(4, 'product 2', 3, '300', '50', 'Product 2 description'),
(35, 'Product 3', 4, '400', '30', 'Product 3 description'),
(36, 'Product 3', 4, '400', '10', 'Product 3 description'),
(37, 'Product 4', 4, '200', '10', 'Product 4 description'),
(38, 'new product for category 6', 9, '1000', '20', 'new product for category 6 description'),
(39, 'null', 2, '0', '0', 'null'),
(40, 'null', 2, '0', '0', 'null'),
(41, 'null', 2, '0', '0', 'null'),
(42, 'null', 2, '0', '0', 'null'),
(43, 'null', 2, '0', '0', 'null'),
(44, 'null', 2, '0', '0', 'null'),
(45, 'null', 2, '0', '0', 'null'),
(46, 'null', 2, '0', '0', 'null'),
(47, 'null', 2, '0', '0', 'null'),
(48, 'null', 2, '0', '0', 'null'),
(49, 'null', 2, '0', '0', 'null'),
(50, 'null', 2, '0', '0', 'null'),
(51, 'null', 2, '0', '0', 'null'),
(52, 'null', 2, '0', '0', 'null'),
(53, 'null', 2, '0', '0', 'null'),
(54, 'null', 2, '0', '0', 'null'),
(55, 'null', 2, '0', '0', 'null'),
(56, 'null', 2, '0', '0', 'null'),
(57, 'null', 2, '0', '0', 'null'),
(58, 'null', 2, '0', '0', 'null'),
(59, 'null', 2, '0', '0', 'null'),
(60, 'null', 2, '0', '0', 'null'),
(61, 'null', 2, '0', '0', 'null'),
(62, 'null', 2, '0', '0', 'null'),
(63, 'null', 2, '0', '0', 'null'),
(64, 'null', 2, '0', '0', 'null'),
(65, 'null', 2, '0', '0', 'null'),
(66, 'null', 2, '0', '0', 'null'),
(67, 'null', 2, '0', '0', 'null'),
(68, 'my new product', 6, '0', '40', 'This is new product description'),
(69, 'my new product', 6, '0', '40', 'This is new product description'),
(70, 'my new product 123', 6, '0', '70', 'my new product 123 description'),
(71, 'my new product 123', 6, '0', '70', 'new product 123 description'),
(72, 'my new product 123', 6, '0', '70', 'new product 123 description'),
(73, 'my new product 123', 6, '0', '70', 'new product 123 description'),
(74, 'new kaan ka', 7, '0', '10', 'new kaan ka description');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prd_img`
--
ALTER TABLE `prd_img`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cat_id` (`cat_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `prd_img`
--
ALTER TABLE `prd_img`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `prd_img`
--
ALTER TABLE `prd_img`
  ADD CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `cat_id` FOREIGN KEY (`cat_id`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
