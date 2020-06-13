export interface ParseError extends SyntaxError {
  code?: VParseErrorCode
  index: number
  lineNumber: number
  column: number
}
type VParseErrorCode =
  | 'abrupt-closing-of-empty-comment'
  | 'absence-of-digits-in-numeric-character-reference'
  | 'cdata-in-html-content'
  | 'character-reference-outside-unicode-range'
  | 'control-character-in-input-stream'
  | 'control-character-reference'
  | 'eof-before-tag-name'
  | 'eof-in-cdata'
  | 'eof-in-comment'
  | 'eof-in-tag'
  | 'incorrectly-closed-comment'
  | 'incorrectly-opened-comment'
  | 'invalid-first-character-of-tag-name'
  | 'missing-attribute-value'
  | 'missing-end-tag-name'
  | 'missing-semicolon-after-character-reference'
  | 'missing-whitespace-between-attributes'
  | 'nested-comment'
  | 'noncharacter-character-reference'
  | 'noncharacter-in-input-stream'
  | 'null-character-reference'
  | 'surrogate-character-reference'
  | 'surrogate-in-input-stream'
  | 'unexpected-character-in-attribute-name'
  | 'unexpected-character-in-unquoted-attribute-value'
  | 'unexpected-equals-sign-before-attribute-name'
  | 'unexpected-null-character'
  | 'unexpected-question-mark-instead-of-tag-name'
  | 'unexpected-solidus-in-tag'
  | 'unknown-named-character-reference'
  | 'end-tag-with-attributes'
  | 'duplicate-attribute'
  | 'end-tag-with-trailing-solidus'
  | 'non-void-html-element-start-tag-with-trailing-solidus'
  | 'x-invalid-end-tag'
  | 'x-invalid-namespace'