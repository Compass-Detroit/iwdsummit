import { useContext } from 'react'
import FontContext from '@/contexts/fontContextCore'

export default function useFont() {
  const ctx = useContext(FontContext)
  if (!ctx) throw new Error('useFont must be used within FontProvider')
  return ctx
}
