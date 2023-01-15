import {
  EllipsisVerticalIcon,
  HeartIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  PaperAirplaneIcon,
  BookmarkIcon
} from '@heroicons/react/24/outline';

function Post({ username, userImg, img, caption }) {
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
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatBubbleOvalLeftEllipsisIcon className="btn" />
          <PaperAirplaneIcon className="btn -rotate-90" />
        </div>

        <BookmarkIcon className="btn" />
      </div>

      {/* Caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>

      {/* Comments */}

      {/* Input Box */}
      <form>
        <input
          type="text"
          placeholder="Add a comment..."
        />
        <button>Post</button>
      </form>

    </div>
  );
};

export default Post;
