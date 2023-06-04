export const getYear = (premiered: string | undefined) => {
    if (premiered) {
      const year = new Date(premiered).getFullYear();
      return year.toString();
    }
    return undefined;
  };