import { useEffect, useState,} from 'react';
import { Link } from '@tanstack/react-location';
import { fetchPosts } from '../lib/fetchPosts';
import type { Post } from '../types';

export const PostIndex= () => {
  const [posts, setPosts] = useState<Post[] | null>([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  if (!posts) return null;

  return (
    <div>
      <h1>Post Index</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};