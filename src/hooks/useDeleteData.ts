import { MutationFunction, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface UseDeleteProps<T> {
  mutationFn: MutationFunction<unknown, T>;
  handleSuccess?: () => void;
  handleError?: () => void;
}

const useDeleteData = <T>({ mutationFn, handleSuccess, handleError }: UseDeleteProps<T>) => {
  return useMutation<unknown, unknown, T, unknown>({
    mutationFn,
    onSuccess: () => {
      // NOTE: success하고 나서 하고싶은 작업 있으면 prop으로 넘겨주세요.
      if (handleSuccess) {
        handleSuccess();
      }
    },
    onError: (error: unknown) => {
      // NOTE: 기본적인 에러처리 이외에 다른 처리를 하고 싶으면 prop으로 넘겨주세요.
      if (handleError) {
        handleError();
      } else {
        // NOTE: 에러 처리는 일관되게 서버 메세지 있는 경우 보여주고, 아니면 로그 출력하도록 했습니다.
        if (error instanceof AxiosError) {
          alert(error.response?.data.message);
        } else {
          alert('실패했습니다.');
          console.log(error);
        }
      }
    },
  });
};

export default useDeleteData;
