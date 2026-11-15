
import { useEffect, useState } from "react";
import "./App.css";

type Activity = {
  time: string;
  status: string;
};

function App() {
  const [health, setHealth] = useState("Checking...");
  const [uptime, setUptime] = useState<number | null>(null);
  const [lastChecked, setLastChecked] = useState("Not checked yet");
  const [errorMessage, setErrorMessage] = useState("");
  const [activity, setActivity] = useState<Activity[]>([]);
  const [checking, setChecking] = useState(false);

  const checkHealth = async () => {
    if (checking) return;
    setChecking(true);

    let result = "Unavailable";

    try {
      const response = await fetch("/api/health");

      if (!response.ok) {
        throw new Error("The API returned an error.");
      }

      const data = await response.json();

      result = data.status;
      setHealth(data.status);
      setUptime(data.uptime_seconds);
      setErrorMessage("");
    } catch {
      setHealth("Unavailable");
      setUptime(null);
      setErrorMessage(
        "Unable to connect to the AutoOps API. Check that the backend is running."
      );
    } finally {
      const time = new Date().toLocaleTimeString();

      setLastChecked(time);
      setActivity((previous) =>
        [{ time, status: result }, ...previous].slice(0, 5)
      );
      setChecking(false);
    }
  };

  useEffect(() => {
    checkHealth();

    const interval = setInterval(checkHealth, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>AutoOps</h2>
        <p>Monitoring Platform</p>

        <nav>
          <a className="active" href="#overview">Overview</a>
        </nav>

        <div className="sidebar-footer">
          DevOps Monitoring
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <h1>Application Overview</h1>
            <p>Monitor your application health and availability.</p>
          </div>
          <span className="live-indicator">Live monitoring</span>
        </header>

        <section className="welcome">
          <h2>Welcome to AutoOps</h2>
          <p>
            Your application monitoring dashboard.
            Health checks refresh every 10 seconds.
          </p>
        </section>

        <section className="cards">
          <div className="card">
            <span>Application</span>
            <h2>AutoOps API</h2>
            <p>FastAPI service</p>
          </div>

          <div className="card">
            <span>Health Status</span>
            <h2 className={health === "healthy" ? "healthy" : "unhealthy"}>
              {health}
            </h2>
            <p>Last checked: {lastChecked}</p>
          </div>

          <div className="card">
            <span>Application Uptime</span>
            <h2>{uptime !== null ? `${Math.floor(uptime)} seconds` : "--"}</h2>
            <p>Reported by the API</p>
          </div>
        </section>

        <section className="details">
          {errorMessage && (
            <p className="error-message">{errorMessage}</p>
          )}

          <h2>Health Check Details</h2>
          <p>Endpoint: /health</p>
          <p>Refresh interval: 10 seconds</p>

          <button onClick={checkHealth} disabled={checking}>
            {checking ? "Checking..." : "Check health now"}
          </button>
        </section>

        <section className="details">
          <h2>Recent Activity</h2>
          {activity.length === 0 ? (
            <p>No health checks recorded yet.</p>
          ) : (
            activity.map((item, index) => (
              <p key={`${item.time}-${index}`}>
                {item.time} — Health check:{" "}
                <strong>{item.status}</strong>
              </p>
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default App;

