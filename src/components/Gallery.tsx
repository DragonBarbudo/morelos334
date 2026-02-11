import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";

interface GalleryProps {
  images: string[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <Dialog key={index}>
          <DialogTitle className="hidden">Abrir imagen</DialogTitle>
          <DialogTrigger asChild>
            <div
              className="relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer group shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image}
                alt={`Property ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-5xl border-none bg-transparent shadow-none p-0">
            <div className="relative animate-in zoom-in-95 duration-300">
              <img
                src={image}
                alt={`Property ${index + 1}`}
                className="max-h-[85vh] w-full h-full object-contain rounded-3xl shadow-2xl"
              />
            </div>
            <DialogDescription className="hidden"></DialogDescription>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};


export default Gallery;