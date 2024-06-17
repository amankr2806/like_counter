'use client'
import { fetchUserById } from '@/store/userIdSlice';
import { RootState, AppDispatch } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import Counter from '@/components/Counter';
import HomeButton from '@/components/HomeButton';


interface UserDetailPageProps {
  params: any;
}

const UserDetailPage: React.FC<UserDetailPageProps> = ({ params }) => {
  const dispatch = useDispatch<AppDispatch>();
  const id = params.id;
  const { users, loading, error } = useSelector((state: RootState) => state.userId);
  const user = users.find((user) => user.id === Number(id));

  useEffect(() => {
    if (!user) {
      dispatch(fetchUserById(Number(id)));
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>User not found</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>User Name: {user.username}</p>
      <Counter/>
      <HomeButton />
    </div>
  );
};



export default UserDetailPage;