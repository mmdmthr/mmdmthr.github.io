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
        // Try to extract dimensions from filename (format: title.date.WIDTHxHEIGHT.ext)
        const matcher = file.match(/^(.*)\.(\d+)x(\d+)\.(.*)$/);

        let width: number;
        let height: number;
        let title: string;
        
        if (matcher) {
            // If dimensions are in filename, use them
            width = Number.parseInt(matcher[2], 10);
            height = Number.parseInt(matcher[3], 10);
            
            // Extract title from the first part (before the dimensions)
            // Format: title.date.WIDTHxHEIGHT.ext
            const titlePart = matcher[1]; // Everything before .WIDTHxHEIGHT
            const titleMatch = titlePart.match(/^([^.]+)/); // Get first part before any dot
            
            if (titleMatch) {
                title = titleMatch[1]
                    .replace(/[-_]/g, ' ') // Replace hyphens and underscores with spaces
                    .replace(/\b\w/g, l => l.toUpperCase()); // Convert to title case
            } else {
                title = titlePart
                    .replace(/[-_]/g, ' ')
                    .replace(/\b\w/g, l => l.toUpperCase());
            }
        } else {
            // Fallback for files without dimensions in filename
            width = 960;
            height = 640;
            
            // Extract title from filename (remove extension and replace hyphens/underscores with spaces)
            title = file
                .replace(/\.(jpg|jpeg|png|webp|gif)$/i, '')
                .replace(/[-_]/g, ' ')
                .replace(/\b\w/g, l => l.toUpperCase());
        }

        return {
            src: `/gallery/${file}`,
            width,
            height,
            title: title,
            alt: title,
            srcSet: breakpoints.map((breakpoint) => ({
                src: `/gallery/${file}`,
                width: breakpoint,
                height: Math.round((height / width) * breakpoint),
            })),
        } as Photo;
});

export default photos;
