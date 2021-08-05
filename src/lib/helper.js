import PostItem from '../pages/homepage/PostItem';

export function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + 'y';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' months';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + 'd';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + 'h';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + 'm';
  }
  if (seconds < 1) {
    return 'Just now';
  }
  return Math.floor(seconds) + 's';
}

export function docToPostItem(doc) {
  const { author, content, createdAt, likesCount, commentsCount } = doc.data();
  const createdBy = '@' + author.email.split('@')[0];
  const createdSince = createdAt ? timeSince(createdAt.toDate()) : 'loading...';
  return (
    <PostItem
      nickname={createdBy}
      authorId={author.uid}
      key={doc.id}
      postId={doc.id}
      avtUrl={author.photoURL}
      displayName={author.displayName}
      content={content}
      createdAt={createdSince}
      likesCount={likesCount}
      commentsCount={commentsCount}
    />
  );
}
