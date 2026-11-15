
# Research Notes

## Introduction

While building AutoOps, I researched the tools and technologies needed to create an application monitoring dashboard. I wanted to understand how the different parts work together, rather than just get the application running.

I am a Frontend Engineer, so I was already familiar with building user interfaces and working with frontend technologies. I used that experience to build the React dashboard for AutoOps, while using the project as an opportunity to develop my knowledge of backend development, APIs, Docker, CI/CD and security scanning.

This document records what I researched, what I learned and some of the challenges I worked through.

## 1. Frontend Development with React

As a Frontend Engineer, I was able to use my existing experience with React, TypeScript, HTML and CSS to build the AutoOps dashboard.

I developed the interface to display the application's health status, uptime and recent health checks. I also added a manual refresh option and automatic refresh every 10 seconds.

Although I was comfortable building the interface, I wanted to understand how it would communicate with a backend service.

This led me to research API requests, frontend and backend communication, and how to handle responses when an API is available or unavailable.

## 2. FastAPI and API Development

I researched how to use FastAPI to create a backend that provides information about an application's health.

I learned how to:
- Create API endpoints.
- Return data in JSON format.
- Use the `/docs` page to view and try out API endpoints.
- Add a health endpoint that reports the application's status and uptime.

One important thing I learned is that a health endpoint should report only what the application actually checks. In this project, the endpoint reports whether the API is responding and how long it has been running. It does not currently check the server's CPU, memory or disk usage.

## 3. Frontend and Backend Communication

I researched how a frontend application communicates with a backend API.

I connected the React dashboard to the FastAPI health endpoint. During development, I used Vite's proxy configuration so frontend requests could be forwarded to the backend.

I also added an Nginx configuration for serving the built frontend and forwarding API requests to the backend when running in containers.

This helped me understand the difference between development configuration and how a built frontend can be served.

## 4. Automated Testing with pytest

I researched how to test API endpoints using pytest.

I learned that automated tests help check whether an application behaves as expected and can catch problems when code changes.

I added tests to check that the main endpoints respond successfully and return the expected information. I ran the tests locally and confirmed that both tests passed.

## 5. Docker and Containerisation

I researched how Docker packages an application and its dependencies so it can run in a more consistent environment.

I created a Dockerfile for the FastAPI backend and another for the frontend. I also added a Docker Compose configuration to describe how the frontend and backend should run together.

This helped me understand the purpose of container images, Dockerfiles, ports and how services communicate.

I was not able to verify the Docker Compose setup on my local machine because the `docker compose` command was unavailable. I have included the configuration, but I would want to test it in an environment with Docker Compose installed.

## 6. GitHub Actions and Continuous Integration

I researched GitHub Actions and how it can automate checks when code is pushed to a GitHub repository.

I created a workflow to run automated tests and build the application image. This means that important checks can run automatically rather than relying only on manual testing.

I learned how workflow files use jobs and steps to define the tasks that GitHub should perform.

## 7. Security Scanning with Trivy

I researched Trivy as a tool for scanning container images for known security vulnerabilities.

During the project, the scan identified two HIGH-severity vulnerabilities associated with the `zlib1g` package.

Instead of ignoring the warnings or disabling the scan, I investigated the reported issues and worked on updating the Docker build process to address them.

This taught me that a successful build does not automatically mean an application is free from security issues. Security checks are an important part of the development process.

## 8. What I Learned

The main things I learned from this project were:

- How to bring my frontend development experience into a project involving backend and DevOps technologies.
- How a frontend and backend communicate through an API.
- How to create and test API endpoints.
- How Dockerfiles and container images are used.
- How GitHub Actions can automate development checks.
- Why security scanning matters and how to investigate vulnerabilities.
- How to research errors and work through problems instead of simply ignoring them.

## 9. Further Improvements

If I continued developing AutoOps, I would like to:

- Add actual CPU, memory and disk monitoring.
- Improve the dashboard with more monitoring information.
- Test the Docker Compose setup in a working Docker environment.
- Add more automated tests.
- Explore deploying the application to a cloud platform.

## Research Resources

The following official documentation pages were useful references for the technologies used in this project:

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [pytest Documentation](https://docs.pytest.org/)
- [Docker Documentation](https://docs.docker.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Trivy Documentation](https://trivy.dev/)
- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)

These resources helped me understand the tools and concepts involved in building the project.
