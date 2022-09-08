import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IOUser, IUser } from 'Interfaces/interfaces';
import auth from 'Utils/api/authApi';
import { selectData, setUserData } from '../../slices/user/userSlice';

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
