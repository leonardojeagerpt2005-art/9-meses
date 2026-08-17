import { FINAL_PHOTO_FILE } from './config'

const modules = import.meta.glob('/fotos/*.jpeg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

export function photoUrl(fileName: string): string {
  const key = `/fotos/${fileName}`
  const url = modules[key]
  if (!url) {
    throw new Error(`Foto no encontrada: ${fileName}`)
  }
  return url
}

export function finalPhotoUrl(): string {
  return photoUrl(FINAL_PHOTO_FILE)
}

export function availablePhotos(): string[] {
  return Object.keys(modules)
    .map((key) => key.replace(/^\/fotos\//, ''))
    .sort((a, b) => a.localeCompare(b))
}