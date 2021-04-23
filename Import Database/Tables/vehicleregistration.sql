-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 23, 2021 at 09:31 AM
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
-- Table structure for table `vehicleregistration`
--

CREATE TABLE `vehicleregistration` (
  `VehicleRegistrationID` int(2) NOT NULL,
  `UserID` int(2) NOT NULL,
  `VehicleID` int(2) NOT NULL,
  `RegistrationDate` date NOT NULL,
  `ExpiryDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vehicleregistration`
--

INSERT INTO `vehicleregistration` (`VehicleRegistrationID`, `UserID`, `VehicleID`, `RegistrationDate`, `ExpiryDate`) VALUES
(1, 1, 3, '2019-02-20', '2021-08-25'),
(2, 1, 4, '2020-02-28', '2021-09-23'),
(3, 3, 2, '2021-01-15', '2023-08-31'),
(4, 4, 5, '2017-08-29', '2023-12-22'),
(5, 2, 2, '2019-02-20', '2021-08-25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `vehicleregistration`
--
ALTER TABLE `vehicleregistration`
  ADD PRIMARY KEY (`VehicleRegistrationID`),
  ADD KEY `Test1` (`VehicleID`),
  ADD KEY `Test2` (`UserID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `vehicleregistration`
--
ALTER TABLE `vehicleregistration`
  ADD CONSTRAINT `Test1` FOREIGN KEY (`VehicleID`) REFERENCES `vehicle` (`VehicleID`),
  ADD CONSTRAINT `Test2` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
