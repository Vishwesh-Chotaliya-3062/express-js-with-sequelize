-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 23, 2021 at 09:25 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UserID` int(2) NOT NULL,
  `UserName` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `StateID` int(2) DEFAULT NULL,
  `Status` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserID`, `UserName`, `Email`, `Password`, `StateID`, `Status`) VALUES
(1, 'Vishwesh', 'hello@gmail.com', 'vish123', 6, 'True'),
(2, 'Sidhhesh', 'sid@gmail.com', 'sid123', 15, 'True'),
(3, 'Vimarsh', 'vim@gmail.com', 'vim123', 52, 'false'),
(4, 'Temp', 'temp@gmail.com', 'tmp123', 9, 'false'),
(7, 'dd', 'h@ff.com', 'fjhsh', 5, 'true'),
(27, 'Custom', 'hi@gmail.com', 'hi123', 5, 'true'),
(2622, 'ddfssssss', 'h@ff.aa', 'fjhsh', 5, 'true'),
(26222, 'ddfssssssv', 'h@ff.aaa', 'fjhshs', 5, 'true'),
(262221, 'ddfssssssv1', 'h@ff.aaa1', 'fjhshs', 5, 'true');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserID`),
  ADD UNIQUE KEY `UserName` (`UserName`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD KEY `Test` (`StateID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `Test` FOREIGN KEY (`StateID`) REFERENCES `states` (`StateID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
