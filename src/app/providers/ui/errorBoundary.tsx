import React from 'react';

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Обновить состояние, чтобы показать запасной UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Можно отправить ошибку на сервер или в лог
    console.error("Ошибка в компоненте:", error, errorInfo);
  }

  render() {
    if (this.state.hasError ) {
      // Запасной UI при ошибке
      return <h1>Что-то пошло не так.</h1>;
    }

    return this.props.children; 
  }
}

export { ErrorBoundary };
