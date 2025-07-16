import type { Photo } from "react-photo-album";
import fs from 'fs';
import path from 'path';

// Read image files from public/gallery directory
const galleryDir = path.join(process.cwd(), 'public', 'gallery');

let files: string[] = [];

try {
    files = fs.readdirSync(galleryDir);
} catch (error) {
    console.log('Gallery directory not found or empty');
    files = [];
}

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photos = files
    .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
    .map((file) => {
        // Try to extract dimensions from filename (format: name.WIDTHxHEIGHT.ext)
        const matcher = file.match(/^(.*)\.(\d+)x(\d+)\.(.*)$/);

        let width: number;
        let height: number;
        
        if (matcher) {
            // If dimensions are in filename, use them
            width = Number.parseInt(matcher[2], 10);
            height = Number.parseInt(matcher[3], 10);
        } else {
            // Fallback dimensions for files without dimensions in filename
            width = 960;
            height = 640;
        }

        return {
            src: `/gallery/${file}`,
            width,
            height,
            srcSet: breakpoints.map((breakpoint) => ({
                src: `/gallery/${file}`,
                width: breakpoint,
                height: Math.round((height / width) * breakpoint),
            })),
        } as Photo;
});

export default photos;
