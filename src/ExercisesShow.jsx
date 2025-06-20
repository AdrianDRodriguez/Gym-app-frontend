import { WodsNew } from "./WodsNew";
import { ExercisesRating } from "./Components/ExercisesRating";

export function ExercisesShow({ exercise }) {
  const youtubeId = getYouTubeId(exercise.video_url);

  return (
    <div className="text-black">
      <h1>Exercise Example</h1>
      <div style={{ display: "flex", gap: "20px" }} id="video">
        {youtubeId ? (
          <iframe 
            width="1000"
            height="300"
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
        <br />
      <ExercisesRating exerciseId={exercise.id}/>
      <WodsNew exercise={exercise}/>
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
