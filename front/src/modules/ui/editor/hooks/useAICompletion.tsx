import { Editor } from '@tiptap/core';
import { useCompletion } from 'ai/react';

interface UseAICompletionProps {
  editor: Editor | null;
  onFinish: (prompt: string, completion: string) => void;
}

const useAICompletion = ({ editor, onFinish }: UseAICompletionProps) => {
  const { complete, completion, isLoading, stop } = useCompletion({
    id: 'novel',
    api: 'https://novel.sh/api/generate',
    onFinish: onFinish,
    onError: () => {
      console.error('Something went wrong.');
    },
  });

  return { complete, completion, isLoading, stop };
};

export default useAICompletion;
