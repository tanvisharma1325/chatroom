import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; // separate messages and form input
  align-items: center; // center content horizontally
  width: 100%; // occupy full width
  height: 100vh; // occupy full height
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box; // include padding in width & height
  overflow-y: auto;
  position: relative; // position relative to allow absolute positioning within
`;


export const Message = styled.p`
  background: #eee;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 80%; // reduce width
  max-width: 600px; // limit maximum width
`;

export const Form = styled.form`
  display: flex;
  margin-top: 10px;
  width: 80%; // reduce width
  max-width: 600px; // limit maximum width
`;

export const Input = styled.input`
  flex-grow: 1; 
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #ddd;
`;

export const Button = styled.button`
  background: #007BFF;
  color: white;
  border: none;
  padding: 10px;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

export const RoomDetails = styled.div`
  background: #f8f9fa;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: center;
`;

export const LeaveButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #c82333;
  }
`;

export const SignOutButton = styled.button`
  padding: 10px;
  border: none;
  background: #007BFF;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  position: absolute; // absolute positioning
  top: 10px; // position from the top
  right: 10px; // position from the right

  &:hover {
    background: #0056b3;
  }
`;

export const MessagesContainer = styled.div`
  width: 80%; // reduce width
  max-width: 600px; // limit maximum width
  overflow-y: auto;
`;
