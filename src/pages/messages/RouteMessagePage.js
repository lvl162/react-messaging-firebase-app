import React from 'react';
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';
// import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Loading from '../../components/Loading';
import { auth, firestore } from '../../lib/firebase';
import MessagePage from './MessagePage';
const RouteToMessagePage = ({ match }) => {
  const me = auth.currentUser.uid;
  const messagesRef = firestore.collection('chats');

  const historyChatQuery = messagesRef
    .where('members', 'array-contains', me)
    .orderBy('lastUpdated', 'desc');

  const [historyChat, loading, error] = useCollectionDataOnce(historyChatQuery);
  if (match) {
    const { toThisId } = match.params;
    return <MessagePage yourId={toThisId}></MessagePage>;
  } else {
    if (loading) return <Loading></Loading>;
    if (error) return <Loading>Error</Loading>;
    const lastMessageUser = historyChat && historyChat[0];
    if (lastMessageUser) {
      const you =
        lastMessageUser.members[0] === me
          ? lastMessageUser.members[1]
          : lastMessageUser.members[0];

      return <Redirect to={`/message/t/${you}`} />;
    } else {
      return <Redirect to={'/message/new'} />;
    }
  }
};

export default RouteToMessagePage;
