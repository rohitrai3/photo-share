import {
  EllipsisVerticalIcon,
  HeartIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';

function Post({ username, userImg, img }) {
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
      <div>
        <HeartIcon className="btn" />
        <ChatBubbleOvalLeftEllipsisIcon className="btn" />
        <PaperAirplaneIcon className="btn -rotate-90" />
      </div>

      {/* Caption */}

      {/* Comments */}

      {/* Input Box */}

    </div>
  );
};

export default Post;
