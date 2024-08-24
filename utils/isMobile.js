export const isMobile = (userAgent) => {
    return /android.+mobile|ip(hone|[oa]d)/i.test(userAgent);
};
  