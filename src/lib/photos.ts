import type { ImageMetadata } from 'astro';
import { photos } from '../data/site';

const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}',
  { eager: true },
);

export function getPhoto(name: string): ImageMetadata | undefined {
  const key = Object.keys(files).find(
    (p) => p.split('/').pop()!.replace(/\.[^.]+$/, '').toLowerCase() === name,
  );
  return key ? files[key].default : undefined;
}

export function photoMeta(name: string) {
  return photos.find((p) => p.name === name);
}

/** Foto yang benar-benar ada, untuk galeri dan kredit */
export function availablePhotos() {
  return photos
    .map((p) => ({ ...p, image: getPhoto(p.name) }))
    .filter((p) => p.image) as (typeof photos[number] & { image: ImageMetadata })[];
}
