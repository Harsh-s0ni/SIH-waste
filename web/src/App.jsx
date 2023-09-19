import Intro from './components/Intro'
import { store } from './store'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'
import Views from './views'

function App() {
  const queryClient = new QueryClient()

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Views />
      </QueryClientProvider>
    </Provider>
  )
}

export default App
