import { createContext, useContext, useRef, type MutableRefObject } from 'react'
import type Lenis from 'lenis'

type LenisContextType = MutableRefObject<Lenis | null>

export const LenisContext = createContext<LenisContextType>({ current: null })

export function useLenis() {
    return useContext(LenisContext)
}
