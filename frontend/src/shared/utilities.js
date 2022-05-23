export const removeTextQuotes = (textWithQuotes) => {
  if(typeof textWithQuotes !== "string") return new Error("Please insert a text")

  return textWithQuotes.replaceAll('"', "");
}