import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const ImagePage = ({ params }: { params: { slug: string } }) => {
  const newsSlug = params.slug;
  const newItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newItem) {
    notFound();
  }
  return (
    <div className="bg-blue-300 p-3">
      <span className="text-black">{newItem.title}</span>
      <div className="relative h-52 w-52">
        <Image src={`/images/news/${newItem.image}`} alt={newItem.title} fill />
      </div>
    </div>
  );
};

export default ImagePage;
