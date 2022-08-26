import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectData, setUserData } from '../../user/userSlice';

import { IUser } from '../../interfaces/interfaces';
import auth from '../../utils/authApi';

interface IOUser {
  user: IUser;
}

function useEditProfile() {
  const dispatch = useDispatch();

  const user = useSelector(selectData) as unknown as IOUser;
  const [uData, setUData] = React.useState(user.user);

  function setNewData(data: Record<string, string>) {
    auth
      .changeUserInfo(data)
      .then((res: Response) => {
        const nData = res as unknown as IUser;
        dispatch(setUserData(nData));
        setUData(nData);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return [uData, setNewData] as const;
}

export default useEditProfile;
