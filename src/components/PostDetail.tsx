import { useEffect, useState,} from 'react';
import { useMatch } from '@tanstack/react-location';
import { fetchPostById } from '../lib/fetchPosts';
import { Post } from '../types';

export const PostDetail = () => {
  const { postId } = useMatch().params;
  const [post, setPost] = useState<Post | null>();

  useEffect(() => {
    if (postId) {
      fetchPostById(postId).then(setPost);
    } else {
      setPost(null);
    }
  }, [postId]);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </div>
  );
};