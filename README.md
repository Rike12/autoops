
# AutoOps – Application Monitoring Dashboard

## About AutoOps

I built AutoOps as part of my EAS Trainee/Junior DevOps Engineer technical challenge.

I wanted to create something practical that would help me understand how application monitoring works and how different parts of an application communicate with each other.


## 2. About Me

I am a Frontend Engineer with experience building web applications
and user interfaces. I have also completed a six-month DevOps
bootcamp and am currently gaining practical experience through
my DevOps internship at Amdari.

I built AutoOps to combine my frontend development experience
with the DevOps skills I have been developing, particularly in
automation, containerisation, testing and security.

## 2. Project Features

AutoOps is a simple monitoring dashboard that allows me to check whether an application is running properly. It has a Python backend that provides the application's health information and a React dashboard that displays the results.

Instead of checking the backend manually every time, I can open the dashboard and see the current application status in one place.

This project also gave me an opportunity to practise working with Docker, automated testing, GitHub Actions and security scanning.

## What AutoOps Does

The dashboard currently allows me to:

- See whether the application is healthy or unavailable.
- Check how long the backend has been running.
- Automatically refresh the health status every 10 seconds.
- Run a health check manually when needed.
- View recent health-check activity.
- Access the backend API and its documentation.

I also included automated tests and a workflow that checks the project and scans the container image for known security vulnerabilities.

## Tools and Technologies

These are the main tools I used:

| Tool | How I used it |
|---|---|
| Python | Built the backend |
| FastAPI | Created the API and health-check endpoint |
| React | Built the dashboard |
| TypeScript | Used to develop the frontend |
| Vite | Ran and built the frontend |
| Pytest | Tested the backend |
| Docker | Packaged the application |
| Docker Compose | Defined the frontend and backend services |
| GitHub Actions | Automated project checks |
| Trivy | Checked the container image for vulnerabilities |
| Git and GitHub | Managed and shared the project |

## Getting Started

If you would like to try AutoOps on your own computer, follow the steps below.

### Requirements

You will need:

- Python 3.12 or later
- Node.js and npm
- Git

### 1. Download the project

Open your terminal and run:

```bash
git clone https://github.com/Rike12/autoops.git
cd autoops
```

### 2. Set up the backend

Create a virtual environment:

```bash
python3 -m venv .venv
```

Activate it:

```bash
source .venv/bin/activate
```

Install the required packages:

```bash
pip install -r requirements.txt
```

Start the backend:

```bash
uvicorn app.main:app --reload
```

The backend will be available at:

http://localhost:8000

### 3. Start the dashboard

Open a second terminal and go into the frontend folder:

```bash
cd autoops/frontend
```

Install the frontend packages:

```bash
npm install
```

Start the dashboard:

```bash
npm run dev
```

Open the following address in your browser:

http://localhost:5173

You should now be able to use the AutoOps dashboard.

## Checking the Application

The backend has three main endpoints:

| Endpoint | Purpose |
|---|---|
| `/` | Main application endpoint |
| `/health` | Shows the health status and uptime |
| `/docs` | Allows you to explore and test the API |

For example, visiting:

http://localhost:8000/health

returns the current health status and the time the application has been running since startup.

## Running the Tests

I used Pytest to check that the backend endpoints work as expected.

To run the tests, activate the virtual environment and enter:

```bash
python -m pytest
```

The two tests in the current test suite passed during my final checks.

## Running with Docker

I also included Docker configuration to make it possible to run the frontend and backend together.

If Docker and the Docker Compose plugin are installed, run:

```bash
docker compose up --build
```

The services are configured to use these addresses:

- Dashboard: http://localhost:8080
- Backend: http://localhost:8001
- API documentation: http://localhost:8001/docs

To stop the services:

```bash
docker compose down
```

## Automated Checks and Security

I added a GitHub Actions workflow to automate some of the checks carried out during development.

It runs the backend tests, builds the application image and uses Trivy to look for known security vulnerabilities.

During development, Trivy reported vulnerabilities in the container image. I investigated the findings and updated the Docker build process rather than simply ignoring the warnings.

This was a useful part of the project because it helped me understand why checking the security of application images matters.

## What I Learned

Building AutoOps helped me gain practical experience in several areas.

I learned more about connecting a frontend to a backend, creating API endpoints, writing tests and using Docker to package an application.

I also gained experience setting up GitHub Actions and investigating security issues reported by Trivy.

There were challenges along the way, particularly when connecting the dashboard to the backend and dealing with issues found during development. Working through them helped me understand the project better.

I have documented my research, the approaches I explored and what I learned in [RESEARCH.md](RESEARCH.md).

I have also explained how I used AI during development, including how I checked and tested the suggestions, in [AI.md](AI.md).

## What I Would Like to Improve

There are still several things I would like to add as I continue learning:

- Keep a history of previous health checks.
- Display uptime and response-time trends.
- Add notifications when an application becomes unavailable.
- Monitor CPU and memory usage.
- Explore deploying the application to a cloud platform.

These are ideas for future improvements and are not features currently available in AutoOps.

## Author

**Mutiat Adepoju**

Built as part of the EAS Trainee/Junior DevOps Engineer technical challenge.

GitHub: https://github.com/Rike12

