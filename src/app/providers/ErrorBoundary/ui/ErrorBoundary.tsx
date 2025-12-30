/* eslint-disable */

//Это тупо шаблон, я хз (на классах в 2к26 пишут только пидоры)
//Обертка при какой либо ошибке прокидывает на экран компонент <PageError/> из widgets (да да это наши fabrics)

import { PageError } from "@/widgets/PageError/PageError";
import React, { ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;

    const { children } = this.props;
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <PageError />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
