import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import { Content, Title, Grid, Card, Numbers } from 'components'
import reportWebVitals from 'core/reportWebVitals'
import { configureStore, unregister } from 'core'
import { GlobalStyles, theme } from 'styles'

const store = configureStore()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <Content data-cy="content">
        <Title data-cy="title">Sudoku</Title>
        <Card data-cy="card">
          <Grid />
          <Numbers />
        </Card>
      </Content>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)

reportWebVitals()
unregister()
