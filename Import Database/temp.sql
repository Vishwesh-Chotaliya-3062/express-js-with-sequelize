-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 23, 2021 at 02:01 PM
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
-- Database: `temp`
--

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE `states` (
  `StateID` int(11) NOT NULL,
  `StateName` varchar(255) DEFAULT NULL,
  `DateCreated` varchar(255) DEFAULT NULL,
  `DateModified` varchar(255) DEFAULT NULL,
  `Status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `states`
--

INSERT INTO `states` (`StateID`, `StateName`, `DateCreated`, `DateModified`, `Status`) VALUES
(1, 'Alabama', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(2, 'Alaska', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(3, 'American Samoa', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(4, 'Arizona', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(5, 'Arkansas', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(6, 'California', '2020-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(7, 'Colorado', '2011-10-05T14:48:00.000Z', '2011-11-05T14:48:00.000Z', '1'),
(8, 'Connecticut', '2020-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(9, 'Delaware', '2020-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(10, 'District Of Columbia', '2020-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(11, 'Federated States Of Micronesia', '2011-10-05T14:48:00.000Z', '2015-10-05T14:48:00.000Z', '1'),
(12, 'Florida', '2011-10-05T14:48:00.000Z', '2015-10-05T14:48:00.000Z', '1'),
(13, 'Georgia', '2011-10-05T14:48:00.000Z', '2015-10-05T14:48:00.000Z', '1'),
(14, 'Guam', '2011-10-05T14:48:00.000Z', '2015-10-05T14:48:00.000Z', '1'),
(15, 'Hawaii', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(16, 'Idaho', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(17, 'Illinois', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(18, 'Indiana', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(19, 'Iowa', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(20, 'Kansas', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(21, 'Kentucky', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(22, 'Louisiana', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(23, 'Maine', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(24, 'Marshall Islands', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(25, 'Massachusetts', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(26, 'Michigan', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(27, 'Minnesota', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(28, 'Mississippi', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(29, 'Missouri', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(30, 'Montana', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(31, 'Nebraska', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(32, 'Nevada', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(33, 'New Hampshire', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(34, 'New Jersey', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(35, 'New Mexico', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(36, 'New York', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(37, 'North Carolina', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(38, 'North Dakota', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(39, 'Northern Mariana Islands', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(40, 'Ohio', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(41, 'Oklahoma', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(42, 'Oregon', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(43, 'Palau', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(44, 'Pennsylvania', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(45, 'Puerto Rico', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(46, 'Rhode Island', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(47, 'South Carolina', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(48, 'South Dakota', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(49, 'Tennessee', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(50, 'Texas', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(51, 'Utah', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(52, 'Vermont', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(53, 'Virgin Islands', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(54, 'Virginia', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(55, 'Washington', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(56, 'West Virginia', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(57, 'Wisconsin', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1'),
(58, 'Wyoming', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', '1');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UserID` int(11) NOT NULL,
  `UserName` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `StateID` int(11) DEFAULT NULL,
  `Status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserID`, `UserName`, `Email`, `Password`, `StateID`, `Status`) VALUES
(1, 'Vishwesh', 'hello@gmail.com', 'vish123', 6, 1),
(2, 'Sidhhesh', 'sid@gmail.com', 'sid123', 15, 0),
(3, 'Vimarsh', 'vim@gmail.com', 'vim123', 52, 1),
(4, 'Temp', 'temp@gmail.com', 'tmp123', 9, 0);

-- --------------------------------------------------------

--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `VehicleID` int(11) NOT NULL,
  `VehicleName` varchar(255) DEFAULT NULL,
  `VehicleType` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vehicle`
--

INSERT INTO `vehicle` (`VehicleID`, `VehicleName`, `VehicleType`) VALUES
(1, 'i20', 'Car'),
(2, 'swift', 'Car'),
(3, 'Sp125', 'Bike'),
(4, 'Hero', 'Bicycle'),
(5, 'Activa 5G', 'Gearless Vehicle');

-- --------------------------------------------------------

--
-- Table structure for table `vehicleregistration`
--

CREATE TABLE `vehicleregistration` (
  `VehicleRegistrationID` int(11) NOT NULL,
  `UserID` int(11) DEFAULT NULL,
  `VehicleID` int(11) DEFAULT NULL,
  `RegistrationDate` varchar(255) DEFAULT NULL,
  `ExpiryDate` varchar(255) DEFAULT NULL
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
-- Indexes for table `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`StateID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserID`),
  ADD UNIQUE KEY `UserName` (`UserName`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD KEY `StateID` (`StateID`);

--
-- Indexes for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`VehicleID`);

--
-- Indexes for table `vehicleregistration`
--
ALTER TABLE `vehicleregistration`
  ADD PRIMARY KEY (`VehicleRegistrationID`),
  ADD KEY `UserID` (`UserID`),
  ADD KEY `VehicleID` (`VehicleID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `states`
--
ALTER TABLE `states`
  MODIFY `StateID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=262224;

--
-- AUTO_INCREMENT for table `vehicle`
--
ALTER TABLE `vehicle`
  MODIFY `VehicleID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `vehicleregistration`
--
ALTER TABLE `vehicleregistration`
  MODIFY `VehicleRegistrationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`StateID`) REFERENCES `states` (`StateID`);

--
-- Constraints for table `vehicleregistration`
--
ALTER TABLE `vehicleregistration`
  ADD CONSTRAINT `vehicleregistration_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`),
  ADD CONSTRAINT `vehicleregistration_ibfk_2` FOREIGN KEY (`VehicleID`) REFERENCES `vehicle` (`VehicleID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
