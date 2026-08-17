export function safeString(value: string | null | undefined, fallback: string): string {
  return value && value.trim().length > 0 ? value : fallback
}