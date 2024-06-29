import type { Recursive, SemanticToken, Token } from '@pandacss/types'

export type PandaRecursiveToken<T = string> = Recursive<Token<T>>

export type PandaRecursiveSemanticToken<T = string> = Recursive<SemanticToken<T>>

export type ColorGeneratorConfigMap = Record<
  string,
  {
    hue: string | number
    luminanceShift?: number
    chromaShift?: number
    isGray?: boolean
  }
>

export type ColorGeneratorConfig = {
  hue: string | number
  luminanceShift?: number
  chromaShift?: number
  isGray?: boolean
}
