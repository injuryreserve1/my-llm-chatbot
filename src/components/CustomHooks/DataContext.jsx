import DataContext from './context'
import PropTypes from 'prop-types'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getMessages, createMessage } from './../../api/message.js'

import { useState } from 'react'

export default function DataProvider({ children }) {
  const [question, setQuestion] = useState('')
  const [isLoading, setLoading] = useState(false)
  const queryClient = useQueryClient()

  const messagesQuery = useQuery({
    queryKey: ['message'],
    queryFn: () => getMessages(),
  })

  const createMessageMutation = useMutation({
    mutationFn: () =>
      createMessage({ author: 'пользователь', contents: question }),
    onSuccess: () => {
      queryClient.invalidateQueries(['message'])
      setLoading(false)
      setQuestion('')
    },
  })

  const messages = messagesQuery.data ?? []

  const values = {
    states: { question, messages, isLoading },
    actions: {
      setQuestion,
      setLoading,
      createMessageMutation,
    },
  }

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>
}

DataProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
