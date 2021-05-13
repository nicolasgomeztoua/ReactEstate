import styled from "styled-components";
import { Link } from "gatsby";

export const Button = styled(Link)`
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "16px")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};
  color: ${({ primary }) => (primary ? "#fff" : "000d1a")};
  background: ${({ primary }) => (primary ? "#000d1a" : "#cd863f")};

  &:hover {
    transform: translateY(-2px);
  }
`;
