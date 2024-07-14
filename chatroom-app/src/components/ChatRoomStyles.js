import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 600px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  overflow-y: auto;
`;

export const Message = styled.p`
  background: #eee;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 10px;
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
