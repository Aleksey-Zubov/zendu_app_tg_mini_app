import { withErrorBoundary } from 'react-error-boundary';

import { BrowserRouter, QueryClientProvider } from './providers';

const App = withErrorBoundary(
  () => (
    <QueryClientProvider>
      <BrowserRouter />
    </QueryClientProvider>
  ),
  {
    fallback: <div>Error</div>,
  }
);

export default App;
