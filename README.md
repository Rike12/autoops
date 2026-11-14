
# AutoOps – Automated Application Deployment and Health Monitoring

## 1. Overview

AutoOps is a small DevOps project demonstrating how an application can be tested, containerised, and security-scanned using automation.

The project focuses on improving application reliability through automated testing, Docker containerisation, continuous integration, and container security scanning.

## 2. Project Features

- Python FastAPI application.
- Home endpoint providing application information.
- Health endpoint reporting application status and uptime.
- Automated tests using pytest.
- Docker containerisation.
- GitHub Actions CI pipeline.
- Automated container vulnerability scanning using Trivy.
- Debian package security updates during Docker image builds.

## 3. Technology Stack

| Technology | Purpose |
|---|---|
| Python 3.12 | Application development |
| FastAPI | API framework |
| pytest | Automated testing |
| Docker | Application containerisation |
| GitHub Actions | Continuous integration |
| Trivy | Container security scanning |
| Git and GitHub | Version control and source hosting |

## 4. Run Locally

Install dependencies:

```bash
python -m pip install -r requirements.txt
```

Start the application:

```bash
uvicorn app.main:app --reload --host 127.0.0.1 --port 8001
```

Open the API documentation:

http://127.0.0.1:8001/docs

## 5. Run Automated Tests

```bash
python -m pytest -v
```

## 6. API Endpoints

| Endpoint | Description |
|---|---|
| `/` | Returns application information |
| `/health` | Returns health status and uptime |
| `/docs` | Interactive API documentation |

## 7. Docker

Build the Docker image:

```bash
docker build -t autoops:latest .
```

Run the container:

```bash
docker run -d --name autoops-api -p 8001:8000 autoops:latest
```

Access the application:

http://localhost:8001

## 8. Continuous Integration and Security

GitHub Actions automatically runs the following steps when code is pushed to the main branch or a pull request targets main:

1. Checks out the repository.
2. Sets up Python.
3. Installs project dependencies.
4. Runs automated tests.
5. Builds the Docker image.
6. Scans the Docker image using Trivy for HIGH and CRITICAL vulnerabilities.

The pipeline helps identify application test failures and container security issues early.

## 9. What I Learned

Through this project, I gained practical experience in:

- Building and testing a Python API.
- Writing a Dockerfile and building container images.
- Automating tests and image builds with GitHub Actions.
- Scanning container images for security vulnerabilities.
- Investigating and fixing an operating-system package vulnerability.
- Using Git and GitHub to manage project changes.

## 10. Future Improvements

- Kubernetes deployment.
- Application monitoring with Prometheus and Grafana.
- Infrastructure provisioning with Terraform.

## 11. Author

Created as a practical DevOps technical challenge project.

