import React from 'react';
import { useAppSelector } from '../redux/hook';

export default function Tasks() {
  const tasks = useAppSelector((state) => state.todo?.tasks); 
  console.log('Tasks:', tasks);
  
  return (
    <div>Welcome to the Tasks manager app</div>
  );
}
