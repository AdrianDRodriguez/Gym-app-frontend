export function ExercisesShow({ exercise }) {
  const youtubeId = getYouTubeId(exercise.video_url);

  return (
    <div>
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
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }} id="dropdown.and.button">

        <select class="form-select form-select-sm" aria-label="Small select example">
          <option selected>How many reps you want to add?</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <button type="button" class="btn btn-outline-dark">Add exercise</button>

      </div>

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
