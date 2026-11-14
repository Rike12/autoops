# AutoOps – Automated Application Deployment and Health Monitoring

## Overview
AutoOps demonstrates how an application can be tested and prepared for reliable deployment through automation.

## Current Features
- Python FastAPI application.
- Home endpoint providing application information.
- Health endpoint reporting application status and uptime.
- Automated tests using pytest.
- GitHub Actions CI workflow.

## Technology Stack
- Python 3.12
- FastAPI
- pytest
- GitHub Actions
- Git and GitHub

## Run Locally

Install dependencies:

    python -m pip install -r requirements.txt

Start the application:

    uvicorn app.main:app --reload --host 127.0.0.1 --port 8001

Open the API documentation:

    http://127.0.0.1:8001/docs

## Run Tests

    python -m pytest -v

## API Endpoints

| Endpoint | Description |
|---|---|
| / | Application information |
| /health | Health status and uptime |
| /docs | Interactive API documentation |

## CI Pipeline
GitHub Actions runs automated tests when code is pushed to main or when a pull request targets main.

## Project Roadmap
- Docker containerisation.
- Container security scanning.
- Kubernetes deployment.
- Helm.
- Terraform.
- AWS integration.
- Prometheus and Grafana monitoring.
