import React from "react";
import styled from "styled-components";
import { FaUserCircle, FaRegCalendarAlt, FaEdit } from "react-icons/fa";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FiCalendar } from "react-icons/fi";

// Styled Components


const Content = styled.div`
  width: calc(100% - 100%);
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
`;

const TableHeader = styled.th`
  background-color: #f1f1f1;
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-align: left;
`;

const EditIcon = styled(FaEdit)`
  color: #007bff;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

// Sample Data
const tableData = [
  {
    date: "12/12/2024",
    checkIn: "08:47:14",
    lateTime: "00:15:00",
    checkOut: "12:01:10",
    earlyLeave: "06:28:50",
    lateReason: "tắc đường ",
    leaveReason: "gia đình ",
  },
  {
    date: "11/12/2024",
    checkIn: "08:41:42",
    lateTime: "00:12:00",
    checkOut: "12:00:56",
    earlyLeave: "06:29:04",
    lateReason: "sức khỏekhỏe",
    leaveReason: "khám bệnh ",
  },
];

const CheckinScreen = () => {
  return (
    
        <Content>
          <Title>Check-in/Check-out</Title>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
            <input type="text" placeholder="Search" style={{ padding: "10px", width: "200px" }} />
            <Button>Check In</Button>
          </div>
          <Table>
            <thead>
              <tr>
                <TableHeader>Ngày làm việc</TableHeader>
                <TableHeader>Thời gian check in</TableHeader>
                <TableHeader>Thời gian đến muộn</TableHeader>
                <TableHeader>Thời gian check out</TableHeader>
                <TableHeader>Thời gian về sớm</TableHeader>
                <TableHeader>Lý do đến muộn</TableHeader>
                <TableHeader>Lý do về sớm</TableHeader>
                <TableHeader>Actions</TableHeader>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.checkIn}</TableCell>
                  <TableCell>{row.lateTime}</TableCell>
                  <TableCell>{row.checkOut}</TableCell>
                  <TableCell>{row.earlyLeave}</TableCell>
                  <TableCell>{row.lateReason}</TableCell>
                  <TableCell>{row.leaveReason}</TableCell>
                  <TableCell>
                    <EditIcon />
                  </TableCell>
                </tr>
              ))}
            </tbody>
          </Table>
        </Content>
  );
};

export default CheckinScreen;
