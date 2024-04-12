import { Component, ErrorInfo, ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode,
  fallback: ReactElement
}

type State = {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  state = {
    hasError: false
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true}
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log("error", error)
  }

  private resetError() {
    this.setState({hasError: false})
  }

  render() {
    console.log('haserror', this.state.hasError)
    if (this.state.hasError) {
      return (
        <>
          <h2>Something went wrong</h2>
          <Link onClick={this.resetError} to={"/"}>Return to home</Link>
        </>
      )
    }
    return this.props.children;
  }
}