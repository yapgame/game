/* eslint-disable react/destructuring-assignment */
import React, { Component, ErrorInfo, ReactNode } from 'react';
import Alert from '@mui/material/Alert';

interface Props {
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  // eslint-disable-next-line react/state-in-constructor
  public state: State = {
    hasError: false,
  };

  // eslint-disable-next-line no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <Alert severity="error">Sorry.. there was an error</Alert>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
