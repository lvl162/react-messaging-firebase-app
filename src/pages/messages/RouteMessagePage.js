import React from 'react';
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Loading from '../../components/Loading';
import { firestore } from '../../lib/firebase';
import MessagePage from './MessagePage';
const RoutoToMessagePage = ({ match }) => {
  const me = useSelector((state) => state.auth.user.uid);
  const messagesRef = firestore.collection('chats');

  const historyChatQuery = messagesRef
    .where('members', 'array-contains', me)
    .orderBy('lastUpdated', 'desc');

  const [historyChat, loading, error] = useCollectionDataOnce(historyChatQuery);
  // const { toThisId } = match.params;
  if (match) {
    const { toThisId } = match.params;
    console.log(toThisId);
    return <MessagePage yourId={toThisId}></MessagePage>;
  } else {
    if (loading) return <Loading></Loading>;
    if (error) return <Loading>Error</Loading>;
    const lastMessageUser = historyChat && historyChat[0];
    if (lastMessageUser) {
      console.log(lastMessageUser);
      const you = lastMessageUser.members[0] === me ? lastMessageUser.members[1] : lastMessageUser.members[0];

      return <Redirect to={`/message/t/${you}`} />;
    }
  }
};

export default RoutoToMessagePage;
