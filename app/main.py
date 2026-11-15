from time import time

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# Record when the application starts
START_TIME = time()

# Create the FastAPI application
app = FastAPI(
    title="AutoOps API",
    description="An automated application deployment and health monitoring project.",
    version="1.0.0",
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def home():
    """Return basic information about the application."""
    return {
        "application": "AutoOps",
        "message": "Welcome to AutoOps!",
        "status": "running",
    }


@app.get("/health")
async def health_check():
    """Return the health status and application uptime."""
    uptime = round(time() - START_TIME, 2)

    return {
        "status": "healthy",
        "uptime_seconds": uptime,
    }
