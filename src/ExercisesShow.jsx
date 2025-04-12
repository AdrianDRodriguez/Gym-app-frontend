export function ExercisesShow({ exercise }) {
  const youtubeId = getYouTubeId(exercise.video_url);

  return (
    <div>
      <h1>Exercise Example</h1>
      {youtubeId ? (
        <iframe 
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title="Youtube video player" 
          frameborder="0"
          alllow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        ) : (
        <p>Invalid URL</p>
      )}
    </div>
  );
}

// This function helps to extract the Youtube ID
function getYouTubeId(url) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname === 'youtu.be') {
      return parsedUrl.pathname.slice(1); 
    }

    if (parsedUrl.hostname.includes('youtube.com')) {
      return parsedUrl.searchParams.get('v'); 
    }

    return null;
  } catch (error) {
    return null;
  }
}
