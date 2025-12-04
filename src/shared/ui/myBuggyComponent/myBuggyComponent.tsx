import React from 'react';
import { ErrorBoundary } from '@/app/providers';

// Компонент, который намеренно вызывает ошибку
const BuggyComponent = () => {
  throw new Error("Упс, ошибка в компоненте!");
}

export const MyBuggyComponent = () => {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}

