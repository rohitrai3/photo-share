import {
  EllipsisVerticalIcon,
  HeartIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  FaceSmileIcon
} from '@heroicons/react/24/outline';
import { addDoc, collection, onSnapshot, orderBy, serverTimestamp, query } from '@firebase/firestore';
import { db } from '../firebase';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc')
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db]
  );

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment('');

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          alt="User Profile"
        />
        <p className="flex-1 font-bold">{username}</p>
        <EllipsisVerticalIcon className="h-5" />
      </div>

      {/* Image */}
      <img
        src={img}
        className="object-cover w-full"
        alt="Post Image"
      />

      {/* Buttons */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatBubbleOvalLeftEllipsisIcon className="btn" />
            <PaperAirplaneIcon className="btn -rotate-90" />
          </div>

          <BookmarkIcon className="btn" />
        </div>
      )}

      {/* Caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>

      {/* Comments */}

      {/* Input Box */}
      {session && (
        <form className="flex items-center p-4">
          <FaceSmileIcon className="h-7" />
          <input
            type="text"
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="border-none flex-1 focus:ring-0 outline-none"
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            onClick={sendComment}
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}

    </div>
  );
};

export default Post;
