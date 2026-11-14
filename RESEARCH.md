
# Research and Technical Decisions – AutoOps

## 1. Project Overview

AutoOps was developed to demonstrate how DevOps practices can improve application reliability, automate testing, and identify security vulnerabilities before deployment.

The project focuses on application testing, Docker containerisation, continuous integration, and container security scanning.

## 2. Technology Research

### FastAPI

I chose FastAPI to build a simple Python API because it is lightweight, easy to understand, and provides automatic interactive API documentation.

I used it to create a home endpoint and a health-check endpoint.

### pytest

I researched automated testing and used pytest to verify that the API endpoints return the expected responses.

This helps identify problems before changes are integrated into the project.

### Docker

I used Docker to package the application and its dependencies into a container.

Containerisation makes the application easier to run consistently across different environments.

### GitHub Actions

I used GitHub Actions to automate the project's continuous integration process.

The workflow runs automated tests and builds the Docker image whenever changes are pushed to the main branch or a pull request targets main.

### Trivy

I researched container security scanning and selected Trivy to identify vulnerabilities in the Docker image.

During development, Trivy identified two HIGH vulnerabilities associated with the Debian operating-system package zlib1g.

I investigated the findings and updated the Dockerfile to install available operating-system package updates before building the application image.

After rebuilding and pushing the updated image, the Trivy scan passed.

## 3. Problem-Solving and Lessons Learned

One important challenge was addressing the vulnerabilities reported by Trivy.

Rather than disabling the security scan, I investigated the affected package, updated the Docker build process, and ran the pipeline again.

This helped me understand the importance of maintaining secure container images and using automated security checks.

## 4. Key Learnings

Through this project, I gained practical experience in:

- Developing and testing a Python API.
- Building Docker images and running containers.
- Automating workflows using GitHub Actions.
- Scanning container images for vulnerabilities.
- Investigating and resolving security findings.
- Managing source code using Git and GitHub.

## 5. Conclusion

AutoOps helped me understand how application development, testing, containerisation, automation, and security scanning work together in a DevOps workflow.

It also strengthened my problem-solving skills and my understanding of continuous integration.
