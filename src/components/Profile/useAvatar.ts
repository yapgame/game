import { useState } from 'react';
import { useDispatch } from 'react-redux';
import auth from 'Utils/api/authApi';
import { IUser } from 'Interfaces/IUser';
import { setUserData } from '../../slices/user/userSlice';

export function useAvatar(initAvatar: string|null) {
  const dispatch = useDispatch();
  const [img, setImg] = useState<string>(initAvatar!);

  function setNewAvatar(data: File) {
    auth
      .changeUserAvatar(data)
      .then((res: Response) => {
        dispatch(setUserData(res));
        const { avatar } = res as unknown as IUser;
        setImg(avatar!);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return [img, setNewAvatar] as const;
}
