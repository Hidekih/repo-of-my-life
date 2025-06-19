export const downloadFromUrl = (url: string, filename: string) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();

  // * Revoke the object URL to free up memory (need when link was created with URL.createObjectURL)
  if (url.startsWith("blob:")) {
    URL.revokeObjectURL(url);
  }
}
