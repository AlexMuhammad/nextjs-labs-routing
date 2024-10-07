import { IDummy } from '@/dummy-news';
import Link from 'next/link';

export default function NewsList({ news }: {news: IDummy[]}) {
  return (
    <ul className="news-list">
      {news.map((newsItem: IDummy) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}/image`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}