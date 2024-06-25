
export const useTwitterShare = () => {
    const share = (text: string, url: string, hashtags: string) => {
        let targetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url.length ? encodeURIComponent(url) : ''}&hashtags=${hashtags.length ? encodeURIComponent(hashtags) : ''}`;
        // console.log('targetUrl', targetUrl);
        window.open(targetUrl, "_blank", "noopener,noreferrer");
    };

    return { share };
}
