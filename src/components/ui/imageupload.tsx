'use client';

import { useState, useRef } from 'react';
import { cn } from "@/lib/utils"; // Optional: for class merging
import Image from "next/image";
import { IconFileUpload, IconSquareXFilled } from '@tabler/icons-react';
import { useSession } from 'next-auth/react';

export default function ImageUploader({preview, setPreview}: {
  preview: string | null;
  setPreview: (url: string | null) => void;
}) {

  const { data: session } = useSession()

  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = async (file: File) => {
    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!validTypes.includes(file.type)) {
      setError("Only JPG, JPEG, PNG, WEBP files allowed.");
      return;
    }

    if (file.size > 1024 * 1024) {
      setError("File size must be less than 1MB.");
      return;
    }

    setError(null);
    const formData = new FormData();
    formData.append('image', file);
    let res;
    if(preview){
      formData.append('oldKey', preview); 
      res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/images/updateImage`, {
      method: "PUT",
      headers: {
          Authorization: `Bearer ${(session as any)?.accessToken}`,
        },
      body: formData,
    });
    }
    else{
      res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/images/uploadImage`, {
      method: "POST",
      headers: {
          Authorization: `Bearer ${(session as any)?.accessToken}`,
        },
      body: formData,
    });
    }
    const result = await res.json();
    setPreview(result.imageUrl);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDeleteImage = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/images/delete`, {
      method: "DELETE",
      headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${(session as any)?.accessToken}`,
        },
      body: JSON.stringify({ key: preview }),
    });
    setPreview(null);
  }

  return (
    <div className="space-y-2 relative">
      {preview && <IconSquareXFilled onClick={handleDeleteImage} className='fill-red-500 absolute top-5 right-5'/>}
      <div
        className={cn(
          "flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-xl p-6 cursor-pointer text-center transition hover:border-blue-400",
          error && "border-red-500"
        )}
        onClick={() => fileRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {preview ? (
          <Image
            src={preview}
            alt="Uploaded"
            width={90}
            height={90}
            className="rounded-lg object-contain"
          />
        ) : (
          <>
            <div className="text-gray-400 mb-2">
              <IconFileUpload/>
            </div>
            <p className="text-blue-600 font-medium">Click to upload</p>
            <p className="text-gray-500 text-sm">Or drag and drop</p>
          </>
        )}
      </div>

      <input
        type="file"
        accept="image/jpeg, image/jpg, image/png, image/webp"
        ref={fileRef}
        onChange={handleChange}
        className="hidden"
      />

      <p className="text-gray-500 text-sm">
        JPG JPEG PNG WEBP. Less than 1MB
      </p>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
