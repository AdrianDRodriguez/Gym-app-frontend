export function WelcomePage() {
  return(
    <div className="bg-hero d-flex flex-column text-center text-white justify-content-center align-items-center vh-100">

      <main id="homepage-text" className="welcome-overlay">
        <h1 className="display-5 fw-bold">Welcome To HYPERBOX!!</h1>
          <p className="lead my-3">
          We're pumped to have you join our community of athletes, grinders, and everyday warriors. Whether you're stepping into the box for the first time or you're chasing new PRs, Hyperbox is where you'll find challenge, support, and growth — all under one roof. Our mission is simple: build stronger humans, inside and out ,no matter your level, we train hard, lift each other up, and have fun doing it.
          </p>
          <p className="lead">
            <a href="/exercises" className="btn btn-lg btn-light fw-bold">See the exercises</a>
          </p>
      </main>

    </div>
  );
};
