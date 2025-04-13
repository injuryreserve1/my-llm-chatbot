import { useContext } from 'react'
import DataContext from './context'

export default function useData() {
  return useContext(DataContext)
}
