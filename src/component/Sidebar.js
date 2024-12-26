import React from "react";
import styled from "styled-components";
import { AiFillAccountBook, AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai"; // Import specific icons
import { BsPerson, BsGraphUp } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";

// Styled components
const SidebarContainer = styled.div`
  width: 200px;
  background-color: #333;
  color: #fff;
  position: fixed;
  height: 80%;
  paddingtoptop: 20px;
`;


const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background-color: #555;
  }
`;

const StyledIcon = styled.div`
  margin-right: 10px;
  font-size: 24px;
  color: #fff;
`;

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  flex: 1;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <LinkContainer>
        <StyledIcon>
          <BsPerson />
        </StyledIcon>
        <Link href="thongtinnhanvien">Thông tin nhân viên</Link>
      </LinkContainer>
      <LinkContainer>
        <StyledIcon>
          <AiOutlineClockCircle />
        </StyledIcon>
        <Link href="checkincheckout">Check-in/Check-out</Link>
      </LinkContainer>
      <LinkContainer>
        <StyledIcon>
          <AiFillAccountBook />
        </StyledIcon>
        <Link href="nghiphep">Nghỉ phép</Link>
      </LinkContainer>
      <LinkContainer>
        <StyledIcon>
          <AiOutlineCalendar />
        </StyledIcon>
        <Link href="chamcong">Chấm công</Link>
      </LinkContainer>
      <LinkContainer>
        <StyledIcon>
          <BsGraphUp />
        </StyledIcon>
        <Link href="baocao">Báo cáo</Link>
      </LinkContainer>
      <LinkContainer>
        <StyledIcon>
          <FaRegCalendarAlt />
        </StyledIcon>
        <Link href="lichlenvanphong">Lịch lên văn phòng</Link>
      </LinkContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
