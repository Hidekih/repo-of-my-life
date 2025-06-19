import { useCallback } from "react";
import domToImage from "dom-to-image-more";

export const usePrintScreen = <T,>(ref: React.RefObject<T>) => {
  const captureScreen = useCallback(async () => {
    if (typeof document == 'undefined') return;
    if (!ref.current) return;

    try {
      const blob: Blob = await domToImage.toBlob(ref.current);
      return blob;
    } catch (err) {
      console.error("Erro ao gerar imagem:", err);
    }
  }, [ref]);

  return {
    captureScreen,
  }
};
